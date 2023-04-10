const loginForm = async (event) => {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-login");
  const passwordEl = document.querySelector("#username-password");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/home");
  } else {
    alert("Login Failed");
  }
};

document.querySelector("#login-form").addEventListener("submit", loginForm);

const signupForm = async (event) => {
  event.preventDefault();

  const usernameEl = document.querySelector("#signup-username");
  const passwordEl = document.querySelector("#signup-password");

  //might have to change ('/api/user)
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/home");
  } else {
    alert("Signup Failed");
  }
};

document.querySelector("#signup-form").addEventListener("submit", signupForm);
