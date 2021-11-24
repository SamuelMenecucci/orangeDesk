import styled from "styled-components"

export const Container = styled.div`
  background-color: #2a2962;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 14rem;
    margin-top: 70px;
    margin-bottom: 77px;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    color: #a8a8d0;

    p {
      font-size: 0.8rem;
      display: flex;
      align-items: center;

      > img {
        width: 1.5rem;
        margin-right: 14px;
      }
      & + p {
        margin-top: 23px;
      }
    }
  }
`
