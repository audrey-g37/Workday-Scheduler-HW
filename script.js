//Still To Do: fix eventTimeCheck function so it changes color of event 'row'; local storage of user input for event; save button with image instead of 'save' text; add to README; add comments.

var todaysDateEl = $("#currentDay");
var todaysDate = moment().format("dddd, MMMM Do");

todaysDateEl.append(todaysDate);

var currentTime = moment().format("h:mm A");
var hourTextEl = $(".hour");

var timeText;
var eventTextEl = $(".col-7");

function eventTimeCheck(i) {
  timeText = hourTextEl[i].textContent;

  console.log(timeText);

  if (moment().isBefore(timeText, "hour")) {
    eventTextEl.attr("class", "future");
  } else if (moment().isAfter(timeText, "hour")) {
    eventTextEl.attr("class", "past");
  } else if (moment().isSame(timeText, "hour")) {
    eventTextEl.attr("class", "present");
  }
}

eventTimeCheck(0);
