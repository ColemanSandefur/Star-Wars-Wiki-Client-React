import React from "react";
import { CategoryPageData } from "../WebPage"
import ShowVehicle from "./ShowVehicles"
import ListVehicles from "./ListVehicles";
import {
    RouteComponentProps,
} from "react-router-dom"
import CategoryPage from "../CategoryPage";

export const PageData: CategoryPageData = {
    name: "vehicles",
    path: "/vehicles/:id?",
    basePath: "/vehicles",
    render: (props) => {
        return <VehiclesPage {...props}/>
    }
}

interface VehiclesPageProps extends RouteComponentProps<{id?: any}>{
    displayedId?: number
}

export default function VehiclesPage(props: VehiclesPageProps) {
    return <CategoryPage {...props} pageData={PageData} 
        showCategory={(props, changePageURL, id) => {
            return <ShowVehicle {...props} changePage={changePageURL} id={id}/>
        }}
        listCategory={(props, changePage) => {
            return <ListVehicles {...{...props, onClick: changePage}} />
        }}
    />
}