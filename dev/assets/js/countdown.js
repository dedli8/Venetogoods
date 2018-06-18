const getel = elem => document.querySelector(elem);

const countdown = function(_config) {
  const tarDate = getel(_config.target).getAttribute('data-date').split('-');
  const day = parseInt(tarDate[0]);
  const month = parseInt(tarDate[1]);
  const year = parseInt(tarDate[2]);
  let tarTime = getel(_config.target).getAttribute('data-time');
  let tarhour, tarmin;
  
  if (tarTime != null) {    
    tarTime = tarTime.split(':');
    tarhour = parseInt(tarTime[0]);
    tarmin = parseInt(tarTime[1]);
  }

  // Set the date we're counting down to
  var countDownDate = new Date(year, month-1, day, tarhour, tarmin, 0, 0).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      getel(_config.target+' .day .num').innerHTML = addZero(days);
      getel(_config.target+' .hour .num').innerHTML = addZero(hours);
      getel(_config.target+' .min .num').innerHTML = addZero(minutes);
      getel(_config.target+' .sec .num').innerHTML = addZero(seconds);
      getel(_config.target+' .day .word').innerHTML = _config.dayWord;
      getel(_config.target+' .hour .word').innerHTML = _config.hourWord;
      getel(_config.target+' .min .word').innerHTML = _config.minWord;
      getel(_config.target+' .sec .word').innerHTML = _config.secWord;


      // If the count down is over, write some text 
      if (distance < 0) {
          clearInterval(x);
          getel(".countdown-wrap").innerHTML = "EXPIRED";
      }
  }, 1000);

}

function addZero(x) {
  if (x < 10 && x >= 0) {
    return "0"+x;
  } else {
    return x;
  }
}
