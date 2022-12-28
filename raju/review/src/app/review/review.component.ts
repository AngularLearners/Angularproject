import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  index: number = 0;

  review: {
    id: number;
    name: string;
    job: string;
    image: string;
    text: string;
  }[] = [];
  arrayLength: number = 0;

  constructor(private service: DataService) {
    this.review = this.service.reviews;
    this.arrayLength = this.review.length - 1;
  }

  ngOnInit(): void {}

  rightClickHandler() {
    if (this.index == this.arrayLength) {
      this.index = 0;
    } else if (this.index < this.arrayLength) {
      this.index++;
    }
  }
  leftClickHandler() {
    if (this.index == 0) {
      this.index = this.arrayLength;
    } else if (this.index <= this.arrayLength) {
      this.index--;
    }
  }

  randomCheck() {
    const randomIndex = Math.floor(Math.random() * this.arrayLength);
    if (randomIndex == this.index) {
      if (randomIndex == this.arrayLength || randomIndex > this.arrayLength) {
        this.index = 0;
      } else {
        this.index = this.arrayLength;
      }
    } else {
      this.index = randomIndex;
    }
  }
}
