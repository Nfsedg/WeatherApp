const base_URL = (id) => {URL = `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=80a64f8265abf68fe01f13c639d6f142`; return URL}
const DATA_Country = '../data/city.list.json';
const appContainer = document.querySelector('#app');
const celcius = 273.15;
let cityId;

async function getData(id) {
        try {
            const getData = await fetch(base_URL(id))
            reponseJson = await getData.json();
            const div = document.createElement('div')
            let newCard = cardTemplate(reponseJson.name, reponseJson.weather[0].description, Math.round(reponseJson.main.temp - celcius), reponseJson.weather[0].icon)
            div.innerHTML = newCard;
            appContainer.appendChild(div)
        
            console.log(reponseJson);
        } catch(err) {
            console.error(err)
            alert("City don't found")
        }
    
}