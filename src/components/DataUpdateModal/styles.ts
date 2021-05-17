import styled from "styled-components";

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 1.5rem 0;
  border-radius: 0.25rem 0.25rem 0 0;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.875rem;

    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: normal;
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    font-size: 2rem;

    border: 0;
    background: transparent;

    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const FooterModal = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 3.75rem;
  max-height: 60px;
  padding: 0.625rem 1rem;

  border-radius: 0 0 0.5rem 0.5rem;
  background: var(--background-dark);

  button {
    width: 96px;
    height: 38px;

    font-size: 0.875rem;
    font-weight: 600;

    border-radius: 0.25rem;
    background: none;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    & + button {
      margin-left: 0.5rem;
      background: var(--blue);
    }
  }
`;
