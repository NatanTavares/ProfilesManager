import { createContext, ReactNode, useContext, useState } from "react";
import { DataUpdateModal } from "../components/DataUpdateModal";

interface FormModalContextData {
  isModalOpen: boolean;
  handleOpenFormModal: (scope: number) => void;
  handleCloseFormModal: () => void;
}

interface FormModalProviderProps {
  children: ReactNode;
}

const FormModalContext = createContext({} as FormModalContextData);

export function FormModalProvider({ children }: FormModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scopeId, setScopeId] = useState(0);

  function handleOpenFormModal(scope: number) {
    setScopeId(scope);
    setIsModalOpen(true);
  }

  function handleCloseFormModal() {
    setIsModalOpen(false);
  }

  return (
    <FormModalContext.Provider
      value={{ isModalOpen, handleOpenFormModal, handleCloseFormModal }}
    >
      <DataUpdateModal scope={scopeId} />
      {children}
    </FormModalContext.Provider>
  );
}

export const useModal = (): FormModalContextData =>
  useContext(FormModalContext);
