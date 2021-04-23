import { Component } from '@angular/core';


//component is a typescript class with some meta data
// metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//typescript class
export class AppComponent {
  title = 'login';
}
