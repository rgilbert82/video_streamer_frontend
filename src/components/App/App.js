import React from 'react';
import { Header, Main } from '.';

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
