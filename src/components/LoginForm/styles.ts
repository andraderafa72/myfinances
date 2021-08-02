import { darken } from "polished";
import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 30rem;
  min-width: 320px;
  padding:3rem 2rem;
  border-radius: .25rem;
  background: var(--shape);
  box-shadow: 0px 12px 24px rgba(0,0,0, .16);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: -5rem;

  .loading{
    width: 100%;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .loading-line{
      border: 5px solid var(--background);
      border-top-color: var(--purple);
      animation: rotateLoading 1.5s infinite ease;
      width: 10rem;
      height: 10rem;
      border-radius: 100%;
    }
  }

  @keyframes rotateLoading{
    to{transform: rotate(360deg)}
  }

  input{
    width: 100%;
    padding: 0 1rem;
    height: 4rem;
    border-radius: .25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &:focus{
      border: 1px solid ${darken(1.1, '#d7d7d7')};
    }

    &::placeholder{
      color: var(--text-body);
    }

    & + input{
      margin-top: 1rem;
    }
  }

  h2{
    font-weight: 400;
    font-size: 2.25rem;
    color: var(--text-title);
  }

  span{
    color: var(--text-body);
    margin-bottom: 2rem;
  }

  p{
    color: var(--text-body);
    margin-top: 3rem;
  }

  button{
    width: 100%;
    height: 4rem;
    font-size: 1.125rem;
    color: #FFF;
    background: var(--blue);
    border: 0;
    cursor: pointer;
    margin-top: 2rem;
    border-radius: .25rem;
    transition: .4s;

    &:hover{
      background: ${darken(0.1, '#5429CC')};
    }
  }
`;
