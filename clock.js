document.addEventListener('DOMContentLoaded', function () {
    function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12; // Convert to 12-hour format
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourHand = document.getElementById('hours-hand');
    const minuteHand = document.getElementById('minutes-hand');
    const secondHand = document.getElementById('seconds-hand');
  
    const hourRotation = (hour * 30) + (0.5 * minute); // 30 degrees per hour, 0.5 degrees per minute
    const minuteRotation = (minute * 6) + (0.1 * second); // 6 degrees per minute, 0.1 degrees per second
    const secondRotation = second * 6; // 6 degrees per second
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    
}
  
  // Update the clock every second
  setInterval(updateClock, 1000);
});