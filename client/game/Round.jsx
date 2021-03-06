import React, { Component } from 'react'
import CenterDevWrapper from "../wrappers/CenterDevWrapper.jsx"

export default class Round extends Component {
	render() {
		const { round, stage, player, game } = this.props

		return (
			<CenterDevWrapper {...this.props}>
				<div className="container">
					The Rounds!
				</div>
			</CenterDevWrapper>
		)
	}
}
