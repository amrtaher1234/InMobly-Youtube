export class Video {
    img: string;
    title: string;
    date: Date;
    details: VideoDetail;
}

export interface VideoDetail {
    likes: number;
    dislikes: number;
    rating?: number;
    duration: string;
    views: number;
    description: string;
}
