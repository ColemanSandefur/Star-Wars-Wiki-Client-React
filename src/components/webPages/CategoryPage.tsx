import React from "react";
import { CategoryPageData } from "./WebPage"
import {
    RouteComponentProps,
} from "react-router-dom"

interface CategoryPageProps extends RouteComponentProps<{id?: any}>{
    displayedId?: number,
    pageData: CategoryPageData,
    showCategory: (data: CategoryPageProps, changePageURL: (path: string) => void, id: number) => JSX.Element,
    listCategory: (data: CategoryPageProps, changePage: (id: number) => void) => JSX.Element
}

interface CategoryPageState {
    
}

export default class CategoryPage extends React.Component<CategoryPageProps, CategoryPageState> {
    changePage = (id: number) => {
        this.props.history.push(`${this.props.pageData.basePath}/${id}`);
    }

    changePageURL = (path: string) => {
        this.props.history.push(path);
    }

    constructor(props: CategoryPageProps) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let {id} =this.props.match.params

        if (id !== undefined) {
            return (
                <div>
                    {this.props.showCategory(this.props, this.changePageURL, id)}
                </div>
            )
        }
        return (
            <div>
                {this.props.listCategory(this.props, this.changePage)}
            </div>
        )
    }
}