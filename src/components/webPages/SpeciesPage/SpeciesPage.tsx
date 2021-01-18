import React from "react";
import { CategoryPageData } from "../WebPage"
import ShowSpecies from "./ShowSpecies"
import ListSpecies from "./ListSpecies";
import {
    RouteComponentProps,
} from "react-router-dom"
import CategoryPage from "../CategoryPage";

export const PageData: CategoryPageData = {
    name: "species",
    path: "/species/:id?",
    basePath: "/species",
    render: (props) => {
        return <SpeciesPage {...props}/>
    }
}

interface SpeciesPageProps extends RouteComponentProps<{id?: any}>{
    displayedId?: number
} 

export default function SpeciesPage(props: SpeciesPageProps) {
    return <CategoryPage {...props} pageData={PageData} 
        showCategory={(props, changePageURL, id) => {
            return <ShowSpecies {...props} changePage={changePageURL} id={id}/>
        }}
        listCategory={(props, changePage) => {
            return <ListSpecies {...{...props, onClick: changePage}} />
        }}
    />
}