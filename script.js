const charachters = document.querySelector(".charactersboxUl");
const detailsBaba = document.querySelector(".detailBox");
const nextButton = document.getElementById("addButton");
const pastButton = document.getElementById("downbutton")
const detailBox = document.querySelector(".TattoiinBox")

let currentIndex = 0;
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
renderChar(data.results)
renderDetails(data.results)
    console.log( data.results);
    


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

    console.log( data.results);
    renderTattoiin(data.results)


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
        if (arr !== undefined) {
            // detailsBaba.innerHTML = "";
            for (let i = 0; i < 1; i++) {
                const character = arr[i];
                const detailsList = document.createElement("p")
                detailsList.innerText = `
                Name: ${character.name}
                Height: ${character.height} cm
                Mass: ${character.mass} kg
                Hair Color: ${character.hair_color}
                Skin Color: ${character.skin_color}
                Eye Color: ${character.eye_color}
                Birth Year: ${character.birth_year}
                Gender: ${character.gender}
            `;
                detailsBaba.appendChild(detailsList); 
                console.log(detailsBaba);
                
            }
    
        }else{
            console.log("Array is not defined");
            
        }
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
    // nextButton.addEventListener("click" ,function () {
    //     currentIndex++;
    //     if (currentIndex >= charactersData.length) {
    //         currentIndex = 0;
    //     }
    //     renderDetails(currentIndex);
   
    // })
    // pastButton.addEventListener("click", function () {
    //     if (currentIndex > 0) {
    //         currentIndex--;
    //         renderDetails(currentIndex);
    //     } else {
    //         alert("Det finns inga tidigare karaktärer att visa.");
    //     }
    // })

    function updateDetails(arr) {
        details = arr;
        renderDetails()
    
    }