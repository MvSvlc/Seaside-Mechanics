import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import { DomSanitizer } from "@angular/platform-browser";
import { interval } from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({'opacity': '1'})),
      state('out', style({'opacity': '0'})),
      transition('* => *', [
        animate(1000)
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {

  private readonly images: Array<any>;

  private current: number = 0;
  currentImage;
  state = 'in';
  counter = 0;
  enableAnimation = false;

  constructor(private sanitize: DomSanitizer) {
    this.images = ['assets/images/willie-corquette.png', 'assets/images/front-shop.png', 'assets/images/car-work-bmw.png', 'assets/images/shop.png'];
    this.currentImage = this.images[0];
  }

  ngOnInit(): void {
    interval(30000).subscribe(x => {this.runAnimation()});
  }

  runAnimation() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
  }

  toggleImg() {
    this.currentImage = this.sanitize.bypassSecurityTrustStyle(`url(${this.images[this.current]})`);
    this.current == this.images.length - 1 ? (this.current = 0) : ++this.current;
  }

  onDone() {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.toggleState();
    }
  }

  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }
}
