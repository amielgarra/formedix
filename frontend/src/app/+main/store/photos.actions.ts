import { Action } from '@ngrx/store';
import { Paging } from 'src/app/models/paging.model';

export const PHOTOS_STATE = 'Photos';

export enum PhotosActionTypes {
  GET_PHOTOS = '[Photos] Get Photos',
  GET_PHOTOS_SUCCESS = '[Photos] Get Photos Success',
  GET_PHOTOS_FAIL = '[Photos] Get Photos Fail',

  CLEAR_PHOTOS = '[Photos] Clear Photos',
}

export class GetPhotos implements Action {
  readonly type = PhotosActionTypes.GET_PHOTOS;
  constructor(public paging: Paging) {}
}

export class GetPhotosSuccess implements Action {
  readonly type = PhotosActionTypes.GET_PHOTOS_SUCCESS;
  constructor(public data: any) {}
}

export class GetPhotosFail implements Action {
  readonly type = PhotosActionTypes.GET_PHOTOS_FAIL;
  constructor() {}
}

export class ClearPhotos implements Action {
  readonly type = PhotosActionTypes.CLEAR_PHOTOS;
  constructor() {}
}

export type PhotosActions =
  | GetPhotos
  | GetPhotosSuccess
  | GetPhotosFail
  | ClearPhotos;
