import React from "react";
import ListPeople from "./ListPeople"
import ShowPerson from "./ShowPerson"
import { CategoryPageData } from "../WebPage"
import {
    RouteComponentProps,
} from "react-router-dom"

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

interface PeoplePageState {
    
}

export default class PeoplePage extends React.Component<PeoplePageProps, PeoplePageState> {
    changePage = (id: number) => {
        this.props.history.push(`${PageData.basePath}/${id}`);
    }

    constructor(props: PeoplePageProps) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let {id} =this.props.match.params
        if (id !== undefined) {
            return (
                <div>
                    <ShowPerson id={id} />
                </div>
            )
        }
        return (
            <div>
                <ListPeople onClick={this.changePage}/>
            </div>
        )
    }
}

