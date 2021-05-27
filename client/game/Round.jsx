import React from "react"
import CenterDevWrapper from "../wrappers/CenterDevWrapper.jsx"

export default class Round extends React.Component {
	render() {
		const { round, stage, player, game } = this.props

		return (
			<CenterDevWrapper {...this.props}>
				<div>
					The Rounds!
				</div>
			</CenterDevWrapper>
		)
	}
}
