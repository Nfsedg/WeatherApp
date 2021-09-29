function cardTemplate(city, weather, currentTemp, img) {
    let view = `
    <my-card img="http://openweathermap.org/img/wn/${img}@2x.png">
        <span slot="city">${city}</span>
        <span slot="cloud">${weather}</span>
        <span slot="temp">${currentTemp}</span>
    </my-card>
    `

    return view
}