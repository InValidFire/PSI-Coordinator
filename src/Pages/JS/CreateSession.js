import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSession } from "../../DatabaseCollections/PSISessionData.js";
import Input from "../JS COMPONENTS/Input.js";
import { Button, Card, Container, Form } from "react-bootstrap";
import "../CSS/LoginPage.css";
import styles from "../CSS/MainStyles.module.css";
import AppHeader from "../../HeaderAndFooter/PageHeader.js";
import PageFooter from "../../HeaderAndFooter/PageFooter.js";

function CreateSession() {
    const [values, setValues] = useState({
        day: "",
        time: "",
        classid: "",
        classname: "",
        topic: "",
        leader: "",
        location: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const navigate = useNavigate();

    const handleAccount = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!values.day || !values.time || !values.classid || !values.classname
        || !values.topic || !values.leader || !values.location) {
            setErrorMessage("You must fill in all fields.");
            return;
        }

        setErrorMessage("");
        setSubmitButtonDisabled(true);

        try {
            createSession(values.day, values.time, values.classid, values.classname, values.topic, values.leader, values.location).then(r => "");

        } catch (error) {
            if (error.code === "auth/weak-password") {
                setErrorMessage("Password is too weak. Please enter at least 6 characters and a number.");
            }
            else
                setErrorMessage("Error creating account. Please try again.");
            setSubmitButtonDisabled(false);
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
                            "link": "/login"
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
                                            <h1>Create Session</h1>
                                            <p>
                                                Create your PSI session
                                            </p>
                                        </div>
                                        <span className="bracket-icon">❯</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Fragment>
                </div>
            </div>
            <PageFooter />
        </>
    );
}

export default CreateSession;
