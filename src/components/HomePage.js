import React, { Component } from 'react'
import jwt_decode from "jwt-decode"
import { withRouter } from "react-router-dom";

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message: ''
        }
    }
    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    formSubmitHandler = (event) => {
        event.preventDefault()
        let token = ''
        fetch(`http://fb.sellernext.com/user/login?username=${this.state.username}&password=${this.state.password}`, {
            headers: {
                authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                if(result.success === true)  {
                    this.setState({
                        message: <h3>Logged In</h3>
                    })
                    this.props.history.push("/register")
                    console.log(this.props);
                    token = result.data.token
                    localStorage.setItem('token',  result.data.token);
                    // console.log(this.parseJwt(token))
                    // var decoded = jwt_decode(token)
                    // console.log(decoded);
                    // var decodedHandler = jwt_decode(token, {header: true})
                    // console.log(decodedHandler);

                } else {
                    this.setState({
                        message: <h3>Log In Failed</h3>
                    })
                }
            }   
        )
    }
   
    render() {
        const { username, password } = this.state
        return (
            <form onSubmit={this.formSubmitHandler}>
                <h1>User Information</h1>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.usernameHandler} />
                <label>Password</label>
                <input type='text' value={this.state.password} onChange={this.passwordHandler} />
                <button type="submit">Log In</button>
                <div>{this.state.message}</div>
            </form>
        )
    }
}

export default withRouter(HomePage)
// http://fb.sellernext.com/connector/products/getProducts