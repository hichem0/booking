import React from 'react';
import ListSncf from "./ListSncf";
import InputSncf from "./InputSncf";
import {Select} from "@material-ui/core";

export default class SearchSNCF extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            departure: "",
            arrival: ""
        };
        this.setStations = this.setStations.bind(this);
    }


    async setStations(depFromChild: any, arrivFromChild: any) {
        this.setState({departure: depFromChild, arrival: arrivFromChild});
    }


    render() {
        if(this.props.isLog){
        return (
            <div>
                <InputSncf setStations={this.setStations}/>
                {(this.state.departure && this.state.arrival) && <ListSncf departure={this.state.departure} arrival={this.state.arrival} promo={this.props.promo}/>}
                <h2>Discount</h2>
                {this.props.promo ? <p>Discount enabled</p> : <p>No Discount</p>}
            </div>

        );

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

