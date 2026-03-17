export class AgentModel {
    name: string = 'clarice-ai';
    model: string = process.env.AI_MODEL ?? "gemini-2.5-flash";
}

class Config {
    agenteConfiguracoes: AgentModel = new AgentModel();
    agenteNome: string = "clarice";
}

export const config = new Config();