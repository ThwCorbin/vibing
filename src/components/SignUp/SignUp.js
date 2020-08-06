import React, {Component} from "react"
import Form from './Form.js'
import Header from './Header'


class SignUp extends Component {
    render() {
        return(
            <React.Fragment>
            <Header/>
            <Form/>
            </React.Fragment>
        )
    }
}

export default SignUp