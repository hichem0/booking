import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import md5 from 'js-md5';

export class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const hash = md5(this.props.email);

        return (<div>
            <p className="makeblue">Last Name: {this.props.lastName}</p>
            <p>First Name: {this.props.firstName}</p>
            <p>Email: {this.props.email}</p>
            <img src={"https://www.gravatar.com/avatar/" + hash}/>
        </div>);
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
