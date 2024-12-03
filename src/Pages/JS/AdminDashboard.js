import React, { Component, Fragment } from "react";
import styles from '../CSS/MainStyles.module.css';
import { Button, Table } from "react-bootstrap";
import PageFooter from "../../HeaderAndFooter/PageFooter.js";
import AppHeader from "../../HeaderAndFooter/PageHeader.js";
import { findLeaders, verifyLeader } from "../../DatabaseCollections/AccountCreation.js";

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [], // State to store PSI leaders data
        };
    }

    // Fetch PSI leaders data when the component mounts
    componentDidMount() {
        this.loadSessions();
    }

    // Function to load PSI leaders and set state
    loadSessions = async () => {
        try {
            const students = await findLeaders(); // Fetch all leaders data
            this.setState({ students }); // Set leaders in state
        } catch (error) {
            console.error("Error loading leaders:", error);
        }
    };

    // Function to verify a PSI leader and refresh the table
    handleVerify = async (leaderId) => {
        try {
            await verifyLeader(leaderId); // Call the database update function
            this.loadSessions(); // Reload the sessions to refresh the table
        } catch (error) {
            console.error("Error verifying leader:", error);
        }
    };

    render() {
        const { students } = this.state; // Destructure leaders from state

        return (
            <>
                <AppHeader
                    pageTitle="ADMIN DASHBOARD"
                    headerContents={[
                        {
                            text: "LOGOUT",
                            link: "/login",
                        },
                    ]}
                />
                <Fragment>
                    <div className={styles.mainContent}>
                        <h3><strong>Please make sure to notify leaders of any changes to their verification status!</strong></h3>
                        <Table className={`${styles.centeredTable} table-bordered`}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Verification Status</th>
                                <th>Email</th>
                                <th>Intended Session</th>
                                <th>Take Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {students.length > 0 ? (
                                students.map((curLeader) => (
                                    <tr key={curLeader.id}>
                                        <td>{curLeader.name}</td>
                                        <td>
                                            {curLeader.verified
                                                ? "Verified"
                                                : "Pending Verification"}
                                        </td>
                                        <td>{curLeader.email}</td>
                                        <td>{curLeader.classPSI}</td>
                                        <td>
                                            {!curLeader.verified && (
                                                <Button
                                                    onClick={() =>
                                                        this.handleVerify(
                                                            curLeader.id
                                                        )
                                                    }
                                                >
                                                    Verify
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" style={{textAlign: "center"}}>
                                        No PSI Leaders awaiting verification.
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
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
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <PageFooter/>
                </Fragment>
            </>
        );
    }
}

export default AdminDashboard;
