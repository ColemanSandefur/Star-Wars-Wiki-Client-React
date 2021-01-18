import React from "react";
import "./PeoplePage.scss"
import ListPeople from "./PeoplePage/ListPeople"
import ShowPerson from "./PeoplePage/ShowPerson"
import {
    RouteComponentProps,
} from "react-router-dom"

interface PeoplePageProps {
    displayedId?: number
}

interface PeoplePageState {
    
}

export default class PeoplePage extends React.Component<PeoplePageProps & RouteComponentProps<{id?: any}>, PeoplePageState> {
    changePage = (id: number) => {
        this.props.history.push(`/people/${id}`)
        
    }

    constructor(props: PeoplePageProps & RouteComponentProps<{id?: any}>) {
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
                <ListPeople id={id} onClick={this.changePage}/>
            </div>
        )
    }
}