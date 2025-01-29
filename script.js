// Function to update UTC time
function updateTime() {
  const utcTime = new Date().toUTCString();
  document.getElementById(
    "utcTime"
  ).textContent = `Current UTC Time: ${utcTime}`;
}
updateTime();
setInterval(updateTime, 1000);
