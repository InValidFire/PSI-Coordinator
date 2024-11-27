import React, {Component, Fragment} from "react";
import styles from '../CSS/MainStyles.module.css';
import AppHeader from '../../HeaderAndFooter/PageHeader.js';
import PageFooter from '../../HeaderAndFooter/PageFooter.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";

class StudentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessions: [], // State to store session data
            userId: null, // To store the user's uid
            userName: "",
            userEmail: "",
        };
    }

    componentDidMount() {
        const auth = getAuth();

        // Listen for authentication state changes
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.setState({
                    userId: user.uid,
                    userName: user.displayName || "Anonymous",
                    userEmail: user.email || "N/A",
                });
            } else {
                console.error("No user is signed in.");
            }
        });
    }

    render() {
        const { userId, userName, userEmail } = this.state;

        return (
            <>
                <AppHeader
                    pageTitle="STUDENT DASHBOARD"
                    headerContents={[
                        {
                            text: "SIGNUP FOR A SESSION",
                            link: `/session/signup/${this.props.id}`
                        },
                        {
                            text: "LOGOUT",
                            link: "/login"
                        }
                    ]}
                />
                <Fragment>
                    <div className={styles.mainContent}>
                        <div className={styles.horizontalDetails}>
                            <p><strong>Your Name: </strong>{userName}</p> {/*Retrieve this information from the database*/}
                            <p><strong>Your Email: </strong>{userEmail}</p>
                        </div>
                    </div>
                </Fragment>
                <div>
                    <h2>Upcoming Sessions</h2>
                    <div className={styles.upload}>
                        <h3>Upload A File</h3>
                        {/* Add the map to get all the sessions this person signed up for
                        have the session name be a h4, then under the session name have the
                        session topic name, session leader name, and the session location*/}
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
                <PageFooter/>
            </>
        );
    }
}

export default StudentDashboard;
