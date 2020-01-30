import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
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
        if(this.props.isLog){
        return (
            <div>
                <p style = {{color: 'blue'}}>First Name: {this.props.firstName}</p>
                <p className="makeRed">Last Name: {this.props.lastName}</p>
                <p id="email" className="makeGreen">Email: {this.props.email}</p>
                <img src={"https://www.gravatar.com/avatar/" + md5(this.props.email)}/>

            </div>);
    }
        else{
            return (
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>sorry</h1>
                        </div>
                        <p>Sorry but the page you are looking for you need to log before</p>
                        <a href="/">Go To Homepage</a>
                    </div>
                </div>

            );
        }
    }


}
