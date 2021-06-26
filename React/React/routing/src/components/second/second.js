import React, {Component} from 'react';
import './second.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as secondActions from "../../store/second/actions";
export default class Second extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-second">Hi I am Vishnu Vardhan this is my 2nd component</div>;
    }
  }
// export default connect(
//     ({ second }) => ({ ...second }),
//     dispatch => bindActionCreators({ ...secondActions }, dispatch)
//   )( second );