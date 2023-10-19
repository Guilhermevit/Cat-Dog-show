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

export function LoginForm({ handleSubmit }) {
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="E-mail"
          className="sc-eCAqax fDVNNZ"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          className="sc-eCAqax fDVNNZ"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton
        type="submit"
        onClick={(e) => handleSubmit(email, password)}
      >
        Login
      </SubmitButton>

      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Não tem uma conta?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Cadastre-se
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
