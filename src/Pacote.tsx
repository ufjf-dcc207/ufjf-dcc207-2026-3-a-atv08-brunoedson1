import "./Pacote.css";
import type { PacoteType, OrdernacaoKey } from "./types";
import { useContext } from "react";
import { PacotesDispacherContext } from "./PacoteContext";

type PacoteProps = {
    pacote: PacoteType;
    ordenacao: OrdernacaoKey;
};

export default function Pacote({ pacote, ordenacao }: PacoteProps) {
    const dispacher = useContext(PacotesDispacherContext)!;

    const campos = [
        { chave: "largura", rotulo: "Largura (cm)", valor: pacote.largura.toString() },
        { chave: "altura", rotulo: "Altura (cm)", valor: pacote.altura.toString() },
        { chave: "profundidade", rotulo: "Profundidade (cm)", valor: pacote.profundidade.toString() },
        { chave: "peso", rotulo: "Peso (kg)", valor: pacote.peso.toFixed(2) },
    ] as const;

    // O campo escolhido vai para o topo; os demais mantêm a ordem original
    const camposOrdenados = [...campos].sort(
        (a, b) => Number(b.chave === ordenacao) - Number(a.chave === ordenacao)
    );

    const volumeM3 = (pacote.altura / 100) * (pacote.largura / 100) * (pacote.profundidade / 100);
    const cubagem = (volumeM3 * 400).toFixed(2);

    return (
        <div className="pacote">
            <div className="campo">
                <dt>id</dt>
                <dd title={pacote.id}>{pacote.id.substring(0, 8)}</dd>
            </div>

            {camposOrdenados.map(c => (
                <div
                    key={c.chave}
                    className={`campo ${c.chave === ordenacao ? "destaque" : ""}`}
                >
                    <dt>{c.rotulo}</dt>
                    <dd>{c.valor}</dd>
                </div>
            ))}

            <div className="campo">
                <dt>Cubagem (cm³)</dt>
                <dd>{cubagem}</dd>
            </div>

            <div className="acoes">
                <button onClick={() => dispacher({ type: "excluir", id: pacote.id })}>Excluir</button>
                <button onClick={() => dispacher({ type: "repetir", id: pacote.id, dimensao: "altura" })}>Repetir Altura</button>
                <button onClick={() => dispacher({ type: "peso", id: pacote.id, valor: 1.0 })}>+ Peso</button>
                <button onClick={() => dispacher({ type: "peso", id: pacote.id, valor: -1.0 })}>- Peso</button>
            </div>
        </div>
    );
}