const timeLineOneText = document.getElementById("timeLineOneText");
const timeLineTwoText = document.getElementById("timeLineTwoText");
const timeLineThreeText = document.getElementById("timeLineThreeText");

setInterval(() => {
  const d = new Date();
  
  function get12Hours() {
    if (d.getHours() > 12) {
      let newHours = d.getHours() - 12;
      
      if (newHours == 0) {
        return 12;
      } else {
        return newHours;
      }
    } else {
      if (d.getHours() == 0) {
        return 12;
      } else {
        return d.getHours();
      }
    }
  }
  
  function hourToText() {
    if (get12Hours() == 1) {
      return "One";
    } else if (get12Hours() == 2) {
      return "Two";
    } else if (get12Hours() == 3) {
      return "Three";
    } else if (get12Hours() == 4) {
      return "Four";
    } else if (get12Hours() == 5) {
      return "Five";
    } else if (get12Hours() == 6) {
      return "Six";
    } else if (get12Hours() == 7) {
      return "Seven";
    } else if (get12Hours() == 8) {
      return "Eight";
    } else if (get12Hours() == 9) {
      return "Nine";
    } else if (get12Hours() == 10) {
      return "Ten";
    } else if (get12Hours() == 11) {
      return "Eleven";
    } else if (get12Hours() == 12) {
      return "Twelve";
    }
  }
  
  function getMinutesText(minutes) {
    const singleDigits = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const tensDigits = ['Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty'];
  
    if (minutes < 10) {
      return singleDigits[minutes];
    } else if (minutes < 20) {
      const teenDigits = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      return teenDigits[minutes - 10];
    } else if (minutes % 10 === 0) {
      return tensDigits[Math.floor(minutes / 10) - 1];
    } else {
      const tensDigit = tensDigits[Math.floor(minutes / 10) - 1];
      const singleDigit = singleDigits[minutes % 10];
      return `${tensDigit} ${singleDigit}`;
    }
  }
  
  if (d.getMinutes() == 0) {
    timeLineOneText.innerHTML = hourToText();
    timeLineTwoText.innerHTML = "Oh";
    timeLineThreeText.innerHTML = "Clock";
  } else if (d.getMinutes() > 0 && d.getMinutes() < 10) {
    timeLineOneText.innerHTML = hourToText();
    timeLineTwoText.innerHTML = "Oh";
    timeLineThreeText.innerHTML = getMinutesText(d.getMinutes());
  } else if (d.getMinutes() >= 10 && d.getMinutes() <= 20) {
    timeLineOneText.innerHTML = getMinutesText(d.getMinutes());
    timeLineTwoText.innerHTML = "Past";
    timeLineThreeText.innerHTML = hourToText();
  }
}, 1000);
