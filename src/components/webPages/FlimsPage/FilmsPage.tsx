import React from "react";
import { CategoryPageData } from "../WebPage"
import CategoryPage from "../CategoryPage"
import ShowFilm from "./ShowFilm"
import ListFilms from "./ListFilms";
import {
    RouteComponentProps,
} from "react-router-dom"

export const PageData: CategoryPageData = {
    name: "films",
    path: "/films/:id?",
    basePath: "/films",
    render: (props) => {
        return <FilmPage {...props}/>
    }
}

interface FilmPageProps extends RouteComponentProps<{id?: any}>{
    displayedId?: number
}

export default function FilmPage(props: FilmPageProps){
    return <CategoryPage {...props} pageData={PageData} 
        showCategory={(props, changePageURL, id) => {
            return <ShowFilm {...props} changePage={changePageURL} id={id}/>
        }}
        listCategory={(props, changePage) => {
            return <ListFilms {...{...props, onClick: changePage}} />
        }}
    />
}