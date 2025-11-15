// Selección con javaScript puro
// const formBtn = document.getElementById("form-btn");
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const messageInput = document.getElementById("message");
// const formMessage = document.getElementById("form-message");
// // Navegación con Enter JavaScript puro
// nameInput.addEventListener("keydown", darleEnter(emailInput));
// emailInput.addEventListener("keydown", darleEnter(messageInput));
// messageInput.addEventListener("keydown", darleEnter(formBtn));
// formBtn.addEventListener("focus", (e) => {
//   if (e.key === "Enter") {
//     formBtn.click();
//   }
// });

// Validación del formulario con javaScript puro
// formBtn.addEventListener("click", () => {
//   if (
//     messageInput.value !== "" &&
//     messageInput.value.length >= 2 &&
//     nameInput.value !== "" &&
//     nameInput.value.length >= 3 &&
//     emailInput.value !== "" &&
//     emailInput.value.includes("@")
//   ) {
//     formMessage.innerHTML = `<div class="card border-info m-3 d-block">
//         <div class='card-header bg-info'>Envio exitoso</div>
//         <div class='card-body'>¡Gracias por completar el formulario!</div>
//     </div>`;
//   } else {
//     formMessage.innerHTML = `<div class="card border-warning m-3 d-block">
//         <div class='card-header bg-warning'>Envio erroneo</div>
//         <div class='card-body'>Por favor, complete todos los campos del formulario.</div>
//     </div>`;
//   }
// });

// Funcion de navegación con Enter
function darleEnter(nextInput) {
  return function (e) {
    if (e.key === "Enter") {
      nextInput.focus();
    }
  };
}

// Navegacion con Enter jQuery
$("#name").on("keypress", darleEnter($("#email")));
$("#email").on("keypress", darleEnter($("#message")));
$("#message").on("keypress", darleEnter($("#form-btn")));
$("#form-btn").on("focus", (e) => {
  if (e.key === "Enter") {
    $("#form-btn").click();
  }
});

// Validación del formulario con jQuery
$("#form-btn").on("click", () => {
  if (
    $("#message").val() !== "" &&
    $("#message").val().length >= 2 &&
    $("#name").val() !== "" &&
    $("#name").val().length >= 3 &&
    $("#email").val() !== "" &&
    $("#email").val().includes("@")
  ) {
    $("#form-message").html(`<div class="card border-info m-3 d-block">
        <div class='card-header bg-info'>Envio exitoso</div>
        <div class='card-body'>¡Gracias por completar el formulario!</div>
    </div>`);
  } else {
    $("#form-message").html(`<div class="card border-warning m-3 d-block">
        <div class='card-header bg-warning'>Envio erroneo</div>
        <div class='card-body'>Por favor, complete todos los campos del formulario.</div>
    </div>`);
  }
});

// Scroll suave para navegación con jQuery
// Selecciona enlaces que inician con #
// $('a[href^="#"]').on("click", function (event) {
//   //añade listener de click
//   event.preventDefault(); // Importante para que no salte inmediatamente
//   let destino = $(this).attr("href"); // Obtiene el destino del enlace
//   let alturaNavbar = $(".navbar").outerHeight(); // obtiene la altura de la navbar
//   // Animación de scroll suave
//   $("html, body").animate(
//     {
//       scrollTop: $(destino).offset().top - alturaNavbar, // lleva a la posición del destino pero debajo del navbar
//     },
//     "slow" // animación lenta
//   );
//   // Cierra la navbar en celulares
//   $("#navbarNavDropdown").collapse("hide"); // ¡no mover! genera problemas con el dropdown
// });
