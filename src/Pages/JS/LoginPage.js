import React, {Fragment, useState} from "react";
import {Container, Button, Card, Form} from "react-bootstrap";
import '../CSS/LoginPage.css';  // Regular import for global styles
import PageFooter from "../../HeaderAndFooter/PageFooter.js";
import styles from "../CSS/MainStyles.module.css";
import {Link, useNavigate} from "react-router-dom";
import AppHeader from "../../HeaderAndFooter/PageHeader.js";
import { login } from "../../DatabaseCollections/AccountCreation.js";
import Input from "../JS COMPONENTS/Input.js";

const LoginPage = () => {
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const navigate = useNavigate();

    const handleLogin= () => {
        login(values.email, values.pass);
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
                            "text": "ADMIN LOGIN",
                            "link": "/create/account" /* Change link to be admin login page*/
                        }
                    ]}
                />
                <div className="login-section">
                    <Fragment>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Container className="form-container">
                            <Card className="login-form">
                                <Card.Body>
                                    <div className="brackets">
                                        <span className="bracket-icon">❮</span>
                                        <div className="welcome-text">
                                            <h1>Login</h1>
                                            <p>Log in with your GGC credentials<br/>to access your PSI sessions,
                                                schedules, and
                                                resources</p>
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
                                            <input type="checkbox"/>
                                            Stay Signed In
                                        </label>
                                        {/*<Button type="submit" className="submit-button">Login</Button>*/}
                                        <Button
                                            onClick={handleLogin}
                                            disabled={submitButtonDisabled}
                                            style={{ margin: "auto" }}
                                            className={"submit-button"}
                                        >
                                            Login
                                        </Button>
                                        <Link to="/forgot-password" className="forgot-password-link">
                                            Forgot password?
                                        </Link>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Fragment>
                </div>
                <br/>
                <br/>
                <PageFooter/>
            </div>
        </>
    );
};
export default LoginPage;
