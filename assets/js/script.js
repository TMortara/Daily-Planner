// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// WALTER'S SLACK COMMENT
// $(document).ready(function(){
//   // jQuery methods go here...
// });

// or the shorter version

// $(function(){
//   // jQuery methods go here...
// });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

$(function() {
  var currentTime = dayjs().hour();
  var currentDate = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');
  $('#currentDay').text(currentDate);
  getStorage();

  

  // $('button').on('click',)

});

var timeblocks = document.getElementsByTagName("textarea");
function getStorage(){ 
  var storage = JSON.parse(localStorage.getItem("tasks")) || [];
    if (storage.length === 0) {
      for (let i = 0; i < timeblocks.length; i++) {
        storage.push("");
      }
      localStorage.setItem("tasks", JSON.stringify(storage));
      return;
    }
    for (let i = 0; i < timeblocks.length; i++) {
      timeblocks[i].value = storage[i];
    }
    console.log(storage);
}

function saveToStorage(value,index) {
  var storage = JSON.parse(localStorage.getItem("tasks"));
  console.log(value, index);
  storage[index] = value;
  localStorage.setItem("tasks", JSON.stringify(storage));
  console.log(storage);
}

var saveButton = document.getElementsByTagName('button');
for (let i = 0; i < saveButton.length; i++) {
  saveButton[i].addEventListener('click', (event)=>{
    event.preventDefault();
    saveToStorage(timeblocks[i].value,i);
  })
}


//Set current time



//Clear local storage if calendar date is different if currentDay !== day.js pull in current date


//https://github.com/kqarlos/day-planner/blob/master/assets/js/script.js