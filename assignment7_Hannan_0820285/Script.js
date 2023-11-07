// Initialize Swiper 
var swiper = new Swiper('.swiper-container', {
    // Swiper options
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Validate.js constraints for Payment Information
  var constraints = {
    creditCard: {
      presence: true,
      format: {
        pattern: "\\d{10}",
        message: "must be a 10 digit number"
      }
    },
    cvv: {
      presence: true,
      format: {
        pattern: "\\d{3}",
        message: "must be a 3 digit number"
      }
    }
  };

  // Function to validate the form with Validate.js
  function validatePaymentForm() {
    var form = document.getElementById('paymentInfoForm');
    var formValues = {
      creditCard: form.querySelector('[name="creditCard"]').value,
      cvv: form.querySelector('[name="cvv"]').value
    };

    var errors = validate(formValues, constraints);

    // If there are errors, show them on the form
    if (errors) {
      // Example: Show error message next to the first error field
      var errorField = Object.keys(errors)[0];
      var input = form.querySelector('[name="' + errorField + '"]');
      input.setCustomValidity(errors[errorField]);
      input.reportValidity();
      return false;
    }

    return true;
  }

  // Submit event listener for payment info form
  document.getElementById('paymentInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validatePaymentForm()) {
      // Proceed with form submission or swiping to the next slide
      console.log('Payment Information is valid');
      // swiper.slideNext();
    }
  });

  // Reset custom validity on input to clear error messages
  document.querySelectorAll('#paymentInfoForm input').forEach(input => {
    input.oninput = function() {
      input.setCustomValidity('');
    };
  });

  
  