import * as React from 'react';


import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,

}
    from 'mdb-react-ui-kit';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Component} from "react";

export class Home extends Component{

    render(){
        return (
            <MDBContainer fluid>

                <MDBCard className='text-black mt-5' style={{borderRadius: '20px'}}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">student form</p>

                                <div className="d-flex flex-row align-items-center mb-4 ">
                                    <MDBIcon fas icon="user me-3" size='lg'/>
                                    <MDBInput placeholder='first name' id='form1' type='text' className='w-100'/>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                                    <MDBInput placeholder='last name' id='form2' type='text'/>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg'/>
                                    <MDBInput  id='form3' type='date' placeholder='date'/>
                                </div>


                                <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
    );
}

/*
export default function InputWithIcon() {
    return (
        //<Box  sx={{ '& > :not(style)': { m: 1 }, alignContent:'center' }}>
        <Box sx={{ '& > :not(style)': { m: 1 }, textAlign: 'center',marginTop:'40px' }}>
            <FormControl variant="standard">

                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl variant="standard">

                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>


            <Box sx={{ '& > :not(style)': { m: 1 }, textAlign: 'center', alignContent: 'center' }}>
                {/*  <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="With sx" variant="standard" />
            </Box>
        </Box>
    );
}
*/}