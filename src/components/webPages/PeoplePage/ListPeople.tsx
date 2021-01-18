import React from "react";
import { gql } from '@apollo/client';
import ListCategory, { ListCategoryDataBase } from "../ListCategory";

const PERSON_QUERY = gql`
  query {
    person{
      name,
      id
    }
  }
`;

interface GetPersonData extends ListCategoryDataBase {
    person: {
        name: string,
        id: number
    }[]
}

interface GetPersonVars {
    id?: number
}

//'ListPeople' will list all the people that the server has
export default function ListPeople(props: {onClick:(id: number) => void}) {
    return <ListCategory<GetPersonData, GetPersonVars> onClick={props.onClick} query={PERSON_QUERY} showCategoryVars={{}} />
}