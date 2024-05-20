const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  }
  const formValue = {
    email: email,
    password: password,
  };
  console.log(formValue);
  form.reset();
}
