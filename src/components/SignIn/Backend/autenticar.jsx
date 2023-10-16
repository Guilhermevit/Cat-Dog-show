import jsonData from "../../../../BancoDeDados.json";

export function login(emailInput, passwordInput, navigate) {
  const user = jsonData.find((u) => u.email === emailInput);

  if (user) {
    if (user.password === passwordInput) {
      navigate("/home");
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  } else {
    alert("Email não encontrado. Tente novamente.");
  }
}
