const timeLineOneText = document.getElementById("timeLineOneText");

setInterval(() => {
  const d = new Date();
  
  timeLineOneText.innerHTML = d;
}, 1000);
