import React from 'react'
import Container from 'react-bootstrap/Container'
import LogoutButton from '../auth0/LogoutButton'
import { withAuth0 } from '@auth0/auth0-react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

class ConstantHeader extends React.Component {
	constructor(props) {
		super(props)
		console.log()
	}

	render() {
		return (
			<Navbar className='Navbar' bg='dark' variant='dark' expand='lg'>
				<Container className='my-5 flex'>
					<Navbar.Brand href='#home'>Easy-RPG</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className="Nav">
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#about'>About Us</Nav.Link>
					<NavDropdown title='Account' id='basic-nav-dropdown'>
					<NavDropdown.Item>
						{this.props.auth0.isAuthenticated && <LogoutButton />}
						</NavDropdown.Item>
					</NavDropdown>
					</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		)
	}
}

export default withAuth0(ConstantHeader)