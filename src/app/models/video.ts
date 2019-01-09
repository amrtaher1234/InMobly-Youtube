export class Video {
    details: IVideoDetail;
    id: IVideoId;
    snippet: IVideoSnippet;
}

export interface IVideoDetail {
    rating: number;
    favorite: boolean;
}
interface IVideoId {
    videId: string;
    kind: string;
}

interface IVideoSnippet {
    title: string;
    publishedAt: Date;
    description: string;
    thumbnails: any;
}
