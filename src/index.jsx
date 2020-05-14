import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Reviews from './components/reviews';

ReactDOM.render(<App />, document.getElementById('top') || document.createElement('div'));
ReactDOM.render(<Reviews />, document.getElementById('reviews') || document.createElement('div'));
