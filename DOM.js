//1. Write the code to access element which is having id as "text"

let text = document.getElementById("text");
text.innerText = "Elevation Academy";

//2. Write the code to access element which is having tag as "h1"

let heading = document.getElementsByTagName("h1")[0];
heading.innerText = "Elevation Academy PrepBytes";

//3. Write the code to access element which is having class as "box"

let box = document.getElementsByClassName("box")[0];
box.innerText = "Document Object Model";

//4. "<h1>Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

    document.getElementsByTagName("h1")[1].innerText = "Hello World !";

// 5. Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function direction(){
    const element1 = document.getElementById("click");    
    element1.style.flexDirection="column";
    element1.style.width="300px";
    element1.style.height="300px";
}

//6. What’s the difference between window vs document?




//7. "<h1>Hello </h1>
// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

function set(){
    let element2 = document.getElementsByTagName("h1")[2];
    element2.style.color = "red";
    element2.setAttribute("id","heading");
    console.log(element2);
}

//8. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function change(){
    document.getElementsByTagName("h1")[3].innerText = "Welcome to Elevation academy";
}

//9. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

let t = setInterval(
function timerClock(){
    let clock = new Date();
let hh = clock.getHours();
let mm = clock.getMinutes();
let ss = clock.getSeconds();
let session = (hh >= 12) ?  "PM" : "AM";

hh = (hh < 10) ? "0" + hh : hh;
mm = (mm < 10) ? "0" + mm : mm;
ss = (ss < 10) ? "0" + ss : ss;

let time = hh + ":" + mm + ":" + ss + " " + session ;

let element3 = document.getElementById("clock");
element3.innerText = time;
element3.style.backgroundColor = "orange";
element3.style.fontSize="30px";
}, 1000); 
timerClock();

//10. Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function setYear(){
    let set = document.getElementById("setyear");

   document.getElementById("yr").onclick = function(){
   let get = set.options[set.selectedIndex].text;

   document.getElementById("update").innerText= get;
}
}
setYear();

//11. "Create a form having name ,email, phone no. , birth year 
//Add validations - phone no. should start with 91 , it should be 10 digits email should be domain prepbytes.com birth year should be > 95"

function validate() {
    let text = document.getElementById("phonenumber").value;
    let regx = /^[91]\d[6-9]\d{9}$/;

     if (regx.test(text)){
        alert("VALID phone number");
            document.form1.text1.focus();
     }
     else{
        alert("phone no. should start with 91");
            document.form1.text1.focus();
     }
        
    }  






