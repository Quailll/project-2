//import { Upload } from "upload-js";



const upload = Upload({ apiKey: "public_W142hmh9BJhNo99rBLLRGnrAMbQ2" })


async function onFileSelected(event) {
  const [file] = event.target.files;
  const { fileUrl } = await upload.uploadFile(
    file,
    {
      onBegin: ({ cancel }) => console.log("File upload started!"),
      onProgress: ({ progress }) => console.log(`File uploading... ${progress}%`)
    }
  );
  console.log(`File uploaded! ${fileUrl}`);
  window.fileUrl = fileUrl; // global scope window
}


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
      img_url: window.fileUrl
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
