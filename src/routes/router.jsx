import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBase from "../layout/LayoutCadastro";
import Layout from "../layout/Layout";
import Interesses from "../paginas/interesses/Interesses";
import DadosPessoais from "../paginas/dados-pessoais/DadosPessoais";
import Concluido from "../paginas/concluido/Concluido";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: 'cadastro',
          element: <LayoutBase />,
          children: [
            { path: '', element:  <SelecaoCliente /> },
            { path: 'interesses', element:  <Interesses /> },
            { path: 'dados-pessoais', element: <DadosPessoais /> },
            { path: 'concluido', element: <Concluido /> },
          ]
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

