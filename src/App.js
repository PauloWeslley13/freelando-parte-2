import { Estilos } from "./componentes/EstilosGlobais/Estilos"
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema"
import { Router } from "./routes/router"

export function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Router />
    </ProvedorTema>
  )

}


