import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import SearchSNCF from "./SearchSNCF";
import 'bootstrap/dist/css/bootstrap.min.css';

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
ReactDOM.render(<SearchSNCF/>, document.getElementById('root'));
