import {createStore} from 'redux';

const initialState = {
  recipients: [{
    name: 'Jola', location: 'Poland'
  }]
};

export default createStore(

  (state = initialState, action) => {

    switch (action.type) {

      case 'SET_RECIPIENTS':
        const newState = Object.assign({}, state);
        newState.recipients = action.recipients;
        return newState;

      default:
        return state;
    }
  }

);