import React from "react";
import { CategoryPageData } from "../WebPage"
import ShowStarship from "./ShowStarship"
import ListStarships from "./ListStarships";
import {
    RouteComponentProps,
} from "react-router-dom"

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

interface StarshipPageState {
    
}

export default class StarshipPage extends React.Component<StarshipPageProps, StarshipPageState> {
    changePage = (id: number) => {
        this.props.history.push(`${PageData.basePath}/${id}`);
    }

    constructor(props: StarshipPageProps) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let {id} =this.props.match.params
        if (id !== undefined) {
            return (
                <div>
                    <ShowStarship id={id} />
                </div>
            )
        }
        return (
            <div>
                <ListStarships onClick={this.changePage}/>
            </div>
        )
    }
}