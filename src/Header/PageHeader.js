import React, { Component } from "react";
import { Navbar, Nav, Image } from 'react-bootstrap';
import GGCHeaderLogo from '../GGCHeaderLogo.jpeg';
import styles from './PageHeader.module.css';

class PageHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // page title
            pageTitle: props.pageTitle,
        };
    }

    render() {
        return (
            <Navbar className={styles.appHeader}>
                <div className={styles.left}>
                    <Image src={GGCHeaderLogo} alt="GGC Logo" className={styles.logo} />
                    <div className={styles.pageTitleIdentifier}>
                        <h1>{this.state.pageTitle}</h1>
                    </div>
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className={styles.collapsibleNav}>
                    <Nav className={styles.navbar}>
                        {this.props.navBarContents.map((item, index) => (
                            <Nav.Link key={index} href={item.link} className={styles.navbarLinks}>
                                {item.text}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const NavBarContent = function NavBarContent(props) {
    return (
        <Nav.Link href={props.navLink} style={{ textDecoration: 'none' }}>
            <div className={styles.navbarLinks}>
                {props.navText}
            </div>
        </Nav.Link>
    );
}

export default PageHeader;
