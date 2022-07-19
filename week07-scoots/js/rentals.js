// var mydata = JSON.parse(data);
const myData= require('js/rentals.json');
alert(myData[0].type);
alert(myData[0].max);
alert(myData[1].type);
alert(myData[1].max);


document.getElementById("model1").innerHTML = myData[0].type;
document.getElementById("model2").innerHTML = myData[1].type;
document.getElementById("model3").innerHTML = myData[2].type;
document.getElementById("model4").innerHTML = myData[3].type;
document.getElementById("model5").innerHTML = myData[4].type;
document.getElementById("model6").innerHTML = myData[5].type;