const charachters = document.querySelector(".charactersboxUl");
const detailsBaba = document.querySelector(".detailBox");
const nextButton = document.getElementById("addButton");
const pastButton = document.getElementById("downbutton")
const detailBox = document.querySelector(".TattoiinBox")

let currentCharacterIndex = 0;
let currentPlanetIndex = 0;
let details = [];
fetch("https://swapi.dev/api/people/")
.then((response)=>{
    if (!response.ok) {
        throw new Error("ERROR SIR");
        
     
    } else {
        return response.json()
        
    }

})
.then((data)=>{
    let details = data.results;
renderChar(details)
renderDetails(details)
    console.log( details);
    


})

fetch("https://swapi.dev/api/planets/")
.then((response)=>{
    if (!response.ok) {
        throw new Error("ERROR SIR");
        
     
    } else {
        return response.json()
        
    }

})
.then((data)=>{
    let details = data.results;
    console.log( details);
    renderTattoiin(details)


})

function renderChar(arr) {
    if (arr !== undefined) {
        charachters.innerHTML = "";
        for (let i = 0; i < arr.length; i++) {
            const characterList = document.createElement("li")
            characterList.innerText = arr[i].name;
            charachters.appendChild(characterList); 
        }

    }else{
        console.log("Array is not defined");
        
    }
    }
    

function renderDetails(arr) {
    const charDiv = document.createElement("div");
    const charName = document.createElement("h3");
    const heightP = document.createElement("p");
    const massP = document.createElement("p");
    const hairColorP = document.createElement("p");
    const skinColorP = document.createElement("p");
    const eyeColorP = document.createElement("p");
    const birthP = document.createElement("p");
    const genderP = document.createElement("p");
    const nextButton = document.createElement("button");
    

    
    function displayCharacter() {
        const character = arr[currentCharacterIndex];
        
        charName.textContent = character.name;
        heightP.textContent = `Height: ${character.height} cm`;
        massP.textContent = `Mass: ${character.mass} kg`;
        hairColorP.textContent = `Hair Color: ${character.hair_color}`;
        skinColorP.textContent = `Skin Color: ${character.skin_color}`;
        eyeColorP.textContent = `Eye Color: ${character.eye_color}`;
        birthP.textContent = `Birth Year: ${character.birth_year}`;
        genderP.textContent = `Gender: ${character.gender}`;
    }

  
    nextButton.textContent = "Next Character";
    nextButton.addEventListener("click", function () {
        currentCharacterIndex++;
        if (currentCharacterIndex >= arr.length) {
            currentCharacterIndex = 0;
        }
        displayCharacter();
    })

    charDiv.appendChild(charName);
    charDiv.appendChild(heightP);
    charDiv.appendChild(massP);
    charDiv.appendChild(hairColorP);
    charDiv.appendChild(skinColorP);
    charDiv.appendChild(eyeColorP);
    charDiv.appendChild(birthP);
    charDiv.appendChild(genderP);
    charDiv.appendChild(nextButton);
    detailsBaba.appendChild(charDiv);
    
    displayCharacter();
}
    

function renderTattoiin(arr) {
    if (arr !== undefined) {
        // detailBox.innerHTML = "";
        for (let i = 0; i < 1; i++) {
            const character = arr[i];
            const tattoiinList = document.createElement("p")
            tattoiinList.innerText = `
            Rotation period: ${character.rotation_period} 
            Orbital period: ${character.orbital_period} 
            Diameter: ${character. diameter}
            Climate: ${character.climate}
            Gravity: ${character.gravity}
            Terrain: ${character.terrain}
        `;
        detailBox.appendChild(tattoiinList); 
            console.log(detailBox);
            
        }

    }else{
        console.log("Array is not defined");
        
    }
}


function renderTattoiin(arr) {
    const planDiv = document.createElement("div");
    const planetName = document.createElement("h3");
    const rotationPeriodP = document.createElement("p");
    const orbitalPeriodP = document.createElement("p");
    const diameterP = document.createElement("p");
    const climateP = document.createElement("p");
    const gravityP = document.createElement("p");
    const terrainP = document.createElement("p");
    const surfaceWaterP = document.createElement("p");
    const populationP = document.createElement("p");
    const nextButton = document.createElement("button");

    // Function to display the current planet
    function displayPlanet() {
        const planet = arr[currentPlanetIndex];
        
        planetName.textContent = planet.name;
        rotationPeriodP.textContent = `Rotation Period: ${planet.rotation_period} hours`;
        orbitalPeriodP.textContent = `Orbital Period: ${planet.orbital_period} days`;
        diameterP.textContent = `Diameter: ${planet.diameter} km`;
        climateP.textContent = `Climate: ${planet.climate}`;
        gravityP.textContent = `Gravity: ${planet.gravity}`;
        terrainP.textContent = `Terrain: ${planet.terrain}`;
        surfaceWaterP.textContent = `Surface Water: ${planet.surface_water}%`;
        populationP.textContent = `Population: ${planet.population}`;
    }

    nextButton.textContent = "Next Planet";
    nextButton.addEventListener("click", function () {
        currentPlanetIndex++;
        if (currentPlanetIndex >= arr.length) {
            currentPlanetIndex = 0; // Loop back to the first planet
        }
        displayPlanet();
    });

    // Append all elements to the charDiv
    planDiv.appendChild(planetName);
    planDiv.appendChild(rotationPeriodP);
    planDiv.appendChild(orbitalPeriodP);
    planDiv.appendChild(diameterP);
    planDiv.appendChild(climateP);
    planDiv.appendChild(gravityP);
    planDiv.appendChild(terrainP);
    planDiv.appendChild(surfaceWaterP);
    planDiv.appendChild(populationP);
    planDiv.appendChild(nextButton);

    // Append charDiv to a parent container (assuming it exists)
    detailBox.appendChild(planDiv);
    
    // Display the first planet
    displayPlanet();
}