import React from "react";
import { gql } from '@apollo/client';
import * as ShowCategoryProps from "../ShowCategory";
const ShowCategory = ShowCategoryProps.default;

const FILM_QUERY = gql`
  query GetFilm($id: ID!){
    film(id: $id){
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date,
      characters{
        name,
        id
      },
      planets{
        name,
        id
      },
      starships{
        name,
        id
      },
      vehicles{
        name,
        id
      },
      species{
        name,
        id
      },
      created,
      edited,
      url,
      id
    }
  }
`;

interface GetFilmData extends ShowCategoryProps.CategoryDataBase {
    film: {
      title: string,
      episode_id: string,
      opening_crawl: string,
      director: string,
      producer: string,
      release_date: string,
      characters:{
        name: string,
        id: number
      }[],
      planets:{
        name: string,
        id: number
      }[],
      starships:{
        name: string,
        id: number
      }[],
      vehicles:{
        name: string,
        id: number
      }[],
      species:{
        name: string,
        id: number
      }[],
      created: string,
      edited: string,
      url: string,
      id: number
    }[]
}

interface GetFilmVars {
	id: number
}

export default function ShowFilm(props: {id: number}) {
  return <ShowCategory<GetFilmData, GetFilmVars> query={FILM_QUERY} showCategoryVars={{id: props.id}} />
}