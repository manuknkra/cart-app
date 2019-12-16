import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cart-app';
  cartItems : Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getItemsList().subscribe(data => {
      this.cartItems = data
      console.log(this.cartItems);
    }
  );
  }
}
