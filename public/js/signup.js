const signupFormHandler = async function(event) {
  event.preventDefault();

  //grab username and password that user inputs into form
  const username = document.querySelector('#username-input-signup');
  const password = document.querySelector('#password-input-signup');

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

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
