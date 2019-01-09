export interface IQueryShape {
    pageInfo: any;
    nextPageToken: string;
    items: any[];
    previousPageToken?: string;
}

export interface IQueryOption {
    name: string;
    orderType: EOrderType;
}

export enum EOrderType {
    asc = 'asc',
    desc = 'desc'
}
