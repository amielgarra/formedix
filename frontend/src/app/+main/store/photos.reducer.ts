import { PhotosActions, PhotosActionTypes } from './photos.actions';

export interface PhotosState {
  photos: any[];
  loading: boolean;
}

export const initialState: PhotosState = {
  photos: [],
  loading: false,
};

export function photosReducer(
  state = initialState,
  action: PhotosActions
): PhotosState {
  switch (action.type) {
    case PhotosActionTypes.GET_PHOTOS: {
      return {
        ...state,
        loading: true,
      };
    }
    case PhotosActionTypes.GET_PHOTOS_SUCCESS: {
      console.log(action.data);
      return {
        ...state,
        loading: false,
        photos: [...state.photos, ...action.data.photos.photo],
      };
    }
    case PhotosActionTypes.GET_PHOTOS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case PhotosActionTypes.CLEAR_PHOTOS: {
      return {
        ...state,
        photos: [],
      };
    }
    default:
      return state;
  }
}
