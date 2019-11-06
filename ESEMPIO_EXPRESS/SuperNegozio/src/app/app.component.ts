import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperNegozio';
   productData : Product[];

  loading: boolean;

  oproduct : Observable<Product[]>;
  constructor(public http: HttpClient) { }

  makeRequest(): void {

    this.loading = true;
    this.oproduct = this.http.get<Product[]>('https://3000-c2ddcf0f-715a-4cc8-90eb-dcc36430338a.ws-eu01.gitpod.io/api/products');
    this.oproduct.subscribe(this.getData);
  }

  getData = (d: Product[]) => {
    this.productData = d;
    this.loading = false;
  }

}
