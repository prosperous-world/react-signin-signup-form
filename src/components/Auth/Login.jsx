import {Checkbox, FormControlLabel} from "@material-ui/core";
import React, {useState} from "react";

import logo from "../../assets/images/logo.svg";
import topShape from "../../assets/images/shapetop.png";
import bottomShape from "../../assets/images/shapebottom.png";
import illustration from "../../assets/images/illustration.png";
import "./SignUp.css";
import MyInput from "../InputElements/MyInput";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import purple from "@material-ui/core/colors/purple";
import Box from "@material-ui/core/Box";


const ColorButton = withStyles((theme) => ({
    root: {
        padding: "10px 30px",
        color: theme.palette.getContrastText(purple[500]),
        fontSize: 15,
        fontWeight: 600,
        textTransform: "inherit",
        fontFamily: "sans-serif",
        backgroundColor: "#5f63f2",
        '&:hover': {
            backgroundColor: "#8c94ff",
        },
    },
}))(Button);


const LoginView = ({onClick, setData}) => {
    const [isClickedNext, setIsClickedNext] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formValidate = () => {
        setIsClickedNext(true);
        if (email == "" || password == "") {
            return;
        }
        onClick();
    }

    return (
        <>
            <MyInput
                placehol
                required={true}
                label={"Username or Email Address"}
                errMsg={"Please input username or email!"}
                status={!isClickedNext && email.length == 0 ? "init" : (isClickedNext && email.length == 0 ? "error" : "init")}
                value={email}
                type={'text'}
                updateText={(val) => {
                    setEmail(val)
                }}/>
            <MyInput
                required={true}
                label={"Password"}
                errMsg={"Please input password!"}
                status={!isClickedNext && password.length == 0 ? "init" : (isClickedNext && password.length == 0 ? "error" : "init")}
                value={password}
                type={'text'}
                updateText={(val) => {
                    setPassword(val)
                }}/>

            <div className={"item-flex"}>
                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary"/>}
                    label="Keep me logged in"
                    labelPlacement="end"
                    // classes={classes.font15}
                />
                <div className="auth-notice" style={{display:"inline"}}>
                    <Link to={"/reset"}>Forgot password?</Link>
                </div>
            </div>
            <div className="form-button">
                <Box mt={2}>
                    <ColorButton
                        onClick={() => {
                            formValidate();
                        }}>
                        Sign in
                    </ColorButton>

                </Box>
            </div>
        </>
    );
};


const SignIn = () => {

    const [data, setData] = useState({});

    return (
        <div className="auth-signUp">
            <div className="hero">
                <img className="topShape" src={topShape} alt="top"/>
                <img className="bottomShape" src={bottomShape} alt="bottom"/>
                <div className="hero-content">
                    <Link to="/login">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <h1>The Web Portal</h1>
                    <img
                        className="hero-image"
                        src={illustration}
                        alt="illustration"
                    />
                </div>
            </div>
            <div>
                <div className="auth-notice">
                    <span>Don’t have an account?</span>
                    <Link to={"/signup"}>Sign up</Link>
                </div>
                <div className="auth-container">
                    <div className="auth-content">
                        <form action="" className="form">
                            <h1 className="form-title">
                                Sign In to <span>Admin</span>
                            </h1>
                            <LoginView
                                setData={setData}
                                onClick={() => {
                                }}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
