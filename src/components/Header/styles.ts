import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: .25rem;
    height: 3rem;
    transition: .4s;
    &:hover{
      filter: brightness(.9);
    }
  }

  @media(max-width: 768px){
    flex-wrap: wrap;

    button{
      margin-top: 3rem;
      width: 100%;
    }
  }
`;
