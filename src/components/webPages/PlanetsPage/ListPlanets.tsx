import React from "react";
import { useQuery, gql } from '@apollo/client';

const PLANET_QUERY = gql`
  query {
    planet{
      name,
      id
    }
  }
`;

interface GetPlanetData {
    planet: {
        name: string,
        id: number
    }[]
}

interface GetPlanetVars {
    id?: number
}

export default function ListPlanets(props: {onClick:(id: number) => void}) {
    const { loading, data } = useQuery<GetPlanetData, GetPlanetVars>(
        PLANET_QUERY,
        {variables: {}}
    )

    if (loading) return <p>loading</p>
    if (data === undefined) return <p>Nothing Found</p>

    const formatted = data.planet.map((data) => {
        return <li key={`person${data.name}`} onClick={() => props.onClick(data.id)}>{data.name}</li>
    });

    return (
        <ul>
            {formatted}
        </ul>
    )
}