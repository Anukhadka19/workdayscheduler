$(document).ready(function () {

// Variables
const currentHour = today.hour();


const createHours = ["8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// handle displaying the time
function displayTime() {
  const rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  $("#currentDay").text(rightNow);
}

const checkCurrentTime = (currentTime) => {
  if (currentTime) {
    return 'present time';
  } else if (!currentTime) {
    return 'past time'; 
} else {
    return 'future time';
}
};

  // loop through and create a row
  for (hour of createHours) {
    // Create row and columns 
    var rowEl = $('<section>').addClass('row time-block');
    var hourEL = $('<p>').addClass('hour col-1');
    var textEl = $('<text>').addClass('col-10');
    var saveBtnEl = $('<button>').addClass('saveBtn col-1 btn align-items-center justify-content-center');

    // append elements to DOM to display them
    textEl.addClass(`${assignAreaColor(hourEl[0].innerText)}`);
    saveBtnEl.append($('<span>').html('&#128190').addClass('saveIcon'));
    rowEl.append(hourEl, textEl, saveBtnEl);
    return $container.append(rowEl);

  // // Takes an array saves them in localStorage.
  // function saveCalenderToStorage(projects) {
  // localStorage.setItem('calender', JSON.stringify(calender));
  // };

//     // add class to row by comparing project date to today's date
//     if (taskDate.isBefore(today)) {
//       rowEl.addClass('task-late');
//     } else if (taskDate.isSame(today)) {
//       rowEl.addClass('task-today');
// };

// Save button to local storage
saveBtn.on('click', function (event) {
  event.preventDefault();

  const taskTime = $(this).data("time");
  const taskText = $("#" + taskTime).val();

  localStorage.setItem(taskTime, taskText);
});
}

localStorage.setItem('calender', JSON.stringify(events));
    console.log(localStorage.key('schedule'));
  });

  // Render data
  function renderSchedule() {
  const scheduleStr = localStorage.getItem('schedule');
  console.log(scheduleStr);
  if (scheduleStr) {
    const scheduleArray = JSON.parse(scheduleStr);
    for (let i = 0; i < scheduleArray.length; i++);
  };
};
renderSchedule();
