import React, { Component } from 'react'
import CardList from '../components/cardsList'
import SearchBox from "../components/SearchBox"
import Scroll from "../components/scroll"

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>{this.setState({robots: users})})
}


    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})
      
       
        
    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(!robots.length){
            return <h1>Loading</h1>
        }else {
            return (
                <div className="tc">
                    <h1 className="f1">RobotsFriends</h1>
                    <SearchBox searchChange={this.onsearchChange} />
                    <Scroll>
                    <CardList robots={filterRobots} />
                    </Scroll>
                </div>
            );
        }
     
    }

}
export default App;