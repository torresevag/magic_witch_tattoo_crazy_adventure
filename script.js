const SEND_FORM_BTN = document.getElementById("send_form_btn");

const dataValidation = () => {
  const name = document.getElementById("firtNameInput");
  const lastName = document.getElementById("lastNameInput");
  const phoneNumber = document.getElementById("phoneNumber");
  const email = document.getElementById("emailAddress");
  const optionalText = document.getElementById("optinal_text_input");

  let customerName = name.value;
  let customerLastName = lastName.value;
  let customerPhoneNumber = phoneNumber.value;
  let customerEmail = email.value;
  let customerText = optionalText.value;

  if (
    !customerName ||
    !customerLastName ||
    !customerPhoneNumber ||
    !customerEmail
  ) {
    alert("All data must be complete");
  }
};

SEND_FORM_BTN.addEventListener("click", (e) => {
  e.preventDefault();
  dataValidation();
});
