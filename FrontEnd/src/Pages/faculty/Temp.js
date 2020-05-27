import React, {Component} from 'react';
import {Link} from "react-router-dom";
// import car from 'Assets/dist/img/LoginBackground.jpg';
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';


class Temp extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Sidebar />

                {/* <!-- Content Wrapper. Contains page content --> */}
                <div className="content-wrapper">
                    {/* <!-- Content Header (Page header) --> */}
                    <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Blank Page</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link to={"/home"}>Home</Link></li>
                            <li className="breadcrumb-item active">Blank Page</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    {/* <!-- /.container-fluid --> */}
                    </section>

                    {/* <!-- Main content --> */}
                    <section className="content">

                    {/* <!-- Default box --> */}
                    <div className="card">
                        <div className="card-header">
                        <h3 className="card-title">Title</h3>

                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                            <i className="fas fa-minus"></i></button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                            <i className="fas fa-times"></i></button>
                        </div>
                        </div>
                        <div className="card-body">
                        Start creating your amazing application!
                        </div>
                        {/* <!-- /.card-body --> */}
                        <div className="card-footer">
                        Footer
                        </div>
                        {/* <!-- /.card-footer--> */}
                    </div>
                    {/* <!-- /.card --> */}

                    </section>
                    {/* <!-- /.content --> */}
                </div>
                {/* <!-- /.content-wrapper --> */}

                <Footer/>
            </div>
        )
    }
}

export default Temp;