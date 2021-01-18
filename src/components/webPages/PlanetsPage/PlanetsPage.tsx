import React from "react";
import { CategoryPageData } from "../WebPage"
import ShowPlanet from "./ShowPlanet"
import ListPlanets from "./ListPlanets";
import {
    RouteComponentProps,
} from "react-router-dom"

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

interface PlanetPageState {
    
}

export default class PlanetPage extends React.Component<PlanetPageProps, PlanetPageState> {
    changePage = (id: number) => {
        this.props.history.push(`${PageData.basePath}/${id}`);
    }

    constructor(props: PlanetPageProps) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let {id} =this.props.match.params
        if (id !== undefined) {
            return (
                <div>
                    <ShowPlanet id={id} />
                </div>
            )
        }
        return (
            <div>
                <ListPlanets onClick={this.changePage}/>
            </div>
        )
    }
}