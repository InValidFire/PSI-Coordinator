import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams
import { createSession } from "../../DatabaseCollections/PSISessionData.js";
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
    const { id } = useParams(); // Retrieve the id from the URL

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
            await createSession(
                values.day,
                values.time,
                values.classid,
                values.classname,
                values.topic,
                values.leader,
                values.location
            );

        } catch (error) {
            setErrorMessage("Error creating session. Please try again.");
            setSubmitButtonDisabled(false);
        }
    };

    return (
        <>
            <div className={styles.scrollingAdminLoginContainer}>
                <AppHeader
                    pageTitle="CREATE SESSION"
                    headerContents={[
                        {
                            text: "LOGIN",
                            link: "/login",
                        },
                        {
                            text: "BACK TO DASHBOARD",
                            link: `/dashboard/leader/${id}`, // Use id in the link
                        },
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
                                            <p>Create your PSI session</p>
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
