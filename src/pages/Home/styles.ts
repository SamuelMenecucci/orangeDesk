import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-areas:
    "nav head"
    "nav  main"
    "nav  main";
  grid-template-rows: 1fr 1fr 4fr;
  grid-template-columns: 1fr 4fr;

  .side {
    grid-area: nav;
    height: 100vh;
    background-color: red;
  }

  .top {
    grid-area: head;
  }

  .content {
    grid-area: main;
  }
`
