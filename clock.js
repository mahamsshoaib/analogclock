// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
  
  // Function to update the clock hands based on the current time
  function updateClock() {
      const now = new Date();
      const hour = now.getHours() % 12; // Convert to 12-hour format
      const minute = now.getMinutes();
      const second = now.getSeconds();

      // Get references to the clock hands in the HTML
      const hourHand = document.getElementById('hours-hand');
      const minuteHand = document.getElementById('minutes-hand');
      const secondHand = document.getElementById('seconds-hand');

      // Calculate the rotations for each clock hand
      const hourRotation = (hour * 30) + (0.5 * minute); // 30 degrees per hour, 0.5 degrees per minute
      const minuteRotation = (minute * 6) + (0.1 * second); // 6 degrees per minute, 0.1 degrees per second
      const secondRotation = second * 6; // 6 degrees per second

      // Apply the rotations to the clock hands using CSS transform
      hourHand.style.transform = `rotate(${hourRotation}deg)`;
      minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
      secondHand.style.transform = `rotate(${secondRotation}deg)`;

      // Show the clock hands after they have been positioned
      const clockHands = document.querySelectorAll('.hands');
      clockHands.forEach(hand => {
          hand.style.display = 'block';
      });
  }

  // Call the updateClock function initially to set the initial clock hand positions
  updateClock();

  // Update the clock every second (1000 milliseconds)
  setInterval(updateClock, 1000);
});
