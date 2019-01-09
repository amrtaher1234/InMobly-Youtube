import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IVideoDetail, Video } from '../models/video';
import { IQueryOption } from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class DatabaseOperationsService {

  pager: any;
  constructor(private db: AngularFirestore) {
  }
  public async updateVideoDetail(videoId: string , details: IVideoDetail) {
    return this.db.collection('videos').ref.where('id.videoId' , '==' , videoId).limit(1)
    .get().then(async snapshot => {
        await this.db.collection('videos').doc(snapshot.docs[0].id).update({'details' : details});
    });
  }
  public async getVideos(queryOption: IQueryOption) {
    const documentSnapshots = await this.db.collection('videos').
    ref.orderBy(queryOption.name , queryOption.orderType).get();
    // this.pager = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    const videos = [] as Video[];
    documentSnapshots.forEach( video => videos.push(video.data() as Video));
    return videos;
  }
  public async getVideo(videoId) {
    const doc = await this.db.collection('videos')
    .ref.where('id.videoId' , '==' , videoId).get();
    return doc.docs[0].data();
  }
}

// var first = db.collection("cities")
//         .orderBy("population")
//         .limit(25);

// return first.get().then(function (documentSnapshots) {
//   // Get the last visible document
//   var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
//   console.log("last", lastVisible);

//   // Construct a new query starting at this document,
//   // get the next 25 cities.
//   var next = db.collection("cities")
//           .orderBy("population")
//           .startAfter(lastVisible)
//           .limit(25);
// });
