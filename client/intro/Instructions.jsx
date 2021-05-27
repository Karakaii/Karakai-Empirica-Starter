import React, { Component } from 'react'
import CenterDevWrapper from '../wrappers/CenterDevWrapper'

export default class Instructions extends Component {
    render() {
        const { hasPrev, hasNext, onNext, onPrev, game } = this.props

        return (
            <CenterDevWrapper {...this.props}>
                <div className="container">
                    <h2>Instructions</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo assumenda suscipit hic neque doloremque. Voluptatem fuga, optio iusto dolore minima, provident cum a, ex magni voluptate inventore eum voluptatibus?</p>

                    <br />
                    <div className="flex-c multiple-btns">
                        <button className="main-btn" disabled={!hasPrev} onClick={onPrev}>Previous</button>
                        <button className="main-btn" onClick={onNext}>Next</button>
                    </div>
                </div>
            </CenterDevWrapper>
        )
    }
}
