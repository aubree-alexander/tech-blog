const signupFormHandler = async function(event) {
  event.preventDefault();

  //grab username and password that user inputs into form
  const username = document.querySelector('#signup-username');
  const password = document.querySelector('#signup-password');

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

const existingAccount = function(event) {
  event.preventDefault();

  document.location.replace('/login');
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);

//AA - this isn't working. not redirecting to login handlebars partial when clicked.
document.querySelector('#have-account-login').addEventListener('submit', existingAccount);

