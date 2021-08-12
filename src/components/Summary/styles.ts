import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  overflow-x: auto;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-button,
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-track-piece,
  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-corner,
  &::-webkit-resizer{
    display: none;
    opacity: 0;
  }

  div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: .25rem;
    color: var(--text-title);

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong{
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background{
      background: var(--green);
      color: #fff;
    }
    &.highlight-background-red{
      background: var(--red);
      color: #fff;
    }
    
  }
  @media(max-width: 767px){
    gap: 1rem;
    position: relative;

    div{
      min-width: 265px;
    }

  }

`
