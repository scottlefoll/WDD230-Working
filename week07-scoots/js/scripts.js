var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
  var s1=document.createElement("script"),
  s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/62a46c3eb0d10b6f3e76ce03/1g594dkt6';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
})();

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 9000);
}

var ws = document.getElementById("windSpeed").textContent;
var temp = document.getElementById("temp").textContent;
var windChill = 0;

// Get Date
const dt1 = new Date();
// Get Day of week as int; Friday = 5
let day1 = dt1.getDay()

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&APPID=224ba8d85cc913fa45e35d9a865e6bcb";


//Get the Summary Weather Status
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    document.querySelector("#temp").textContent = Math.round(1.8*(data.main.temp-273) + 32) +"°F";
    document.querySelector("#cover").textContent = data.weather[0].main + ", ";
    document.querySelector("#high").textContent = Math.round(1.8*(data.main.temp_max-273) + 32) +"°F";
    document.querySelector("#humidity").textContent = data.main.humidity + "%";
    document.querySelector("#windSpeed").textContent = Math.round(data.wind.speed) +" mph";
  })


  // FORECAST API CALL
// WORKING COPY 2!!!!!
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=224ba8d85cc913fa45e35d9a865e6bcb&units=imperial";

const getForecast = async () => {
	const resp = await fetch(forecastURL);
	data = await resp.json();
	// console.log(data);

	data.list.filter((value) => {
		if (value.dt_txt.includes("12:00:00")) {
			// console.log(value);

			const temp = value.main.temp;

      document.getElementById("day5_high").textContent = `${Math.round(temp)} °F`;

		}
    
	});
};

getForecast();