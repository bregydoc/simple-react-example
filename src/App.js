import React from "react";
// import PropTypes from "prop-types";
import MainPage from "./components/MainPage";

// CLASS COMPONENT

// class App extends Component {
//   static propTypes = {
//     message: PropTypes.string,
//   }

//   static defaultProps = {
//       message: "Hello World"
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.props.message}</h1>
//       </div>
//     )
//   }
// }

// FUNCTIONAL COMPONENT

const App = props => {
  return (
    <div {...props}>
      <MainPage />
    </div>
  );
};

App.propTypes = {
  //   message: PropTypes.string,
};

export default App;

// HOC COMPONENT
