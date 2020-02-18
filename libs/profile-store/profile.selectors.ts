import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getUserProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getUserProfileState, ({ userProfile }) => {

  return userProfile;

});
