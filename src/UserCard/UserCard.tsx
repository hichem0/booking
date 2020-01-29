import React from 'react';
import PropTypes from 'prop-types';
const md5 = require('js-md5');

export class UserCard extends React.Component<any, any>{
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    };

    static defaultProps = {
        firstName: 'Hichem',
        lastName: 'Bedjaoui',
        email: 'hichembedjaoui4@gmail.com'
    };

    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div>
                <p style = {{color: 'blue'}}>First Name: {this.props.firstName}</p>
                <p className="makeRed">Last Name: {this.props.lastName}</p>
                <p id="email" className="makeGreen">Email: {this.props.email}</p>
                <img src={"https://www.gravatar.com/avatar/" + md5(this.props.email)}/>
            </div>);
    }

}
