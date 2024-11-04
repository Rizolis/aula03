import { useEffect, useState } from "react";
import ListaProdutos from "../componts/ListaProdutos";
import styles from "../styles/ListaProdutos.module.css";

export default function Home() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const receberListaProdutos = async () => {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        setLista(dados);
      } catch {
        alert("A conexão com a API falhou!");
      }
    };
    receberListaProdutos();
  }, []);

  if(lista.length === 0){
    return <h2>Carregando</h2>
 }


  return (
    <div>
      <h2 className={styles.Home}>Listagem de Produtos</h2>
      <ListaProdutos lista={lista} />
    </div>
  );
}