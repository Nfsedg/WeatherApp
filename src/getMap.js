const base_URL = (layer) => { URL = `https://tile.openweathermap.org/map/${layer}/worldwide.png?appid=80a64f8265abf68fe01f13c639d6f142`; return URL };

async function getMap() {
    const getData = await fetch(base_URL('precipitation_new'));
    const responseJson = await getData.json();

    console.log(responseJson)
}

getMap()