/* time */
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
  
    // Convert to 12-hour format
    h = h % 12 || 12;
  
    var m = today.getMinutes();
    var s = today.getSeconds();
  
    // Add a zero in front of numbers < 10
    m = checkTime(m);
    s = checkTime(s);
  
    document.getElementById('time').innerHTML = h + "<span id=timecolon>:</span>" + m;
  
    t = setTimeout(function() {
      startTime();
    }, 500);
  }
  
  startTime();


/* date */
function checkDate(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startDate() {
  var today = new Date();
  var eName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var mName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var e = eName[today.getDay()];
  var m = mName[today.getMonth()];
  var d = today.getDate();

  document.getElementById('date').innerHTML = e + ", " + m + " " + d;

  t = setTimeout(function() {
    startDate();
  }, 500);
}

startDate();


const moreButton = document.querySelector('#more-button');
const moreContent = document.querySelector('#more-content');
const openButton = document.querySelector('#more-button-close');

moreButton.addEventListener('click', () => {
  moreContent.classList.toggle('open');
});
openButton.addEventListener('click', () => {
  moreContent.classList.toggle('open');
});