import type from "./types";

const reducer = (state,action) =>{
    switch (action.type) {
        case type.create:
            return [...state,action.payload];
        case type.update:
            const dataEdit = state.map(p=> p.id===action.payload.id ? {...action.payload}:p);
            return [...dataEdit];
        case type.delete:
            return state.filter(p=>p.id !== action.payload);
        default:
            return state;
    }
}

export default reducer;