import React, { Component } from 'react'
import DevWrapper from './DevWrapper'
import { Centered } from "meteor/empirica:core";

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
