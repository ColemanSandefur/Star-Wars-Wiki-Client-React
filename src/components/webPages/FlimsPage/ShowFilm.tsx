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
        url,
        id
      },
      planets{
        name,
        url,
        id
      },
      starships{
        name,
        url,
        id
      },
      vehicles{
        name,
        url,
        id
      },
      species{
        name,
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
        url: string
        id: number
      }[],
      planets:{
        name: string,
        url: string,
        id: number
      }[],
      starships:{
        name: string,
        url: string,
        id: number
      }[],
      vehicles:{
        name: string,
        url: string,
        id: number
      }[],
      species:{
        name: string,
        url: string,
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

export default function ShowFilm(props: {id: number, changePage: (path: string) => void}) {
  return <ShowCategory<GetFilmData, GetFilmVars> query={FILM_QUERY} showCategoryVars={{id: props.id}} changePage={props.changePage} />
}