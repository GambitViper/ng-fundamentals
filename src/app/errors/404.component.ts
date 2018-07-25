import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1 class="errorMessage">404</h1>
    <div class="well center">
      <h3>Oh no, you've found our secret developer's homepage!</h3>
      <div>
        Despite sleeping on the couch most of the day, 
        our developer still finds time to do some coding...
      </div>
      <button type="button" class="btn btn-secondary pad-button center" (click)="goBack()">
        Back to Homepage<span class="glyphicon glyphicon-chevron-right"></span>
      </button>
    </div>
  `,
  styles: [`
    .errorMessage { 
      margin-top: 100px;
      margin-bottom: 50px; 
      font-size: 170px;
      text-align: center; 
    }
    .pad-button { margin-top: 50px; }
    .center { text-align: center !important }
  `]
})
export class Error404Component{

  constructor(private router: Router) { }

  goBack() {
      this.router.navigate(['/events']);
  }

}