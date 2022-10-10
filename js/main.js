function AkanNames() {
  var daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
  ];
  var maleAkanNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
  ];
  var femaleAkanNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      " Yaa",
      "Afua",
      "Ama",
  ];

  var dateInput = prompt("Enter date of birth YYYY-MM-DD");

  var birthDates = new Date(dateInput);
  var dateYenyewe = birthDates.getDay();
  var birthMonth = birthDates.getMonth();
  var birthYear = birthDates.getFullYear();


  var genderFemale = femaleAkanNames[dateYenyewe];
  var genderMale = maleAkanNames[dateYenyewe];

  if (
      dateYenyewe >= 0 &&
      dateYenyewe <= 6 &&
      birthMonth <= 11 &&
      birthYear >= 1000
  ) {
      //logic
      var gender = prompt("Enter your gender M/F: ").toUpperCase(); //changes into upper case

      if (
          gender === "M" ||
          gender === "F" ||
          gender === "MALE" ||
          gender === "FEMALE"
      ) {
          if (gender === "M") {

              document.getElementById('myFeedback').innerHTML = 'Your Akan name is' + genderMale;


              // alert("your Akan name is" + genderMale);
          } else {

              document.getElementById('myFeedback').innerHTML = 'Your Akan name is' + genderFemale;
              // alert("your Akan name is" + genderFemale);
          }
      } else {
          alert("Invalid gender use F/M");
      }
  }
  else {
      alert("wrong date format please use YYYY-MM-DD\nexample 2022-10-08");
  }
}
