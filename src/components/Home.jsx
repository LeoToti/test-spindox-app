import React from "react";
import axios from "axios";

import ProfilesFunctional from "./ProfileFunctional";
import { Row, Div, Col } from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    queryError: "",
    selected: [],
    show: "", };
    this.fectchData = this.fectchData.bind(this);
  }

  // Ho usato due differenti tipi di componenti (Class e Functional)per mostrarvi entrambi i casi, anche se ad ora si usano sopratutto i Functional per questioni di ri-usabilità del codice. Ho scelto di non usare axios per il data fetching per mostrare il codice completo. Spero vada bene per voi, a presto e grazie. 

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
