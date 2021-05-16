import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + div {
    margin-top: 1.875rem;
  }

  label {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    width: 90vw;
    max-width: 408px;

    span {
      color: var(--text-title);
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1rem;
    }

    input {
      width: 100%;
      height: 42px;
      padding: 0.875rem;
      margin-top: 0.5rem;

      border: 1px solid #000;
      border-radius: 0.25rem;

      font-size: 0.875rem;
      line-height: 1.125rem;

      background: var(--background-dark);
    }
  }
`;
