import React, {Component} from 'react';
import 'tachyons';
import './SearchBar.css';

class SearchBar extends Component{
    render(){
        return (
            <div className="yellow baskerville search-component-div">
                <div className="search-header-div">
                    <input id="input-header" type="search" defaultValue="the force"/>
                </div>
            </div>
        );
    }
}
export default SearchBar;