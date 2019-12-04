import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import md5 from 'js-md5';

export class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement('div', {}, null,
            React.createElement('p', { style: { color: 'black' } }, 'First Name: ' + this.props.firstName),
            React.createElement('p', { style: { color: 'black' } }, 'Last Name: ' + this.props.lastName),
            React.createElement('p', { style: { color: 'red' } }, 'Email: ' + this.props.email),
            React.createElement('img', { src: 'https://www.gravatar.com/avatar/' + md5(this.props.email) }, null),
        );
    }
}
UserCard.propTypes = {
    firstName: propTypes.string.isRequired,
    lastName: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
}

UserCard.defaultProps = {
    firstName: 'Hichem',
    lastName: 'Bedjaoui',
    email: 'hichembedjaoui4@gmail.com'
}
ReactDOM.render(React.createElement(UserCard, {}, null), document.getElementById('root'));