import React from "react";
import { CategoryPageData } from "../WebPage"
import {
    RouteComponentProps,
} from "react-router-dom"

interface PlanetPageProps {
    displayedId?: number
}

interface PlanetPageState {
    
}

export default class PlanetPage extends React.Component<PlanetPageProps & RouteComponentProps<{id?: any}>, PlanetPageState> {
    changePage = (id: number) => {
        this.props.history.push(`/people/${id}`);
    }

    constructor(props: PlanetPageProps & RouteComponentProps<{id?: any}>) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let {id} =this.props.match.params
        if (id !== undefined) {
            return (
                <div>
                    Planet #{id}
                </div>
            )
        }
        return (
            <div>
                Planets
            </div>
        )
    }
}

export const PageData: CategoryPageData = {
    name: "planets",
    path: "/planets/:id?",
    basePath: "/planets",
    render: (props) => {
        return <PlanetPage {...props}/>
    }
}