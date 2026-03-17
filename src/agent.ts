import { FunctionTool, LlmAgent } from "@google/adk";
import { instrucoes } from "./prompts/clarice.js";
import { config } from "./config/config.js";
import {z} from 'zod';
import { pesquisarLivreTool } from "./tools/function-tools.js";

export const agenteClarice = new LlmAgent({
    model: config.agenteConfiguracoes.model,
    name: config.agenteNome,
    instruction: instrucoes,
    tools: [
        pesquisarLivreTool
    ]
});