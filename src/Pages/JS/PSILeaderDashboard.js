import React, { Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import FieldEntry from "../../Field-Entry.js";
import styles from '../CSS/MainStyles.module.css';
import AppFooter from '../../HeaderAndFooter/PageFooter.js';
import {Button, Card, Container} from "react-bootstrap";

{
    /*
    Create two links at the top of the page:
    Go to Student Dashboard
    Add New PSI Session
     */
}

class PSILeaderDashboard extends Component
{
    render()
    {
            return (
                <>
                    <div
                        className={styles.scrollingAdminLoginContainer}
                    >
                        <Fragment>
                            <div className={styles.container}>
                                <div className={styles.contentContainer}>
                                    <main className={styles.mainContent}>
                                        <Container className={styles.scrollableContent}>
                                            <Card className={styles.formSection}>
                                                <Card.Title className={styles.formSectionTitle} id="currentSchedule">Upcoming PSI Schedule</Card.Title>
                                                <Card.Text>Click on each time to view the session details.</Card.Text>
                                                <div className={styles.formData}>
                                                    {/*
                                                    Maybe try and see if you can add a link to make the fieldentry entryvalue a link
                                                    so that a user can click the box that has the time and then can be navigated to
                                                    the session details page.

                                                    For now I will use a button so the user can view session details
                                                    */}
                                                    <FieldEntry entryName={"Monday"} entryValue={"12:00PM-1:00PM"}/>
                                                    <Link to="/ViewSession">
                                                        <button className={styles.fillFormButton}>
                                                            View Session Details
                                                        </button>
                                                    </Link>
                                                    <FieldEntry entryName={"Wednesday"} entryValue={"12:00PM-1:00PM"}/>
                                                    <Link to="/ViewSession">
                                                        <button className={styles.fillFormButton}>
                                                            View Session Details
                                                        </button>
                                                    </Link>
                                                </div>
                                            </Card>
                                            <br/>
                                            <br/>
                                        </Container>
                                    </main>
                                </div>
                            </div>
                            <AppFooter />
                        </Fragment>
                        </div>
                    </>
            );
    }
}

export default PSILeaderDashboard;