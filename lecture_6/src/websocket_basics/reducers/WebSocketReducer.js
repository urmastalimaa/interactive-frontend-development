const initialState = {
  status: 'disconnected',
  disconnectReason: null,
  pingCount: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CONNECTING': {
    return {status: 'connecting'};
  }
  case 'CONNECTED': {
    return {status: 'connected'};
  }
  case 'DISCONNECTED': {
    return {...initialState, status: 'disconnected', disconnectReason: action.payload.reason};
  }
  case 'RECEIVED_PING': {
    return {...state, pingCount: action.payload.pingCount};
  }
  default: {
    return state;
  }
  }
};

export default reducer;
