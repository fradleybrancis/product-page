import React from 'react';
import json from '../../../data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(json.groups)
  }

  render() {
    return (
      <React.Fragment>
        <div> Hello from React Yeaaa boy </div>
      </React.Fragment>
    )
  }
}

export default App;
