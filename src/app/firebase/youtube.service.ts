import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { IQueryShape, EOrderType } from '../models/query';
import { Video, IVideoDetail } from '../models/video';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseOperationsService } from './database-operations';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  searchSubject = new BehaviorSubject<string>(null);
  currentPageKey: string;
  previousPageKey: string;
  constructor(private http: HttpClient , private db: AngularFirestore
    , private databaseOps: DatabaseOperationsService) {
  }

  async getVideoList() {
    const videos = [] as Video[];
    return new Promise(async(res , rej) => {
      let nextPage = '';
      while (true) {
      const queryResult = await this.http.get<IQueryShape>(
        environment.query_train + '&maxResults=40' + `&pageToken=${nextPage}`).toPromise() as IQueryShape;

      videos.push(...queryResult.items as Video[]);
      console.log(videos.length , 'len of videos currently');
      if (queryResult.items.length > 0) {
        nextPage = queryResult.nextPageToken;
        console.log(nextPage);
      } else {
        console.log('breaking from the await loop');
        break;
      }
      }

      videos.forEach(v => {v.details = {} as IVideoDetail; v.details.favorite = false; v.details.rating = -1; });
      this.storeVideosInDb(videos);

      res(videos);
    });
  }
  async storeVideosInDb(videos: any[]) {
    this.db.collection('videos').get().toPromise().then(async snaps => {
      const promises = [];
      snaps.forEach(snap => {
        promises.push(this.db.collection('videos').doc(snap.id).delete());
      });
      await Promise.all(promises);
      console.log('done deleting');
      localStorage.setItem('data' , 'true');
      videos.forEach(video => {
        this.db.collection('videos').add(video);
      });
    });
  }
  async getVideoDetail(videoId) {
    return this.http.get(environment.query_vidoe_detail + `&id=${videoId}`).toPromise();
  }
}
