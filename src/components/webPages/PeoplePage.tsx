import React from "react";
import "./PeoplePage.scss"
import ListPeople from "./PeoplePage/ListPeople"
import ShowPerson from "./PeoplePage/ShowPerson"

interface PeoplePageProps {

}

interface PeoplePageState {
    displayedId?: number
}

export default class PeoplePage extends React.Component<PeoplePageProps, PeoplePageState> {
    changePage = (id: number) => {
        this.setState({
            displayedId: id
        })
    }

    constructor(props: PeoplePageProps) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        if (this.state.displayedId !== undefined) {
            return (
                <div>
                    <ShowPerson id={this.state.displayedId} />
                </div>
            )
        }
        return (
            <div>
                <ListPeople id={this.state.displayedId} onClick={this.changePage}/>
            </div>
        )
    }
}