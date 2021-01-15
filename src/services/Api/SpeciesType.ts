import { FilmType } from "./FilmType";
import { PersonType } from "./PersonType";
import { PlanetType } from "./PlanetType";

export interface SpeciesType {
    name:             string;
    classification:   string;
    designation:      string;
    average_height:   string;
    skin_colors:      string;
    hair_colors:      string;
    eye_colors:       string;
    average_lifespan: string;
    homeworld:        PlanetType;
    language:         string;
    people:           PersonType[];
    films:            FilmType[];
    created:          string;
    edited:           string;
    url:              string;
}
