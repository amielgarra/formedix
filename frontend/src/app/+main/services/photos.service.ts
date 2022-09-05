import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paging } from 'src/app/models/paging.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class PhotosService {
  private baseUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${environment.flickrApiKey}&format=json&nojsoncallback=1`;

  constructor(private http: HttpClient) {}

  public getPhotos(paging: Paging) {
    return this.http.get(
      `${this.baseUrl}&per_page=${paging.count}&page=${paging.page}&text=${paging.q}`
    );
  }
}
