import { FilmType } from './FilmType';
import { PlanetType } from './PlanetType';
import { SpeciesType } from './SpeciesType';
import { StarshipType } from './StarshipType';
import { VehicleType } from './VehicleType';

export interface PersonType {
    name:       string;
    height:     string;
    mass:       string;
    hair_color: string;
    skin_color: string;
    eye_color:  string;
    birth_year: string;
    gender:     string;
    homeworld:  PlanetType;
    films:      FilmType[];
    species:    SpeciesType[];
    vehicles:   VehicleType[];
    starships:  StarshipType[];
    created:    string;
    edited:     string;
    url:        string;
}