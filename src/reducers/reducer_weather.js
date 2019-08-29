import { FETCH_WEATHER } from '../actions/index'

export default function (state = null, action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // return state.concat ([ action.payload.data ]);
            
            // IN ES 6 

            return [action.payload.data, ...state];

    }

    return state;
}