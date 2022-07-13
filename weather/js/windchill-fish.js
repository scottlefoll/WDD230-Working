var ws = document.getElementById("windSpeed").textContent;
var temp = document.getElementById("temp").textContent;
var windChill = 0;

// Get Date
const dt1 = new Date();
// Get Day of week as int; Friday = 5
let day1 = dt1.getDay()


  
  const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=224ba8d85cc913fa45e35d9a865e6bcb";


  //Get the Summary Weather Status
  fetch(apiURL2)
    .then((response) => response.json())
    .then((data2) => {
      // console.log(data);
  
      document.querySelector("#temp-fish").textContent = Math.round(1.8*(data2.main.temp-273) + 32) +"°F";
      document.querySelector("#cover-fish").textContent = data2.weather[0].main;
      document.querySelector("#high-fish").textContent = Math.round(1.8*(data2.main.temp_max-273) + 32) +"°F";
      document.querySelector("#humidity-fish").textContent = data2.main.humidity + "%";
      document.querySelector("#windSpeed-fish").textContent = Math.round(data2.wind.speed) +" mph";
  
    });

// 5 Day forecast - pick the days of the week based on today's day
switch (day1) {
  case 0:
    document.getElementById('today').textContent="Sunday";
    document.getElementById('today1').textContent="Monday";
    document.getElementById('today2').textContent="Tuesday";
    document.getElementById('today3').textContent="Wednesday";
    document.getElementById('today4').textContent="Thursday";
    break;
  case 1:
    document.getElementById('today').textContent="Monday";
    document.getElementById('today1').textContent="Tuesday";
    document.getElementById('today2').textContent="Wednesday";
    document.getElementById('today3').textContent="Thursday";
    document.getElementById('today4').textContent="Friday";
    break;
  case 2:
    document.getElementById('today').textContent="Tuesday";
    document.getElementById('today1').textContent="Wednesday";
    document.getElementById('today2').textContent="Thursday";
    document.getElementById('today3').textContent="Friday";
    document.getElementById('today4').textContent="Saturday";
    break;
  case 3:
    document.getElementById('today').textContent="Wednesday";
    document.getElementById('today1').textContent="Thursday";
    document.getElementById('today2').textContent="Friday";
    document.getElementById('today3').textContent="Saturday";
    document.getElementById('today4').textContent="Sunday";
    break;
  case 4:
    document.getElementById('today').textContent="Thursday";
    document.getElementById('today1').textContent="Friday";
    document.getElementById('today2').textContent="Saturday";
    document.getElementById('today3').textContent="Sunday";
    document.getElementById('today4').textContent="Monday";
    break;
  case 5:
    document.getElementById('today').textContent="Friday";
    document.getElementById('today1').textContent="Saturday";
    document.getElementById('today2').textContent="Sunday";
    document.getElementById('today3').textContent="Monday";
    document.getElementById('today4').textContent="Tuesday";
    break;
  case 6:
    document.getElementById('today').textContent="Saturday";
    document.getElementById('today1').textContent="Sunday";
    document.getElementById('today2').textContent="Monday";
    document.getElementById('today3').textContent="Tuesday";
    document.getElementById('today4').textContent="Wednesday";
    break;
}



// Get the 5 Day Forecast
    
// const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=224ba8d85cc913fa45e35d9a865e6bcb&units=imperial";

// const getForecast = async () => {
// 	const resp = await fetch(forecastURL);
// 	data = await resp.json();

// 	data.list.filter((value) => {
// 		if (value.dt_txt.includes("18:00:00")) {
//     	// OBTAINING THE LINK OF ICON
// 			const imagesrc = `https://openweathermap.org/img/w/${value.weather[0].icon}.png`;
// 			const desc = value.weather[0].description;
// 			const temp = value.main.temp;
// 			const currentDate = new Date(currentDay).toUTCString();
//       document.getElementById("day1_high").textContent = `${Math.round(temp)} °F`;

// 			// SET THE ICON'S ATTRIBUTES
// 			document.getElementById("day1_img").setAttribute("alt", desc);
// 			document.getElementById("day1_img").setAttribute("src", imagesrc);
// 		}
// 	});
// };

// getForecast();


// FORECAST API CALL

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=3bd28921d4e0f537a8315fdda41b8c8d&units=imperial";

const getForecast = async () => {
	const resp = await fetch(forecastURL);
	data = await resp.json();
	// console.log(data);

	data.list.filter((value) => {
		if (value.dt_txt.includes("18:00:00")) {
			// console.log(value);

			// OBTAINING THE LINK OF ICON
			const imagesrc = `https://openweathermap.org/img/w/${value.weather[0].icon}.png`;

			const desc = value.weather[0].description;
			const temp = value.main.temp;

			//GET THE DATE FROM THE API
			const currentDay = value.dt_txt.slice(0, 10);

			// CONVERTING THE STRING TO DATE OBJECT AND SET UTC TIME
			const currentDate = new Date(currentDay).toUTCString();
			// console.log(currentDate);
			// console.log(currentDay);

			// PASSING THE DATE AND THE TEMPERATURE
			// document.getElementById("today").textContent = currentDate.slice(0, 3);
      document.getElementById("day1_high").textContent = `${Math.round(temp)} °F`;

			// SET THE ICON'S ATTRIBUTES
			document.getElementById("day1_img").setAttribute("alt", desc);
      document.getElementById("day1_img").setAttribute("src", imagesrc);

		}
	});
};

getForecast();


// If the parameters are within the range, calculate the wind chill
// Else display N/A
if (ws > 3 && temp < 50) {
  windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(ws, 0.16) + 0.4275 * temp * Math.pow(ws, 0.16);
  document.getElementById('windChill').textContent=Math.round(windChill).toString() + "°F";
} else {
  document.getElementById('windChill').textContent="N/A";
}  

// Instead of 'Wind Chill: N/A' display 'Feels Like: 91°F' 
if (document.querySelector("#windChill").textContent = "N/A") {
  document.querySelector("#windChill-stats").textContent = "Feels like: ";
  document.querySelector("#windChill").textContent = Math.round(1.8*(data.main.feels_like-273) + 32) +"°F";
}