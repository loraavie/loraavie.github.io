function showTime() {
  var options = {
    timeZone: 'America/Chicago', // Set the time zone to CST (Central Standard Time)
    hour12: false, // Use 24-hour format
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  
  document.getElementById('currentTime').innerHTML = new Date().toLocaleString('en-US', options);
}

showTime();

setInterval(function () {
  showTime();
}, 1000);
