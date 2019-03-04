import React, { Component } from "react";
import "./App.css";
import VisitorForm from "./components/visitorForm";
import VisitorList from "./components/visitorList";
import { connect } from "react-redux";
import { addVisitor, outVisitor } from "./store/actions/visitor.action";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      intime: ""
    };
  }

  onFormInputChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  onFormSubmitClick = () => {
    console.log("form submited");
    const { name, intime } = this.state;
    let visitor = {
      name: name,
      intime: intime
    };
    this.props.addVisitor(visitor);
    this.setState({
      name: "",
      intime: ""
    });
  };
  onOutVisitor = id => {
    this.props.outVisitor(id);
  };
  render() {
    const { name, intime } = this.state;
    return (
      <div className="App">
        <VisitorForm
          name={name}
          intime={intime}
          onFormInputChange={this.onFormInputChange}
          onFormSubmitClick={this.onFormSubmitClick}
        />
        <VisitorList
          visitors={this.props.visitors}
          onOutVisitor={this.onOutVisitor}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visitors: state.visitors
});
const mapDispatchToProps = dispatch => ({
  addVisitor: visitor => dispatch(addVisitor(visitor)),
  outVisitor: id => dispatch(outVisitor(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
