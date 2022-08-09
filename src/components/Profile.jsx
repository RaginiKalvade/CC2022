import React, { Component } from 'react';
import './Profile2.css';
import axios from 'axios';
import logo from './images/logo4.png';

class Profile extends Component {
    constructor(props){
        super(props)

        this.state ={
            input: this.props.match.params.id,
            prevpage:this.props.match.params.prevpage,
            filter: '',
            search: '',
            player:[]
        }
        
        this.goBack=this.goBack.bind(this);
        this.getProfileDetails=this.getProfileDetails.bind(this);
    }
    goBack(){
        console.log(this.state.prevpage);
        if (this.state.prevpage === 1){
      
        this.props.history.push(`/${this.state.filter}/${this.state.search}`)}
        else {
        this.props.history.push(`/viewAll`)}
    }
    getProfileDetails(id){
        return axios.get(`http://localhost:8080/findId/000`);
    }
    componentDidMount(){    
        this.getProfileDetails(this.state.input)
        .then((res) =>{
            this.setState({player : res.data}); 
        });
       
    }

    render() {
        return (
            <div>
                <div id="bg"></div>
                <nav className="navbar fixed-top" id="topnav">
                <img src={logo} alt="FIFA" />
                <h1>Details</h1>
                <button id="close" type="button" onClick={this.goBack}  className="btn btn-outline-light"
                aria-label="Close">GO BACK</button>
                </nav>              
                
                <hr></hr>
                <div className="page-content page-container container" id="page-content">
                <div className="padding">
                <div className="row container d-flex justify-content-center">
                <div className="col-xl-6 col-md-12">
                {this.state.player.map(pla =>
                <div className="card user-card-full" id="profCard">
                <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                <div className="card-block text-center text-white">
                <div className="m-b-25"> 
                    <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius"
                    alt="User-Profile"/> </div>
                    <h6 className="f-w-600"data-toggle="tooltip" data-placement="right" title="Jersey number">{pla.name}</h6>
                    <h6 className="f-w-600"data-toggle="tooltip" data-placement="right" title="Jersey number">ID No. : {pla.jerseynumber}</h6>
                    <h6>{pla.club}</h6> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                </div>
                </div>
                <div className="col-sm-8">
                <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Biodata</h6>
                    <div className="row">
                    <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Nationality</p>
                        <h6 className="text-muted f-w-400">{pla.nationality}</h6>
                    </div>
                    <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Position</p>
                        <h6 className="text-muted f-w-400">{pla.position}</h6>
                    </div>
                </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Physical Characteristics</h6>
                    <div className="row">
                    <div className="col-sm-4">
                        <p className="m-b-10 f-w-600">Age</p>
                        <h6 className="text-muted f-w-400">{pla.age}</h6>
                    </div>
                    <div className="col-sm-4">
                        <p className="m-b-10 f-w-600">Height</p>
                        <h6 className="text-muted f-w-400">{pla.height}</h6>
                    </div>
                    <div className="col-sm-4">
                        <p className="m-b-10 f-w-600">Weight</p>
                        <h6 className="text-muted f-w-400">{pla.weight}</h6>
                    </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Contract Details</h6>
                    <div className="row">
                    <div className="col-sm-4">
                        <p className="m-b-10 f-w-600">Year of Joining</p>
                        <h6 className="text-muted f-w-400">{pla.joined}</h6>
                    </div>
                    <div className="col-sm-4">
                        <p className="m-b-10 f-w-600">Contract Validity</p>
                        <h6 className="text-muted f-w-400">{pla.contractvaliduntil}</h6>
                    </div>
                    <div className="col-sm-4">
                        <p className="m-b-10 f-w-600">Release Clause</p>
                        <h6 className="text-muted f-w-400">{pla.releaseclause}</h6>
                    </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Additional Details</h6>
                    <div className="row">
                    <div className="col-sm-4">
                        <p className="m-b-10 f-w-600">Wage</p>
                        <h6 className="text-muted f-w-400">{pla.wage}</h6>
                    </div>
                    <div className="col-sm-4">
                        <p className="m-b-10 f-w-600">Value</p>
                        <h6 className="text-muted f-w-400">{pla.value}</h6>
                    </div>
                    <div className="col-sm-4">
                        <p className="m-b-10 f-w-600">Overall</p>
                        <h6 className="text-muted f-w-400">{pla.overall}/100</h6>
                    </div>
                    </div>
                </div>
                 </div>
                
                </div>
                </div>
                )}
                </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Profile;