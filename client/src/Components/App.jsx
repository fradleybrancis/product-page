import React from 'react';
import AllProducts from './AllProducts.jsx';
import json from '../../../data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ data: json.groups });
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <h1> Williams-Sonoma </h1>
        <div className="allProducts">
          <AllProducts className="allProducts" data={data}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
