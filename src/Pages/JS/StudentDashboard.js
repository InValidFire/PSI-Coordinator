import React, {Component, Fragment} from "react";
import styles from '../CSS/MainStyles.module.css';
import AppHeader from '../../HeaderAndFooter/PageHeader.js';
import PageFooter from '../../HeaderAndFooter/PageFooter.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {findUser} from "../../DatabaseCollections/AccountCreation.js";
import { findSessions } from "../../DatabaseCollections/PSISessionData.js";

class StudentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessions: [],
            userInfo: [],
            userId: null,
            userName: "",
            userEmail: "",
        };
    }

    componentDidMount() {
        const auth = getAuth();

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                this.setState({
                    userId: user.uid,
                    userName: user.displayName || "Anonymous",
                    userEmail: user.email || "N/A",
                });

                const userData = await findUser(user.uid);

                if (userData && userData.signedUpSessions) {
                    const sessionIds = userData.signedUpSessions;
                    const sessions = await Promise.all(sessionIds.map((id) => findSessions(id)));

                    this.setState({
                        userData,
                        sessions,
                    });
                }
            } else {
                console.error("No user is signed in.");
            }
        });
    }

    render() {
        const { userName, userEmail, sessions } = this.state;

        return (
            <>
                <AppHeader
                    pageTitle="STUDENT DASHBOARD"
                    headerContents= {[
                        {
                            text: "SIGNUP FOR A SESSION",
                            link: `/session/signup/${this.props.id}`,
                        },
                        {
                            text: "LOGOUT",
                            link: "/login",
                        },
                    ]}
                />
                <Fragment>
                    <div className={styles.mainContent}>
                        <div className={styles.horizontalDetails}>
                            <p><strong>Your Name: </strong>{userName}</p>
                            <p><strong>Your Email: </strong>{userEmail}</p>
                        </div>
                    </div>
                </Fragment>
                <div>
                    <h2>Upcoming Sessions</h2>
                    <div className={styles.upload}>
                        {sessions && sessions.length > 0 ? (
                            sessions.map((session) => (
                                <div key={session.id} className={styles.formInfo}>
                                    <h4>{session.classname}</h4>
                                    <p><strong>Topic: </strong>{session.topic}</p>
                                    <p><strong>Leader: </strong>{session.leader}</p>
                                    <p><strong>Location: </strong>{session.location}</p>
                                    <p><strong>Day: </strong>{session.day} | <strong>Time:</strong> {session.time}</p>
                                </div>
                            ))
                        ) : (
                            <p>No sessions signed up yet.</p>
                        )}
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <PageFooter />
            </>
        );
    }

}

export default StudentDashboard;
