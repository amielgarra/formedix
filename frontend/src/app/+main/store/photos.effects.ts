import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PhotosService } from '../services/photos.service';
import { PhotosActionTypes } from './photos.actions';
import * as actions from '../store/photos.actions';
import { switchMap, map, catchError, of } from 'rxjs';

@Injectable()
export class PhotosEffects {
  constructor(
    private actions$: Actions,
    private photosService: PhotosService
  ) {}

  getPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PhotosActionTypes.GET_PHOTOS),
      switchMap(({ paging }) =>
        this.photosService.getPhotos(paging).pipe(
          map((result) => {
            return new actions.GetPhotosSuccess(result);
          }),
          catchError(() => of(new actions.GetPhotosFail()))
        )
      )
    )
  );
}
