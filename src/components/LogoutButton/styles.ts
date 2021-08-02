import styled from "styled-components";

export const LogoutLink = styled.a`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem 2rem;
  background: var(--shape);
  color: var(--red);
  box-shadow: 0px 12px 24px rgba(0,0,0, .16);
  border-radius: 2rem;
  text-decoration: none;
  transition: .4s;

  &:hover{
    color: #FFF;
    background: var(--red);
  }
`;
