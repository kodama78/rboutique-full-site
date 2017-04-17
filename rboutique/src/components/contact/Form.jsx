import React, { Component } from 'react';

class Form extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        };
    }

    render () {
        const { name, email, phone, subject, message } = this.state;
        return (
            <div className="form">
                <h1>Contact Form</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={event => this.setState({ name: event.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={ email }
                        onChange={event => this.setState({ email: event.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Phone"
                        value={ phone }
                        onChange={event => this.setState({ phone: event.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Subject"
                        value={ subject }
                        onChange={event => this.setState({ subject: event.target.value })}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Message"
                        value={ message }
                        onChange={event => this.setState({ message: event.target.value })}
                    />
                </div>
                <div>
                    <button type="button">SEND</button>
                </div>
            </div>
        )
    }
}

export default Form;