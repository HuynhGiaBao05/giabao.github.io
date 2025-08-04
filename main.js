// ======================= Swiper cho slider =======================
document.addEventListener('DOMContentLoaded', function () {
  const homeSwiper = document.querySelector('.home');
  if (homeSwiper) {
    new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // ======================= Toggle Menu =======================
  const menu = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menu && navbar) {
    menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    window.onscroll = () => {
      menu.classList.remove('bx-x');
      navbar.classList.remove('active');
    };
  }

  // ======================= Form Đăng Nhập =======================
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
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
  }

  // ======================= Form Đăng Ký =======================
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
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
  }

  // ======================= Form Liên hệ =======================
  document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Form submitted successfully!');
    });
  });
});

// ======================= Modal Thanh Toán =======================
function openPaymentModal() {
  const modal = document.getElementById('payment-modal');
  if (modal) modal.style.display = 'flex';
}

function closePaymentModal() {
  const modal = document.getElementById('payment-modal');
  if (modal) modal.style.display = 'none';
}

function confirmPayment() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert("⚠️ Giỏ hàng trống!");
    closePaymentModal();
    return;
  }

  localStorage.removeItem('cart');
  alert("🎉 Thanh toán thành công! Cảm ơn bạn đã mua hàng.");
  window.location.href = 'index.html';
}

// Gắn các hàm modal thanh toán vào window để dùng được trong HTML onclick
window.openPaymentModal = openPaymentModal;
window.closePaymentModal = closePaymentModal;
window.confirmPayment = confirmPayment;
