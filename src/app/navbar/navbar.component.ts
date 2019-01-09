import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { YoutubeService } from '../firebase/youtube.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchValue: string;
  showSearch = true;
  constructor(public global: GlobalsService , private youtube: YoutubeService, private router: Router) { }

  ngOnInit() {
  }
  search() {
    // this.searchValueEmitter.emit(this.searchValue);
    this.youtube.searchSubject.next(this.searchValue);
  }

}
