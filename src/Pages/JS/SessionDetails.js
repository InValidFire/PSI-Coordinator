import React, { Component, Fragment } from "react";
import { Table, Button } from "react-bootstrap";
import styles from "../CSS/MainStyles.module.css";
import PageFooter from '../../HeaderAndFooter/PageFooter.js';
import AppHeader from "../../HeaderAndFooter/PageHeader.js";
import { findSession } from "../../DatabaseCollections/PSISessionData.js";

class SessionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: [], // setting state to store current session data
        };
    }

    componentDidMount() {
        this.loadSession();
    }

    loadSession = async () => {
        try {
            const session = await findSession(this.props.id2); // id2 holds the session unique data
            this.setState({ session });
            console.log(this.state.session);
        } catch (error) {
            console.log("Can't find corresponding session!");
        }
    }

    render() {
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
                        <h1>Session Details
                            <Button
                                type="submit"
                                className={styles.fillFormButton}
                                id="button-addon1"
                            >
                                Edit
                            </Button>
                        </h1>
                    </div>
                    <div className={styles.mainContent}>
                            {this.state.session.length > 0 ? (
                                this.state.session.map((cursession) => (
                                    <div className={styles.horizontalDetails}>
                                        <p><strong>Leader Name: </strong>{cursession.leader}</p>
                                        <p><strong>Session Topic: </strong>{cursession.topic}</p>
                                        <p><strong>Class Course Name: </strong>{cursession.classname}</p>
                                        <p><strong>Class Course Number: </strong> {cursession.classid}</p>
                                        <p><strong>Day: </strong> {cursession.day}</p>
                                        <p><strong>Time: </strong> {cursession.time}</p>
                                        <p><strong>Where: </strong> {cursession.location}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No sessions scheduled at the moment.</p>
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
                            <tr>
                                <td>Perry Platypus</td>
                                <td>Attending</td>
                                <td>pplatypus@ggc.edu</td>
                            </tr>
                            <tr>
                                <td>Terry Triceratops</td>
                                <td>Cancelled</td>
                                <td>ttricera@ggc.edu</td>
                            </tr>
                            <tr>
                                <td>Romeo Montague</td>
                                <td>Attending</td>
                                <td>rmontague@ggc.edu</td>
                            </tr>
                            <tr>
                                <td>Juliet Capulet</td>
                                <td>Attending</td>
                                <td>jcapulet@ggc.edu</td>
                            </tr>
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
