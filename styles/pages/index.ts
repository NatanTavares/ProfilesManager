import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  img {
    margin-bottom: 1rem;
  }

  button {
    width: 11rem;
    height: 2.375rem;

    border-radius: 0.25rem;
    background: var(--blue);

    font-size: 1rem;
    font-weight: 700;
    color: var(--white);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
