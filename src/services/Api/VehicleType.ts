import { FilmType } from "./FilmType";
import { PersonType } from "./PersonType";

export interface VehicleType {
    name:                   string;
    model:                  string;
    manufacturer:           string;
    cost_in_credits:        string;
    length:                 string;
    max_atmosphering_speed: string;
    crew:                   string;
    passengers:             string;
    cargo_capacity:         string;
    consumables:            string;
    vehicle_class:          string;
    pilots:                 PersonType[];
    films:                  FilmType[];
    created:                string;
    edited:                 string;
    url:                    string;
}
