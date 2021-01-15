import React from 'react';
import './App.scss';
import NavBar from "./components/NavBar"
import WebPage from "./components/webPages"
import { PageManager, PageData } from "./components/webPages"

import { ApolloProvider } from "@apollo/client";
import client from "./services/ApiClient"

interface AppState {
  pageManager: PageManager
}

class App extends React.Component<{}, AppState> {
  addPage = (relativeLink: string, pageData: PageData) => {
    console.log(this.state);
    let pages = this.state.pageManager.pages;
    pages[relativeLink] = pageData;
    this.setState({
      pageManager: {
        pages: pages,
        currentPage: this.state.pageManager.currentPage,
        changePage: this.state.pageManager.changePage,
        addPage: this.state.pageManager.addPage
      }
    })
  }

  changePage = (relativeLink: string) => {
    this.setState({
      pageManager: {
        pages: this.state.pageManager.pages,
        currentPage: relativeLink,
        changePage: this.state.pageManager.changePage,
        addPage: this.state.pageManager.addPage
      }
    })
  }

  constructor(props: any) {
    super(props);

    this.state = {
      pageManager: {
        pages: {},
        currentPage: "",
        changePage: this.changePage,
        addPage: this.addPage,
      }
    }

    console.log(this.state);
  }

  

  render() {
    if (this.state === undefined) {
      return (<div>loading</div>)
    }
    return (
      <ApolloProvider client={client}>
        <div className="App">
        <header className="App-header">
          <NavBar />
          <WebPage pageManager={this.state.pageManager}/>
        </header>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
