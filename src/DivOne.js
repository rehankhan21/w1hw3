import React, {Component} from 'react'
import Tardis from './AppComp'

class DivOne extends Component {

    constructor (props) {
        super(props) 

        this.state = {
            value: ""
        }
    }

    render () {

        return (
            <div>
                <Tardis />
                <Tardis />
            </div>
        )
    }

}

export default DivOne