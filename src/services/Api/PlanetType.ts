import { FilmType } from "./FilmType";
import { PersonType } from "./PersonType";

export interface PlanetType {
    name:            string;
    rotation_period: string;
    orbital_period:  string;
    diameter:        string;
    climate:         string;
    gravity:         string;
    terrain:         string;
    surface_water:   string;
    population:      string;
    residents:       PersonType[];
    films:           FilmType[];
    created:         string;
    edited:          string;
    url:             string;
}