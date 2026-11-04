import "./Pacote.css"
import type { PacoteType } from "./types";
import type { AcaoPacoteExcluir } from "./pacoteReducers";

type PacoteProps = {
    pacote: PacoteType;
    dispacher: React.ActionDispatch<[action: AcaoPacoteExcluir]>;
}


export default function Pacote({pacote, dispacher}: PacoteProps) {    
    return (
        <div className='pacote'>
            <dt>id</dt>
            <dd title={pacote.id}>{pacote.id.substring(0,8)}</dd>
            <dt>Largura (cm)</dt>
            <dd>{pacote.largura}</dd>
            <dt>Altura</dt>
            <dd>{pacote.altura}</dd>
            <dt>Profundidade</dt>
            <dd>{pacote.profundidade}</dd>
            <dt>Peso (kg)</dt>
            <dd>{pacote.peso}</dd>
            <dt>Cubagem (cm³)</dt>
            <dd>{400*pacote.altura/100*pacote.largura/100*pacote.profundidade/100}</dd>
            <dd>
                <button onClick={() => dispacher({ type: "excluir", id:pacote.id })}>Excluir</button>
            </dd>
        </div>
    )
}