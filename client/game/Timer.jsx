import { StageTimeWrapper } from "meteor/empirica:core"
import React from "react"

class timer extends React.Component {
	render() {
		const { remainingSeconds } = this.props

		const classes = ["timer"]
		if (remainingSeconds <= 5) {
			classes.push("lessThan5")
		} else if (remainingSeconds <= 10) {
			classes.push("lessThan10")
		}

		let minutes = Math.floor((remainingSeconds / 60) % 60)
		let seconds = Math.floor(remainingSeconds % 60)
		minutes = minutes > 9 ? minutes : `0${minutes}`
		seconds = seconds > 9 ? seconds : `0${seconds}`

		return (
			<div className={classes.join(" ")}>
				<h4>Timer</h4>
				<span className="time">{minutes}:{seconds}</span>
			</div>
		)
	}
}

export default (Timer = StageTimeWrapper(timer))
