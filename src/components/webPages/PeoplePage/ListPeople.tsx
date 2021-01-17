import React from "react";
import { useQuery, gql } from '@apollo/client';

const PERSON_QUERY = gql`
  query GetPerson($id: ID){
    person(id: $id){
      name,
      id
    }
  }
`;

interface GetPersonData {
    person: {
        name: string,
        id: number
    }[]
}

interface GetPersonVars {
    id?: number
}

//'ListPeople' will list all the people that the server has
export default function ListPeople(props: {id?: number, onClick:(id: number) => void}) {
    const { loading, data } = useQuery<GetPersonData, GetPersonVars>(
        PERSON_QUERY,
        {variables: {id: props.id}}
    )

    if (loading) return <p>loading</p>
    if (data === undefined) return <p>Nothing Found</p>

    const formatted = data.person.map((data) => {
        return <li key={`person${data.name}`} onClick={() => props.onClick(data.id)}>{data.name}</li>
    });

    return (
        <ul>
            {formatted}
        </ul>
    )
}