const submitMessage = document.getElementById("chats-input__submit-btn");

function submit(event) {
  event.preventDefault();
  console.log("dd");
  
}

submitMessage.addEventListener("submit", submit);
