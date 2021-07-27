import React from "react"
import { ConsentButton } from "meteor/empirica:core"
import CenterDevWrapper from "../../wrappers/CenterDevWrapper"
import { isMobile, isFirefox, isSafari, isChrome } from 'react-device-detect'

export default class Consent extends React.Component {
	render() {

		if (!(!isMobile && (isFirefox || isChrome))) {
			return (
				<CenterDevWrapper {...this.props}>
					<div className="container">
						Please use a computer and use Firefox or Chrome.
					</div>
				</CenterDevWrapper>
			)
		}


		return (
			<CenterDevWrapper {...this.props}>
				<div className="container">
					<h2 className="title">Consent to Participate</h2>
					<p><strong>Title of the study:</strong></p>
					<p><strong>Department:</strong></p>
					<p><strong>Name and Contact Details of Primary Researcher:</strong></p>

					<h3>Purpose of the Study</h3>
					<p></p>

					<h3>Why have I been invited to participate?</h3>
					<p>
						We are inviting you to participate in this study because you are at least 18 years old, speak English, and able to give informed consent.
					</p>

					<h3>Do I have to participate?</h3>
					<p>
						Participation in this study is entirely voluntary. You may withdraw participation at any time for any reason.
					</p>

					<h3>What will happen to me if I take part?</h3>
					<p></p>

					<h3>What are the possible disadvantages and risks of taking part?</h3>
					<p>
						There are no risks or discomforts associated with participating in this research study.
					</p>

					<h3>What are the possible benefits of taking part?</h3>
					<p></p>

					<h3>What if something goes wrong?</h3>
					<p></p>

					<h3>Will my taking part in this study be kept confidential?</h3>
					<p></p>

					<h3>What will happen to the results of this research project?</h3>
					<p>
						Once the data is anonymised and analysed, it might be reported in academic publications or made openly available for other researchers on platforms such as GitHub or OSF.
					</p>

					<h3>Local Data Protection Privacy Notice</h3>
					<p>
						All collected data will be anonymized.
					</p>

					<h3>Statement of Consent</h3>
					<p>
						By clicking "I consent" below, you agree that you are at least 18 years of age, speak English, have read the consent form, and voluntarily agree to participate in the study. You may print a copy of this page for your own reference.
					</p>
					<p>
						If you do not consent to participate, please simply exit the study now.
					</p>

					<br />
					<div className="flex-c"><ConsentButton text="I CONSENT" /></div>
				</div>
			</CenterDevWrapper>
		)
	}
}
