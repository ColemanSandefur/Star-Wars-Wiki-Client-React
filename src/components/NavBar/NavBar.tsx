import React from 'react';
import {CategoryPageData as NavEntryProps} from "../webPages/WebPage"
import './NavBar.scss';
import "../../services/ApiClient"


class NavEntry extends React.Component<NavEntryProps> {
  render() {
    return(
      <a className="Nav-Entry" href={this.props.basePath}>{ this.props.name }</a>
    )
  }
}

interface NavBarProps {
  categories: NavEntryProps[]
}

interface NavBarState {
}

//NavBar will be displayed on every page,
//all links defined by Parent component will automatically be displayed
class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    let categories = this.props.categories.slice();

    let data = categories.map((value, index) => {
      return (
        <NavEntry {...value} key={index}/>
      );
    })

    return (
      <div className="Nav-Bar">
        {data}
      </div>
    );
  }
}

export default NavBar;