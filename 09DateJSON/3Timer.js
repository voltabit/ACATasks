// Create a JavaScript countdown timer that counts down from a specified date and time to the
// current time. Display the remaining days, hours, minutes, and seconds in the HTML

function countdown() {
  const targetDate = new Date("2023-10-21 12:25:00");

  const interval = setInterval(function () {
    const difference = targetDate - new Date();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (difference <= 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "Time is up!";
    }
  }, 1000);
}
