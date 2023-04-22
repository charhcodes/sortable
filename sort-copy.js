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
const sortIntelBtn = document.getElementById('sort-intel'); // INTELLIGENCE
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortIntelBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortIntel('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortIntel('asc');
        sortDirection = 'asc';
    }
});

const sortStrBtn = document.getElementById('sort-str'); // STRENGTH
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortStrBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortStr('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortStr('asc');
        sortDirection = 'asc';
    }
});

const sortSpdBtn = document.getElementById('sort-spd'); // SPEED
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortSpdBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortSpd('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortSpd('asc');
        sortDirection = 'asc';
    }
});

const sortDurBtn = document.getElementById('sort-dur'); // DURABILITY
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortDurBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortDur('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortDur('asc');
        sortDirection = 'asc';
    }
});

const sortPowBtn = document.getElementById('sort-pow'); // POWER
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortPowBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortPow('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortPow('asc');
        sortDirection = 'asc';
    }
});

const sortComBtn = document.getElementById('sort-com'); // COMBAT
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortComBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortCom('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortCom('asc');
        sortDirection = 'asc';
    }
});

const sortWghtBtn = document.getElementById('sort-wght'); // WEIGHT
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortWghtBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortWeight('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortWeight('asc');
        sortDirection = 'asc';
    }
});

const sortHghtBtn = document.getElementById('sort-hght'); // HEIGHT
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortHghtBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortHeight('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortHeight('asc');
        sortDirection = 'asc';
    }
});

// alphas

const sortNameBtn = document.getElementById('sort-name'); // NAME
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortNameBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortName('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortName('asc');
        sortDirection = 'asc';
    }
});

const sortFNameBtn = document.getElementById('sort-fname'); // FULL NAME
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortFNameBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortFName('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortFName('asc');
        sortDirection = 'asc';
    }
});

const sortGenBtn = document.getElementById('sort-gen'); // GENDER
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortGenBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortGender('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortGender('asc');
        sortDirection = 'asc';
    }
});

const sortRaceBtn = document.getElementById('sort-race'); // RACE
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortRaceBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortRace('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortRace('asc');
        sortDirection = 'asc';
    }
});

const sortHomeBtn = document.getElementById('sort-home'); // PLACE OF BIRTH
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortHomeBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortHome('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortHome('asc');
        sortDirection = 'asc';
    }
});

const sortAlignBtn = document.getElementById('sort-align'); // PLACE OF BIRTH
    // start in ascending order
    sortDirection = 'asc';
    // when clicked
    sortAlignBtn.addEventListener('click', () => {
    // if sortDirection is ascending
    if (sortDirection === 'asc') {
        // sort in descending order and reassign sortDirection
        sortAlign('desc');
        sortDirection = 'desc';
    // if sortDirection is descending, vice versa
    } else {
        sortAlign('asc');
        sortDirection = 'asc';
    }
});