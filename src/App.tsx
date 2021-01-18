import React from 'react';
import './App.scss';
import NavBar from "./components/NavBar/NavBar"
import WebPage from "./components/webPages/WebPage"
import { PageManager, CategoryPageData } from "./components/webPages/WebPage"

import { ApolloProvider } from "@apollo/client";
import client from "./services/ApiClient"

interface AppState {
  pageManager: PageManager
}

class App extends React.Component<{}, AppState> {
  //called when adding a new page
  //adding a new page will add it to both the router and nav-bar
  addPage = (data: CategoryPageData) => {
    let pages = this.state.pageManager.pages;

    if (pages[data.basePath] !== undefined) {
      return;
    }
    
    pages[data.basePath] = {...data};

    let allPages = this.state.pageManager.allPages;

    allPages.push(data);
    
    this.setState({
      pageManager: {
        pages: pages,
        allPages: allPages,
        addPage: this.state.pageManager.addPage
      }
    })
  }

  constructor(props: any) {
    super(props);

    this.state = {
      pageManager: {
        pages: {},
        allPages: [],
        addPage: this.addPage,
      }
    }
  }

  render() {
    if (this.state === undefined) {
      return (<div>loading</div>)
    }

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <NavBar categories={this.state.pageManager.allPages}/>
            <WebPage pageManager={this.state.pageManager}/>
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
