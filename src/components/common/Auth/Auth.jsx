import React from "react";
import "./AuthStyles.css";

class Auth extends React.Component {
    render() {
        return (
            <div className="auth-btn-group">
                <button className="btn btn-default auth-btn auth-linkedin">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>&nbsp;LinkedIn</button>
                <button className="btn btn-default auth-btn auth-facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>&nbsp;Facebook</button>
                <button className="btn btn-default auth-btn auth-google">
                    <i className="fa fa-google" aria-hidden="true"></i>&nbsp;Google</button>
            </div>
        );
    }
}

export default Auth;
