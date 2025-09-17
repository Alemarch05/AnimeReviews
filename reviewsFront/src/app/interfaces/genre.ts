import { Anime } from "./anime";

export interface Genre {
    id : number;
    g_name : string;
    g_description : string;
    created_at : string;
    updated_at : string;
    animes : Anime[];
}
