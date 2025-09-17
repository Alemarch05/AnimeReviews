import { Genre } from "./genre";
export interface Anime {
    id : number;
    a_tittle : string;
    a_description : string;
    a_image_url : string;
    a_release_year : number;
    a_episodes : number;
    a_status : string;
    a_average_rating : string;
    created_at : string;
    updated_at : string;
    genres : Genre[];
}
