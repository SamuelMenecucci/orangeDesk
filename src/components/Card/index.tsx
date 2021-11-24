import { Button } from "../Button"
import { Container } from "./styles"

import cardImg from "../../assets/cardImage.png"

export function Card() {
  return (
    <Container>
      <span>
        <strong>Informações sobre COVID-19</strong>
        <p>
          Conheça os protocolos de segurança adotados para um retorno presencial
          seguro.
        </p>

        <Button>Saiba mais</Button>
      </span>

      <img src={cardImg} alt="" />
    </Container>
  )
}
