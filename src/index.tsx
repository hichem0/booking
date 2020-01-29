import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// export function App(props) {
//     return React.createElement('p',{style: {color: "blue"}}, 'AppFunction '+props.name);
// }
//
// App.propTypes = {
//     name: PropTypes.func.isRequired
// };
//
// App.defaultProps = {
//     name: "Hichem"
// };
//
// export class AppClass extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return React.createElement('p',{style: {color: "red"}}, 'AppClass '+this.props.name);
//     }
// }

// ReactDOM.render(React.createElement(UserCard, null), document.getElementById('root'));
// ReactDOM.render(<SearchSNCF/>, document.getElementById('root'));
//
ReactDOM.render(<App />, document.getElementById('App'));
// ReactDOM.render(React.createElement(UserCard, null), document.getElementById('root'));
