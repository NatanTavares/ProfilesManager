import { signIn } from "next-auth/client";

import { Container } from "./styles";

export default function SignIn() {
  return (
    <>
      <Container>
        <img src="/assets/discord-logo.svg" alt="Discord" />
        <button onClick={() => signIn()}>ENTRAR</button>
      </Container>
    </>
  );
}
