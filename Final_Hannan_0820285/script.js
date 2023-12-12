$(document).ready(function() {
  $('#profileForm').validate({
    rules: {
      // ... other field rules ...
      dob: {
        required: true,
        date: true
      },
      phone: {
        required: true,
        pattern: /^\d{3}-\d{3}-\d{4}$/
      },
      zipcode: {
        required: true,
        pattern: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
      }
    },
    messages: {
      // ... other field messages ...
      dob: {
        required: "Please enter your date of birth",
        date: "Please enter a valid date"
      },
      phone: {
        required: "Please enter your phone number",
        pattern: "Please enter a valid phone number in the format 123-456-7890"
      },
      zipcode: {
        required: "Please enter your zip code",
        pattern: "Please enter a valid Canadian zip code in the format A1A 1A1"
      }
    },
    
  });
});
