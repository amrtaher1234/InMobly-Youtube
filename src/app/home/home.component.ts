import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Video } from '../models/video';
import { DatabaseOperationsService } from '../firebase/database-operations';
import { EOrderType } from '../models/query';
import { MatSort } from '@angular/material/sort';
import { YoutubeService } from '../firebase/youtube.service';
import { Router } from '@angular/router';

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
  constructor(private router: Router , private databaseOps: DatabaseOperationsService , private youtube: YoutubeService) {
    this.Loading = false;
   }

  async ngOnInit() {
    let videos: Video[];
    this.Loading = true;
    if (localStorage.getItem('data')) {
      console.log('true');
     videos = await this.databaseOps.getVideos({name : 'snippet.title' , orderType: EOrderType.asc});
    } else {
      videos = await this.youtube.getVideoList() as Video[];
      console.log('else' , videos);
    }
    this.dataSource = new MatTableDataSource<Video>(videos);
    this.dataSource.sort = this.sort;
    this.Loading = false;
    this.dataSource.paginator = this.paginator;
  }

  goToDetails(element) {
    this.router.navigate(['/details' , element.id.videoId]);
  }

}

