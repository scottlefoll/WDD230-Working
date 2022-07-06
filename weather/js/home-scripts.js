const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
	.then(function(response) {
		return response.json();
	})
	.then(function(jsonObject) {
		console.table(jsonObject); // temporary checking for valid response and data parsing
		const towndata = jsonObject['towndata'];
    
        document.getElementById("preston-founded").textContent = towndata[6].yearFounded;
        document.getElementById("preston-pop").textContent = towndata[6].currentPopulation;
        document.getElementById("preston-rain").textContent = towndata[6].averageRainfall;
        document.getElementById("fish-founded").textContent = towndata[2].yearFounded;
        document.getElementById("fish-pop").textContent = towndata[2].currentPopulation;
        document.getElementById("fish-rain").textContent = towndata[2].averageRainfall;
        document.getElementById("soda-founded").textContent = towndata[0].yearFounded;
        document.getElementById("soda-pop").textContent = towndata[0].currentPopulation;
        document.getElementById("soda-rain").textContent = towndata[0].averageRainfall;

		}
	});

    
