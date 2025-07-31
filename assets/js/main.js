let btnMenu = document.getElementById("btn-menu-mobile");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-mobile");

btnMenu.addEventListener("click", () => {
  menu.classList.add("open-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("open-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("open-menu");
});

emailjs.init({
  publicKey: "a3rCVuIyOA_8sRgR2",
});

document
  .getElementById("EnviaEmail")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      mensagem: document.getElementById("mensagem").value,
    };

    const serviceID = "service_3wxba7b";
    const templateID = "template_sxwdqe8";
    const submitButton = document.getElementById("submitButton");

    submitButton.textContent = "Enviando...";

    emailjs
      .send(serviceID, templateID, formData)
      .then(() => {
        Toastify({
          text: "Mensagem enviada com sucesso!",
          duration: 3000,
          style: {
            background: "#00ff08",
            color: "#000000ff",
          },
        }).showToast();

        document.getElementById("EnviaEmail").reset();
      })
      .catch((error) => {
        Toastify({
          text: "Erro ao enviar mensagem",
          duration: 3000,
          style: {
            background: "#dc3545",
            color: "#f4f4f4",
          },
        }).showToast();
      })
      .finally(() => {
        submitButton.textContent = "Enviar";
      });
  });
