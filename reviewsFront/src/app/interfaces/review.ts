import { Anime } from "./anime";
import { User } from "./user";

export interface Review {
    id : number;
    u_id : number;
    a_id : number;
    title : string;
    body : string;
    created_at : string;
    updated_at : string;
    anime : Anime;
    user : User;
    
}
