import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PHOTOS_STATE } from './store/photos.actions';
import { photosReducer } from './store/photos.reducer';
import { PhotosEffects } from './store/photos.effects';
import { PhotosService } from './services/photos.service';
import { PhotosFacadeService } from './services/photos-facade.service';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(PHOTOS_STATE, photosReducer),
    EffectsModule.forFeature([PhotosEffects]),
  ],
  providers: [PhotosService, PhotosFacadeService],
})
export class MainStateModule {}
