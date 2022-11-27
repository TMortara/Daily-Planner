// On page reload
$(function() {
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDate);
  getStorage();
  setBackgroundColor();
});

// Setup local storage
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

// Setup to save to local storage
function saveToStorage(value,index) {
  var storage = JSON.parse(localStorage.getItem("tasks"));
  console.log(value, index);
  storage[index] = value;
  localStorage.setItem("tasks", JSON.stringify(storage));
  console.log(storage);
}
// Saving to local storage after clicking save button
var saveButton = document.getElementsByTagName('button');
for (let i = 0; i < saveButton.length; i++) {
  saveButton[i].addEventListener('click', (event)=>{
    event.preventDefault();
    saveToStorage(timeblocks[i].value,i);
  })
}

// Changes background color based on hour
function setBackgroundColor() {
  var currentHour = dayjs().hour();
  $('div.time-block').each(function() {
    var id = this.id;
    var splitId = id.split("-");
    var parseId = parseInt(splitId[1]);
    if (parseId < currentHour) {
      $(this).removeClass('future');
      $(this).addClass('past');
    } else if (parseId === currentHour) {
      $(this).removeClass('future');
      $(this).addClass('present');
    }
  });
}
