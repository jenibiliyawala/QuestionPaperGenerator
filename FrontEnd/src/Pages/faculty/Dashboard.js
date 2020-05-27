import React, {Component} from 'react';
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';

function App()
{
    return( 
        <div>
            <Navbar />
            <Sidebar />
            <h1><center>Dashboard</center></h1>
            <Footer/>
        </div>
    );
}
export default App