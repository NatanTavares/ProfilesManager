import { signOut, useSession } from "next-auth/client";
import {
  ButtonProfile,
  Container,
  FieldContainer,
  Footer,
  FriendZone,
} from "../../styles/pages/profile";

export default function Profile() {
  const [session, loading] = useSession();

  return (
    <Container>
      <FriendZone>
        <div className="search-bar">
          <input
            type="text"
            name="search-friend"
            id="search-friend"
            placeholder="Encontre um amigo"
          />
        </div>

        <ul className="friends">
          <h4>Meus amigos</h4>
          <li>
            <img src={session?.user.image || "#"} alt={session.user.name || "NatanT"} />
            <div>
              <strong>{session?.user.name || "NatanT"}</strong>
              <span>
                Jogando Visual Studio Code Jogando Visual Jogando Visual
              </span>
            </div>
          </li>
          <li>
            <img src={session?.user.image || "#"} alt="Gitano" />
            <div>
              <strong>Gitano</strong>
            </div>
          </li>
        </ul>

        <div className="aside-footer">
          <button onClick={(): Promise<void> => signOut()}>Sign out</button>
        </div>
      </FriendZone>

      <main>
        <h1>Meu perfil</h1>
        <div className="profile-container">
          <div className="header">
            <div>
              <img
                src={session?.user.image || "#"}
                alt={session?.user.name || "#"}
              />
              <h2>{session?.user.name || "NatanT"}</h2>
              <span>#2651</span>
            </div>
            <ButtonProfile>Enviar avatar</ButtonProfile>
          </div>

          <div className="details">
            <FieldContainer>
              <label htmlFor="username">
                <span>NOME DE USUÁRIO</span>
                <p>{session?.user.name || "NatanT"}#2651</p>
              </label>

              <ButtonProfile id="username">Editar</ButtonProfile>
            </FieldContainer>

            <FieldContainer>
              <label htmlFor="email">
                <span>E-MAIL</span>
                <p>
                  *****@gmail.com <span className="blue">Mostrar</span>
                </p>
              </label>

              <ButtonProfile id="email">Editar</ButtonProfile>
            </FieldContainer>

            <FieldContainer>
              <label htmlFor="phone">
                <span>TELEFONE</span>
                <p>Você ainda não adicionou um telefone</p>
              </label>

              <ButtonProfile id="phone">Adicionar</ButtonProfile>
            </FieldContainer>
          </div>
        </div>

        <Footer>
          <span>
            Criado por <a className="blue">Natan T</a>
          </span>
        </Footer>
      </main>
    </Container>
  );
}
