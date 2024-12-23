import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import FieldEntry from "../../Field-Entry.js";
import styles from '../CSS/MainStyles.module.css';
import { Card, Container } from "react-bootstrap";
import PageFooter from "../../HeaderAndFooter/PageFooter.js";
import AppHeader from "../../HeaderAndFooter/PageHeader.js";
import { readSessions } from "../../DatabaseCollections/PSISessionData.js";

// Right now this page is reading all the session data in the database so we need to change the logic so that
// we are only reading the current psi leaders sessions

class PSILeaderDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessions: [],
        };
    }

    // Fetch session data when the component mounts
    componentDidMount() {
        this.loadSessions();
    }

    // Function to load sessions and set state
    loadSessions = async () => {
        try {
            const sessions = await readSessions(); // Fetch sessions data
            this.setState({ sessions }); // Set sessions in state
        } catch (error) {
            console.error("Error loading sessions:", error);
        }
    };

    render() {
        const { sessions } = this.state; // Destructure sessions from state

        return (
            <>
                <div className={styles.scrollingAdminLoginContainer}>
                    <AppHeader
                        pageTitle="PSI LEADER DASHBOARD"
                        headerContents= {[
                            {
                                text: "STUDENT DASHBOARD",
                                link: `/dashboard/student/${this.props.id}`
                            },
                            {
                                text: "CREATE NEW SESSION",
                                link: `/create/session/${this.props.id}`
                            },
                            {
                                text: "LOGOUT",
                                link: "/login"
                            },
                        ]}
                    />
                    <Fragment>
                        <div className={styles.container}>
                            <div className={styles.contentContainer}>
                                <main className={styles.mainContent}>
                                    <Container className={styles.scrollableContent}>
                                        <Card className={styles.formSection}>
                                            <Card.Title className={styles.formSectionTitle} id="currentSchedule">
                                                Upcoming PSI Schedule
                                            </Card.Title>
                                            <Card.Text>
                                                Click on each time to view the session details.
                                            </Card.Text>
                                            <div className={styles.formData}>
                                                {sessions.length > 0 ? (
                                                    sessions.map((session) => (
                                                        <div key={session.id}>
                                                            <FieldEntry entryName={session.day} entryValue={`${session.time} - ${session.classname}`} />
                                                            <Link to={`/session/details/${this.props.id}/${session.id}`}>
                                                                <button className={styles.fillFormButton}>
                                                                    View Session Details
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>No sessions scheduled at the moment.</p>
                                                )}
                                            </div>
                                        </Card>
                                        <br />
                                        <br />
                                    </Container>
                                </main>
                            </div>
                        </div>
                        <PageFooter />
                    </Fragment>
                </div>
            </>
        );
    }
}

export default PSILeaderDashboard;
