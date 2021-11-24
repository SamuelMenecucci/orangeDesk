import { Container } from "./styles"

import logoImg from "../../assets/orangeDesk.png"
import homeImg from "../../assets/home.png"
import calendarImg from "../../assets/calendar.png"
import covidImg from "../../assets/covid.png"
import configdImg from "../../assets/config.png"

export function SideBar() {
  return (
    <Container>
      <img src={logoImg} alt="" />

      <span>
        <p>
          <img src={homeImg} alt="" />
          DashBoard
        </p>

        <p>
          <img src={calendarImg} alt="" />
          Reservar
        </p>

        <p>
          <img src={covidImg} alt="" />
          COVID-19{" "}
        </p>

        <p>
          <img src={configdImg} alt="" />
          Configurações
        </p>
      </span>
    </Container>
  )
}
