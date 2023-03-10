import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'

class GameOver extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Container>
				<h1>GAME OVER</h1>
				<Button href='/Easy-RPG-Frontend/' onClick={this.props.resetPlayer}>
					Begin anew...
				</Button>
			</Container>
		)
	}
}

export default GameOver
