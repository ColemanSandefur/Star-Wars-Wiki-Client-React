import React from "react";
import { gql } from '@apollo/client';
import * as ShowCategoryProps from "../ShowCategory"
const ShowCategory = ShowCategoryProps.default;

const PLANET_QUERY = gql`
  query GetPlanet($id: ID!){
    planet(id: $id){
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population,
      residents{
          name,
          url,
          id
      },
      films{
          title,
          url,
          id
      },
      created,
      edited,
      url,
      id
    }
  }
`;

interface GetPlanetData extends ShowCategoryProps.CategoryDataBase {
    planet: {
        name: string,
        rotation_period: string,
        orbital_period: string,
        diameter: string,
        climate: string,
        gravity: string,
        terrain: string,
        surface_water: string,
        population: string,
        residents: {
            name: string,
            url: string,
            id: number
        }[],
        films: {
            title: string,
            url: string,
            id: number
        }[],
        created: string,
        edited: string,
        url: string,
        id: number
    }[]
}

interface GetPlanetVars {
	id: number
}

export default function ShowPlanet(props: {id: number, changePage: (path: string) => void}) {
  return <ShowCategory<GetPlanetData, GetPlanetVars> query={PLANET_QUERY} showCategoryVars={{id: props.id}} {...props} />
}