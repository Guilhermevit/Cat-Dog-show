import axios from "axios";
import jsonData from "../../../../BancoDeDados.json";

export function registrar(name, email, password) {
  const users = jsonData;

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    alert("O email já está sendo usado. Escolha outro.");
  } else {
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
    };

    users.push(newUser);

    axios
      .put("http://localhost:3000/update", users)
      .then(() => {
        alert("Registro bem-sucedido!");
      })
      .catch((error) => {
        console.error("Erro ao registrar: " + error);
      });
  }
}
