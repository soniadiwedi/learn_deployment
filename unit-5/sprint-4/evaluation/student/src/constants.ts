export type nomination={
    name:string;
    image:string;
    code:string;
    batch:string;
    vote:number;
    id:number;
}

export interface addstu{
    name:string;
    image:string;
    code:string;
    batch:string;
    vote:number;
    id:number;
    count:(id:number,data:vo)=>void
}

export type vo={
    vote1:number
}