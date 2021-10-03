const base_URL = (id) => {URL = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=80a64f8265abf68fe01f13c639d6f142`; return URL}
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
        
            // console.log(reponseJson);
        } catch(err) {
            console.error(err)
        }
    
}

async function cityData(city) {
    try {
        const getData = await fetch(DATA_Country);
        response = await getData.json()
        let data = response.find(element => element.name === `${city}`)
        
        cityId = data.id
        pId.innerText = cityId
        return await cityId
    } catch(err) {
        console.warn('City has not found')
        alert('City not found')
    }

}

const searchData = (city) => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve(cityData(city))
        } else {
            reject(console.error('City has not found'))
        }
    })
}

searchData('Tokyo')
    .then(data => {
        // console.log(data)
        return data;
    })
    .then(data => {
        // console.log(getData(data))
        getData(data)
    })
    .catch(err => {
        console.error(err)
    })