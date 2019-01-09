import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../firebase/youtube.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      // alert('you just clicked enter');
      // rest of your code
    }
  }

}
