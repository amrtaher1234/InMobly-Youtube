import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Video } from '../models/video';
import { DatabaseOperationsService } from '../firebase/database-operations';
import { EOrderType } from '../models/query';
import { MatSort } from '@angular/material/sort';
import { YoutubeService } from '../firebase/youtube.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Video>(null);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  Loading: boolean;
  videos: Video[];
  constructor(private route: ActivatedRoute, private global: GlobalsService,
    private router: Router , private databaseOps: DatabaseOperationsService , private youtube: YoutubeService) {
    this.Loading = false;
   }

  async ngOnInit() {
  this.global.showSearch = true;

    this.Loading = true;
    if (localStorage.getItem('data')) {
      console.log('true');
     this.videos = await this.databaseOps.getVideos({name : 'snippet.title' , orderType: EOrderType.asc});
    } else {
      this.videos = await this.youtube.getVideoList() as Video[];
      console.log('else' , this.videos);
    }
    this.dataSource = new MatTableDataSource<Video>(this.videos);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.Loading = false;

    this.youtube.searchSubject.subscribe(d => {
    // getting the search value.
      this.dataSource = new MatTableDataSource<Video>(this.filterVideos(d));
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
     } );

  }

  goToDetails(element) {
    this.router.navigate(['/details' , element.id.videoId]);
  }
  filterVideos(str) {
    if (str === '' || str === null || str === undefined) {
      return this.videos;
    }
    return this.videos.filter(video => video.snippet.title.includes(str));
  }
}

