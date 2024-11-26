import React, {Fragment, useState} from "react";
import {Container, Button, Card, Form} from "react-bootstrap";
import '../CSS/LoginPage.css';
import PageFooter from "../../HeaderAndFooter/PageFooter.js";
import styles from "../CSS/MainStyles.module.css";
import {Link, useNavigate} from "react-router-dom";
import AppHeader from "../../HeaderAndFooter/PageHeader.js";
import { login, verification } from "../../DatabaseCollections/AccountCreation.js";
import Input from "../JS COMPONENTS/Input.js";

const LoginPage = () => {
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const navigate = useNavigate();

    const handleErrors = async () => {
        if (!values.email || !values.pass) {
            setErrorMessage("Email and password are required");
            return;
        }

        try {
            const precheckLogin = await login(values.email, values.pass);
            await handleLogin(precheckLogin); // Proceed with verification and login
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                setErrorMessage("Account not found. Please check your credentials.");
            } else {
                setErrorMessage("An error occurred. Please try again later.");
            }
        }
    };


    const handleLogin = async (precheckLogin) => {
        setSubmitButtonDisabled(true);
        const leaderVerified = await verification(values.email);
        if (!leaderVerified)
            setErrorMessage("Login Access Denied. Your account has not yet been verified.");
        else{
            navigate(`/dashboard/leader/${precheckLogin.uid}`);
        }
    }


    return (
        <>
            <div
                className={styles.scrollingAdminLoginContainer}
            >
                <AppHeader
                    pageTitle="LOGIN"
                    headerContents={[
                        {
                            "text": "CREATE ACCOUNT",
                            "link": "/create/account"
                        }/*,
                        {
                            "text": "ADMIN LOGIN",
                            "link": "/create/account" /!* Change link to be admin login page*!/
                        }*/
                    ]}
                />
                <div className="login-section">
                    <Fragment>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Container className="form-container">
                            <Card className="login-form">
                                <Card.Body>
                                    <div className="brackets">
                                        <span className="bracket-icon">❮</span>
                                        <div className="welcome-text">
                                            <h1>Login</h1>
                                            <p>Log in with your GGC credentials<br />to access your PSI sessions, schedules, and resources</p>
                                        </div>
                                        <span className="bracket-icon">❯</span>
                                    </div>
                                    <Form>
                                        <Input
                                            type="email"
                                            label="GGC Email"
                                            placeholder="Enter email address"
                                            onChange={(event) =>
                                                setValues((prev) => ({ ...prev, email: event.target.value }))
                                            }
                                        />
                                        <Input
                                            type="password"
                                            label="Password"
                                            placeholder="Enter password"
                                            onChange={(event) =>
                                                setValues((prev) => ({ ...prev, pass: event.target.value }))
                                            }
                                        />
                                        <label className="checkbox-label">
                                            <input type="checkbox" />
                                            Stay Signed In
                                        </label>
                                        {/*<Button type="submit" className="submit-button">Login</Button>*/}
                                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                                        <Button
                                            onClick={handleErrors}
                                            disabled={submitButtonDisabled}
                                            style={{ margin: "auto" }}
                                            className={"submit-button"}
                                        >
                                            Login
                                        </Button>
                                        <Link to="/create/account">
                                            Sign Up
                                        </Link><br/>
                                        <Link to="/forgot-password" className="forgot-password-link">
                                            Forgot password?
                                        </Link>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Fragment>
                </div>
                <br />
                <br />
                <PageFooter />
            </div>
        </>
    );
};

export default LoginPage;