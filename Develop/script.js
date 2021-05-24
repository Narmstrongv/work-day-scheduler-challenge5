// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//TODO
//Color code time blocks based on past(grey), present(red), future(green)
//have input text stay on page refresh 

//notes
//document.queryselector(".class") 
//document.getelementbyid("id")
//innertext helpful for entering event? "" 
//dynamically create an input or textarea?
//is there a way to make the entire div box an input?


//Date and Time
var dateTime = new Date();
document.getElementById('currentDay').innerHTML = dateTime;

// to get all the rows 
var hours = document.querySelectorAll('.clock');
console.log(dateTime.getHours())

// loop through each row
for(var i = 0; i < hours.length; i++) {
   var hourID = hours[i].id; //get the value of each row from id's 
    var parentNode = hours[i].parentNode; //gets the parent div
    console.log(parentNode)
    if(hourID === dateTime.getHours()) {
        
        parentNode.style.backgroundColor = 'green';
    } else if( hourID < dateTime.getHours()) {
        
        parentNode.style.backgroundColor = 'grey';
    } else {
        
        parentNode.style.backgroundColor = 'red';
    }
}

// console.log(hours);
//Time based color change func
function updateTime() {
    var hr = (new Date()).getHours();
        // body = document.body,
        //style not JS
        //Call css for color, link to id
        //bstyle = body.style,
        //bColor = style.backgroundColor
        // clock = document.getElementById('clock');
        // console.log(clock)
    if (hr === 20) {
        //bColor = "green";
        //change color of what???
        //connect to clock id
        //clock 
        // document.getElementById('clock').style.backgroundColor = "green";
        console.log('8pm')
    } else if (hr < 20) {
        // document.getElementById('clock').style.backgroundColor = "grey";
        //bColor = "grey";
    } else {
        // document.getElementById('clock').style.backgroundColor = "red";
        console.log('red work!')
        //bColor = "red";
    }
    console.log(hr);
}
// updateTime();

//pseudo code for above
// //if (hr === current time) {
//     //color green
// } else if ( hr < current time){
    //color grey
//} else {
    //color red
//}

//local storage func pseudo code
//input var
//button var
//event listener

var button = document.querySelector('#button'); //#?
var input = document.querySelector('#input');
var storedInput = localStorage.getItem('textinput');
var text = document.querySelector('text');

//Attempt 1
// button.addEventListener('click', function(event) {
//     localStorage.setItem('input', input.innerHTML);
// });

//Attempt 2
// document.getElementById('button').onclick = function() {
//     localStorage.setItem('input', input.nodeValue());
//     console.log('click!!');
// }
// if (saved) {
//     input.innerHTML = saved;
// }

// Attempt 3
// storageInput = input

if(input) {
    input.textContent = storedInput
}

input.addEventListener('input', letter => {
    input.textContent = letter.target.value 
})

const saveLocalStorage = () => {
    localStorage.setItem('textinput', input.textContent)
}

button.addEventListener('click', saveLocalStorage)



//shows button works
//document.getElementById('button').onclick = function() {
//    console.log('click!')
//}
