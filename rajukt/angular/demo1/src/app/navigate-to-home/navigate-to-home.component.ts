import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate-to-home',
  templateUrl: './navigate-to-home.component.html',
  styleUrls: ['./navigate-to-home.component.css'],
})
export class NavigateToHomeComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  onClickNavigateToHome() {
    this.route.navigate(['home-component']);
  }
}
