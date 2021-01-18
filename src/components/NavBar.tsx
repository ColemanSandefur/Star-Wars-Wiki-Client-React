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
  categories: NavEntryProps[]
}

//NavBar will be displayed on every page,
//just add your links to 'categories' and it will show up on the bar
class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);

    this.state = {
      categories: [
        {
          text: "people",
          link: "/people"
        },
      ]
    }
  }

  render() {
    let categories = this.state.categories.slice();

    let data = categories.map((value, index) => {
      return (
        <NavEntry link={value.link} text={value.text} key={index}/>
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