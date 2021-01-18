import React from "react";
import { useQuery, gql } from '@apollo/client';

const PLANET_QUERY = gql`
  query GetPlanet($id: ID!){
    planet(id: $id){
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population,
      residents{
          name,
          id
      },
      films{
          title,
          id
      },
      created,
      edited,
      url,
      id
    }
  }
`;

interface GetPlanetData {
    planet: {
        name: string,
        rotation_period: string,
        orbital_period: string,
        diameter: string,
        climate: string,
        gravity: string,
        terrain: string,
        surface_water: string,
        population: string,
        residents: {
            name: string,
            id: number
        }[],
        films: {
            title: string,
            id: number
        }[],
        created: string,
        edited: string,
        url: string,
        id: number
    }[]
}

interface GetPlanetVars {
	id: number
}

//Displays all the information I have about the specific person
//'ShowPerson' will return all data ('Category' ex. name, vehicles, movies, etc.)
export default function ShowPerson(props: {id: number}) {
    /*
      Query graphQL
    */
      const { loading, data } = useQuery<GetPlanetData, GetPlanetVars>(
          PLANET_QUERY,
          {variables: {id: props.id}}
      )
  
      if (loading) return <p>loading</p>
      if (data === undefined) return <p>Nothing Found</p>
    
  
    /*
      parse the data
    */
    let categories: JSX.Element[] = []
  
    for (let property in data.planet[0]) {
      //I don't want to display the typename
      if (property === "__typename") {
        continue;
      }
  
      let propVal = Reflect.get(data.planet[0], property);
  
      if (propVal === null) {
        continue;
      }
  
      if (propVal.length !== undefined && propVal.length === 0) {
        continue
      }
  
      categories.push(<Category key={categories.length} title={property} inputData={propVal} />)
    }
    
    return (
      <div>{categories}</div>
    )
  }
  
  //returns the text that should be displayed for 'Category'
  function getDisplay(inputData: any) {
    if (typeof inputData === "string") {
      //if is a date (regex)
      if (inputData.match("\\d+-\\d+-\\d+T\\d+:\\d+:\\d+.\\d+Z")) {
        let date = new Date(inputData);
        return date.toLocaleDateString()
      }
  
      return inputData;
    }
  
    //if it is a type from graphQL it will have a '__typename' property
    //films are the only type that doesn't have a 'name' property
    if (inputData.__typename !== undefined) {
      switch(inputData.__typename){
        case "Film":
          return inputData.title;
        default:
          return inputData.name
      }
    }
    
    //an emergency return statement to make sure that the data doesn't cause an error
    return JSON.stringify(inputData);
  }
  
  //Categories are groups of information like:
  //  - vehicles they drove/owned
  //  - name
  //  - movies they were in
  function Category(props: {title: string, inputData: any}) {
  
    //all data will end up in displayData
    let displayData;
  
    //helper variable that will contain all entries for the category
    let tmpData: JSX.Element[] = []
  
    if (Array.isArray(props.inputData)){
      tmpData = props.inputData.map((data, index) => {
        return (
          <li key={index}>{getDisplay(data)}</li>
        )
      })
    } else {
      tmpData.push(<li key={0}>{getDisplay(props.inputData)}</li>);
    }
  
    displayData = (
      <ul>
        {tmpData}
      </ul>
    )
  
    return (
      <div>
        <h3>{props.title}</h3>
        {displayData}
      </div>
    )
  }