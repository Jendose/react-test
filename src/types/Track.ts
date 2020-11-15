export type Track = {
    id: number;
    name: string | null;
    artist: string | null;
    label: string | null;
    platform: string | null;
    genres: string[];
    bpm: number | null;
    key_: string | null;
    daw: string | null;
    duration: number | null;
    price: number | null;
    currency: string | null;
    dateCreated: Date | null;
    dateSold: Date | null;
    status: string | null;
    coverImage: string | null;
    isLiked: boolean;
}