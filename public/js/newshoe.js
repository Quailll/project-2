// let fileUrls = "";
// console.log(fileUrls);

// const uploader = Uploader({
//   apiKey: "public_W142hmh9BJhNo99rBLLRGnrAMbQ2",
// });
// uploader.open({ maxFileCount: 1 }).then(
//   (files) => {
//     const fileUrls = files.map((x) => x.fileUrl).join("\n");
//     const success =
//       fileUrls.length === 0
//         ? "No file selected."
//         : `File uploaded:\n\n${fileUrls}`;
//     alert(success);
//   },
//   (error) => {
//     alert(error);
//   }
// );

const newShoe = async (event) => {
  event.preventDefault();

  const nameEl = document.querySelector("#shoe-name");
  const brandEl = document.querySelector("#shoe-brand");
  const styleEl = document.querySelector("#shoe-style");

  const response = await fetch("/api/shoes", {
    method: "POST",
    body: JSON.stringify({
      name: nameEl.value,
      brand: brandEl.value,
      style: styleEl.value,
      // image: fileUrls,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/home");
  } else {
    alert("Post failed");
  }
};

document.querySelector("#new-shoe").addEventListener("submit", newShoe);
