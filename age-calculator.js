// function changeStyle(id, titleId, color) {
//   const input = document.querySelector(`#${id}`);
//   const title = document.querySelector(`#${titleId}`);
//   input.style.borderColor = color;
//   title.style.color = color;
// }

// function getDaysInMonth(month, year) {
//   return new Date(year, month, 0).getDate();
// }

// function ageCalculator() {
//   const dayInput = document.querySelector("#day-input");
//   const monthInput = document.querySelector("#month-input");
//   const yearInput = document.querySelector("#year-input");

//   const daysInMonth = function (m, y) {
//     switch (m) {
//       case 2:
//         return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
//       case 11:
//       case 4:
//       case 6:
//       case 9:
//         return 30;
//       default:
//         return 31;
//     }
//   };

//   const isValidDate = function (d, m, y) {
//     m = parseInt(m, 10);
//     return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
//   };

//   const errorMessages = {
//     day: document.querySelector("#error-day"),
//     month: document.querySelector("#error-month"),
//     year: document.querySelector("#error-year"),
//   };

//   const validateInput = (day, month, year) => {
//     let isValid = true;

//     if (!day) {
//       errorMessages.day.innerHTML = "This field is required";
//       isValid = false;
//       changeStyle("day-input", "day-title", "red");
//     } else {
//       errorMessages.day.innerHTML = "";
//       changeStyle("day-input", "day-title", "grey");
//     }

//     if (!month) {
//       errorMessages.month.innerHTML = "This field is required";
//       isValid = false;
//       changeStyle("month-input", "month-title", "red");
//     } else {
//       errorMessages.month.innerHTML = "";
//       changeStyle("month-input", "month-title", "grey");
//     }

//     if (!year) {
//       errorMessages.year.innerHTML = "This field is required";
//       isValid = false;
//       changeStyle("year-input", "year-title", "red");
//     } else {
//       errorMessages.year.innerHTML = "";
//       changeStyle("year-input", "year-title", "grey");
//     }

//     const currentDate = new Date();
//     const inputDate = new Date(year, month - 1, day); // month is zero-based

//     if (!isValidDate(day, month, year)) {
//       errorMessages.day.innerHTML = "Must be a valid date";
//       changeStyle("day-input", "day-title", "red");
//       isValid = false;
//     }

//     return isValid;
//     console.log('false');
//   };

//   const clearErrorMessages = () => {
//     for (const errorMessage of Object.values(errorMessages)) {
//       errorMessage.innerHTML = "";
//     }
//   };

//   // Clear previous error messages
//   clearErrorMessages();

//   // Retrieve input values
//   const day = parseInt(dayInput.value, 10);
//   const month = parseInt(monthInput.value, 10);
//   const year = parseInt(yearInput.value, 10);
//   var currentDate = new Date();
//   var currentDay = currentDate.getDate();
//   var currentMonth = currentDate.getMonth() + 1; // January is month 0
//   var currentYear = currentDate.getFullYear();


//   // Calculate the age
//   var ageYear = currentYear - year;
//   var ageMonth = currentMonth - month;
//   var ageDay = currentDay - day;

//   if (validateInput(day, month, year)) {
//     let ageYear = currentDate.getFullYear() - year;
//     let ageMonth = 0;
//     let ageDay = 0;
  
  
//     if (ageDay < 0) {
//       // Adjust the month if the current day is smaller
//       ageMonth--;
//       ageDay += getDaysInMonth(currentMonth, currentYear);
//     }
  
//     if (ageMonth < 0) {
//       // Adjust the year if the current month is smaller
//       ageYear--;
//       ageMonth += 12;
//     }
  
//   }
//   // Display the results
//   document.getElementById("years-result").textContent = ageYear;
//   document.getElementById("months-result").textContent = ageMonth;
//   document.getElementById("days-result").textContent = ageDay;
  
// }  
function ageCalculator() {
  // Get the input values
  var day = document.getElementById("day-input").value;
  var month = document.getElementById("month-input").value;
  var year = document.getElementById("year-input").value;

  // Validate the input
  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth() + 1; // January is month 0
  var currentYear = currentDate.getFullYear();

  var errorDay = document.getElementById("error-day");
  var errorMonth = document.getElementById("error-month");
  var errorYear = document.getElementById("error-year");

  // Clear previous error messages
  clearErrorMessages();

  // Reset styles for input fields and titles
  changeStyle("day-input", "day-title", "grey");
  changeStyle("month-input", "month-title", "grey");
  changeStyle("year-input", "year-title", "grey");

  var emptyFields = [];

  if (day === "") {
    emptyFields.push("day");
  }

  if (month === "") {
    emptyFields.push("month");
  }

  if (year === "") {
    emptyFields.push("year");
  }

  if (emptyFields.length > 0) {
    emptyFields.forEach((field) => {
      var errorMessage;
      switch (field) {
        case "day":
          errorMessage = errorDay;
          changeStyle("day-input", "day-title", "red");
          break;
        case "month":
          errorMessage = errorMonth;
          changeStyle("month-input", "month-title", "red");
          break;
        case "year":
          errorMessage = errorYear;
          changeStyle("year-input", "year-title", "red");
          break;
      }
      errorMessage.textContent = "This field is required";
    });
    return;
  }

  // Convert input values to numbers
  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  if (isNaN(day) || day <= 0 || day > 31) {
    errorDay.textContent = "Invalid day";
    changeStyle("day-input", "day-title", "red");
    return;
  }

  if (isNaN(month) || month <= 0 || month > 12) {
    errorMonth.textContent = "Invalid month";
    changeStyle("month-input", "month-title", "red");
    return;
  }

  if (isNaN(year) || year <= 0 || year > currentYear) {
    errorYear.textContent = "Invalid year";
    changeStyle("year-input", "year-title", "red");
    return;
  }

  let maxDays = getDaysInMonth(month, year);
  if (day > maxDays) {
    errorDay.textContent = "Invalid day";
    changeStyle("day-input", "day-title", "red");
    return;
  }

  // Calculate the age
  var ageYear = currentYear - year;
  var ageMonth = currentMonth - month;
  var ageDay = currentDay - day;

  if (ageDay < 0) {
    // Adjust the month if the current day is smaller
    ageMonth--;
    ageDay += getDaysInMonth(currentMonth, currentYear);
  }

  if (ageMonth < 0) {
    // Adjust the year if the current month is smaller
    ageYear--;
    ageMonth += 12;
  }

  // Display the results
  document.getElementById("years-result").textContent = ageYear;
  document.getElementById("months-result").textContent = ageMonth;
  document.getElementById("days-result").textContent = ageDay;
}

// Helper function to get the number of days in a month
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// Helper function to change the style of an input field and its title
function changeStyle(id, titleId, color) {
  const input = document.querySelector(`#${id}`);
  const title = document.querySelector(`#${titleId}`);
  input.style.borderColor = color;
  title.style.color = color;
}

// Helper function to clear error messages
function clearErrorMessages() {
  var errorMessages = document.getElementsByClassName("error");
  for (var i = 0; i < errorMessages.length; i++) {
    errorMessages[i].innerHTML = "";
  }
}

