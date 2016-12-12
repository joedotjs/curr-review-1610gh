import React, {Component} from 'react';
import {get} from 'axios';

import Recipient from '../components/Recipient';

import store from '../state';

export default class extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.setNewRecipient = this.setNewRecipient.bind(this);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidMount() {

    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });

    get('/recipients')
      .then(res => res.data)
      .then(recipients => {
        store.dispatch({
          type: 'SET_RECIPIENTS',
          recipients: recipients
        });
      });
  }

  setNewRecipient(e) {
    this.setState({
      newRecipient: e.target.value
    });
  }

  render() {

    return (
        <div>
          <p>New recipient is: {this.state.newRecipient}</p>
          <input type="text" onChange={this.setNewRecipient} />
          {this.state.recipients.map((r, i) => {
            return <Recipient {...r} key={i} />
          })}
        </div>
    );

  }

}