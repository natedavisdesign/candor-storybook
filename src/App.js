import React, { Component } from 'react';

import RegistrationForm from './components/registration-form';

class App extends Component {
  render() {
    return (
     <div className="App">
       <div className="columns is-mobile">
        <div className="column">
         <div className="box">
          <RegistrationForm />
         </div>
        </div>
       </div>
     </div>
    );
  }
}

export default App;
