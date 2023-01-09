const fileInput = document.querySelector("#file-input");

const uploadFile = file => {
  console.log("Uploading file...");
  const API_ENDPOINT = "http://localhost:3000/import";
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      window.alert(JSON.parse(request.responseText).message);
      window.location = '/index.html'
    }
  };
  formData.append("file", file);
  request.send(formData);
};

document.querySelector('form').addEventListener("submit", event => {
  const files = fileInput.files;
  uploadFile(files[0]);
  event.preventDefault();
});