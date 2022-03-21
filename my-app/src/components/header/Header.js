import React, {Component} from 'react';
import 'tachyons';
import './Header.css';


class Header extends Component{
    render(){
        return (
            <div className="yellow baskerville header-component-div">
                <h1 className="header-component-h1">Star Wars Fun Facts!</h1>
            </div>
        );
    }
}
export default Header;