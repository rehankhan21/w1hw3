import React, {Component} from 'react'
import Tardis from './AppComp'
import DivOne from './DivOne'

class DivTwo extends Component {

    constructor (props) {
        super(props) 

        this.state = {
            value: ""
        }
    }

    render () {

        return (
            <div>
                <DivOne />
            </div>
        )
    }

}

export default DivTwo