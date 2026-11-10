import { useContext, useState } from "react";
import "./ListagemDePacotes.css";
import Pacote from "./Pacote";
import { PacotesContext } from "./PacoteContext";
import type { OrdernacaoKey } from "./types";

export default function ListagemDePacotes() {
    const pacotes = useContext(PacotesContext);
    const [ordenacao, setOrdenacao] = useState<OrdernacaoKey>("peso");

    function mudaOrdenacao(evento: React.ChangeEvent<HTMLSelectElement>) {
        setOrdenacao(evento.target.value as OrdernacaoKey);
    }

    const pacotesOrdenados = [...pacotes].sort((x, y) => {
        const diff = y[ordenacao] - x[ordenacao];
        if (diff !== 0) return diff;
        return x.id.localeCompare(y.id);
    });

    return (
        <div>
            <div>Ordenar por:
                <select value={ordenacao} onChange={mudaOrdenacao}>
                    <option value="peso">peso</option>
                    <option value="altura">altura</option>
                    <option value="largura">largura</option>
                    <option value="profundidade">profundidade</option>
                </select>
            </div>
            <dl>
                {pacotesOrdenados.map(p => (
                    <Pacote pacote={p} ordenacao={ordenacao} key={p.id} />
                ))}
            </dl>
        </div>
    );
}