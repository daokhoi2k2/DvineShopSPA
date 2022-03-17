import React, { Component } from "react";
import Header from "../../components/Header";
import TopCategory from "../../components/TopCategory";

type Props = {};

type State = {};

export default class Home extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Header />
        <TopCategory />
        <div>Home</div>
      </>
    );
  }
}
