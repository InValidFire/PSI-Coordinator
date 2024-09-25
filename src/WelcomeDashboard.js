import React, { Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import FieldEntry from "./Field-Entry.js";
import styles from './PSICoordinator.module.css';
import AppFooter from './Footer.js';
import {Button, Card, Container} from "react-bootstrap";

{
    /*
    Create two links at the top of the page:
    Go to Student Dashboard
    Add New PSI Session
     */
}

class WelcomeDashboard extends Component
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
                                                    <Button
                                                        className={styles.fillFormButton}
                                                        type="submit"
                                                        id="button-addon1"
                                                    >
                                                        View Session Details
                                                    </Button>
                                                    <FieldEntry entryName={"Wednesday"} entryValue={"12:00PM-1:00PM"}/>
                                                    <Button
                                                        className={styles.fillFormButton}
                                                        type="submit"
                                                        id="button-addon1"
                                                    >
                                                        View Session Details
                                                    </Button>
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

export default WelcomeDashboard;