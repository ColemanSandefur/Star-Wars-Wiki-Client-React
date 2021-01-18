import React from "react";
import { gql } from '@apollo/client';
import * as ShowCategoryProps from "../ShowCategory"
const ShowCategory = ShowCategoryProps.default;

const STARSHIP_QUERY = gql`
  query GetStarship($id: ID!){
    starship(id: $id){
      name,
      model,
      manufacturer,
      cost_in_credits,
      length,
      max_atmospheric_speed,
      crew,
      passengers,
      cargo_capacity,
      consumables,
      hyperdrive_rating,
      MGLT,
      starship_class,
      pilots{
        name,
        id
      },
      films{
        title,
        id
      },
      created,
      edited,
      url,
      id
    }
  }
`;

interface GetStarshipData extends ShowCategoryProps.CategoryDataBase {
    starship: {
      name: string,
      model: string,
      manufacturer: string,
      cost_in_credits: string,
      length: string,
      max_atmospheric_speed: string,
      crew: string,
      passengers: string,
      cargo_capacity: string,
      consumables: string,
      hyperdrive_rating: string,
      MGLT: string,
      starship_class: string,
      pilots: {
        name: string,
        id: number
      }[],
      films: {
        title: string,
        id: number
      }[],
      created: string,
      edited: string,
      url: string,
      id: number
    }[]
}

interface GetStarshipVars {
	id: number
}

export default function ShowStarship(props: {id: number}) {
  return <ShowCategory<GetStarshipData, GetStarshipVars> query={STARSHIP_QUERY} showCategoryVars={{id: props.id}} />
}