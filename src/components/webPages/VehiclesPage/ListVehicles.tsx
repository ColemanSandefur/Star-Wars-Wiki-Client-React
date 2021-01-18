import React from "react";
import { gql } from '@apollo/client';
import ListCategory, { ListCategoryDataBase } from "../ListCategory";

const VEHICLE_QUERY = gql`
  query {
    vehicle{
      name,
      id
    }
  }
`;

interface GetVehicleData extends ListCategoryDataBase {
    vehicle: {
        name: string,
        id: number
    }[]
}

interface GetVehicleVars {
    id?: number
}

export default function ListVehicles(props: {onClick:(id: number) => void}) {
    return <ListCategory<GetVehicleData, GetVehicleVars> onClick={props.onClick} query={VEHICLE_QUERY} showCategoryVars={{}} />
}