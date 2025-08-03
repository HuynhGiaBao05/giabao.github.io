document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const savedEmail = localStorage.getItem('registeredEmail');
  const savedPassword = localStorage.getItem('registeredPassword');
  const savedName = localStorage.getItem('registeredName');

  if (!email || !password) {
    alert('Please fill out all fields.');
    return;
  }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

if (!emailRegex.test(email)) {
  alert('Invalid email format.');
  return;
}

if (!passwordRegex.test(password)) {
  alert('Password must be at least 6 characters long and contain both letters and numbers.');
  return;
}

  if (!savedEmail || !savedPassword) {
    alert('No registered account found. Please register first!');
    return;
  }

  if (email === savedEmail && password === savedPassword) {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', savedName);

    alert('Login Successful!');
    setTimeout(() => {
      window.location.href = 'profile.html';
    }, 1000);
  } else {
    alert('Invalid email or password. Please try again.');
  }

});
document.getElementById('toggle-password').addEventListener('click', function () {
  const passwordInput = document.getElementById('login-password');
  const icon = this.querySelector('i');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.remove('bx-show');
    icon.classList.add('bx-hide');
  } else {
    passwordInput.type = 'password';
    icon.classList.remove('bx-hide');
    icon.classList.add('bx-show');
  }
});
