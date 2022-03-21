import React, {Component} from 'react';
import 'tachyons';


class CharacterCount extends Component{
    constructor(props){
        super(props)
        this.state = {characterCount: "loading ..."}
        
    }
    async componentDidMount(){
        try{
            const url = "https://swapi.dev/api/people/";
            const summaryResponse = await fetch(url, {method: 'GET'});
            const summaryData = await summaryResponse.json();
            this.setState({characterCount: summaryData.count});
        } catch {
          console.log("error in character count component api call!")
        }
    }
    render(){
        return (
            <div className="black baskerville tc grow bg-yellow br3 pa3 ma2 dib bw2 shadow-5">
                <h4>Character Count</h4>
                <p>{this.state.characterCount}</p>
                <hr></hr>
            </div>
        );
    }
}
export default CharacterCount;