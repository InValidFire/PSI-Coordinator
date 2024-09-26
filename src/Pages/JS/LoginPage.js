import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import '../CSS/LoginPage.css';  // Adjust the path based on the structure
import AppFooter from '../../HeaderAndFooter/PageFooter.js';

const LoginPage = () => {
    return (
        <>
            <div className="login-section">
                <div className="brackets">
                    <span className="bracket-icon">❮</span>
                    <div className="welcome-text">
                        <h1>Login</h1>
                        <p>Log in with your GGC credentials<br />to access your PSI sessions, schedules, and resources</p>
                    </div>
                    <span className="bracket-icon">❯</span>
                </div>

                <Container className="form-container">
                    <Card className="login-form">
                        <Card.Body>
                            <form>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-input"
                                    aria-label="Email"
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="form-input"
                                    aria-label="Password"
                                    required
                                />
                                <label className="checkbox-label" htmlFor="staySignedIn">
                                    <input type="checkbox" id="staySignedIn" />
                                    Stay Signed In
                                </label>
                                <Button type="submit" className="submit-button">Login</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
            <AppFooter />
        </>
    );
};

export default LoginPage;
