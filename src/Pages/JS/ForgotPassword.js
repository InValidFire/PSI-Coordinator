import React, { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import '../CSS/LoginPage.css';  // Regular import for global styles
import PageFooter from "../../HeaderAndFooter/PageFooter.js";
import styles from "../CSS/MainStyles.module.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset email sent!");
            setError("");
            setTimeout(() => {
                navigate("/login"); // Navigate back to login page after 3 seconds
            }, 3000);
        } catch (error) {
            setError("Error sending password reset email. Please try again.");
            setMessage("");
        }
    };

    return (
        <>
            <div className={styles.scrollingAdminLoginContainer}>
                <div className="login-section">
                    <Container className="form-container">
                        <Card className="login-form">
                            <Card.Body>
                                <div className="brackets">
                                    <span className="bracket-icon">❮</span>
                                    <div className="welcome-text">
                                        <h1>Forgot Password</h1>
                                        <p>Enter your email to reset your password</p>
                                    </div>
                                    <span className="bracket-icon">❯</span>
                                </div>
                                <form onSubmit={handlePasswordReset}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="form-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="button-group">
                                        <Button type="submit" className="submit-button">Reset Password</Button>
                                    </div>
                                    {message && <p style={{ color: "green" }}>{message}</p>}
                                    {error && <p style={{ color: "red" }}>{error}</p>}
                                </form>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
                <PageFooter />
            </div>
        </>
    );
};

export default ForgotPassword;