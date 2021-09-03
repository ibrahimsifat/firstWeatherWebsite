const btn = document.getElementById('applyBtn')
const inputFeild = document.getElementById('inputFeild')
const minMaxTemp = document.getElementById('minMaxTemp')
const weatherIcon = document.getElementById('weatherIcon')

const countreisPlaceholder = document.getElementById('countreisPlaceholder')

btn.addEventListener('click', function() {
    const inputValue = inputFeild.value
    inputFeild.value = ''
    const apiKey = '9cf097760440f4b7d09f28c22bb2345c'
        // console.log(inputValue);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => getweather(data))
})



const getInnerText = (id, text) => {
    const textValue = document.getElementById(id).innerText = text
    return textValue

}
const getweather = weatherData => {

    getInnerText('city', weatherData.name)
    getInnerText('tamp', weatherData.main.temp)
    getInnerText('weather', weatherData.weather[0].main)

    // set weather image 
    const iconPath = weatherData.weather[0].icon
    console.log(iconPath);
    const imgUrl = `http://openweathermap.org/img/wn/${iconPath}@2x.png`
    weatherIcon.setAttribute('src', imgUrl)
    console.log(weatherData);
}