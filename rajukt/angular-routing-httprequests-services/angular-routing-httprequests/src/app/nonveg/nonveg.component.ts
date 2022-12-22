import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-nonveg',
  templateUrl: './nonveg.component.html',
  styleUrls: ['./nonveg.component.css'],
})
export class NonvegComponent implements OnInit {
  NonvegList: { name: string; fType: string; id: string }[] = [];
  loading = false;
  constructor(
    private dataService: DataTransferService,
    private router: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.loadVegList();
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

  loadVegList() {
    this.loading = true;
    this.dataService
      .getSpecificfoodList(this.router.snapshot.params['category'])
      .subscribe((response) => {
        this.NonvegList = response;
        this.loading = false;
      });
  }
}
