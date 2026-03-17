import axios from "axios";
import { 
    NewsApiEverythingRequest, 
    NewsApiEverythingResponse, 
    Noticia 
} from "../interfaces/newsapi.interface.js";

export class NewsApiService {
    /** Endpoints */
    everythingEndpoint: string;

    constructor() {
        this.everythingEndpoint = `${process.env.NEWSAPI_ENDPOINT}everything`;
    }

    async newsApiEverything(NewsApiEverythingRequest: NewsApiEverythingRequest): Promise<Noticia[]> {
        try {
            const pesquisas = await axios.get(this.everythingEndpoint, {
                params: {
                    apiKey: process.env.NEWSAPI_APIKEY,
                    q: NewsApiEverythingRequest.assunto,
                    from: NewsApiEverythingRequest.de,
                    to: NewsApiEverythingRequest.para,
                    pageSize: 10
                }            
            });

            const noticias: Noticia[] = (pesquisas.data as NewsApiEverythingResponse).articles
            .map(pesquisa => ({
                titulo: pesquisa.title,
                descricao: pesquisa.description,
                url: pesquisa.url
            }));

            return noticias;
            
        } catch (error) {
            throw error;
        }
    }
}