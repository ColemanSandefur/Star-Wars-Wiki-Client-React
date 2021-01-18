import React from "react";
import "../ShowCategory.scss";
import { gql } from '@apollo/client';
import * as ShowCategoryProps from "../ShowCategory"
const ShowCategory = ShowCategoryProps.default;

const PERSON_QUERY = gql`
  query GetPerson($id: ID!){
    person(id: $id){
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld{
        name
        id
      }
      films{
        title
        id
      }
      species{
        name
        id
      }
      vehicles{
        name
        id
      }
      starships{
        name
        id
      }
      created
      edited
      url
      id
    }
  }
`;

interface GetPersonData extends ShowCategoryProps.CategoryDataBase {
	person: {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: {
      name: string,
      id: number
    },
    films: {
      title: string,
      id: number
    }[],
    species: {
      name: string,
      id: number
    }[],
    vehicles: {
      name: string,
      id: number
    }[],
    starships: {
      name: string,
      id: number
    }[],
    created: string,
    edited: string,
    url: string,
		id: number
	}[]
}

interface GetPersonVars {
	id: number
}


export default function ShowPerson(props: {id: number}) {
  return <ShowCategory<GetPersonData, GetPersonVars> query={PERSON_QUERY} showCategoryVars={{id: props.id}} />
}