import React from 'react';
import ListSncf from "./ListSncf";
import InputSncf from "./InputSncf";

export default class SearchSNCF extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            listStation: []
        };
        this.setGares = this.setGares.bind(this);
    }

    async setGares(gares:any) {
        this.setState({listStation: gares});
    }

    render() {
        if(this.props.isLog){
        return (
            <div>
            <form className={"mt-1"}>
                <InputSncf setGares={this.setGares}/>
                <ListSncf listStation={this.state.listStation}/>
                <InputSncf setGares={this.setGares}/>
                <ListSncf listStation={this.state.listStation}/>
            </form>

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

