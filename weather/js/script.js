// This is your site JavaScript code - you can add interactivity and carry out processing

let year_text = new Date().getFullYear();
document.getElementById("c_year").innerHTML = year_text;

let text = document.lastModified;
document.getElementById("mod-date").innerHTML = text;

let dt = new Date();
const currentDate = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'};
document.getElementById('date-time').innerHTML=currentDate.toLocaleDateString('en-uk', options);

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function popup(mylink, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href; 
    window.open(href, windowname, 'width=300,height=500,scrollbars=no,resizable=no,left=600,top=300'); 
    return false; 
  }

  
// <!--Start of Tawk.to Script-->

var Tawk_API=Tawk_API||{}, 
    Tawk_LoadStart=new Date();
  (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/62a46c3eb0d10b6f3e76ce03/1g594dkt6';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  })();

// End of Tawk.to Script-->



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