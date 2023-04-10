
const editShoe = async (event) =>{
  event.preventDefault(); 
  const shoeId = document.querySelector('#name-edit').dataset.id;
  const name = document.querySelector('input[name="shoe-name"]').value;
  const brand = document.querySelector('input[name="shoe-brand"]').value;
  const style = document.querySelector('input[name="shoe-style"]').value;

   const response = await fetch(`/api/shoes/${shoeId}`,{
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
  if (response.ok) {
    document.location.replace("/home");
  } else {
    alert("Update Failed");
  }
};

const deleteBtn = async () => {
  const shoeId = document.querySelector("#name-edit").dataset.id;
  const response = await fetch(`/api/shoes/${shoeId}`, {
    method: 'DELETE'
  });
   if (response.ok) {
     document.location.replace("/home");
   } else {
     alert("Delete Failed");
   }
};



document.querySelector("#name-edit").addEventListener("submit", editShoe);
document.querySelector("#delbtn").addEventListener("click", deleteBtn);