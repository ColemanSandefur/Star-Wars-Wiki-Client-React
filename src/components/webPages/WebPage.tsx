import React from "react";
import "./WebPage.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    RouteComponentProps
} from "react-router-dom";

import * as PeoplePage from "./PeoplePage/PeoplePage";
import * as PlanetPage from "./PlanetsPage/PlanetsPage";
import * as FilmsPage from "./FlimsPage/FilmsPage";
import * as SpeciesPage from "./SpeciesPage/SpeciesPage";
import * as VehiclesPage from "./VehiclesPage/VehiclesPage";
import * as StarshipsPage from "./StarshipsPage/StarshipsPage";
import * as HomePage from "./HomePage/HomePage";

export interface PageData {
    name: string,
    render: (routeProps: RouteComponentProps<any>) => JSX.Element
}

//all pages in webPages will have an export of 'CategoryPageData'
export interface CategoryPageData extends PageData {
    path: string;
    basePath: string
}

export interface PageManager {
    pages: {
        [relativeLink: string]: PageData
    },
    allPages: CategoryPageData[],
    addPage: (data: CategoryPageData) => void
}

interface WebPagesProps {
    pageManager: PageManager
}

class WebPages extends React.Component<WebPagesProps> {
    addPage = (data: CategoryPageData) => {
        this.props.pageManager.addPage(data);
    }

    constructor(props: WebPagesProps) {
        super(props);

        this.addPage(PeoplePage.PageData);
        this.addPage(PlanetPage.PageData);
        this.addPage(FilmsPage.PageData);
        this.addPage(SpeciesPage.PageData);
        this.addPage(VehiclesPage.PageData);
        this.addPage(StarshipsPage.PageData);
    }
    
    render() {
        let pages = this.props.pageManager.allPages;

        let routers = pages.map((data, index) => {
            return <Route path={data.path} render={data.render} key={index} />
        })

        return (
            <Router>
                <Switch>
                    {routers}
                    <Route path={HomePage.PageData.path} render={HomePage.PageData.render} key={"HomePage"} />
                </Switch>
            </Router>
        );
    }
}

export default WebPages;