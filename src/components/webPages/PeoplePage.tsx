import React from "react";
import { useQuery, gql } from '@apollo/client';
import "./PeoplePage.scss"

const PERSON_QUERY = gql`
  query GetPerson($id: ID){
    person(id: $id){
      name
    }
  }
`;

interface GetPersonData {
    person: {
        name: string
    }[]
}

interface GetPersonVars {
    id?: number
}

interface PeoplePageProps {

}

interface PeoplePageState {

}

export default class PeoplePage extends React.Component<PeoplePageProps, PeoplePageState> {
    render() {
        return (
            <div>
                <ShowPeople />
            </div>
        )
    }
}

function ShowPeople() {
    const { loading, data } = useQuery<GetPersonData, GetPersonVars>(
        PERSON_QUERY,
        {variables: {}}
    )

    if (loading) return <p>loading</p>
    if (data === undefined) return <p>Nothing Found</p>

    const formatted = data.person.map((data) => {
        return <li key={`person${data.name}`}>{data.name}</li>
    });

    return (
        <ul>
            {formatted}
        </ul>
    )
}