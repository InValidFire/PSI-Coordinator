import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams
import { createSession } from "../../DatabaseCollections/PSISessionData.js";
import { Button, Card, Container, Form } from "react-bootstrap";
import "../CSS/LoginPage.css";
import styles from "../CSS/MainStyles.module.css";
import AppHeader from "../../HeaderAndFooter/PageHeader.js";
import PageFooter from "../../HeaderAndFooter/PageFooter.js";
import {available_psi_days} from "../JS COMPONENTS/FORM SELECTION OPTIONS/AvailableDays.js";
import {available_time_blocks} from "../JS COMPONENTS/FORM SELECTION OPTIONS/AvailableTimes.js";
import {available_class_codes_and_names} from "../JS COMPONENTS/FORM SELECTION OPTIONS/AvailableClasses.js";
import {available_class_locations} from "../JS COMPONENTS/FORM SELECTION OPTIONS/AvailableClassLocations.js";
import Input from "../JS COMPONENTS/Input.js";

function CreateSession(index) {
    const [values, setValues] = useState({
        fullName: "",
        topic: "",
        classinfo: "",
        day: "",
        time: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams(); // Retrieve the id from the URL

    const handleAccount = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!values.day || !values.time || !values.classinfo
            || !values.topic || !values.fullName || !values.location) {
            setErrorMessage("You must fill in all fields.");
            return;
        }

        setErrorMessage("");
        setSubmitButtonDisabled(true);

        try {
            let classCodeAndName = values.classinfo.split("-");
            await createSession(
                values.day,
                values.time,
                classCodeAndName.at(0),
                classCodeAndName.at(1),
                values.topic,
                values.fullName,
                values.location,
            );
        } catch (error) {
            setErrorMessage("Error creating session. Please try again.");
            setSubmitButtonDisabled(false);
        }

        navigate(`/dashboard/leader/${id}`);
    };

    return (
        <>
            <div className={styles.scrollingAdminLoginContainer}>
                <AppHeader
                    pageTitle="CREATE SESSION"
                    headerContents={[
                        {
                            text: "LOGOUT",
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
                                    <h1 className={"login-header"}>Create Session</h1>
                                    <div className="brackets">
                                        <span className="bracket-icon">❮</span>
                                        <div>
                                            <p className={"welcome-text"}>Create your PSI session</p>
                                        </div>
                                        <span className="bracket-icon">❯</span>
                                    </div>
                                    <Form onSubmit={handleAccount}>
                                        <Input
                                            label="First and Last Name"
                                            placeholder="Please enter your first and last name"
                                            onChange={(event) =>
                                                setValues((prev) => ({...prev, fullName: event.target.value}))
                                            }
                                        />
                                        <Input
                                            label="Session Topic"
                                            placeholder="Please enter your session topic"
                                            onChange={(event) =>
                                                setValues((prev) => ({...prev, topic: event.target.value}))
                                            }
                                        />
                                        <Form.Group className={"mb-3"}>
                                            <Form.Label>Day: </Form.Label>
                                            <Form.Select
                                                className={styles.formControl}
                                                required
                                                onChange={(event) =>
                                                    setValues((prev) => ({...prev, day: event.target.value}))}
                                            >
                                                <option value={""}>Please select a day to hold your
                                                    session:
                                                </option>
                                                {
                                                    available_psi_days.map((day) => (
                                                        <option key={day} value={day}>{day}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className={"mb-3"}>
                                            <Form.Label>Time: </Form.Label>
                                            <Form.Select
                                                className={styles.formControl}
                                                required
                                                onChange={(event) =>
                                                    setValues((prev) => ({...prev, time: event.target.value}))}
                                            >
                                                <option value={""}>Please select a time period:
                                                </option>
                                                {
                                                    available_time_blocks.map((time) => (
                                                        <option key={time} value={time}>{time}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className={"mb-3"}>
                                            <Form.Label>Class Code and Name: </Form.Label>
                                            <Form.Select
                                                className={styles.formControl}
                                                required
                                                onChange={(event) =>
                                                    setValues((prev) => ({...prev, classinfo: event.target.value}))}
                                            >
                                                <option value={""}>Please select a class to lead:
                                                </option>
                                                {
                                                    available_class_codes_and_names.map((code) => (
                                                        <option key={code} value={code}>{code}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className={"mb-3"}>
                                            <Form.Label>Session Location: </Form.Label>
                                            <Form.Select
                                                className={styles.formControl}
                                                required
                                                onChange={(event) =>
                                                    setValues((prev) => ({...prev, location: event.target.value}))}
                                            >
                                                <option value={""}>Please select the location where your session will be
                                                    held:
                                                </option>
                                                {
                                                    available_class_locations.map((location) => (
                                                        <option key={location} value={location}>{location}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </Form.Group>

                                        <br/>
                                        <br/>
                                        <Button
                                            onClick={handleAccount}
                                            disabled={submitButtonDisabled}
                                            style={{margin: "auto"}}
                                        >
                                            Create Session
                                        </Button>

                                        {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
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

export default CreateSession;
