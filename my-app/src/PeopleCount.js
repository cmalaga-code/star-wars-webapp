import React, {Component} from 'react';


class PeopleCount extends Component{
    constructor(props){
        super(props)
        this.state = {peopleCount: "loading ..."}
    }
    async componentDidMount(){
        try{
          const url = "https://swapi.dev/api/people/";
          const response = await fetch(url);
          const data = await response.json();
          this.setState({peopleCount: data.count});
        }
        catch{
          console.log("error in people count component api call!")
        }
    }
    render(){
        return (
            <div className="black baskerville tc grow bg-yellow br3 pa3 ma2 dib bw2 shadow-5">
                <h4>People Count</h4>
                <p>{this.state.peopleCount}</p>
            </div>
        );
    }
}
export default PeopleCount;