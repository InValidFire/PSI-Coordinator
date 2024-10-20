import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../DatabaseCollections/AccountCreation.js";
import Input from "../JS COMPONENTS/Input.js";
import { Button, Card, Container, Form } from "react-bootstrap";
import "../CSS/LoginPage.css";
import styles from "../CSS/MainStyles.module.css";
import AppHeader from "../../HeaderAndFooter/PageHeader.js";

function CreateAccount() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        pass: "",
        confirm: "",
        role: "",
        classPSI: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const navigate = useNavigate();

    const handleOn = () => {
        const rm = document.getElementsByClassName("toggle");
        Array.from(rm).forEach((x) => {
            x.style.display = "none";
        });
        setErrorMessage("");
        setSubmitButtonDisabled(false);
    };

    const handleOff = () => {
        const rm = document.getElementsByClassName("toggle");
        Array.from(rm).forEach((x) => {
            x.style.display = "block";
        });
    };

    const handleAccount = () => {
        if (!values.firstName || !values.lastName || !values.email || !values.pass) {
            setErrorMessage("You must fill in all fields.");
            return;
        }
        const ggcEmailRegex = /@ggc\.edu$/;
        if (!ggcEmailRegex.test(values.email)) {
            setErrorMessage("Please enter a valid GGC student email (must end with @ggc.edu).");
            return;
        }
        if (values.confirm !== values.pass) {
            setErrorMessage("Passwords are not a match. Please try again.");
            return;
        }
        if (values.pass.length < 6) {
            setErrorMessage("Password must be 6 characters or longer.");
            return;
        }
        if (values.role === "psi" && !values.classPSI) {
            setErrorMessage("All PSI Leaders must have an assigned class.");
            return;
        }

        setErrorMessage("");
        setSubmitButtonDisabled(true);
        signup(values.firstName, values.lastName, values.email, values.pass, values.role, values.classPSI);

        if (values.role === "student") {
            navigate("/sessionSignUp");
        } else if (values.role === "psi") {
            navigate("/login");
        }
    };

    return (
        <>
            <div className={styles.scrollingAdminLoginContainer}>
                <AppHeader
                    pageTitle="CREATE ACCOUNT"
                    headerContents={[
                        {
                            "text": "LOGIN",
                            "link": "/"
                        }
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
                                            <h1>Create Account</h1>
                                            <p>
                                                Log in with your GGC credentials<br />
                                                to access your PSI sessions, schedules, and resources
                                            </p>
                                        </div>
                                        <span className="bracket-icon">❯</span>
                                    </div>
                                    <Form>
                                        <Input
                                            label="First Name"
                                            placeholder="Please enter your first name"
                                            onChange={(event) =>
                                                setValues((prev) => ({ ...prev, firstName: event.target.value }))
                                            }
                                        />
                                        <Input
                                            label="Last Name"
                                            placeholder="Please enter your last name"
                                            onChange={(event) =>
                                                setValues((prev) => ({ ...prev, lastName: event.target.value }))
                                            }
                                        />
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
                                        <Input
                                            type="password"
                                            label="Confirm"
                                            placeholder="Confirm password"
                                            onChange={(event) =>
                                                setValues((prev) => ({ ...prev, confirm: event.target.value }))
                                            }
                                        />
                                        <p className="text">Are you a PSI Leader?</p>
                                        <Input
                                            type="radio"
                                            label="Student"
                                            value="student"
                                            name="stuOrPSI"
                                            onChange={(event) =>
                                                setValues((prev) => ({ ...prev, role: event.target.value }))
                                            }
                                            onClick={handleOn}
                                        />
                                        <Input
                                            type="radio"
                                            label="PSI Leader"
                                            value="psi"
                                            name="stuOrPSI"
                                            onChange={(event) =>
                                                setValues((prev) => ({ ...prev, role: event.target.value }))
                                            }
                                            onClick={handleOff}
                                        />
                                        <div className="toggle" style={{ display: "none" }}>
                                            <Input
                                                label="Class Given for PSI"
                                                placeholder="Please select your class"
                                                onChange={(event) =>
                                                    setValues((prev) => ({ ...prev, classPSI: event.target.value }))
                                                }
                                            />
                                        </div>
                                        <Button
                                            onClick={handleAccount}
                                            disabled={submitButtonDisabled}
                                            style={{ margin: "auto" }}
                                        >
                                            Create Account
                                        </Button>

                                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Fragment>
                </div>
            </div>
        </>
    );
}

export default CreateAccount;
