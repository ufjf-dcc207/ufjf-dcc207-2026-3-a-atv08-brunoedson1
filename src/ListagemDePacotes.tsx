import { useState } from "react";
import "./ListagemDePacotes.css";
import Pacote from "./Pacote";
import type { PacoteType } from "./types";
import type { AcaoPacote } from "./pacoteReducers";

type ListagemDePacotesProps = {
    pacotes: Array<PacoteType>;
    dispacher: React.ActionDispatch<[action: AcaoPacote]>;
}
export default function ListagemDePacotes({ pacotes, dispacher }: ListagemDePacotesProps) {
    const [ordenacao, setOrdenacao] = useState("peso");
    function mudaOrdenacao(evento: React.ChangeEvent<HTMLSelectElement>) {
        setOrdenacao(evento.target.value);
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
                        <Pacote pacote={p} key={p.id} dispacher={dispacher} />
                    ))}
            </dl>
        </div>
    )
}