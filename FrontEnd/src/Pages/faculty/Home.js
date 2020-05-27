import React, {Component} from 'react';
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';


class Home extends React.Component{
    render(){
        return (
            <div>
                <Navbar/>
                <Sidebar/>
                <center><h1>Home</h1>
                <h1> Status : {this.props.loggedInStatus}</h1></center>
                <Footer/>
            </div>
        );
    }
}
export default Home;