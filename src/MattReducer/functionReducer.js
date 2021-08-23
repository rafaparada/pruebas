const functionReducer = (state=[],action) =>{
    switch (action.type) {
        case 'suma':
            return parseFloat(action.payload.num1)+parseFloat(action.payload.num2);
        default:
            return 0;
    }
}

export default functionReducer;