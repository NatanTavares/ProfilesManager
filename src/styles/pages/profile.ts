import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  main {
    flex: 1;
    display: flex;
    flex-direction: column;

    padding: 3.75rem 5rem;

    background: var(--background);

    h1 {
      font-size: 1.25rem;
      margin: 0 0 1.25rem 0.5rem;
    }

    .profile-container {
      padding: 1rem;

      background: var(--background-dark);
      border-radius: 0.5rem;

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;

        div {
          display: flex;
          align-items: center;

          img {
            width: 80px;
            height: 80px;

            border-radius: 50%;
          }

          h2 {
            margin-left: 1.25rem;

            font-size: 1.25rem;
            font-style: normal;
            line-height: 1.5rem;
          }
        }
      }

      .details {
        padding: 1rem;

        border-radius: 0.5rem;
        background: var(--background);
      }
    }
  }
`;

export const FriendZone = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;
  max-width: 312px;

  .search-bar {
    padding: 0.625rem; // 10px
    border-bottom: 2px solid var(--background);

    input {
      width: 100%;
      height: 1.625rem; // 26px

      border: none;
      border-radius: 0.25rem;

      background: var(--background);
      padding: 6px;

      ::placeholder {
        color: var(--text-body);
      }
    }
  }

  ul {
    flex: 1;
    padding: 1.125rem 1rem;

    list-style: none;
    font-size: 0.875rem;

    h4 {
      margin-bottom: 0.5rem;
    }

    li {
      display: flex;
      padding: 0 0.375rem;

      & + li {
        margin-top: 0.625rem;
      }

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 0 0.875rem;

        strong {
          max-width: 220px;

          font-size: 0.875rem;
          line-height: 1rem;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span {
          max-width: 220px;

          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1rem;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .aside-footer {
    display: flex;
    justify-content: center;

    padding: 0 5.5rem;

    button {
      flex: 1;
      height: 1.875rem;
      background: var(--red);

      font-size: 0.875rem;
      font-weight: bold;
      margin-bottom: 20px;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const ButtonProfile = styled.button`
  position: relative;
  max-height: 32px;
  padding: 5px 8px;

  background: var(--background-button-gray);
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  .custom-file-upload {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    border: none;
    cursor: pointer;

    input[type="file"] {
      display: none;
    }
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + div {
    margin-top: 1.875rem;
  }

  span {
    color: var(--text-title);
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.125rem;

    .blue {
      padding-left: 0.5rem;
      color: var(--blue);
      cursor: pointer;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 20px;

  left: 0;
  right: 0;

  text-align: center;

  text-decoration: none;
  font-size: 0.875rem;

  .blue {
    color: var(--blue);

    font-weight: bold;

    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
