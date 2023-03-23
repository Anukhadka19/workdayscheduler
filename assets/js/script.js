// Variables
// const currentHour = $("#currentHour")

const createHours = ["8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const currentHour = moment().format('h:mm:ss a');

// handle displaying the time
let currentTime= parseInt(moment().format("h"));
console.log(currentTime);

$(".time-block").each(function(){
const timeBlock = parseInt($(this).attr("id").split("-")[1])
console.log(timeBlock)
if (timeBlock < currentTime) {
  $(this).addClass("past")
} else if (timeBlock === currentTime) {
  $(this).removeClass("past")
  $(this).addClass("present")
} else if (timeBlock > currentTime) {
  $(this).removeClass("past")
  $(this).removeClass("present")
  $(this).addClass("future")
}
})
  
// Save button to local storage
$(".saveBtn").on('click', function () {

  const taskTime = $(this).parent().attr("id");
  const taskText = $(this).siblings(".description").val();

  localStorage.setItem(taskTime, taskText);
});

for (let i = 9;i<18;i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
}


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
