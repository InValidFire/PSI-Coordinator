import React, { Component } from "react";
import { Navbar, Nav, Image } from 'react-bootstrap';
import GGCHeaderLogo from '../AppImages/GGCHeaderLogo.jpeg';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ensure react-icons is installed
import styles from './PageHeader.module.css';

class PageHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: props.pageTitle,
            headerContents: props.headerContents,
            isNavOpen: false, // State to manage the dropdown visibility
        };
    }

    toggleNav = () => {
        this.setState(prevState => ({
            isNavOpen: !prevState.isNavOpen
        }));
    };

    closeNav = () => {
        this.setState({ isNavOpen: false }); // Close the navbar
    };

    render() {
        return (
            <Navbar className={styles.appHeader}>
                <div className={styles.left}>
                    <Image src={GGCHeaderLogo} alt="GGC Logo" className={styles.logo} />
                    <div className={styles.pageTitleIdentifier}>
                        <h1>{this.state.pageTitle}</h1>
                    </div>
                </div>

                {/* Hamburger Icon for Mobile View */}
                <div className={styles.hamburgerIcon} onClick={this.toggleNav}>
                    <FaBars />
                </div>

                <div className={`${styles.overlay} ${this.state.isNavOpen ? styles.show : ''}`} onClick={this.closeNav}></div>

                {/* Navbar Content */}
                <Navbar.Collapse in={this.state.isNavOpen} className={`${styles.collapsibleNav}`}>
                    <Nav className={`${styles.navbar} ${this.state.isNavOpen ? styles.show : ''}`}>
                        <div className={styles.closeButton} onClick={this.closeNav}>
                            <FaTimes />
                        </div>
                        {
                            this.state.headerContents.map((clickable) => (
                                <HeaderContents
                                    key={clickable.text}
                                    link={clickable.link}
                                    text={clickable.text}
                                />
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const HeaderContents = function headerContents(props)
{
    return (
        <Nav.Link href={props.link} style={{textDecoration: 'none'}}>
            <div className={styles.navbarLinks}>
                {props.text}
            </div>
        </Nav.Link>
    )
}

export default PageHeader;
