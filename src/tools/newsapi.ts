import { NewsApiEverythingRequest, NewsApiEverythingResponse, Noticia } from "../interfaces/newsapi.interface.js";
import { NewsApiService } from "../services/newsapi.service.js";

const newsApiService = new NewsApiService();

/**
 * Faz uma pesquisa livre de todas as notícias encontradas com base no assunto pesquisado.
 * @param assunto Sujeito a ser pesquisado.
 * @param de Inicio do período da pesquisa (range)
 * @param para Fim do período da pesquisa (range)
 * 
 * @returns Retorna dez noticias sobre um assunto pesquisado dentro de um período específico.
 * 
 * Exemplo: 
 * [INPUT]: Me fale sobre o que as noticias tem falado sobre a Palmirinha na última semana.
 * 
 * params: { assunto: "Palmirinha", de: "2026-01-01", para: "2026-01-08"}
 * 
 * [OUTPUT]:
 * Array<{
 *  titulo: string;
    descricao: string;
    url: string;
 * }>
 */
export async function pesquisarLivre(params: { assunto: string, de: string, para: string }) {
    try {

        const hoje = new Date();
        const limite = new Date();
        limite.setMonth(limite.getMonth() - 1);

        const reqDe = new Date(params.de);
        const reqPara = new Date(params.para);

        const de = (reqDe < limite ? limite : reqDe).toISOString().split("T")[0] ?? "";
        const para = (reqPara > hoje ? hoje : reqPara).toISOString().split("T")[0] ?? "";

        const newsApiRequest: NewsApiEverythingRequest = {
            assunto: params.assunto,
            de: de,
            para: para
        };

        const noticias = await newsApiService.newsApiEverything(newsApiRequest);

        return noticias;
        
    } catch (error) {
        throw error;
    }
}
