const form = document.getElementById("form");
const regexEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const regexTelNumber = /^\d{10}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userThel = document.getElementById("userThel").value;
  const userProblem = document.getElementById("userProblem").value;
  const expectedResult = document.getElementById("expectedResult").value;

  if (
    userName.trim() === "" ||
    userEmail.trim() === "" ||
    userThel.trim() === "" ||
    userProblem.trim() === "" ||
    expectedResult.trim() === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingresa los datos correctamente",
      background: "#1c1c1c",
      confirmButtonColor: "#f0483e",
      color: "#fff",
    });
  } else if (!regexEmail.test(userEmail)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor ingresa una dirección de correo valida",
      background: "#1c1c1c",
      confirmButtonColor: "#f0483e",
      color: "#fff",
    });
  } else if (!regexTelNumber.test(userThel)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor ingresa un numero de telefono valido(10 digitos)",
      background: "#1c1c1c",
      confirmButtonColor: "#f0483e",
      color: "#fff",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "¡Muy bien!",
      text: "Datos enviados correctamente",
      background: "#1c1c1c",
      confirmButtonColor: "#f0483e",
      color: "#fff",
    });
    userName.value = "";
    userEmail.value = "";
    userThel.value = "";
    userProblem.value = "";
    expectedResult.value = "";
  }
});
