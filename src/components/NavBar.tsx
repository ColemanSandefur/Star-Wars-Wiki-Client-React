import React from 'react';
import './NavBar.scss';
import "../services/ApiClient"

interface NavEntryProps {
  text: string,
  link: string
}

class NavEntry extends React.Component<NavEntryProps> {
  render() {
    return(
      <a className="Nav-Entry" href={this.props.link}>{ this.props.text }</a>
    )
  }
}

interface NavBarProps {

}

interface NavBarState {
  categories: string[]
}

class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);

    this.state = {
      categories: ["sup", "yeah"]
    }
  }
  render() {
    let categories = this.state.categories.slice();

    let data = categories.map((value, index) => {
      return (
        <NavEntry link="" text={value} key={index}/>
      );
    })

    return (
      <div className="Nav-Bar">
        {data}
      </div>
      
      
    );
  }

  componentDidMount() {
    
  }
}

export default NavBar;