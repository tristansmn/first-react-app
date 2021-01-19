// Import the React and ReactDOM from libraries.

import React from 'react';
import ReactDOM from 'react-dom';

// Create React components.

// new function component 
const App = () => {
	const buttonText = 'click me !';

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};

// Take the React components and shox it on the screen.

ReactDOM.render(
	<App />, document.querySelector('#root')
);