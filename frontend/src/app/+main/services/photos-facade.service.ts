import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Paging } from 'src/app/models/paging.model';
import { ClearPhotos, GetPhotos } from '../store/photos.actions';
import { PhotosState } from '../store/photos.reducer';
import { selectPhotos } from '../store/photos.selectors';

@Injectable()
export class PhotosFacadeService {
  constructor(private store: Store<PhotosState>) {}

  photos$: Observable<any> = this.store.pipe(select(selectPhotos));

  getPhotos(data: Paging) {
    this.store.dispatch(new GetPhotos(data));
  }

  clearPhotos() {
    this.store.dispatch(new ClearPhotos());
  }
}
