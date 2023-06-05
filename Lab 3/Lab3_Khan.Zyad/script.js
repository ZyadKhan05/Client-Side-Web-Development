// function/variables to make the title move
var msg  = document.title;
var speed = 200;
var endChar = "... ";
var pos = 0; 

function titleMove()
{
   var ml = msg.length;
  title = msg.substr(pos,ml) + endChar + msg.substr(0,pos);
document.title = title;
  
  pos++;
if (pos > ml) pos=0;
  window.setTimeout("titleMove()",speed);
}
titleMove();


// function to change background color of div when clicked
function colorDiv(){
  var color = document.getElementById("myDiv")
  color.style.backgroundColor = 'khaki'
}
function colorDiv2(){
  var color = document.getElementById("myDiv2")
  color.style.backgroundColor = 'LightSalmon'
}


// function for the show/hide table button
function button(){
    var table = document.getElementById("myTable");
    if (table.style.display === "none") {
      table.style.display = "table";
    } else {
      table.style.display = "none";
    }
}

// function to sort the table by clicking the column
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


// Function for the pop up when clicking on links - old method replaced by pop over
function pop_up(node) {
    return confirm("Click OK if you would like to leave the page")

}

// Function to show the current date and time for the modification date
function getDateTime() {
    var now = new Date(); 
    var year = now.getFullYear();
    var month = now.getMonth()+1; 
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = 'Last updated on: '+ year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second + ' by Zyad Khan';   
     return dateTime;
}

setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("digitalClock").innerHTML = currentTime;
}, 1000);



// Change Image with Mouse hover
function mouseOverImage(){
    document.getElementById("image").src = "https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg"
}
function mouseOutImage(){
    document.getElementById("image").src = "https://www.biggerbolderbaking.com/wp-content/uploads/2017/07/1C5A8967.jpg"
}


// Function to Alphabetize the List
const sortList = list => [...list].sort((a, b) => {
  const A = a.textContent, B = b.textContent;
  return (A < B) ? -1 : (A > B) ? 1 : 0;
});


window.addEventListener("load", function() {
  const ul = document.getElementById("myList");
  const list = ul.querySelectorAll("li");
  ul.append(...sortList(list));
})

// Function to make Comment Box after the page runs
window.onload = function commentBox(){
  const field = document.querySelector('textarea');
  const backUp = field.getAttribute('placeholder')
  const btn = document.querySelector('.btn');
  const clearBtn = document.getElementById('clearBtn')
  const submitBtn = document.querySelector('submitBtn')
  // const comments = document.querySelector('#comment-box')
  const comments = document.getElementById('comment-box');

  // array to store the comments
  const comments_arr = [];

  // to generate html list based on comments array
  const display_comments = () => {
    let list = '<dt>';
    comments_arr.forEach(comment => {
    list += `<dd>- ${comment}</dd> <br><br>`;
    })
    list += '</dt>';
    comments.innerHTML = list;
    }

  clearBtn.onclick = function(event){
    event.preventDefault();
    // reset the array  
    comments_arr.length = 0;
    // re-genrate the comment html list
    display_comments();
    }

  submitBtn.onclick = function(event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0){ // if there is content
    // add the comment to the array
    comments_arr.push(content);
    // re-genrate the comment html list
    display_comments();
    // reset the textArea content 
    field.value = '';
    }
  }
}


// Pop over
onload.$('#popoverData').popover();
onload.$('#popoverOption').popover({ trigger: "hover" });

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))