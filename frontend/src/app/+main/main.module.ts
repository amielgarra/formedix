import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { MainRoutingModule } from './main-routing.module';
import { MainStateModule } from './main-state.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';

@NgModule({
  declarations: [MainPageComponent, ImageCardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MainStateModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    NgImageFullscreenViewModule,
  ],
})
export class MainModule {}
