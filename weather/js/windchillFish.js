var ws = document.getElementById("windSpeed").textContent;
var temp = document.getElementById("temp").textContent;
var windChill = 0;

// Get Date
const dt1 = new Date();
// Get Day of week as int; Friday = 5
let day1 = dt1.getDay()

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=224ba8d85cc913fa45e35d9a865e6bcb";


//Get the Summary Weather Status
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    document.querySelector("#temp").textContent = Math.round(1.8*(data.main.temp-273) + 32) +"°F";
    document.querySelector("#cover").textContent = data.weather[0].main;
    document.querySelector("#high").textContent = Math.round(1.8*(data.main.temp_max-273) + 32) +"°F";
    document.querySelector("#humidity").textContent = data.main.humidity + "%";
    document.querySelector("#windSpeed").textContent = Math.round(data.wind.speed) +" mph";
  })

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


// FORECAST API CALL
// WORKING COPY 2!!!!!
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=224ba8d85cc913fa45e35d9a865e6bcb&units=imperial";

const getForecast = async () => {
	const resp = await fetch(forecastURL);
	data = await resp.json();
	// console.log(data);

	data.list.filter((value) => {
		if (value.dt_txt.includes("18:00:00")) {
			console.log(value);

			// OBTAINING THE LINK OF ICON
			const imagesrc = `https://openweathermap.org/img/w/${value.weather[0].icon}.png`;

			const desc = value.weather[0].description;
			const temp = value.main.temp;
      let i = 1;

      if (i = 1){
        document.getElementById("day1_high").textContent = `${Math.round(temp)} °F`;

			  // SET THE ICON'S ATTRIBUTES
			  document.getElementById("day1_img").setAttribute("alt", desc);
        document.getElementById("day1_img").setAttribute("src", imagesrc);
      }
      if (i = 2){
        document.getElementById("day2_high").textContent = `${Math.round(temp)} °F`;

			  // SET THE ICON'S ATTRIBUTES
			  document.getElementById("day2_img").setAttribute("alt", desc);
        document.getElementById("day2_img").setAttribute("src", imagesrc);
      }
      if (i = 3){
        document.getElementById("day3_high").textContent = `${Math.round(temp)} °F`;

			  // SET THE ICON'S ATTRIBUTES
			  document.getElementById("day3_img").setAttribute("alt", desc);
        document.getElementById("day3_img").setAttribute("src", imagesrc);
      }
      if (i = 4){
        document.getElementById("day4_high").textContent = `${Math.round(temp)} °F`;

			  // SET THE ICON'S ATTRIBUTES
			  document.getElementById("day4_img").setAttribute("alt", desc);
        document.getElementById("day4_img").setAttribute("src", imagesrc);
      }
      if (i = 5){
        document.getElementById("day5_high").textContent = `${Math.round(temp)} °F`;

			  // SET THE ICON'S ATTRIBUTES
			  document.getElementById("day5_img").setAttribute("alt", desc);
        document.getElementById("day5_img").setAttribute("src", imagesrc);
      }
      i = i + 1;
		}
	});
};

getForecast();

//--------------------------------------------------//

// FORECAST API CALL

// const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=224ba8d85cc913fa45e35d9a865e6bcb&units=imperial";

// const getForecast = async () => {
// 	const resp = await fetch(forecastURL);
// 	data = await resp.json();
// 	// console.log(data);

// 	data.list.filter((value) => {
// 		if (value.dt_txt.includes("18:00:00")) {}	  });
    
//   data.forEach(writeForecast);
//   function writeForecast(value, index, array) {
//       // OBTAINING THE LINK OF ICON
// 			const imagesrc = `https://openweathermap.org/img/w/${value.weather[0].icon}.png`;

// 			const desc = value.weather[0].description;
// 			const temp = value.main.temp;

//       document.getElementById("day1_high").textContent = `${Math.round(temp)} °F`;

//       // SET THE ICON'S ATTRIBUTES
//       document.getElementById("day1_img").setAttribute("alt", desc);
//       document.getElementById("day1_img").setAttribute("src", imagesrc);
//   }

// };

// getForecast();

// // If the parameters are within the range, calculate the wind chill
// // Else display N/A
// if (ws > 3 && temp < 50) {
//   windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(ws, 0.16) + 0.4275 * temp * Math.pow(ws, 0.16);
//   document.getElementById('windChill').textContent=Math.round(windChill).toString() + "°F";
// } else {
//   document.getElementById('windChill').textContent="N/A";
// }  

// // Instead of 'Wind Chill: N/A' display 'Feels Like: 91°F' 
// if (document.querySelector("#windChill").textContent = "N/A") {
//   document.querySelector("#windChill-stats").textContent = "Feels like: ";
//   document.querySelector("#windChill").textContent = Math.round(1.8*(data.main.feels_like-273) + 32) +"°F";
// }