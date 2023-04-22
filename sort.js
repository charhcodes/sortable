///////////////////////////////////////// SORT /////////////////////////////////////////////////
// sortDirection is defined as 'asc' in main.js

/////////////////// NUMERICAL FUNCTIONS
const sortIntel = (direction) => { // INTELLIGENCE
    // sort data in pairs a and b
    heroData.sort((a, b) => {
        // if direction is ascending, subtract a from b to obtain the difference
        // if difference is negative, a and b are swapped and b goes first
        // if difference is 0 they stay in the same order
        if (direction === 'asc') {
            return a.powerstats.intelligence - b.powerstats.intelligence;
        // vice versa for descending
        } else {
            return b.powerstats.intelligence - a.powerstats.intelligence;
        }
    });
    makeTable(heroData); // call makeTable after sorting the heroData array
}

const sortStr = (direction) => { // STRENGTH
    heroData.sort((a, b) => {
        if (direction === 'asc') {
            return a.powerstats.strength - b.powerstats.strength;
        } else {
            return b.powerstats.strength - a.powerstats.strength;
        }
    });
    makeTable(heroData);
}

  const sortSpd = (direction) => { // SPEED
      heroData.sort((a, b) => {
          if (direction === 'asc') {
              return a.powerstats.speed - b.powerstats.speed;
          } else {
              return b.powerstats.speed - a.powerstats.speed;
          }
      });
      makeTable(heroData);
  }

  const sortDur = (direction) => { // DURABILITY
    heroData.sort((a, b) => {
        if (direction === 'asc') {
            return a.powerstats.durability - b.powerstats.durability;
        } else {
            return b.powerstats.durability - a.powerstats.durability;
        }
    });
    makeTable(heroData);
}

const sortPow = (direction) => { // POWER
    heroData.sort((a, b) => {
      if (direction === 'asc') {
        return a.powerstats.power - b.powerstats.power;
      } else {
        return b.powerstats.power - a.powerstats.power;
      }
    });
    makeTable(heroData);
  }
  
const sortCom = (direction) => { // COMBAT
    heroData.sort((a, b) => {
        if (direction === 'asc') {
            return a.powerstats.combat - b.powerstats.combat;
        } else {
            return b.powerstats.combat - a.powerstats.combat;
        }
    });
    makeTable(heroData);
}
  
const sortWeight = (direction) => { // WEIGHT (KG AND TONS ONLY)
    heroData.sort((a, b) => {
        // get weight values
        const parseWeight = (hero) => {
            const weightValues = hero.appearance.weight; // weightValues made to be converted
            // loop thru weightValues
            for (let i = 0; i < weightValues.length; i++) {
                const weightString = weightValues[i]; 
                if (weightString.endsWith('kg')) {
                    return parseFloat(weightString.replace(/[^\d.-]/g, '')); // remove everything except digits
                } else if (weightString.endsWith('tons')) {
                    const weightInTons = parseFloat(weightString.replace(/[^\d.-]/g, '')); // remove everything except digits
                    return weightInTons * 907.2; // convert tons to kg by multiplying by 907.2
                }
            }
        };
        // apply parseweight to a and b
        const aWeight = parseWeight(a);
        const bWeight = parseWeight(b);

        // sort a and b
        if (direction === 'asc') {
            return aWeight - bWeight;
        } else {
            return bWeight - aWeight;
        }
    });
    makeTable(heroData);
};
    
    
const sortHeight = (direction) => { // HEIGHT (CM AND METERS ONLY)
    heroData.sort((a, b) => {
            const parseHeight = (hero) => {
            const heightValues = hero.appearance.height;
            for (let i = 0; i < heightValues.length; i++) {
                const heightString = heightValues[i];
                if (heightString.endsWith('cm')) {
                    return parseFloat(heightString.replace(/[^\d.-]/g, '')); // remove everything except digits 
                } else if (heightString.endsWith('meters')) {
                    const heightInM = parseFloat(heightString.replace(/[^\d.-]/g, '')); // remove everything except digits
                    return heightInM * 100; // convert m to cm by multiplying by 100
                }
            }
            return null;
        };
    
        const aHeight = parseHeight(a);
        const bHeight = parseHeight(b);

        if (direction === 'asc') {
            return aHeight - bHeight;
        } else {
            return bHeight - aHeight;
        }
    });
    makeTable(heroData);
};


////////////////////////// ALPHA FUNCTIONS
const sortName = (direction) => { // NAME
    heroData.sort((a, b) => {
        const nameA = a.name.toLowerCase().replace(/-/g, ' '); // replace hyphens with spaces, conver to lowercase
        const nameB = b.name.toLowerCase().replace(/-/g, ' ');
        // if nameA is 'less than' nameB, nameA appears before nameB
        // and return -1 if ascending order, and 1 for descending
        // 1 means first element goes first, -1 means second element goes first
        if (nameA < nameB) {
            return direction === 'asc' ? -1 : 1;
        // vice versa
        } else if (nameA > nameB) {
            return direction === 'asc' ? 1 : -1;
        } else {
            // if the names are the same, sort them by their original index in the array
            const indexA = heroData.indexOf(a); // retrieve original indices
            const indexB = heroData.indexOf(b);
            return indexA < indexB ? -1 : 1; // if indexA is less than b, return -1, else return 1
        }
    });
    makeTable(heroData);
}

const sortFName = (direction) => { // FULL NAME
    heroData.sort((a, b) => {
        const FnameA = a.biography.fullName.toLowerCase().replace(/-/g, ' '); // replace hyphens with spaces
        const FnameB = b.biography.fullName.toLowerCase().replace(/-/g, ' ');
        if (FnameA < FnameB) {
            return direction === 'asc' ? -1 : 1;
        } else if (FnameA > FnameB) {
            return direction === 'asc' ? 1 : -1;
        } else {
            const indexA = heroData.indexOf(a);
            const indexB = heroData.indexOf(b);
            return indexA < indexB ? -1 : 1;
        }
    });
    makeTable(heroData);
}

const sortGender = (direction) => { // GENDER
    heroData.sort((a, b) => {
        const genA = a.appearance.gender.toLowerCase().replace(/-/g, ' '); // replace hyphens with spaces
        const genB = b.appearance.gender.toLowerCase().replace(/-/g, ' ');
        if (genA < genB) {
            return direction === 'asc' ? -1 : 1;
        } else if (genA > genB) {
            return direction === 'asc' ? 1 : -1;
        } else {
            const indexA = heroData.indexOf(a);
            const indexB = heroData.indexOf(b);
            return indexA < indexB ? -1 : 1;
        }
    });
    makeTable(heroData);
}

const sortRace = (direction) => { // RACE
    heroData.sort((a, b) => {
        // convert to string, convert to lowercase, and remove non-alpha characters
        const raceA = String(a.appearance.race).toLowerCase().replace(/[^a-z]/g, ''); 
        const raceB = String(b.appearance.race).toLowerCase().replace(/[^a-z]/g, ''); 
        if (raceA < raceB) {
            return direction === 'asc' ? -1 : 1;
        } else if (raceA > raceB) {
            return direction === 'asc' ? 1 : -1;
        } else {
            const indexA = heroData.indexOf(a);
            const indexB = heroData.indexOf(b);
            return indexA < indexB ? -1 : 1;
        }
    });
    makeTable(heroData);
  };
  
  const sortHome = (direction) => { // PLACE OF BIRTH
    heroData.sort((a, b) => {
        // remove non-alpha characters, convert to lowercase
        const homeA = a.biography.placeOfBirth.replace(/[^\w\s]/gi, '').toLowerCase(); 
        const homeB = b.biography.placeOfBirth.replace(/[^\w\s]/gi, '').toLowerCase(); 
        if (homeA < homeB) {
            return direction === 'asc' ? -1 : 1;
        } else if (homeA > homeB) {
            return direction === 'asc' ? 1 : -1;
        } else {
            const indexA = heroData.indexOf(a);
            const indexB = heroData.indexOf(b);
            return indexA < indexB ? -1 : 1;
        }
    });
    makeTable(heroData);
};

const sortAlign = (direction) => { // ALIGNMENT
    heroData.sort((a, b) => {
        const alignA = a.biography.alignment.toLowerCase(); 
        const alignB = b.biography.alignment.toLowerCase(); 
        if (alignA < alignB) {
            return direction === 'asc' ? -1 : 1;
        } else if (alignA > alignB) {
            return direction === 'asc' ? 1 : -1;
        } else {
            const indexA = heroData.indexOf(a);
            const indexB = heroData.indexOf(b);
            return indexA < indexB ? -1 : 1;
        }
    });
    makeTable(heroData);
};


//////////////////////////BUTTONS

// nums
// button for sorting intelligence in ascending order
const sortIntelAscBtn = document.getElementById('sort-intel-asc'); // INTELLIGENCE
    // when button is clicked
    sortIntelAscBtn.addEventListener('click', () => {
        sortIntel('asc'); // apply intelligence sorting function in ascending order
});
const sortIntelDescBtn = document.getElementById('sort-intel-desc');
      sortIntelDescBtn.addEventListener('click', () => {
        sortIntel('desc'); // when clicked apply sorting function in descending order
});  

const sortStrengthAscBtn = document.getElementById('sort-strength-asc'); // STRENGTH
    sortStrengthAscBtn.addEventListener('click', () => {
        sortStr('asc');
});
const sortStrengthDescBtn = document.getElementById('sort-strength-desc');
    sortStrengthDescBtn.addEventListener('click', () => {
        sortStr('desc');
});
const sortSpdAscBtn = document.getElementById('sort-spd-asc'); // SPEED
    sortSpdAscBtn.addEventListener('click', () => {
        sortSpd('asc');
        
});
const sortSpdDescBtn = document.getElementById('sort-spd-desc');
    sortSpdDescBtn.addEventListener('click', () => {
        sortSpd('desc');
});
const sortDurAscBtn = document.getElementById('sort-dur-asc'); // DURABILITY
    sortDurAscBtn.addEventListener('click', () => {
        sortDur('asc');
});
const sortDurDescBtn = document.getElementById('sort-dur-desc');
    sortDurDescBtn.addEventListener('click', () => {
        sortDur('desc');
});
const sortPowAscBtn = document.getElementById('sort-pow-asc'); // POWER
    sortPowAscBtn.addEventListener('click', () => {
        sortPow('asc');
});
const sortPowDescBtn = document.getElementById('sort-pow-desc');
    sortPowDescBtn.addEventListener('click', () => {
        sortPow('desc');
});
const sortComAscBtn = document.getElementById('sort-com-asc'); // COMBAT
    sortComAscBtn.addEventListener('click', () => {
        sortCom('asc');
});
const sortComDescBtn = document.getElementById('sort-com-desc');
    sortComDescBtn.addEventListener('click', () => {
        sortCom('desc');
});
const sortWeightAscBtn = document.getElementById('sort-wght-asc'); // WEIGHT
    sortWeightAscBtn.addEventListener('click', () => {
        sortWeight('asc');
});
const sortWeightDescBtn = document.getElementById('sort-wght-desc');
    sortWeightDescBtn.addEventListener('click', () => {
        sortWeight('desc');
});
const sortHeightAscBtn = document.getElementById('sort-hght-asc'); // HEIGHT
    sortHeightAscBtn.addEventListener('click', () => {
        sortHeight('asc');
});
const sortHeightDescBtn = document.getElementById('sort-hght-desc');
    sortHeightDescBtn.addEventListener('click', () => {
        sortHeight('desc');
});

// alphas

const sortNameAscBtn = document.getElementById('sort-name-asc'); // NAME
    sortNameAscBtn.addEventListener('click', () => {
        sortName('asc');
});
const sortNameDescBtn = document.getElementById('sort-name-desc');
    sortNameDescBtn.addEventListener('click', () => {
        sortName('desc');
});
const sortFNameAscBtn = document.getElementById('sort-fname-asc'); // FULL NAME
    sortFNameAscBtn.addEventListener('click', () => {
        sortFName('asc');
});
const sortFNameDescBtn = document.getElementById('sort-fname-desc');
    sortFNameDescBtn.addEventListener('click', () => {
        sortFName('desc');
});
const sortRaceAscBtn = document.getElementById('sort-race-asc'); // RACE
    sortRaceAscBtn.addEventListener('click', () => {
        sortRace('asc');
});
const sortRaceDescBtn = document.getElementById('sort-race-desc');
    sortRaceDescBtn.addEventListener('click', () => {
        sortRace('desc');
});
const sortGenAscBtn = document.getElementById('sort-gen-asc'); // GENDER
    sortGenAscBtn.addEventListener('click', () => {
        sortGender('asc');
});
const sortGenDescBtn = document.getElementById('sort-gen-desc');
    sortGenDescBtn.addEventListener('click', () => {
        sortGender('desc');
});
const sortHomeAscBtn = document.getElementById('sort-home-asc'); // PLACE OF BIRTH
    sortHomeAscBtn.addEventListener('click', () => {
        sortHome('asc');
});
const sortHomeDescBtn = document.getElementById('sort-home-desc');
    sortHomeDescBtn.addEventListener('click', () => {
        sortHome('desc');
});
const sortAlignAscBtn = document.getElementById('sort-align-asc'); // ALIGNMENT
    sortAlignAscBtn.addEventListener('click', () => {
        sortAlign('asc');
});
const sortAlignDescBtn = document.getElementById('sort-align-desc');
    sortAlignDescBtn.addEventListener('click', () => {
        sortAlign('desc');
});
  