import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showAlert: boolean = false;
  showError: boolean = false;
  foodName: string = '';
  foodType: string = '-1';
  btnTitle: string = 'Add';
  successMsg: string = 'Added';

  constructor(
    private dataService: DataTransferService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.children.length > 0) {
      const indfood = this.dataService.getEditItemById(
        this.route.children[0].snapshot.params['id']
      );
      this.foodName = indfood[0].name;
      this.foodType = indfood[0].fType;
      this.btnTitle = 'Update';
      this.successMsg = 'Updated';
    }
  }

  addClickHandler() {
    if (this.foodName.length == 0 || this.foodType == '-1') {
      this.showError = true;
    }
    if (this.btnTitle === 'Add' && !this.showError) {
      this.showAlert = true;
      this.dataService.addfoodToList(this.foodName, this.foodType).subscribe();
    } else if (this.btnTitle === 'Update' && !this.showError) {
      this.showAlert = true;
      this.dataService.updatefoodToList(
        this.foodName,
        this.foodType,
        this.route.children[0].snapshot.params['id']
      );
    }
    setTimeout(() => {
      this.showAlert = false;
      this.showError = false;
    }, 2000);
  }

  onClickVegHandler(path: string, category: string) {
    this.router.navigate([path, category]);
  }
}
