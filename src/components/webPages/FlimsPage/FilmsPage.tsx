import React from "react";
import { CategoryPageData } from "../WebPage"
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

interface FilmPageState {
    
}

export default class FilmPage extends React.Component<FilmPageProps, FilmPageState> {
    changePage = (id: number) => {
        this.props.history.push(`${PageData.basePath}/${id}`);
    }

    constructor(props: FilmPageProps) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let {id} =this.props.match.params
        if (id !== undefined) {
            return (
                <div>
                    <ShowFilm id={id} />
                </div>
            )
        }
        return (
            <div>
                <ListFilms onClick={this.changePage}/>
            </div>
        )
    }
}