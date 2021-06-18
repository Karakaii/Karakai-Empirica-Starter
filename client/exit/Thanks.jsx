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
				<div className="container">
					<h4>Finished!</h4>
					<p>Thank you for participating!</p>
				</div>
				<ReturnLink />
			</CenterDevWrapper>
		)
	}
}

class ReturnLink extends Component {
	render() {
		return (
			<div>
				<br />
				<p className="flex-c">
					<button className="main-btn" onClick={() => { window.location = "https://www.google.com" }}>
						Complete study on Prolific
					</button>
				</p>
			</div>
		)
	}
}
