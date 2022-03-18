import React, {Component} from 'react';


class StarshipCount extends Component{
    constructor(props){
        super(props)
        this.state = {starshipCount: "loading ..."}
    }
    async componentDidMount(){
        const url = "https://swapi.dev/api/starships/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({starshipCount: data.count})
    }
    render(){
        return (
            <div className="black baskerville tc grow bg-yellow br3 pa3 ma2 dib bw2 shadow-5">
                <h4>Starship Count</h4>
                <p>{this.state.starshipCount}</p>
            </div>
        );
    }
}
export default StarshipCount;