import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-dark: #2F3136;
    --background: #36393F;
    --background-light: #72767D;
    
    --background-button-gray: #474C53;

    --red: #ED4245;
    --green: #3BA55C;
    --blue: #7289DA;
    --white: #FFFFFF;

    --text-title: #8E9297;
    --text-body: #DCDDDE;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background-dark);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    color: var(--text-body);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    border: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
  }

  .react-modal-content {
    position: relative;
    
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    
    background: var(--background);
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
