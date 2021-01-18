import React from "react";
import { gql } from '@apollo/client';
import * as ShowCategoryProps from "../ShowCategory";
const ShowCategory = ShowCategoryProps.default;

const VEHICLE_QUERY = gql`
  query GetVehicle($id: ID!){
    vehicle(id: $id){
      name,
      model,
      manufacturer,
      cost_in_credits,
      length,
      max_atmospheric_speed,
      crew,
      passengers,
      cargo_capacity,
      consumables,
      vehicle_class,
      pilots{
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

interface GetVehicleData extends ShowCategoryProps.CategoryDataBase {
    vehicle: {
      name: string,
      model: string,
      manufacturer: string,
      cost_in_credits: string,
      length: string,
      max_atmospheric_speed: string,
      crew: string,
      passengers: string,
      cargo_capacity: string,
      consumables: string,
      vehicle_class: string,
      pilots: {
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

interface GetVehicleVars {
	id: number
}

export default function ShowVehicle(props: {id: number}) {
  return <ShowCategory<GetVehicleData, GetVehicleVars> query={VEHICLE_QUERY} showCategoryVars={{id: props.id}} />
}