const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const elements = {
    email: e.currentTarget.email.value,
    password: e.currentTarget.password.value.trim(),
  };

  if (elements.email === "" || elements.password === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log(`Email: ${elements.email} \nPassword: ${elements.password}`);
    e.currentTarget.reset();
  }

  //   const { email, password } = e.currentTarget;

  //   if (email.value === "" || password.value === "") {
  //     alert("Please fill in all the fields!");
  //   } else {
  //     console.log(`Email: ${email.value} \nPassword: ${password.value}`);
  //     e.currentTarget.reset();
  //   }
});
