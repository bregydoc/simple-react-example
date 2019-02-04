import React from "react";
// import PropTypes from "prop-types";
import MainPage from "./components/MainPage";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api-useast.graphcms.com/v1/cjrpt1hxh7wq301htldd95b0m/master"
});

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
    <ApolloProvider client={client}>
      <div {...props}>
        <MainPage />
      </div>
    </ApolloProvider>
  );
};

App.propTypes = {
  //   message: PropTypes.string,
};

export default App;

// HOC COMPONENT
