/**
 * Created by 2A on 26-01-17.
 */
import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
    }

    console.log(action);
    return state;
}