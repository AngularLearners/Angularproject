import { Component } from '@angular/core';
import { DataTransferService } from './data-transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataTransferService],
})
export class AppComponent {}
