import { createContext, ReactNode, useContext, useState } from "react";
import { DataUpdateModal } from "../components/DataUpdateModal";

interface FormModalContextData {
  isModalOpen: boolean;
  handleOpenFormModal: () => void;
  handleCloseFormModal: () => void;
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
    <FormModalContext.Provider
      value={{ isModalOpen, handleOpenFormModal, handleCloseFormModal }}
    >
      <DataUpdateModal />
      {children}
    </FormModalContext.Provider>
  );
}

export const useModal = (): FormModalContextData =>
  useContext(FormModalContext);
