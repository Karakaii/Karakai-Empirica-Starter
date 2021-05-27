import React from "react"
import CenterDevWrapper from "../wrappers/CenterDevWrapper"

export default class Thanks extends React.Component {
	static stepName = "Thanks"

	render() {
		const { player } = this.props
		if (!player.get("finishedStudy")) {
			player.set("finishedStudy", true)
		}

		return (
			<CenterDevWrapper {...this.props}>
				<div>
					<h4>Finished!</h4>
					<p>Thank you for participating!</p>
				</div>
			</CenterDevWrapper>
		)
	}
}
