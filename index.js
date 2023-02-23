const emailInput = document.getElementById("add");
const mailPara = document.querySelector(".mail-para");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email === "" || !regex.test(email)) {
    mailPara.style.display = "block";
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
  } else {
    mailPara.style.display = "none";
    emailInput.style.borderColor = "initial";
  }
});

emailInput.addEventListener("focus", () => {
  mailPara.style.display = "none";
  emailInput.style.borderColor = "initial";
});
