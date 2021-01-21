import React from "react"
import { CategoryPageData } from "../WebPage";
import "./HomePage.scss";

export const PageData: CategoryPageData = {
    name: "Home Page",
    path: "/",
    basePath: "/",
    render: (props) => {
        return <HomePage {...props}/>
    }
}

export default class HomePage extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}