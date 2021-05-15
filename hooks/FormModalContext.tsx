import { createContext, ReactNode, useContext, useState } from "react";
import Modal from "react-modal";

interface FormModalContextData {
  handleOpenFormModal: () => void;
}

interface FormModalProviderProps {
  children: ReactNode;
}

const FormModalContext = createContext({} as FormModalContextData);

export function FormModalProvider({ children }: FormModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenFormModal() {
    setIsModalOpen(true);
  }

  function handleCloseFormModal() {
    setIsModalOpen(false);
  }

  return (
    <FormModalContext.Provider value={{ handleOpenFormModal }}>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseFormModal}>
        <h2>Olá</h2>
      </Modal>

      {children}
    </FormModalContext.Provider>
  );
}

export const useModal = (): FormModalContextData =>
  useContext(FormModalContext);