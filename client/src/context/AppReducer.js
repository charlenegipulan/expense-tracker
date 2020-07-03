//how we specify application state changes in responsie to certain actions to our stoire/context
export default (state, action) => {
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state, //change state
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
              ...state,
              transactions: [...state.transactions, action.payload],
            };
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload //can use this for alerts for error 
            }
        default:
            return state; //pass to component
    }
}