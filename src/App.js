import React, { useEffect } from "react";
// Import libraries needed for Redux
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfs }  from './actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// Connect Redux store
// (Had to change App to a functional componenet in order to get this to work.)
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
  };
};

const App = (props) => {
//2. Call the fetchSmurfs action when the component first loads.
  const {  fetchSmurfs } = props;
  useEffect(() => {
      fetchSmurfs();
  }, [fetchSmurfs]);

  return (
    <div className="App">
      <Header />
      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}
//1. Connect the fetchSmurfs actions to the App component.
export default connect(mapStateToProps, { fetchSmurfs })(App);