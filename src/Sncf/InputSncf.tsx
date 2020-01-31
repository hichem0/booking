import React from 'react';
import {SearchSNCF} from "./apiSncf";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";


export default class InputSncf extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            departureStation: "",
            arrivalStation: "",
            resDeparture: [],
            resArrival: []
        }
        this.generateTicket = this.generateTicket.bind(this);
    }


    async onChangeInputDeparture(e: any) {
        let gares = await SearchSNCF(e.target.value) || [];
        await this.setState({resDeparture: gares});
    }

    async onChangeInputDArrival(e: any) {
        let gares = await SearchSNCF(e.target.value) || [];
        await this.setState({resArrival: gares});
    }

    async generateTicket() {
        await this.props.setStations(this.state.departureStation, this.state.arrivalStation);
    }


    render() {
        return (
            <div>
                <Autocomplete
                    onChange={(event: any, value: any) => this.setState({departureStation: value})}
                    id="departure"
                    options={this.state.resDeparture}
                    style={{width: 300}}
                    renderInput={(params) => (
                        <TextField
                            onChange={this.onChangeInputDeparture.bind(this)}
                            {...params} label="Departure" variant="outlined" fullWidth/>
                    )}
                /> <Autocomplete
                onChange={(event: any, value: any) => this.setState({arrivalStation: value})}
                id="departure"
                options={this.state.resArrival}
                style={{width: 300}}
                renderInput={(params) => (
                    <TextField
                        onChange={this.onChangeInputDArrival.bind(this)}
                        {...params} label="Arrival" variant="outlined" fullWidth/>
                )}
            />
                <button onClick={this.generateTicket}>Get ticket</button>
            </div>
        );
    }
}
