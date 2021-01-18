import React from "react";
import { CategoryPageData } from "../WebPage"
import ShowPlanet from "./ShowPlanet"
import ListPlanets from "./ListPlanets";
import {
    RouteComponentProps,
} from "react-router-dom"
import CategoryPage from "../CategoryPage";

export const PageData: CategoryPageData = {
    name: "planets",
    path: "/planets/:id?",
    basePath: "/planets",
    render: (props) => {
        return <PlanetPage {...props}/>
    }
}

interface PlanetPageProps extends RouteComponentProps<{id?: any}>{
    displayedId?: number
}

export default function PlanetPage(props: PlanetPageProps) {
    return <CategoryPage {...props} pageData={PageData} 
        showCategory={(props, changePageURL, id) => {
            return <ShowPlanet {...props} changePage={changePageURL} id={id}/>
        }}
        listCategory={(props, changePage) => {
            return <ListPlanets {...{...props, onClick: changePage}} />
        }}
    />
}