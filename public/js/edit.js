const shoeId = document.querySelector("input[name='shoe-id']").value;

const editShoe = async (event) =>{
  event.preventDefault(); 
  await fetch(`/api/shoes/${shoeId}`,{
    method: "PUT",
    body: JSON.stringify({
      name, 
      brand, 
      style, 
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  document.location.replace("/home");
};

const deleteBtn = async () => {
  await fetch(`/api/shoes/${shoeId}`, {
    method: 'DELETE'
  });
  document.location.replace('/home')
};



document.querySelector("#name-edit").addEventListener("submit", editShoe);
document.querySelector("#delbtn").addEventListener("click", deleteBtn);