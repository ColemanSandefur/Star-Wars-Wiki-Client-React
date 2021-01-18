import React from "react";
import PeoplePage from "./PeoplePage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    RouteComponentProps
} from "react-router-dom";

export interface PageManager {
    pages: {
        [relativeLink: string]: PageData
    },
    addPage: (relativeLink: string, pageData: PageData) => void
}

export interface PageData {
    name: string,
    render: (routeProps: RouteComponentProps<any>) => JSX.Element
}

interface WebPagesProps {
    pageManager: PageManager
}

class WebPages extends React.Component<WebPagesProps> {
    constructor(props: WebPagesProps) {
        super(props);

        this.props.pageManager.addPage("/people/:id?", {
            name: "person",
            render: (props) => {
                return <PeoplePage {...props}/>
            }
        });
    }
    
    render() {
        let pages = this.props.pageManager.pages;
        let routers = [];

        for (let page in pages) {
            let pageData: PageData = Reflect.get(pages, page);
            
            routers.push((
                <Route path={page} render={pageData.render} key={routers.length} />
            ))
        }

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