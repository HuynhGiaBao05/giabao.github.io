
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
      alert('Please fill out all fields.');
      return;
  }

  alert('Login Successful!');
  
      setTimeout(() => {
  window.location.href = 'profile.html';
}, 1000);
});

document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  if (!name || !email || !password) {
      alert('Please fill out all fields.');
      return;
  }

  if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
  }

  alert('Registration Successful!');
});

document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Form submitted successfully!');
  });
});

