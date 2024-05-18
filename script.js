document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.href = 'book-details.html';
  } else {
      alert('Please fill out all fields');
  }
});

document.getElementById('resetButton').addEventListener('click', function() {
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});