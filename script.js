const form = document.querySelector('form');
const error = document.querySelector('.error');
const success = document.querySelector('.success');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const fullName = document.querySelector('#Fname').value;
  const email = document.querySelector('#Email').value;
  const password = document.querySelector('#pwd').value;
  const confirmPassword = document.querySelector('#confirmpwd').value;

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    error.textContent = 'Error: Passwords do not match';
    error.style.display = 'block';
    return;
  }
  if (!fullName || !email || !password || !confirmPassword) {
    error.style.display = 'block';
    error.textContent = 'Error: All the fields are mandatory';
    success.style.display = 'none';

  } else {
    const accessToken = generateAccessToken();
    const user = { fullName, email, password, accessToken };
    localStorage.setItem('user', JSON.stringify(user));
    error.style.display = 'none';
    success.textContent = "Successfully Signed Up!"
    success.style.display = 'block';
    setTimeout(() => {
      window.location.href = '/profile.html';
    }, 2000);
  }
});

function generateAccessToken() {
  const accessToken = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 256)
  );
  return btoa(String.fromCharCode(...accessToken));
}









// // handle signup form submission
// const signupForm = document.querySelector('form');
// signupForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const fullname = document.getElementById('Fname').value;
//   const email = document.getElementById('Email').value;
//   const password = document.getElementById('pwd').value;
//   const confirmpassword = document.getElementById('confirmpwd').value;

//   // check if all fields are filled
//   if (fullname && email && password && confirmpassword) {

//     // check if passwords match
//     if (password === confirmpassword) {

//       // generate access token
//       const accessToken = Math.random().toString(36).substring(2, 18);

//       // save user state to local storage
//       const userState = {
//         fullname: fullname,
//         email: email,
//         password: password,
//         accessToken: accessToken
//       };
//       localStorage.setItem('userState', JSON.stringify(userState));

//       // show success message and redirect to profile page
//       const successMessage = document.querySelector('.success');
//       successMessage.style.display = 'block';
//       setTimeout(() => {
//         successMessage.style.display = 'none';
//         window.location.href = '/profile.html';
//       }, 3000);

//     } else {
//       // show error message if passwords don't match
//       const errorMessage = document.querySelector('.error');
//       errorMessage.textContent = 'Error: Passwords do not match';
//       errorMessage.style.display = 'block';
//     }

//   } else {
//     // show error message if any field is empty
//     const errorMessage = document.querySelector('.error');
//     errorMessage.textContent = 'Error: All fields are mandatory';
//     errorMessage.style.display = 'block';
//   }
// });

// // handle logout button click
// const logoutButton = document.querySelector('button[type="submit"]');
// logoutButton.addEventListener('click', function() {
//   // clear local storage and redirect to signup page
//   localStorage.clear();
//   window.location.href = '/index.html';
// });

// // check if user is authenticated and redirect if not
// const isAuthenticated = localStorage.getItem('userState') !== null;
// const currentPage = window.location.href.split('/').pop();
// if ((currentPage === 'profile.html' && !isAuthenticated) ||
//     (currentPage === 'index.html' && isAuthenticated)) {
//   window.location.href = isAuthenticated ? '/profile.html' : '/index.html';
// }
