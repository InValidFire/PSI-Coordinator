/*
import React, { Component, Fragment } from "react";
import { Table, Button, Form } from "react-bootstrap";
import styles from "../CSS/MainStyles.module.css";
import PageFooter from '../../HeaderAndFooter/PageFooter.js';
import AppHeader from "../../HeaderAndFooter/PageHeader.js";
import { findSession, updateSession } from "../../DatabaseCollections/PSISessionData.js";

class SessionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: null,
            students: [], // Always an array
            isEditing: false,
            updatedSession: {},
        };
    }

    componentDidMount() {
        this.loadSession();
    }

    loadSession = async () => {
        try {
            const sessions = await findSession(this.props.id2); // Assume this returns an array
            console.log("Session data:", sessions); // Debugging
            const session = sessions[0] || null; // Extract the first session or fallback to null
            const students = session?.studentsAttending || [];
            this.setState({
                session,
                students,
                updatedSession: { ...session },
            });
        } catch (error) {
            console.error("Error fetching session:", error);
            this.setState({
                session: null,
                students: [],
            });
        }
    };

    // Toggles edit mode
    toggleEdit = () => {
        this.setState((prevState) => ({
            isEditing: !prevState.isEditing,
        }));
    };

    // Handles input changes and updates state
    handleInputChange = (field, value) => {
        this.setState((prevState) => ({
            updatedSession: {
                ...prevState.updatedSession,
                [field]: value,
            },
        }));
    };

    saveChanges = async () => {
        try {
            const filteredSession = Object.fromEntries(
                Object.entries(this.state.updatedSession).filter(([key, value]) => value !== undefined)
            );

            const updatedSessionFromDB = await updateSession(
                this.props.id2,
                filteredSession
            );

            this.setState({
                session: updatedSessionFromDB || { ...filteredSession },
                updatedSession: updatedSessionFromDB || { ...filteredSession },
                isEditing: false, // Exit edit mode
            });

        } catch (error) {
            console.error("Error updating session:", error);
        }
    };


    render() {
        const { session, students, isEditing, updatedSession } = this.state;

        return (
            <>
                <AppHeader
                    pageTitle="SESSION DETAILS"
                    headerContents={[
                        {
                            "text": "BACK TO DASHBOARD",
                            "link": `/dashboard/leader/${this.props.id1}`
                        }
                    ]}
                />
                <Fragment className={styles.container}>
                    <div className={styles.header}>
                        <h1>
                            Session Details
                            {isEditing ? (
                                <Button
                                    onClick={this.saveChanges}
                                    className={styles.fillFormButton}
                                >
                                    Save
                                </Button>
                            ) : (
                                <Button
                                    onClick={this.toggleEdit}
                                    className={styles.fillFormButton}
                                >
                                    Edit
                                </Button>
                            )}
                        </h1>
                    </div>
                    <div className={styles.mainContent}>
                        {session ? (
                            <div className={styles.horizontalDetails}>
                                <p><strong>Leader Name: </strong>{session.leader}</p>
                                <p>
                                    <strong>Session Topic: </strong>
                                    {isEditing ? (
                                        <Form.Control
                                            type="text"
                                            value={updatedSession.topic}
                                            onChange={(e) =>
                                                this.handleInputChange("topic", e.target.value)
                                            }
                                        />
                                    ) : (
                                        session.topic
                                    )}
                                </p>
                                <p><strong>Class Course Name: </strong>{session.classname}</p>
                                <p><strong>Class Course Number: </strong>{session.classid}</p>
                                <p>
                                    <strong>Day: </strong>
                                    {isEditing ? (
                                        <Form.Control
                                            type="text"
                                            value={updatedSession.day}
                                            onChange={(e) =>
                                                this.handleInputChange("day", e.target.value)
                                            }
                                        />
                                    ) : (
                                        session.day
                                    )}
                                </p>
                                <p>
                                    <strong>Time: </strong>
                                    {isEditing ? (
                                        <Form.Control
                                            type="text"
                                            value={updatedSession.time}
                                            onChange={(e) =>
                                                this.handleInputChange("time", e.target.value)
                                            }
                                        />
                                    ) : (
                                        session.time
                                    )}
                                </p>
                                <p>
                                    <strong>Where: </strong>
                                    {isEditing ? (
                                        <Form.Control
                                            type="text"
                                            value={updatedSession.location}
                                            onChange={(e) =>
                                                this.handleInputChange("location", e.target.value)
                                            }
                                        />
                                    ) : (
                                        session.location
                                    )}
                                </p>
                            </div>
                        ) : (
                            <p>No session found.</p>
                        )}
                    </div>
                    <h2 className={styles.participantsHeader}>Participants</h2>
                    <div className={styles.mainContent}>
                        <Table className={styles.centeredTable}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {students && students.length > 0 ? (
                                students.map((curStudent) => (
                                    <tr key={curStudent.email}>
                                        <td>{curStudent.name}</td>
                                        <td>Attending</td>
                                        <td>{curStudent.email}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" style={{textAlign: "center"}}>
                                        No students attending this session.
                                    </td>
                                </tr>
                            )}
                            </tbody>

                        </Table>
                    </div>
                </Fragment>
                <div>
                    <h2>Resources</h2>
                    <div className={styles.upload}>
                        <h3>Upload A File</h3>
                    </div>
                </div>
                <PageFooter/>
            </>
        );
    }
}

export default SessionDetails;

*/

import React, { Component, Fragment } from "react";
import { Table, Button, Form } from "react-bootstrap";
import styles from "../CSS/MainStyles.module.css";
import PageFooter from '../../HeaderAndFooter/PageFooter.js';
import AppHeader from "../../HeaderAndFooter/PageHeader.js";
import { findSession, updateSession } from "../../DatabaseCollections/PSISessionData.js";

class SessionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: null,
            students: [], // Always an array
            isEditing: false,
            updatedSession: {},
            selectedFile: null, // To store the selected file
        };
    }

    componentDidMount() {
        this.loadSession();
    }

    loadSession = async () => {
        try {
            const sessions = await findSession(this.props.id2); // Assume this returns an array
            console.log("Session data:", sessions); // Debugging
            const session = sessions[0] || null; // Extract the first session or fallback to null
            const students = session?.studentsAttending || [];
            this.setState({
                session,
                students,
                updatedSession: { ...session },
            });
        } catch (error) {
            console.error("Error fetching session:", error);
            this.setState({
                session: null,
                students: [],
            });
        }
    };

    // Handles file selection
    handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first selected file
        if (file) {
            this.setState({
                selectedFile: file, // Save the selected file to state
            });
        }
    };

    // Toggles edit mode
    toggleEdit = () => {
        this.setState((prevState) => ({
            isEditing: !prevState.isEditing,
        }));
    };

    // Handles input changes and updates state
    handleInputChange = (field, value) => {
        this.setState((prevState) => ({
            updatedSession: {
                ...prevState.updatedSession,
                [field]: value,
            },
        }));
    };

    saveChanges = async () => {
        try {
            const filteredSession = Object.fromEntries(
                Object.entries(this.state.updatedSession).filter(([key, value]) => value !== undefined)
            );

            const updatedSessionFromDB = await updateSession(
                this.props.id2,
                filteredSession
            );

            this.setState({
                session: updatedSessionFromDB || { ...filteredSession },
                updatedSession: updatedSessionFromDB || { ...filteredSession },
                isEditing: false, // Exit edit mode
            });

        } catch (error) {
            console.error("Error updating session:", error);
        }
    };

    render() {
        const { session, students, isEditing, updatedSession, selectedFile } = this.state;

        return (
            <>
                <AppHeader
                    pageTitle="SESSION DETAILS"
                    headerContents={[
                        {
                            "text": "BACK TO DASHBOARD",
                            "link": `/dashboard/leader/${this.props.id1}`
                        }
                    ]}
                />
                <Fragment className={styles.container}>
                    <div className={styles.header}>
                        <h1>
                            Session Details
                            {isEditing ? (
                                <Button
                                    onClick={this.saveChanges}
                                    className={styles.fillFormButton}
                                >
                                    Save
                                </Button>
                            ) : (
                                <Button
                                    onClick={this.toggleEdit}
                                    className={styles.fillFormButton}
                                >
                                    Edit
                                </Button>
                            )}
                        </h1>
                    </div>
                    <div className={styles.mainContent}>
                        {session ? (
                            <div className={styles.horizontalDetails}>
                                <p><strong>Leader Name: </strong>{session.leader}</p>
                                <p>
                                    <strong>Session Topic: </strong>
                                    {isEditing ? (
                                        <Form.Control
                                            type="text"
                                            value={updatedSession.topic}
                                            onChange={(e) =>
                                                this.handleInputChange("topic", e.target.value)
                                            }
                                        />
                                    ) : (
                                        session.topic
                                    )}
                                </p>
                                <p><strong>Class Course Name: </strong>{session.classname}</p>
                                <p><strong>Class Course Number: </strong>{session.classid}</p>
                                <p>
                                    <strong>Day: </strong>
                                    {isEditing ? (
                                        <Form.Control
                                            type="text"
                                            value={updatedSession.day}
                                            onChange={(e) =>
                                                this.handleInputChange("day", e.target.value)
                                            }
                                        />
                                    ) : (
                                        session.day
                                    )}
                                </p>
                                <p>
                                    <strong>Time: </strong>
                                    {isEditing ? (
                                        <Form.Control
                                            type="text"
                                            value={updatedSession.time}
                                            onChange={(e) =>
                                                this.handleInputChange("time", e.target.value)
                                            }
                                        />
                                    ) : (
                                        session.time
                                    )}
                                </p>
                                <p>
                                    <strong>Where: </strong>
                                    {isEditing ? (
                                        <Form.Control
                                            type="text"
                                            value={updatedSession.location}
                                            onChange={(e) =>
                                                this.handleInputChange("location", e.target.value)
                                            }
                                        />
                                    ) : (
                                        session.location
                                    )}
                                </p>
                            </div>
                        ) : (
                            <p>No session found.</p>
                        )}
                    </div>
                    <h2 className={styles.participantsHeader}>Participants</h2>
                    <div className={styles.mainContent}>
                        <Table className={styles.centeredTable}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {students && students.length > 0 ? (
                                students.map((curStudent) => (
                                    <tr key={curStudent.email}>
                                        <td>{curStudent.name}</td>
                                        <td>Attending</td>
                                        <td>{curStudent.email}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" style={{textAlign: "center"}}>
                                        No students attending this session.
                                    </td>
                                </tr>
                            )}
                            </tbody>

                        </Table>
                    </div>
                    <div>
                        <h2>Resources</h2>
                        <div
                            className={styles.upload}
                            onClick={() => document.getElementById("file-input").click()} // Trigger file input click
                        >
                            <h3>Upload A File</h3>
                        </div>
                        <input
                            type="file"
                            id="file-input"
                            style={{ display: "none" }} // Hide the input
                            onChange={this.handleFileChange} // Handle file selection
                        />
                        {selectedFile && (
                            <div>
                                <h4>Selected File: {selectedFile.name}</h4>
                            </div>
                        )}
                    </div>
                </Fragment>
                <PageFooter/>
            </>
        );
    }
}

export default SessionDetails;

