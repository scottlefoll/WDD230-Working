// This is your site JavaScript code - you can add interactivity and carry out processing

// let year_text = new Date().getFullYear();
// document.getElementById("c_year").innerHTML = year_text;

// let text = document.lastModified;
// document.getElementById("mod-date").innerHTML = text;


// Current Date at bottom of page
// let dt = new Date();
// const currentDate = new Date();
// const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'};
// document.getElementById('date-time').innerHTML=currentDate.toLocaleDateString('en-uk', options);


// Get Date
const d = new Date();
// Get Day of week as int; Friday = 5
let day = d.getDay()
const para = document.createElement("p");
para.innerHTML = "Saturday: Preston Pancakes in the Park!<br> 9:00 am Saturday, 6/25, in Preston Community Park.";

// Append to the top banner element:
document.getElementById("topDIV").appendChild(para);

//If day = 5 show ad, otherwise hide it.
if (day === 6 || day === 5) {
  document.getElementById("topDIV").style.display = "block";
  } else {
    document.getElementById("topDIV").style.display = "none";
  }
document.getElementById("topDIV").style.backgroundColor="yellow";
document.getElementById("topDIV").style.fontWeight="bold";
document.getElementById("topDIV").style.fontSize=".95rem";