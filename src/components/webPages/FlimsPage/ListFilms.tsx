import React from "react";
import { gql } from '@apollo/client';
import ListCategory, { ListCategoryDataBase } from "../ListCategory";

const FILM_QUERY = gql`
  query {
    film{
      title,
      id
    }
  }
`;

interface GetFilmData extends ListCategoryDataBase {
    planet: {
        name: string,
        id: number
    }[]
}

interface GetFilmVars {
    id?: number
}

export default function ListFilms(props: {onClick:(id: number) => void}) {
    return <ListCategory<GetFilmData, GetFilmVars> onClick={props.onClick} query={FILM_QUERY} showCategoryVars={{}} />
}