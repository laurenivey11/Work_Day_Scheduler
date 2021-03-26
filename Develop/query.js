var loadedData = JSON.parse(localStorage.getItem("tasksArr"));
var tasksArr = loadedData;

if(!loadedData) {
    var tasksArr = [];

    for (var k = 1; k < $(".time-block").length + 1 ; k++) {
        var taskInput = {
            time: "block-" + k,
            description: ""
        }
        tasksArr.push(taskInput);
    }
}

for ( var i = 0; i < tasksArr.length; i++) {
    var selector = '#' + tasksArr[i].hour + ' .description';
    $(selector).val(tasksArr[i].description);
}

$(".time-block").on("change", "textarea", function() {
    var textAdded = $(this).val();
    var hourId = $(this).closest(".time-block").attr("id");
    for ( var i = 0; i < tasksArr.length; i++) {
      if(tasksArr[i].hour === hourId) {
        tasksArr[i].description = textAdded;
  
      }
    }
    
  });

var currentDay = moment().format('MMMM Do YYYY, h:mm a') 
$("#currentDay").text(currentDay);

var saveData = function() {
    localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
   };


$(".saveBtn").click(function() {
    saveData();
});