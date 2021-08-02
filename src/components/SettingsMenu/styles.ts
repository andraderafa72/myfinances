import styled from "styled-components";

export const Settings = styled.a`
  display: flex;
  align-items: center;
  justify-content:center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  height: 3rem;
  width: 3rem;
  background: var(--shape);
  color: var(--red);
  box-shadow: 0px 12px 24px rgba(0,0,0, .24);
  border-radius: 2rem;
  text-decoration: none;
  transition: .4s;
  z-index: 9;

  &:hover{
    svg path{
      fill: #FFF;
    }
    background: var(--blue);
  }
`;

interface SettingsMenuProps {
  isFocused: boolean
}

export const SettingsDiv = styled.div<SettingsMenuProps>`
  position: fixed;
  bottom: ${(props) => { return props.isFocused ? '-1rem' : '10rem' }};
  right: ${(props) => { return props.isFocused ? '-1rem' : '10rem' }};
  transition: .4s;
  /* border: 1px solid red; */

  a{
    text-decoration: none;
    background-color: var(--shape);
    border-radius: 1rem;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, .08);
    transition: .4s;
  }

  .logout{
    color: var(--red);
    padding: .75rem 3rem;
    position: fixed;
    bottom: ${(props) => { return props.isFocused ? '-4rem' : '1rem' }};
    right: ${(props) => { return props.isFocused ? '-4rem' : '5.5rem' }};

    &:hover{
      background: var(--red);
      color:#fff;
    }
  }

  .change-password{
    color: var(--purple);
    position: fixed;
    padding: .75rem 1rem;
    bottom: ${(props) => { return props.isFocused ? '-4rem' : '5rem' }};
    right: ${(props) => { return props.isFocused ? '-4rem' : '2.5rem' }};

    &:hover{
      background: var(--purple);
      color:#fff;
    }
  }
`;
