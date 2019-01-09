import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations : [ trigger('basicOpacity', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.65s ease-in', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 0.3, offset: 0.3 }),
        style({ opacity: 0.6, offset: 0.6 }),
        style({ opacity: 1, offset: 1 }),
      ]))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('0.5s ease-in', style({ opacity: 0 }))
    ]),
  ])
]
})
export class LoaderComponent implements OnInit {

  @Input() Loading: Boolean;
  @Input() Image: string;
  constructor() { }

  ngOnInit() {
  }

}
