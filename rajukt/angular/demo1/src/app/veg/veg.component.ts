import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css'],
})
export class VegComponent implements OnInit {
  vegList: { id: string; name: string; fType: string }[] = [];
  loading = false;

  constructor(
    private dataService: DataTransferService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.loadVegList();
  }

  loadVegList() {
    this.dataService
      .getSpecificfoodList(this.router.snapshot.params['category'])
      .subscribe((response) => {
        this.vegList = response;
        this.loading = false;
      });
  }

  onClickNavigateToHome(category: string, id: string) {
    this.route.navigate([`/home-component/edit/${category}/${id}`]);
  }

  onClickDeletefoodItem(id: string) {
    if (confirm('Are you sure to delete ?')) {
      this.loading = true;
      this.dataService.deleteItemfromfoodList(id).subscribe((response) => {
        this.loadVegList();
      });
    }
  }
}
