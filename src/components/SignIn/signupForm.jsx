import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "./marginer";
import { AccountContext } from "./accountContext";

export function SignupForm({ handleSubmit }) {
  const { switchToSignin } = useContext(AccountContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Nome Completo"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton
        type="button"
        onClick={() => handleSubmit(name, email, password)}
      >
        Cadastre-se
      </SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Já é cadastrado?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Faça o Login
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
