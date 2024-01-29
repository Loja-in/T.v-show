document.getElementById('watch').addEventListener('click', function() {
        window.open('https://www.hulu.com/series/house-ef39603f-eb90-4248-8237-f6168d7c1be1', '_blank');
    });
    document.getElementById("signup-link").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("container").style.display = "none";
        document.getElementById("sign-up").style.display = "block";
    });
    function displaySearch(){
      document.getElementById("serachBtn").style.display = "none";
      document.getElementById("inputSearch").style.display = "block";

    }
     
    let searchBtn = document.querySelector(".search");
    searchBtn.addEventListener('click', displaySearch);

    let form = document.querySelector('form');
   form.addEventListener('submit', validateForm);
function validateForm(event) {
  event.preventDefault();

  let nameInput = document.querySelector('.name');
  let emailInput = document.querySelector('.email');
  let passwordInput = document.querySelector('.password');
  let confirmPasswordInput = document.querySelector('.confirm-password');

  let isValid = true;

  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    isValid = false;
  }


  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    isValid = false;
  }


  if (passwordInput.value.trim() === '') {
    alert('Please enter a password.');
    isValid = false;
  } else if (passwordInput.value.length < 8) {
    alert('Your password must be at least 8 characters long.');
    isValid = false;
  }


  if (confirmPasswordInput.value.trim() === '') {
    alert('Please confirm your password.');
    isValid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    alert('Your passwords do not match.');
    isValid = false;
  }


  if (isValid) {
    form.submit();
  }
}