import React, {Component} from 'react'
import Header from '../Header/Header'


class Vibe extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
            <Header/>
            <div>Words</div>
            </React.Fragment>
        )
    }
}

export default Vibe