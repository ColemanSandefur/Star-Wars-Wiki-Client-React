import React from "react";
import { gql } from '@apollo/client';
import * as ShowCategoryProps from "../ShowCategory";
const ShowCategory = ShowCategoryProps.default;

const SPECIES_QUERY = gql`
  query GetSpecies($id: ID!){
    species(id: $id){
      name,
      classification,
      designation,
      average_height,
      skin_colors,
      hair_colors,
      eye_colors,
      average_lifespan,
      homeworld{
        name,
        url,
        id
      },
      language,
      people{
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

interface GetSpeciesData extends ShowCategoryProps.CategoryDataBase {
    species: {
      name: string,
      classification: string,
      designation: string,
      average_height: string,
      skin_colors: string,
      hair_colors: string,
      eye_colors: string,
      average_lifespan: string,
      homeworld:{
        name: string,
        url: string,
        id: number
      }[],
      language: string,
      people:{
        name: string,
        url: string,
        id: number
      }[],
      films:{
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

interface GetSpeciesVars {
	id: number
}

export default function ShowSpecies(props: {id: number, changePage: (path: string) => void}) {
  return <ShowCategory<GetSpeciesData, GetSpeciesVars> query={SPECIES_QUERY} showCategoryVars={{id: props.id}} {...props} />
}