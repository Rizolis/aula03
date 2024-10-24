import { useEffect, useState } from "react";

export default function App() {
    const [lista, setLista] = useState([]);

useEffect(() => {
    const receberListaProdutos = async () => {
    try{
        const resposta = await fetch('');
        const dados = await resposta.json();
        setLista(dados);
    } catch{
        alert("A conexao com a API falhou!");
    }
}
 receberListaProdutos();
}, []);

return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        {lista.map(produto => (
          <li key={produto.id}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <p>Preço: ${produto.price}</p>
            <img src={produto.image} alt={produto.title} width={100} />
          </li>
        ))}
      </ul>
    </>
  );
}
