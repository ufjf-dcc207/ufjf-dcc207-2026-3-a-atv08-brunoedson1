import { createContext } from "react";
import type { PacoteType } from "./types";
import type { AcaoPacote } from "./pacoteReducer";

export const PacotesContext = createContext<Array<PacoteType>>([]);
export const PacotesDispacherContext = createContext<React.Dispatch<AcaoPacote>|null>(null);