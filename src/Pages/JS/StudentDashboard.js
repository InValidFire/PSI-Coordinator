import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import FieldEntry from "../../Field-Entry.js";
import styles from '../CSS/MainStyles.module.css'; // Ensure this path is correct for your CSS
import AppFooter from '../../HeaderAndFooter/PageFooter.js';
import { Button, Card, Container } from "react-bootstrap";

const StudentDashboard = () => {
    return (
        <>
            <div className={styles.scrollingAdminLoginContainer}>
                <Fragment>
                    <div className={styles.container}>
                        <div className={styles.contentContainer}>
                            <main className={styles.mainContent}>
                                <Container className={styles.scrollableContent}>
                                    <Card className={styles.formSection}>
                                        <Card.Title className={styles.formSectionTitle} id="currentSchedule">Your Upcoming Sessions</Card.Title>
                                        <Card.Text>Click on each time to view your session details.</Card.Text>
                                        <div className={styles.formData}>
                                            <FieldEntry entryName={"Monday"} entryValue={"12:00PM-1:00PM"} />
                                            <Link to="/ViewSession">
                                                <Button className={styles.fillFormButton}>
                                                    View Session Details
                                                </Button>
                                            </Link>
                                            <FieldEntry entryName={"Wednesday"} entryValue={"12:00PM-1:00PM"} />
                                            <Link to="/ViewSession">
                                                <Button className={styles.fillFormButton}>
                                                    View Session Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </Card>
                                    <br />
                                    <br />
                                </Container>
                            </main>
                        </div>
                    </div>
                    <AppFooter />
                </Fragment>
            </div>
        </>
    );
};

export default StudentDashboard;
