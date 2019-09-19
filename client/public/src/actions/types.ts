export const GET_USERS = 'get_users';
export const UPDATE_USER = 'update_user';
export const GET_VENUES = 'get_venues';

interface GetUsersAction {
  type: typeof GET_USERS
}

interface UpdateUserAction {
  type: typeof UPDATE_USER,
  payload: {
    index: number,
    isSelected: boolean
  }
}

interface GetVenueAction {
  type: typeof GET_VENUES
}

export type UserActionTypes = GetUsersAction | UpdateUserAction;
export type VenueActionType = GetVenueAction;
