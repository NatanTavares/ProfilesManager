import Modal from "react-modal";
import { InputField } from "../InputField";
import { useModal } from "../../hooks/FormModalContext";

import { IoCloseOutline } from "react-icons/io5";
import { Content, FooterModal, HeaderModal } from "./styles";

import DataScope from "./ModalData.json";

interface DataUpdateModalProps {
  scope: number;
}

Modal.setAppElement("#__next");
export function DataUpdateModal({ scope }: DataUpdateModalProps) {
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
          <h2>{DataScope[scope].title}</h2>
          <p>{DataScope[scope].subtitle}</p>
        </HeaderModal>

        {DataScope[scope].inputs.map((input, index) => (
          <InputField
            key={index}
            label={input.label}
            defaultValue={input?.defaultValue}
          />
        ))}

        <FooterModal>
          <button type="button" onClick={handleCloseFormModal}>
            Cancelar
          </button>
          <button type="button" onClick={(e) => console.log(e)}>
            Pronto
          </button>
        </FooterModal>
      </Content>
    </Modal>
  );
}
