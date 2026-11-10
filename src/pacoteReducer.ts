import type { PacoteType } from "./types";

export type AcaoPacote = AcaoPacoteExcluir | AcaoPacoteRepetir | AcaoPacotePeso;

export type AcaoPacoteExcluir = {
    type: "excluir",
    id: string
}

export type AcaoPacoteRepetir = {
    type: "repetir",
    id: string,
    dimensao: string
}

export type AcaoPacotePeso = {
    type: "peso",
    id: string,
    valor: number
}

export default function pacoteReducer(state: Array<PacoteType>, action: AcaoPacote): Array<PacoteType> {
    console.log(action);
        switch (action.type) {
        case "excluir":
            return state.filter(p => p.id !== action.id);
        case "repetir":
            return acaoRepetir(state, action);
        case "peso":
            return acaoPeso(state, action);
         default:
            return state;
    }

}

function acaoRepetir(state: Array<PacoteType>, action: AcaoPacoteRepetir) {
    if (action.dimensao === "altura") {
        return state.map(p => {
            if (p.id === action.id) {
                return { ...p, profundidade: p.altura, largura: p.altura }
            } else return p
        }
        );
    }
}

function acaoPeso(state: Array<PacoteType>, action: AcaoPacotePeso) {
    return state.map(p => {
        if (p.id === action.id) {
            return { ...p, peso: p.peso + action.valor }
        } else return p
    }
    );
}