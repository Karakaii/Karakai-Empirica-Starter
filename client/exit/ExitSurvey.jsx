import React, { Component } from 'react'
import CenterDevWrapper from '../wrappers/CenterDevWrapper'

export default class ExitSurvey extends Component {
	static stepName = "ExitSurvey"

	state = {
		answers: {
			gender: "",
			age: "",
			comment: ""
		}
	}

	handleChange = e => {
		const { answers } = this.state
		const name = e.currentTarget.name
		const value = e.currentTarget.value
		answers[name] = value
		this.setState({ answers: answers })
	}

	handleSubmit = e => {
		e.preventDefault()

		const { answers } = this.state
		const { player, onSubmit } = this.props
		player.set("demographics", answers)
		onSubmit()
	}

	render() {
		const { answers } = this.state

		return (
			<CenterDevWrapper {...this.props}>
				<div className="container">
					<h2>Exit Survey</h2>
					<form onSubmit={this.handleSubmit}>
						<p>Please indicate your gender</p>
						<input
							type="text"
							name="gender"
							value={answers.gender}
							onChange={this.handleChange}
							className="main-input"
							required
						/>
						<br />
						<br />

						<p>Please indicate your age</p>
						<input
							type="number"
							name="age"
							min="18"
							size="20"
							value={answers.age}
							onChange={this.handleChange}
							className="main-input"
							required
						/>
						<br />
						<br />

						<p>If you have any additional comments about the game, please write them here:</p>
						<textarea
							name="comment"
							autoComplete="off"
							value={answers.comment}
							onChange={this.handleChange}
							className="main-input"
							style={{ width: "500px", height: "100px" }} />
						<br />
						<br />

						<div className="flex-c"><button className="main-btn" type="submit">Submit</button></div>
					</form>
				</div>
			</CenterDevWrapper>
		)
	}
}
