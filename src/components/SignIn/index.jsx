import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";
import { login } from "./Backend/autenticar";
import { registrar } from "./Backend/cadastrar";

// Uso de Style-comnponents para estilização da tela de login
const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -290px;
  left: -70px;
  transform: rotate(60deg);
  background: linear-gradient(58deg, #f7d600 20%, rgba(241, 196, 15, 1) 100%);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
`;

const SmallText = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  margin-top: 7px;
  z-index: 10;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

//fim da estilização usando o styles-components

export default function SignIn(props) {
  //uso do UseState para uma transição de um formulario para o outro
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");
  // uso do navigate para apos a validação do usuario navegue para a homePage
  const navigate = useNavigate();

  //Função para envio dos dados de login para validação ao Banco de dados
  const handleSubmit = async (email, password) => {
    login(email, password, navigate);
  };

  //Função para envio dos dados de cadastro para inserção ao Banco de dados
  const handleRegistroSubmit = (name, email, password) => {
    registrar(name, email, password);
  };
  //Funçao de animação de mudança de formulario
  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 750);
  };
  //troca entre sigin e sigup
  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };
  //troca entre sigin e sigup
  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <>
      {/* Logo da soulcode  */}
      <div>
        <img
          src="data:image/png;base64,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"
          alt="SoulCode"
          width="120px"
          height="120px"
        />
      </div>
      {/* Montagm do formulario ou de login ou do cadastro  */}
      <AccountContext.Provider value={contextValue}>
        <BoxContainer>
          <TopContainer>
            <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            {active === "signin" && (
              <HeaderContainer>
                <HeaderText>Bem Vindo</HeaderText>
                <SmallText>Faça o login para continuar!</SmallText>
              </HeaderContainer>
            )}
            {active === "signup" && (
              <HeaderContainer>
                <HeaderText>Crie uma</HeaderText>
                <HeaderText>Conta</HeaderText>
                <SmallText>Faça o login para continuar!</SmallText>
              </HeaderContainer>
            )}
          </TopContainer>
          <InnerContainer>
            {active === "signin" && <LoginForm handleSubmit={handleSubmit} />}
            {active === "signup" && (
              <SignupForm handleSubmit={handleRegistroSubmit} />
            )}
          </InnerContainer>
        </BoxContainer>
      </AccountContext.Provider>
    </>
  );
}
