import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

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

  table{
    width: 100%;
    border-spacing: 0 .5rem;

    th{
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td{
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &:first-child{
        width: 30%;
        color: var(--text-title);
        border-radius: .25rem 0 0 .25rem;
      }

      &.deposit{
        color: var(--green)
      }
      &.withdraw{
        color: var(--red)
      }

      &:last-child{
        border-radius: 0 .25rem .25rem 0;
        padding: 1rem  0;
        display: flex;
        align-items: center;

        img{
          cursor: pointer;
          transition: filter .4s;
          &:hover{
            filter: brightness(.8);
          }
          & + img{
            margin-left: 1rem;
          }
        }
      }
    }
  }
`
