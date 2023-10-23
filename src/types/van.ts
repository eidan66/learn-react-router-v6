export interface Van {
    id: string;
    description: string;
    imageUrl: string;
    name: string;
    price: number;
    type: string
}

export type LoaderData = {
    vans: Van[]
}