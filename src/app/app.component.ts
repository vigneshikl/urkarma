import { Component } from '@angular/core';
import {AppData} from './app.data';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Karma Calculator';
  data = new AppData('puppy', 27);
  public onSubmit(it: NgForm) {
    alert(JSON.stringify(it.value));
  }
}
