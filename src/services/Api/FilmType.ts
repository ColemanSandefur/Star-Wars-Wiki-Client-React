import { PersonType } from "./PersonType";
import { PlanetType } from "./PlanetType";
import { SpeciesType } from "./SpeciesType";
import { StarshipType } from "./StarshipType";
import { VehicleType } from "./VehicleType";

export interface FilmType {
    title:         string;
    episode_id:    number;
    opening_crawl: string;
    director:      string;
    producer:      string;
    release_date:  string;
    characters:    PersonType[];
    planets:       PlanetType[];
    starships:     StarshipType[];
    vehicles:      VehicleType[];
    species:       SpeciesType[];
    created:       string;
    edited:        string;
    url:           string;
}