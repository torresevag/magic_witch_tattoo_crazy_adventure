const SEND_FORM_BTN = document.getElementById("send_form_btn");
const ANCORES = document.querySelectorAll(".my_ancore");
const CONTACT_BTN = document.querySelector(".contact_button_var");

export const showFormDisplay = () => {
  const FORM_VALIDATION = document.querySelector(".form_body");
  let isShow = false;

  if (!isShow) {
    FORM_VALIDATION.style.display = "flex";
    CONTACT_BTN.style.display = "block";
  }
  FORM_VALIDATION.scrollIntoView({ behavior: "smooth" });
};

const dataValidation = () => {
  const NAME = document.getElementById("firtNameInput");
  const LAST_NAME = document.getElementById("lastNameInput");
  const PHONE_NUMBER = document.getElementById("phoneNumber");
  const EMAIL = document.getElementById("emailAddress");
  const OPTIONAL_TEXT = document.getElementById("optinal_text_input");

  let customerName = NAME.value;
  let customerLastName = LAST_NAME.value;
  let customerPhoneNumber = PHONE_NUMBER.value;
  let customerEmail = EMAIL.value;
  let customerText = OPTIONAL_TEXT.value;

  if (
    !customerName ||
    !customerLastName ||
    !customerPhoneNumber ||
    !customerEmail
  ) {
    alert("All data must be complete");
    return false;
  }
  return true;
};

ANCORES.forEach((ancore) => {
  ancore.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(ancore.href, "_blank");
  });
});

SEND_FORM_BTN.addEventListener("click", (e) => {
  if (!dataValidation()) {
    e.preventDefault();
  }
});
