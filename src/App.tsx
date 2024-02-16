import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ThemeProvider theme={themes.dark}>
      <button onClick={openModal}>Open Modal</button>
      <Modal title="Deposit ATOM" strOk="Transfer" $isOpen={isOpen} onClose={closeModal} />
    </ThemeProvider>
  );
}

export default App;
