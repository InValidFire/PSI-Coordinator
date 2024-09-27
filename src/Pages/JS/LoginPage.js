import React, { Fragment } from "react";
import { Container, Button, Card } from "react-bootstrap";
import '../CSS/LoginPage.css';  // Regular import for global styles
import PageFooter from "../../HeaderAndFooter/PageFooter.js";
import styles from "../CSS/MainStyles.module.css";

const LoginPage = () => {
    return (
        <>
            <div
                className={styles.scrollingAdminLoginContainer}
            >
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
                                    <form>
                                        <input type="email" placeholder="Email" className="form-input"/>
                                        <input type="password" placeholder="Password" className="form-input"/>
                                        <label className="checkbox-label">
                                            <input type="checkbox"/>
                                            Stay Signed In
                                        </label>
                                        <Button type="submit" className="submit-button">Login</Button>
                                    </form>
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
