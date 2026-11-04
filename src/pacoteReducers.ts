import type { PacoteType } from "./types";

export type AcaoPacote = AcaoPacoteExcluir | AcaoPacoteRepetir;

export type AcaoPacoteExcluir = {
    type: "excluir",
    id: string
}

export type AcaoPacoteRepetir = {
    type: "repetir",
    id: string,
    dimensao: string
}

export default function pacoteReducer(state: Array<PacoteType>, action: AcaoPacote): Array<PacoteType> {
    console.log(action);
        switch (action.type) {
        case "excluir":
            return state.filter(p => p.id !== action.id);
        case "repetir":
            if (action.dimensao === "altura") {
                return state.map(p => {
                    if (p.id === action.id) {
                        return { ...p, profundidade: p.altura, largura: p.altura }
                    } else return p
                }
                );
            }
            break;
        default:
            return state;
    }
}