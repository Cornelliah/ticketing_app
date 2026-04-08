export interface Image {
    id: number;
    url: string;
    description: string;
    status: 'active' | 'reported' | 'deleted';
}

export interface Ticket {
    id: number;
    imageId: number;
    reason: string;
    status: 'open' | 'resolved';
    createdAt: string;
}