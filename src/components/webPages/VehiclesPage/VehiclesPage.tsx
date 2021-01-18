import React from "react";
import { CategoryPageData } from "../WebPage"
import ShowVehicle from "./ShowVehicles"
import ListVehicles from "./ListVehicles";
import {
    RouteComponentProps,
} from "react-router-dom"

export const PageData: CategoryPageData = {
    name: "vehicles",
    path: "/vehicles/:id?",
    basePath: "/vehicles",
    render: (props) => {
        return <VehiclesPage {...props}/>
    }
}

interface VehiclesPageProps extends RouteComponentProps<{id?: any}>{
    displayedId?: number
}

interface VehiclesPageState {
    
}

export default class VehiclesPage extends React.Component<VehiclesPageProps, VehiclesPageState> {
    changePage = (id: number) => {
        this.props.history.push(`${PageData.basePath}/${id}`);
    }

    constructor(props: VehiclesPageProps) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let {id} =this.props.match.params
        if (id !== undefined) {
            return (
                <div>
                    <ShowVehicle id={id} />
                </div>
            )
        }
        return (
            <div>
                <ListVehicles onClick={this.changePage}/>
            </div>
        )
    }
}