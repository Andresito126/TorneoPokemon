export interface Tournament {
    id_tournament?: number;
    name: string;
    start_date: Date;
    end_date?: Date;
    status: 'ongoing' | 'completed';
}
