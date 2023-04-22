const charactersList = document.getElementById('charactersList'); // main table variable here, linked to HTML
const searchBar = document.getElementById('searchBar'); // searchbar linked to HTML
let sortDirection = 'asc'; 
let heroData = []; // hero data from JSON goes here
let resultsPerPage = 20; // default = 20
let currentPage = 1;

//everytime you search for a key get that input and use it to search the data
searchBar.addEventListener('keyup', (input) => {
    const search = input.target.value.toLowerCase(); // convert search input to lowercase
    // filter according to search input
    const filteredCharacters = heroData.filter((character) => {
        //return true if the character belongs in the filter
        return (
        // compare hero name if it includes the search result
        character.name.toLowerCase().includes(search) || 
        character.biography.fullName.toLowerCase().includes(search)
        )
    });
    currentPage = 1; // Reset current page to 1 whenever a new search is made
    makeTable(filteredCharacters, resultsPerPage, currentPage);
});

// get json api data, start up table
const getData = async () => {
    try {
        const res = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json'); 
        heroData = await res.json(); // parse JSON, store in heroData
        makeTable(heroData, resultsPerPage, currentPage); // make table
    } catch (err) {
        console.error(err);
    }
};

// make tables
const makeTable = (data, resultsPerPage = 20, currentPage = 1) => {
    // calculate the starting index and ending index for the current page
    const startIndex = (currentPage - 1) * resultsPerPage; // startIndex = first result on page (if page 2, first result on page 2 = 20th)
    const endIndex = startIndex + resultsPerPage; // (if page 2, last result on page 2 = 40th)
    
    // pageData = items that should be displayed on the current page
    const pageData = data.slice(startIndex, endIndex);
    
    // make map out of pageData which creates the table body out of the heroes in pageData
    const output = pageData.map((hero) => {
            return `
            <tr>
                <td> <img src='${hero.images.xs}'> </td>
                <td>${hero.name}</td>
                <td>${hero.biography.fullName}</td>
                <div class="resStats">
                <td>${hero.powerstats.intelligence}</td>
                <td>${hero.powerstats.strength}</td>
                <td>${hero.powerstats.speed}</td>
                <td>${hero.powerstats.durability}</td>
                <td>${hero.powerstats.power}</td>
                <td>${hero.powerstats.combat}</td>
                </div>
                <td>${hero.appearance.race}</td>
                <td>${hero.appearance.gender}</td>
                <td>${hero.appearance.height}</td>
                <td>${hero.appearance.weight}</td>
                <td>${hero.biography.placeOfBirth}</td>
                <td>${hero.biography.alignment}</td>
          </tr>
            `;
        }).join(''); // join everything to a single string
    charactersList.innerHTML = output; // set output string to charactersList table body to be displayed in HTML

    // generate page buttons
    const totalPages = Math.ceil(data.length / resultsPerPage); // divide data by results per page, rounded up
    let pageButtons = ''; // put buttons html in here 
    if (totalPages > 0) { // if there's at least one page, create buttons
      for (let i = 1; i <= totalPages; i++) {
        // add css (page-buttons class 'active') to current page button
        // sets 'data-page' dataset attribute to i 
        // make the rest of the page numbers '%{i}'
        pageButtons += `<button class="page-button${i === currentPage ? ' active' : ''}" data-page="${i}">${i}</button>`;
      }
    }
    // link pageButtons HTML and CSS to pagination-buttons
    document.querySelector("#pagination-buttons").innerHTML = pageButtons;

    // add event listeners to pagination buttons
    const pageButtonEls = document.querySelectorAll(".page-button");
    for (let pageButtonEl of pageButtonEls) {
      // when page button is clicked, retrieve data-page with dataset which obtains the current
      // page number, convert it to a useable digit, make a new table with the new page results
        pageButtonEl.addEventListener("click", () => {
        const newPage = parseInt(pageButtonEl.dataset.page);
        makeTable(data, resultsPerPage, newPage);
    });
  }
};


// link dropdown list to resultsPerPageDropdown
const resultsPerPageDropdown = document.querySelector("#results-per-page");
// when the dropdown list changes:
resultsPerPageDropdown.addEventListener("change", () => {
  // if all results show, only make one page that contains all the data
  if (resultsPerPageDropdown.value === "all") {
    resultsPerPage = heroData.length;
    currentPage = 1;
  } else {
    // if not, convert resultsPerPageDropdown to a useable number
    resultsPerPage = parseInt(resultsPerPageDropdown.value);
  }
  // re-make the table according to resultsPerPage
  makeTable(heroData, resultsPerPage, currentPage);
});

getData();
