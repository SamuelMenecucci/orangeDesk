import { Card } from "../../components/Card"
import { Header } from "../../components/Header/index"
import { SideBar } from "../../components/SideBar/index"
import { Container } from "./styles"

export function Home() {
  return (
    <Container>
      <div className="side">
        <SideBar />
      </div>
      <div className="top">
        <Header />
      </div>

      <div className="content">
        <Card />
      </div>
    </Container>
  )
}
