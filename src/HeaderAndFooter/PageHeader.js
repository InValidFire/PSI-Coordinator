import React, { Component } from "react";
import { Navbar, Nav, Image, Container, Row, Col } from 'react-bootstrap';
import GGCHeaderLogo from '../AppImages/GGCHeaderLogo.jpeg';
import styles from './PageHeader.module.css';

class PageHeader extends Component
{

    constructor(props)
    {
        super(props);

        this.state =
            {
                // page title
                pageTitle: props.pageTitle,
            }
    }

    render()
    {
        return (
            <Navbar
                className={styles.appHeader}
            >
                <Navbar.Brand className={styles.left}>
                        <Row>
                            <Col>
                                <div className={styles.logo}>
                                    <Image
                                        src={GGCHeaderLogo}
                                        alt="GGC Logo"
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className={styles.pageTitleIdentifier}>
                                    <h1>{this.state.pageTitle}</h1>
                                </div>
                            </Col>
                        </Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className={styles.collapsibleNav}>
                    <Nav className={styles.navbar}>
                        {/*
                            Currently, utilize nav link's text as key identifier for
                            each item in each navbar instance (May change as some point)
                        */}
                        {

                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

/**
 * @name NavBarContent
 * @author Danielle Mathieu
 * Purpose: Returns UI Nav Entry for Every Specified Nav Option
 * Logout option are configured to logout rather than link to new page
 * @param props options passed to this component
 */
const NavBarContent = function NavBarContent(props)
{
    {
        // for normal pages, create nav option here
        return (
            <Nav.Link href={props.navLink} style={{textDecoration: 'none'}}>
                <div className={styles.navbarLinks}>
                    {props.navText}
                </div>
            </Nav.Link>
        )
    }
}
export default PageHeader;