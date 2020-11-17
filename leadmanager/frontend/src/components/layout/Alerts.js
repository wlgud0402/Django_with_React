import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";

export class Alerts extends Component {
  componentDidMount() {
    this.props.alert.show("It Works");
  }

  render() {
    return <div>123</div>;
  }
}

export default withAlert()(Alerts);
