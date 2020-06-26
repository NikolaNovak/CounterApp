import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 15" clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={this.props.onStoreResult}>Store result</button>
        <ul>
          {this.props.storedResults.map((strRes) => (
            <li key={strRes.id} onClick={this.props.onDeleteResult}>
              {strRes.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INC" }),
    onDecrementCounter: () => dispatch({ type: "DEC" }),
    onAddCounter: () => dispatch({ type: "ADD", value: 10 }),
    onSubCounter: () => dispatch({ type: "SUB", value: 15 }),
    onStoreResult: () => dispatch({ type: "STR_RES" }),
    onDeleteResult: () => dispatch({ type: "DEL_RES" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
