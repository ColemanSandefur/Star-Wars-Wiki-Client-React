import React from "react";
import ListPeople from "./ListPeople"
import ShowPerson from "./ShowPerson"
import { CategoryPageData } from "../WebPage"
import {
    RouteComponentProps,
} from "react-router-dom"
import CategoryPage from "../CategoryPage";

export const PageData: CategoryPageData = {
    name: "people",
    path: "/people/:id?",
    basePath: "/people",
    render: (props) => {
        return <PeoplePage {...props}/>
    }
}

interface PeoplePageProps extends RouteComponentProps<{id?: any}> {
    displayedId?: number
}

export default function PeoplePage(props: PeoplePageProps) {
    return <CategoryPage {...props} pageData={PageData} 
        showCategory={(props, changePageURL, id) => {
            return <ShowPerson {...props} changePage={changePageURL} id={id}/>
        }}
        listCategory={(props, changePage) => {
            return <ListPeople {...{...props, onClick: changePage}} />
        }}
    />
}

