// get weather info from the website api
function setWeatherData(city) {
  const apiKey = '76d40968b142375ccee5029f076267e3'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    let cityName = res.name
    let temp = res.main.temp
    displayWeatherData(cityName, temp)
  })
  .catch(err => console.log(err))

}

// display the weather on the page
function displayWeatherData(city, temp) {
  const cityElement = document.querySelector("#cityName")
  const tempElement = document.querySelector("#temp")

  temp = temp + "°c"

  cityElement.textContent = city
  tempElement.textContent = temp

}


// get the city name from user input
function handleFormSubmit(event) {
  event.preventDefault()
  const city = event.target.city.value 
  
  if(city) {
    setWeatherData(city)
    
  }
}



const form = document.querySelector("#form")

form.addEventListener("submit", handleFormSubmit)


