import { FunctionTool } from "@google/adk";
import {
    pesquisarLivre 
} from "./newsapi.js";

import { z } from "zod";

const pesquisarLivreInput = z.object({
    assunto: z.string().describe("Sujeito a ser pesquisado"),
    de: z.string().describe("Inicio do período da pesquisa (range)"),
    para: z.string().describe("Fim do período da pesquisa (range)")
});

export const pesquisarLivreTool = new FunctionTool({
    name: 'pesquisarLivre',
    description: 'Faz uma pesquisa livre sobre algum assunto e período específicos',
    parameters: pesquisarLivreInput,
    execute: async(params) => {
        const noticias = await pesquisarLivre(params);
        return { noticias };
    }
});
