document.getElementById("encrypt-button").addEventListener("click", () => {
  const inputText = document.getElementById("input-text").value;
  const outputArea = document.getElementById("output-area");
  const defaultMessage = document.querySelector(".default-message");
  const outputMessage = document.querySelector(".output-message");

  if (inputText) {
    const encryptedText = btoa(inputText);
    defaultMessage.style.display = "none";
    outputMessage.style.display = "block";
    outputMessage.textContent = encryptedText;
  } else {
    defaultMessage.style.display = "block";
    outputMessage.style.display = "none";
  }
});

document.getElementById("decrypt-button").addEventListener("click", () => {
  const inputText = document.getElementById("input-text").value;
  const outputArea = document.getElementById("output-area");
  const defaultMessage = document.querySelector(".default-message");
  const outputMessage = document.querySelector(".output-message");

  if (inputText) {
    try {
      const decryptedText = atob(inputText);
      defaultMessage.style.display = "none";
      outputMessage.style.display = "block";
      outputMessage.textContent = decryptedText;
    } catch (error) {
      alert("Texto inválido para descriptografar.");
    }
  } else {
    defaultMessage.style.display = "block";
    outputMessage.style.display = "none";
  }
});

document.getElementById("input-text").addEventListener("input", () => {
  const inputText = document.getElementById("input-text").value;
  const defaultMessage = document.querySelector(".default-message");
  const outputMessage = document.querySelector(".output-message");

  if (inputText === "") {
    defaultMessage.style.display = "block";
    outputMessage.style.display = "none";
  } else {
    defaultMessage.style.display = "none";
    outputMessage.style.display = "block";
  }
});
