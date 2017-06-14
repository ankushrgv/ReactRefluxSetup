// import Formsy from 'formsy-react';
import React from "react";
import LoginAction from './LoginAction.jsx';
import LoginStore from './LoginStore.jsx';


let Login = React.createClass({

    getInitialState: function() {
        return {
            canSubmit: false,
            homeRedirect: 0,
            username: '',
            password: ''
        };
    },

    componentWillMount: function() {
        this.unsubscribe = LoginStore.listen(this.onVerification);
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    },

    onVerification: function(data) {
        if(data.type === 'credentialVerification'){
            if(data.value === 'success'){
                this.setState({
                    homeRedirect: 1
                })
            }
            else{
                this.setState({
                    homeRedirect: -1
                })
            }
        }
    },

    enableButton() {
        this.setState({
            canSubmit: true
        });
    },

    onUsernameChange: function(e) {
        this.setState({
            username: e.target.value
        });
    },

    onPasswordChange: function(e) {
        this.setState({
            password: e.target.value
        });
        if(e.target.value.length == 5){
            this.submit();
        }
    },

    submit: function() {
        LoginAction.CREDENTIALS_VERIFICATION(this.state.username, this.state.password);
    },

    render: function() {
        return (
            <div>
                <div>Header</div>
                {
                    this.state.homeRedirect == 1
                    ?
                    <h2>Welcome {this.state.username}</h2>
                    : null
                }
                {
                    this.state.homeRedirect == -1
                    ?
                    <h2>Incorrect username or password</h2>
                    : null
                }
                {
                    this.state.homeRedirect == 0
                    ?
                    <div>
                        <h1>Sign In</h1>
                        <div>
                            <span>{this.state.username}</span>
                            <span>{this.state.password}</span>
                            <div>
                                <label>UserName</label>
                                <input name='username'
                                    placeholder='someone@gmail.com'
                                    default=''
                                    value={this.state.username}
                                    onChange={this.onUsernameChange}/>
                            </div>
                            <div>
                                <label>Password</label>
                                <input name='password'
                                    placeholder='**********'
                                    default=''
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.onPasswordChange}/>
                            </div>
                        </div>
                    </div>
                    : null
                }
                <div>Footer</div>
            </div>
        );
    }
});

module.exports = Login;
