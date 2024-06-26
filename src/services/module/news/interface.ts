export interface IListAllNewsResponse {
    headline: INewsResponse;
    illustrated_news: INewsResponse[];
}

export interface INewsResponse {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    image: string | null;
    content: string;
    topic: 'education' | 'diversity' | 'economy'
}