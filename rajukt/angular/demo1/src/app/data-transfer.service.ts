import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataTransferService {
  // subscription: Subscription = '';
  isLoading = false;

  baseURL = 'https://angular-64a29-default-rtdb.firebaseio.com/foodList.json';

  constructor(private http: HttpClient) {}

  foodList: { id: string; name: string; fType: string }[] = [];
  //index = 0;
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  addfoodToList(name: string, fType: string) {
    return this.http.post<{ name: string; fType: string }>(this.baseURL, {
      name: name,
      fType: fType,
    });
  }

  updatefoodToList(name: string, fType: string, id: string) {
    this.http
      .put<{ name: string; fType: string }>(
        'https://angular-64a29-default-rtdb.firebaseio.com/foodList/' +
          id +
          '.json',
        {
          name: name,
          fType: fType,
        }
      )
      .subscribe((response) => {
        //  console.log(response);
      });
  }

  deleteItemfromfoodList(id: string) {
    return this.http.delete(
      'https://angular-64a29-default-rtdb.firebaseio.com/foodList/' +
        id +
        '.json'
    );
  }

  getSpecificfoodList(foodType: string) {
    return this.http.get(this.baseURL).pipe(
      map((response) => {
        this.foodList = [];
        for (const key in response) {
          const obj: any = response[key as keyof typeof response];
          this.foodList.push({
            id: key,
            fType: obj.fType,
            name: obj.name,
          });
        }
        this.foodList = this.foodList.filter((itm) => itm.fType == foodType);
        return this.foodList;
      })
    );
  }

  getEditItemById(id: string) {
    return this.foodList.filter((itm) => itm.id == id);
  }
}
