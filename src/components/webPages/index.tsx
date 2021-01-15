import React from "react";
import PeoplePage from "./PeoplePage"

export interface PageManager {
    pages: {
        [relativeLink: string]: PageData
    },
    currentPage: string, //key for pages
    changePage: (relativeLink: string) => void,
    addPage: (relativeLink: string, pageData: PageData) => void
}

export interface PageData {
    name: string,
    page: JSX.Element
}

interface WebPagesProps {
    pageManager: PageManager
}

class WebPages extends React.Component<WebPagesProps> {
    constructor(props: WebPagesProps) {
        super(props);

        this.props.pageManager.addPage("/people", {
            name: "people",
            page: <PeoplePage />
        })

        this.props.pageManager.changePage("/people");
    }
    
    render() {
        let allPages = this.props.pageManager.pages;
        let currentPage = this.props.pageManager.currentPage;

        if (currentPage === "") {
            return (<div></div>)
        }

        if (allPages[currentPage] === undefined){
            return (<div>error!</div>)
        }

        return(
            <div>
                {allPages[currentPage].page}
            </div>
        )
    }
}

export default WebPages;