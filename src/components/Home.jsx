import React from "react";
import axios from "axios";

import ProfilesFunctional from "./ProfileFunctional";
import { Row, Div, Col } from "react-bootstrap";

class Home extends React.Component {
  state = {
    queryError: "",
    selected: [],
    show: "",
  };

  fectchData = async function () {
    this.setState({ isLoading: true });
    let endpoint = "https://randomuser.me/api";

    try {
      let response = await fetch(endpoint);
      if (response.ok) {
        console.log("Response is ok!!");
        let data = await response.json();
        console.log(data);
        if (data) {
          this.setState({ selected: data.results });
          console.log(this.state.selected);
        } else {
          this.setState({ queryError: data.Error });
          console.log(this.state.queryError);
        }
      } else {
        alert("Cant fetch the data!");
      }
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount = async function () {
    this.fectchData();
  };

  render() {
    return (
      <>
        <ProfilesFunctional data={this.state.selected} />
      </>
    );
  }
}

export default Home;
