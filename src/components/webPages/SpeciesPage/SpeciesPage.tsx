import React from "react";
import { CategoryPageData } from "../WebPage"
import ShowSpecies from "./ShowSpecies"
import ListSpecies from "./ListSpecies";
import {
    RouteComponentProps,
} from "react-router-dom"

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

interface SpeciesPageState {
    
}

export default class SpeciesPage extends React.Component<SpeciesPageProps, SpeciesPageState> {
    changePage = (id: number) => {
        this.props.history.push(`${PageData.basePath}/${id}`);
    }

    constructor(props: SpeciesPageProps) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let {id} =this.props.match.params
        if (id !== undefined) {
            return (
                <div>
                    <ShowSpecies id={id} />
                </div>
            )
        }
        return (
            <div>
                <ListSpecies onClick={this.changePage}/>
            </div>
        )
    }
}