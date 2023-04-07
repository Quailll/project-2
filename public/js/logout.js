const logoutBtn = async () => {
  const response = await fetch('/', {
    method: "POST"
    headers: {"Content-Type": "application/json"},
  });
  if(response.ok){
    document.location.replace("/");
  } else {
    alert('Logout Failed');
  }
};

document.querySelector('#logout-link').addEventListener('click', logoutBtn);