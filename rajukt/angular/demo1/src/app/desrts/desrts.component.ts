import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-desrts',
  templateUrl: './desrts.component.html',
  styleUrls: ['./desrts.component.css'],
})
export class DesrtsComponent implements OnInit {
  desertsList: { name: string; fType: string; id: string }[] = [];
  loading = false;

  constructor(
    private dataService: DataTransferService,
    private router: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.loadVegList();
  }

  loadVegList() {
    this.loading = true;
    this.dataService
      .getSpecificfoodList(this.router.snapshot.params['category'])
      .subscribe((response) => {
        this.desertsList = response;
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
        this.loading = false;
      });
    }
  }
}
