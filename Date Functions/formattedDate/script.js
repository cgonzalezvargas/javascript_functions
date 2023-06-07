function formattedDate() {
  const vaDate = document.getElementById("inputText").value;
  const days = parseInt(vaDate.substring(0, 3));
  const fraction = parseFloat(vaDate.substring(3));
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const timestamp = (days - 40543) * millisecondsPerDay + fraction * millisecondsPerDay;

  const date = new Date(timestamp);
  console.log('date', date.toLocaleDateString());
  return date.toLocaleDateString();
}

function displayFormattedDate() {
  const formatted = formattedDate();
  document.getElementById("output").textContent = formatted;
}
