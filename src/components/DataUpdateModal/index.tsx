import Modal from "react-modal";
import { InputField } from "../InputField";
import { useModal } from "../../hooks/FormModalContext";

import { IoCloseOutline } from "react-icons/io5";
import { Content, FooterModal, HeaderModal } from "./styles";

Modal.setAppElement("#__next");
export function DataUpdateModal() {
  const { isModalOpen, handleCloseFormModal } = useModal();

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseFormModal}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <Content>
        <HeaderModal>
          <IoCloseOutline
            className="react-modal-close"
            onClick={handleCloseFormModal}
          />
          <h2>Mudança de nome de usuário</h2>
          <p>Insira um novo nome de usuário e sua senha atual.</p>
        </HeaderModal>

        <InputField label="NOME DE USUÁRIO" defaultValue="NatanT" />
        <InputField label="SENHA ATUAL" />

        <FooterModal>
          <button>Cancelar</button>
          <button>Pronto</button>
        </FooterModal>
      </Content>
    </Modal>
  );
}
