import React, { Component } from 'react'
import DevWrapper from './DevWrapper'

export default class CenterDevWrapper extends Component {
    render() {
        const { children } = this.props

        return (
            <DevWrapper {...this.props}>
                <Centered>
                    {children}
                </Centered>
            </DevWrapper>
        )
    }
}
