import { useContext, useState } from "react";
import "./ListagemDePacotes.css";
import Pacote from "./Pacote";
import { PacotesContext } from "./PacoteContext";

export default function ListagemDePacotes() {
    const pacotes = useContext(PacotesContext);
    type OrdernacaoKey = "peso" | "altura" | "largura" | "profundidade";
    const [ordenacao, setOrdenacao] = useState<OrdernacaoKey>("peso");
    
    function mudaOrdenacao(evento: React.ChangeEvent<HTMLSelectElement>) {
        setOrdenacao(evento.target.value as OrdernacaoKey);
    }

    return (
        <div>
            <div>Ordenar por: {ordenacao}
                <select onChange={mudaOrdenacao}>
                    <option value="peso">peso</option>
                    <option value="altura">altura</option>
                    <option value="largura">largura</option>
                    <option value="profundidade">profundidade</option>
                </select>
            </div>
            <dl>
                {pacotes
                    .sort((x, y) => y[ordenacao] - x[ordenacao])
                    .map(p => (
                        <Pacote pacote={p} key={p.id} />
                    ))}
            </dl>
        </div>
    )
}