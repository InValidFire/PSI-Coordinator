import React, {Fragment, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../DatabaseCollections/AccountCreation.js";
import Input from "../JS COMPONENTS/Input.js";
import {Button, Card, Container, Form} from "react-bootstrap";
import "../CSS/LoginPage.css";
import styles from "../CSS/MainStyles.module.css";

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
        if (values.confirm !== values.pass) {
            setErrorMessage("Passwords are not a match. Please try again.");
            return;
        }
        if (values.pass.length < 6) {
            setErrorMessage("Password must be 6 characters or longer.");
            return;
        }
        if (values.role === "psi" && !values.classPSI) {
            setErrorMessage(
                "All PSI Leaders must have and assigned class.",
            );
            return;
        }
        setErrorMessage("");
        setSubmitButtonDisabled(true);
        signup(values.firstName, values.lastName, values.email, values.pass, values.role, values.classPSI);

        if (values.role === "student") navigate("/login");
    };

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
                                            <h1>Create Account</h1>
                                            <p>Log in with your GGC credentials<br/>to access your PSI sessions,
                                                schedules, and
                                                resources</p>
                                        </div>
                                        <span className="bracket-icon">❯</span>
                                    </div>
                                    <Form>
                                        <Input
                                            label="First Name"
                                            placeholder="Please enter your first name"
                                            onChange={(event) =>
                                                setValues((prev) => ({...prev, firstName: event.target.value}))
                                            }
                                        />
                                        <Input
                                            label="Last Name"
                                            placeholder="Please enter your last name"
                                            onChange={(event) =>
                                                setValues((prev) => ({...prev, lastName: event.target.value}))
                                            }
                                        />
                                        <Input
                                            type="email"
                                            label="GGC Email"
                                            placeholder="Enter email address"
                                            onChange={(event) =>
                                                setValues((prev) => ({...prev, email: event.target.value}))
                                            }
                                        />
                                        <Input
                                            type="password"
                                            label="Password"
                                            placeholder="Enter password"
                                            onChange={(event) =>
                                                setValues((prev) => ({...prev, pass: event.target.value}))
                                            }
                                        />
                                        <Input
                                            type="password"
                                            label="Confirm"
                                            placeholder="Confirm password"
                                            onChange={(event) =>
                                                setValues((prev) => ({...prev, confirm: event.target.value}))
                                            }
                                        />
                                        <p className="text">Are you a PSI Leader?</p>
                                        <Input
                                            type="radio"
                                            label="Student"
                                            value="student"
                                            name="stuOrPSI"
                                            onChange={(event) =>
                                                setValues((prev) => ({...prev, role: event.target.value}))
                                            }
                                            onClick={(event) => handleOn()}
                                        />
                                        <Input
                                            type="radio"
                                            label="PSI Leader"
                                            value="psi"
                                            name="stuOrPSI"
                                            onChange={(event) =>
                                                setValues((prev) => ({...prev, classif: event.target.value}))
                                            }
                                            onClick={(event) => handleOff()}
                                        />
                                        <div className="toggle" style={{display: "none"}}>
                                            <Input
                                                label="Class Given for PSI"
                                                placeholder="Please select your class: "
                                                onChange={(event) =>
                                                    setValues((prev) => ({...prev, classPSI: event.target.value}))
                                                }
                                            />
                                        </div>
                                        <Button
                                            text="Create Account"
                                            onClick={handleAccount}
                                            style={{margin: "auto"}}
                                        />
                                        {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Fragment>
                </div>
                {/*<div className="CreateAccount">
                    <h4>Create Account</h4>
                    <Input
                        label="First Name"
                        placeholder="Please enter your first name"
                        onChange={(event) =>
                            setValues((prev) => ({...prev, fname: event.target.value}))
                        }
                    />
                    <Input
                        label="Last Name"
                        placeholder="Please enter your last name"
                        onChange={(event) =>
                            setValues((prev) => ({...prev, lname: event.target.value}))
                        }
                    />
                    <Input
                        type="email"
                        label="GGC Email"
                        placeholder="Enter email address"
                        onChange={(event) =>
                            setValues((prev) => ({...prev, email: event.target.value}))
                        }
                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholder="Enter password"
                        onChange={(event) =>
                            setValues((prev) => ({...prev, pass: event.target.value}))
                        }
                    />
                    <Input
                        type="password"
                        label="Confirm"
                        placeholder="Confirm password"
                        onChange={(event) =>
                            setValues((prev) => ({...prev, confirm: event.target.value}))
                        }
                    />
                    <p className="text">Are you a Student or an Instructor?</p>
                    <Input
                        type="radio"
                        label="Student"
                        value="student"
                        name="stuOrIns"
                        onChange={(event) =>
                            setValues((prev) => ({...prev, classif: event.target.value}))
                        }
                        onClick={(event) => handleOn()}
                    />
                    <Input
                        type="radio"
                        label="Instructor"
                        value="instructor"
                        name="stuOrIns"
                        onChange={(event) =>
                            setValues((prev) => ({...prev, classif: event.target.value}))
                        }
                        onClick={(event) => handleOff()}
                    />
                    <div className="toggle" style={{display: "none"}}>
                        <Input
                            label="900 Number"
                            placeholder="Please enter your 900#"
                            onChange={(event) =>
                                setValues((prev) => ({...prev, num: event.target.value}))
                            }
                        />
                        <br></br>
                        <Input
                            label="Department"
                            placeholder="Please enter your department"
                            onChange={(event) =>
                                setValues((prev) => ({...prev, department: event.target.value}))
                            }
                        />
                    </div>
                    <ButtonPrimary
                        text="Create Account"
                        onClick={handleAccount}
                        style={{margin: "auto"}}
                    />

                    {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}

                    <p>
                        Add Classes?{" "}
                        <span>
            <Link to="/add/classes">Add Classes</Link>
          </span>
                    </p>

                    {props.haveAccount && (
                        <p>
                            Already have an account?{" "}
                            <span>
            <Link to="/student/login">Login</Link>
          </span>
                        </p>
                    )}
                </div>*/}
            </div>
        </>
    );
}

export default CreateAccount;
