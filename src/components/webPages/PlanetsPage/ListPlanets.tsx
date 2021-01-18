import React from "react";
import { gql } from '@apollo/client';
import ListCategory, { ListCategoryDataBase } from "../ListCategory";

const PLANET_QUERY = gql`
  query {
    planet{
      name,
      id
    }
  }
`;

interface GetPlanetData extends ListCategoryDataBase {
    planet: {
        name: string,
        id: number
    }[]
}

interface GetPlanetVars {
    id?: number
}

export default function ListPlanets(props: {onClick:(id: number) => void}) {
    return <ListCategory<GetPlanetData, GetPlanetVars> onClick={props.onClick} query={PLANET_QUERY} showCategoryVars={{}} />
}