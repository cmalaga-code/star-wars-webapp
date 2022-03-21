import React, {Component} from 'react';
import 'tachyons';


class PlanetCount extends Component{
    constructor(props){
        super(props)
        this.state = {planetCount: "loading ..."}
    }
    async componentDidMount(){
        try{
          const url = "https://swapi.dev/api/planets/";
          const response = await fetch(url);
          const data = await response.json();
          this.setState({planetCount: data.count});
        }catch{
          console.log("error in planet count component api call!")
        }
    }
    render(){
        return (
            <div className="black baskerville tc grow bg-yellow br3 pa3 ma2 dib bw2 shadow-5">
                <h4>Planet Count</h4>
                <p>{this.state.planetCount}</p>
                <hr></hr>
            </div>
        );
    }
}
export default PlanetCount;