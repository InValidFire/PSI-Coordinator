import React, { Component, Fragment } from "react";
import {Table, Container, Button, Card} from "react-bootstrap";
import styles from "../CSS/MainStyles.module.css";
import PageFooter from '../../HeaderAndFooter/PageFooter.js';
import AppHeader from "../../HeaderAndFooter/PageHeader.js";
import {useParams} from "react-router-dom";

class SessionDetails extends Component {
    render() {
        return (
            <>
                <AppHeader
                    pageTitle="SESSION DETAILS"
                    headerContents={[
                        {
                            "text": "BACK TO DASHBOARD",
                            "link": "/dashboard/leader"
                        },
                        {
                            "text": "LOGOUT",
                            "link": "/login"
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
                    <div className={styles.horizontalDetails}>
                        <p><strong>PSI Coordinator:</strong> Bronwen K.</p>
                        <p><strong>Session Topic:</strong> Finding Constants</p>
                        <p><strong>Class Course Name:</strong> Calculus</p>
                        <p><strong>Class Course Number:</strong> 1111</p>
                        <p><strong>Day:</strong> Monday</p>
                        <p><strong>Time:</strong> 3:00PM-4:00PM</p>
                        <p><strong>Where:</strong> B-1800</p>
                    </div>
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
                    <div>
                    <h2>Resources</h2>
                        <div className={styles.upload}>
                            <h3>Upload A File</h3>
                        </div>
                    </div>
                </div>
                <PageFooter/>
            </>
        );
    }
}

export default SessionDetails;
