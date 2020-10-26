import React from 'react';
import Errorboundry from '../components/ErrorBoundry';
import List from '../components/CardList';
import './app.css';
import Scroll from '../components/Scroll';
import Searchbox from '../components/searchbox';

class App extends React.Component{
    constructor(){
        super();
        this.state={
           robots: [],
           search: ''
        }
    }
    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result=>result.json())
        .then(users=>{this.setState({robots: users })});
    }

     Onsearchchange=(event)=>{
         this.setState({search: event.target.value})
     }
     render(){
        const filterRobots = this.state.robots.filter(robot=> {
                 return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
                });

        return !this.state.robots.length ?
            <h1>Loading...</h1> :
          
         (<div className='tc'>
            <h1 className='tc f1'>Robot friends</h1>
            <Searchbox searchchange={this.Onsearchchange}/>
           <hr/>
           <Scroll>
             <Errorboundry>
               <List robots={filterRobots} />
             </Errorboundry>
           </Scroll>
         </div>);
    }
}

export default App;