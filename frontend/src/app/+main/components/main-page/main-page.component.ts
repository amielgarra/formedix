import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { PhotosFacadeService } from '../../services/photos-facade.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  photos$: Observable<any>;
  currentPage = 1;
  searchFormControl: FormControl = new FormControl('');
  queryText = 'mountains';
  selectedImages: any[] = [];
  showFlag = false;
  constructor(private photosFacade: PhotosFacadeService) {}

  ngOnInit(): void {
    this.photos$ = this.photosFacade.photos$;
    this.getPhotos();

    this.searchFormControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => {
        if (value) {
          this.currentPage = 1;
          this.queryText = value;
          this.photosFacade.clearPhotos();
          this.getPhotos();
        }
      });
  }

  onScrollDown() {
    this.currentPage++;
    this.getPhotos();
  }

  getPhotos() {
    this.photosFacade.getPhotos({
      q: this.queryText,
      page: this.currentPage,
      count: 12,
    });
  }

  showImage(photo: any) {
    let data = {
      image: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,
      title: photo.title,
    };
    this.selectedImages = [];
    this.selectedImages.push(data);
    this.showFlag = true;
  }

  closeImage() {
    this.showFlag = false;
  }
}
