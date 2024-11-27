import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";
import "../CSS/LoginPage.css";
import styles from "../CSS/MainStyles.module.css";
import AppHeader from "../../HeaderAndFooter/PageHeader.js";
import PageFooter from "../../HeaderAndFooter/PageFooter.js";
import { readSessions, addStudent } from "../../DatabaseCollections/PSISessionData.js";
import {addSessionId, findUser} from "../../DatabaseCollections/AccountCreation.js";

function SessionSignup() {
    const [sessions, setSessions] = useState([]); // To store the list of sessions
    const [selectedSessions, setSelectedSessions] = useState([]); // To track selected sessions
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    // Fetch sessions on component mount
    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const sessionList = await readSessions();
                setSessions(sessionList);
            } catch (error) {
                setErrorMessage("Failed to fetch sessions.");
            }
        };
        fetchSessions();
    }, []);

    // Handle session selection
    const handleSelection = (sessionId) => {
        setSelectedSessions((prevSelected) =>
            prevSelected.includes(sessionId)
                ? prevSelected.filter((previd) => previd !== sessionId) // Remove if already selected
                : [...prevSelected, sessionId] // Add if not already selected
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedSessions.length === 0) {
            setErrorMessage("You must select at least one session.");
            return;
        }

        try {
            const userDetails = await findUser(id);
            console.log(userDetails);

            if (userDetails.length === 0) {
                setErrorMessage("User details not found.");
                return;
            }

            // Loop through selected sessions and update each
            for (const sessionId of selectedSessions) {
                await addStudent(sessionId, id, userDetails.name, userDetails.email);
                await addSessionId(sessionId, id);
            }

            navigate(`/dashboard/student/${id}`);
        } catch (error) {
            setErrorMessage("An error occurred while signing up. Please try again.");
        }
    };

    return (
        <>
            <div className={styles.scrollingAdminLoginContainer}>
                <AppHeader
                    pageTitle="SESSION SIGNUP"
                    headerContents={[
                        {
                            text: "BACK TO DASHBOARD",
                            link: `/dashboard/student/${id}`,
                        },
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
                                    <h1 className="login-header">Session Signup</h1>
                                    <p>Select the sessions you want to attend:</p>
                                    {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
                                    <Form onSubmit={handleSubmit}>
                                        {sessions.map((session) => (
                                            <Form.Check
                                                key={session.id}
                                                label={`${session.day} - ${session.time} | ${session.classname} (${session.topic})`}
                                                onChange={() => handleSelection(session.id)}
                                                type="checkbox"
                                            />
                                        ))}
                                        <Button
                                            type="submit"
                                            className={styles.saveBtn}
                                            disabled={sessions.length === 0}
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Fragment>
                </div>
            </div>
            <PageFooter/>
        </>
    );
}

export default SessionSignup;
