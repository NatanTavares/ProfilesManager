import axios from "axios";
import { GetServerSideProps } from "next";
import { signOut, useSession } from "next-auth/client";
import { useEffect } from "react";
import { useModal } from "../hooks/FormModalContext";
import { api } from "../services/api";
import {
  ButtonProfile,
  Container,
  FieldContainer,
  Footer,
  FriendZone,
} from "../styles/pages/profile";

const DEFAULT_AVATAR_URL = "http://i.imgur.com/EroY8Ii.png";

export default function Profile() {
  const [session, loading] = useSession();
  const { handleOpenFormModal } = useModal();

  return loading ? (
    <div className="">
      <h1>Olá</h1>
    </div>
  ) : (
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
          {/* <li>
            <img src={session?.user.image} alt={session?.user.name} />
            <div>
              <strong>{session?.user.name}</strong>
              <span></span>
            </div>
          </li> */}
          <li>
            <img
              src={"https://cdn.discordapp.com/embed/avatars/1.png"}
              alt="NatanT"
            />
            <div>
              <strong>NatanT</strong>
              <span>Jogando Visual Studio Code</span>
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
                src={session?.user.image || DEFAULT_AVATAR_URL}
                alt={session?.user.name}
              />
              <h2>{session?.user.name}</h2>
              {/* <span>#2651</span> */}
            </div>
            <ButtonProfile>
              Enviar avatar
              <label className="custom-file-upload">
                <input type="file" />
              </label>
            </ButtonProfile>
          </div>

          <div className="details">
            <FieldContainer>
              <label>
                <span>NOME DE USUÁRIO</span>
                <p>{session?.user.name}</p>
              </label>

              <ButtonProfile onClick={() => handleOpenFormModal(0)}>
                Editar
              </ButtonProfile>
            </FieldContainer>

            <FieldContainer>
              <label>
                <span>E-MAIL</span>
                <p>
                  {session.user.email}
                  {/* <span className="blue">Mostrar</span> */}
                </p>
              </label>

              <ButtonProfile onClick={() => handleOpenFormModal(1)}>
                Editar
              </ButtonProfile>
            </FieldContainer>

            <FieldContainer>
              <label>
                <span>TELEFONE</span>
                <p>Você ainda não adicionou um telefone</p>
              </label>

              <ButtonProfile onClick={() => console.log("Open modal")}>
                Adicionar
              </ButtonProfile>
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
