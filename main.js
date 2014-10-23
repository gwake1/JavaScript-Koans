document.addEventListener('DOMContentLoaded', function(){
  var $form = document.getElementById("generate-group");
  var students = ["Bob", "Joe", "Sally"]
  $form.addEventListener("submit", function(event){
    event.preventDefault();
    //event.preventDefault prevents the form from submitting to the website and keeps everything within the document
  $var ul = document.getEelementById("results");
    $ul.innerHTML=""
  $var li = document.createElement("li");

  //Pick a student
  var studentNumber = 0
  var student.Name = students[studentNumber];

  $li.innerHTML="results displayed here"
  //inner.html allows the li to have content in it
  $ul.appendChild($li);
  });
)};
