//Funktion som hämtar data från json fil
function fetchDataMeny(){
    fetch("data/meny.json")
    .then(function(response){
        return response.json();
    })
    .then (function(data){
    let appetizerList = document.getElementById("appetizer-list");
    data.menu.appetizer.forEach(function(appetizer){
        let li = document.createElement("li");
        li.innerHTML = `<strong>${appetizer.name}</strong> -  ${appetizer.description} <strong>${appetizer.price}kr</strong>`;
        appetizerList.appendChild(li);
    });
    let mainList = document.getElementById("main-list");
    data.menu.main.forEach(function(main) {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${main.name}</strong> - ${main.description} <strong>${main.price}kr</strong>`;
        mainList.appendChild(li);
    });
    let dessertList = document.getElementById("dessert-list");
    data.menu.dessert.forEach(function(dessert) {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${dessert.name}</strong> - ${dessert.description} <strong>${dessert.price}kr</strong>`;
        dessertList.appendChild(li);
    });
})
    .catch(function(error){
        console.error("fel vid hämtning av json-fil", error)
    })

}

fetchDataMeny()

const appetizerBtn = document.querySelector('.appetizer-btn');
const mainCourseBtn = document.querySelector('.main-btn');
const dessertBtn = document.querySelector('.dessert-btn');
const appetizerSection = document.querySelector('.appetizer')
const mainSection = document.querySelector('.main-course')
const dessertSection = document.querySelector('.dessert')

appetizerBtn.addEventListener('click', hideShow =>{
    if(mainSection.style.display === 'block'&&
        dessertSection.style.display === 'block'&&
    appetizerSection.style.display === 'block'){
        mainSection.style.display = 'none'
        dessertSection.style.display = 'none'
    }else{
        mainSection.style.display = 'block'
        dessertSection.style.display = 'block'
        appetizerSection.style.display = 'block'
    } 
})
mainCourseBtn.addEventListener('click', hideShow =>{
    if(mainSection.style.display === 'block'&&
        dessertSection.style.display === 'block'&&
    appetizerSection.style.display === 'block'){
        appetizerSection.style.display = 'none'
        dessertSection.style.display = 'none'
    }else{
        mainSection.style.display = 'block'
        dessertSection.style.display = 'block'
        appetizerSection.style.display = 'block'

    }
})
dessertBtn.addEventListener('click', hideShow =>{
    if(mainSection.style.display === 'block'&&
        dessertSection.style.display === 'block'&&
    appetizerSection.style.display === 'block'){
        mainSection.style.display = 'none'
        appetizerSection.style.display = 'none'
    }else{
        mainSection.style.display = 'block'
        dessertSection.style.display = 'block'
        appetizerSection.style.display = 'block'

    }
})


