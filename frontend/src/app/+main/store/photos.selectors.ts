import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PHOTOS_STATE } from './photos.actions';
import { PhotosState } from './photos.reducer';

export const getProductState = createFeatureSelector<PhotosState>(PHOTOS_STATE);

export const selectPhotos = createSelector(
  getProductState,
  (state) => state.photos
);

export const selectLoading = createSelector(
  getProductState,
  (state) => state.loading
);
