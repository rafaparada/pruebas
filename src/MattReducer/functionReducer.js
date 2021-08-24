const functionReducer = (state=0,action) =>{
    console.log(action.type);
    switch (action.type) {
        case 'suma':
            return state = parseFloat(action.payload.num1)+parseFloat(action.payload.num2);
        case 'resta':
            return state = parseFloat(action.payload.num1)-parseFloat(action.payload.num2);
        case 'multiplicacion':
            return state = parseFloat(action.payload.num1)*parseFloat(action.payload.num2);
        case 'division':
            return state = parseFloat(action.payload.num1)/parseFloat(action.payload.num2);
        default:
            return 0;
    }
}

export default functionReducer;