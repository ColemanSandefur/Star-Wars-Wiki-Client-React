import React from "react";
import * as PeoplePage from "./PeoplePage/PeoplePage"
import * as PlanetPage from "./PlanetsPage/PlanetsPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    RouteComponentProps
} from "react-router-dom";

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
                </Switch>
            </Router>
        );
    }
}

export default WebPages;