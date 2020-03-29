import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';
import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';

export const initialState: ProfileState = {
    userProfile: null
}

const scoreboardReducer = createReducer(
    initialState,
    on(ProfileActions.getProfile, state => {
        // Write code here
        // debugger;
        // state = {
        //     userProfile: {
        //         firstName: 'Bob',
        //         lastName: 'Dylan',
        //         city: 'Terryville',
        //         state: 'CT',
        //         cell: '(860)-555-5555',
        //         phone: '(860)-666-6666',
        //         pictureUrl: 'http://placehold.it/500x500',
        //         email: 'example@email.com'
        //     }
        // }
        return { ...state }
    })
  );

export function reducer(state: ProfileState | undefined, action: Action) {
    return scoreboardReducer(state, action);
}
