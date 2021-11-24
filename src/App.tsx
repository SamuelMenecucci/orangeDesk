import { Home } from "./pages/Home"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter, Route, Switch } from "react-router-dom"

export function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>

      <GlobalStyle />
    </>
  )
}
