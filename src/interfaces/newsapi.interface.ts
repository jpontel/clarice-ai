export interface Noticia {
    titulo: string;
    descricao: string;
    url: string;
}

export interface recuperarPesquisaLivre {

}

export interface pesquisaLivreRecuperada {

}

export interface NewsApiEverythingResponse {
    status: 'ok' | 'error';
    totalResults: number;
    articles: NewsApiArticle[];
}

export interface NewsApiEverythingRequest {
    assunto: string;
    de: string;
    para: string;
}

interface NewsApiArticle {
    source: { id: string | null; name: string; };
    author: string;
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    content: string;
}