import styled from "styled-components"

export const Container = styled.div`
  max-width: 450px;
  padding: 48px;

  display: flex;
  margin: auto;
  background: #f8f8f8;

  border-radius: 20px;
  border: 1px solid black;

  box-shadow: -9px 10px 6px 1px rgba(0, 0, 0, 0.2);

  strong {
    font-size: 1.3rem;
    color: #333333;
    display: inline-block;
    margin-bottom: 16px;
  }

  p {
    font-size: 0.9rem;
    color: #828282;
    margin-bottom: 32px;
  }
`
