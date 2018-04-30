import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import VenueReducer from './VenueReducer';

export default combineReducers({
    users: UserReducer,
    venues: VenueReducer
});
