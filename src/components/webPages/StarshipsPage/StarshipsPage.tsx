import React from "react";
import { CategoryPageData } from "../WebPage"
import ShowStarship from "./ShowStarship"
import ListStarships from "./ListStarships";
import {
    RouteComponentProps,
} from "react-router-dom"
import CategoryPage from "../CategoryPage";

export const PageData: CategoryPageData = {
    name: "starships",
    path: "/starships/:id?",
    basePath: "/starships",
    render: (props) => {
        return <StarshipPage {...props}/>
    }
}

interface StarshipPageProps extends RouteComponentProps<{id?: any}>{
    displayedId?: number
}

export default function StarshipPage(props: StarshipPageProps) {
    return <CategoryPage {...props} pageData={PageData} 
        showCategory={(props, changePageURL, id) => {
            return <ShowStarship{...props} changePage={changePageURL} id={id}/>
        }}
        listCategory={(props, changePage) => {
            return <ListStarships {...{...props, onClick: changePage}} />
        }}
    />
}