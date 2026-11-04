import type { PacoteType } from "./types";

export type AcaoPacoteExcluir = {
    type: string,
    id: string
}

export default function pacoteReducer(state: Array<PacoteType>, action:AcaoPacoteExcluir):Array<PacoteType> {
    switch (action.type) {
        case "excluir":
            return state.filter(p => p.id !== action.id);
        default:
            return state;
    }
}