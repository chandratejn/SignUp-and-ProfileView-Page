const user = JSON.parse(localStorage.getItem('user'));

if (!user || !user.accessToken) {
  window.location.href = '/index.html';
}

const fullNameEl = document.querySelector('#fullName');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#passwordEl');

fullNameEl.textContent = user.fullName;
emailEl.textContent = user.email;
passwordEl.textContent = user.password;

const logoutBtn = document.querySelector('#logoutBtn');
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('user');
  window.location.href = '/index.html';
});