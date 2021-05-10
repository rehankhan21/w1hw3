import React, {Component} from 'react'
import Tardis from './AppComp'
import DivOne from './DivOne'
import DivTwo from './DivTwo'

class DivThree extends Component {

    constructor (props) {
        super(props) 

        this.state = {
            value: ""
        }
    }

    render () {

        return (
            <div>
                <DivTwo />
            </div>
        )
    }

}

export default DivThree