import { Component } from '@angular/core';
import {lorem} from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  text='';

  onInput(value : string)
  {
    this.text=value;
  }
  compare(letter : string,text : string)
  {
    if(!text)
      return 'pending';
    if(letter===text)
      return 'correct';
    return 'incorrect';
  }
}
