import React from "react";
import { gql } from '@apollo/client';
import ListCategory, { ListCategoryDataBase } from "../ListCategory";

const SPECIES_QUERY = gql`
  query {
    species{
      name,
      id
    }
  }
`;

interface GetSpeciesData extends ListCategoryDataBase {
    planet: {
        name: string,
        id: number
    }[]
}

interface GetSpeciesVars {
    id?: number
}

export default function ListSpecies(props: {onClick:(id: number) => void}) {
    return <ListCategory<GetSpeciesData, GetSpeciesVars> onClick={props.onClick} query={SPECIES_QUERY} showCategoryVars={{}} />
}