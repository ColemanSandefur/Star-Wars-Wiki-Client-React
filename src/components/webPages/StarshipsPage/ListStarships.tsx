import React from "react";
import { gql } from '@apollo/client';
import ListCategory, { ListCategoryDataBase } from "../ListCategory";

const STARSHIP_QUERY = gql`
  query {
    starship{
      name,
      id
    }
  }
`;

interface GetStarshipData extends ListCategoryDataBase {
    starship: {
        name: string,
        id: number
    }[]
}

interface GetStarshipVars {
    id?: number
}

export default function ListStarships(props: {onClick:(id: number) => void}) {
    return <ListCategory<GetStarshipData, GetStarshipVars> onClick={props.onClick} query={STARSHIP_QUERY} showCategoryVars={{}} />
}