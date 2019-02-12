import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar color="grey lighten-2" light expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Metaframe</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="#">Frames</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Primaries</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Secondaries</NavLink>
                          </NavItem>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">Acount</DropdownItem>
                                    <DropdownItem href="#">Action</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarFeatures;



//     <!--
//     This HTML file is a template.
//     If you open it directly in the browser, you will see an empty page.

//     You can add webfonts, meta tags, or analytics to this file.
//     The build step will place the bundled scripts into the <body> tag.

//     To begin the development, run `npm start` or `yarn start`.
//     To create a production bundle, use `npm run build` or `yarn build`.
//   -->



// download font to the index.html