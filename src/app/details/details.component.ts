import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../firebase/youtube.service';
import { DatabaseOperationsService } from '../firebase/database-operations';
import { Video } from '../models/video';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  videoDetail: any;
  rating: number;
  isFav: boolean;
  videoId: string;
  constructor(private youtube: YoutubeService,
    private databaseOps: DatabaseOperationsService,
    private activeRoute: ActivatedRoute) {
      this.rating = 3;
    }

  ngOnInit() {
    console.log('did i even open ?');
    this.activeRoute.params.subscribe( async params => {
      console.log(params['videoId']);
      this.videoId = params['videoId'];
      const video = await this.databaseOps.getVideo(this.videoId) as Video;
      this.rating = video.details.rating;
      this.isFav = video.details.favorite;
      this.videoDetail = await this.youtube.getVideoDetail(this.videoId);
      console.log(this.videoDetail);
    });
  }
  updateRatingDetails() {
    this.databaseOps.updateVideoDetail(this.videoId , {favorite : this.isFav , rating : this.rating}).then(d => {
      console.log('updated db successfully');
    });
  }
  updateFavoriteDetails() {
    this.isFav = !this.isFav;
    this.databaseOps.updateVideoDetail(this.videoId , {favorite : this.isFav , rating : this.rating}).then(d => {
      console.log('updated db successfully');
    });
  }
  }

