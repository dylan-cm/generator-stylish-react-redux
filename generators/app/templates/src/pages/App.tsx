import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import * as Styles from "../styles";
import logo from "../assets/logo.svg";
import { incrementIfOdd, increment, decrement } from "../redux/actions/counter";

const S: Styles.Component = Styles;
S.Container = styled.div`
  text-align: center;

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  .App-logo {
    animation: ${S.rotate360} infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }

  div.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 16px 0;

    span {
      padding: 0 16px;
    }
  }
`;

interface PropTypes {
  counter: number;
  incrementIfOdd: () => void;
  increment: () => void;
  decrement: () => void;
}

class App extends Component<PropTypes> {
  render() {
    const { counter, incrementIfOdd, increment, decrement } = this.props;
    return (
      <S.Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="row">
            <button onClick={decrement}>-</button>
            <span>{counter}</span>
            <button onClick={increment}>+</button>
          </div>
          <button onClick={incrementIfOdd}>Increment If Odd</button>
        </header>
      </S.Container>
    );
  }
}

interface StateType {
  counter: number;
  [key: string]: any;
}

const mapStateToProps = (state: StateType) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  incrementIfOdd,
  increment,
  decrement,
};
///////////SWITCH TO HOOKS API AND FUNCTIONAL COMPONENTS

export default connect(mapStateToProps, mapDispatchToProps)(App);
