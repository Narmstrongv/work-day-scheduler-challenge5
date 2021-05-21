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
//make checkmark a button
//make button save input text to local storage

//notes
//document.queryselector(".class") 
//document.getelementbyid("id")
//innertext helpful for entering event? "" 
//dynamically create an input or textarea?
//is there a way to make the entire div box an input?


//Date and Time
var dateTime = new Date();
document.getElementById('currentDay').innerHTML = dateTime;

//Time based color change func
function updateTime() {
    var hr = (new Date()).getHours(),
        body = document.body,
        //style not JS
        //Call css for color, link to id
        bstyle = body.style,
        bColor = style.backgroundColor
        clock = document.getElementById('clock');
        console.log(clock)
    if (hr === 20) {
        bColor = "green";
        //change color of what???
        //connect to clock id
        clock 
        document.getElementById('clock').style.backgroundColor = "green";
    } else if (hr < 20) {
        document.getElementById('clock').style.backgroundColor = "grey";
        bColor = "grey";
    } else {
        document.getElementById('clock').style.backgroundColor = "red";
        bColor = "red";
    }
}
updateTime();

//pseudo code for above
// //if (hr === current time) {
//     //color green
// } else if ( hr < current time){
    //color grey
//} else {
    //color red
//}