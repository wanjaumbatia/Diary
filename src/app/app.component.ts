import { Component } from '@angular/core';
import { Entry } from './entry';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'Diary App';  
  numCount: number = 0;
  myEntry: Entry = new Entry();
  diaryEntry: Entry[]=[];

  save(){
    this.myEntry.id = this.numCount++;
    this.diaryEntry.push(this.myEntry);
    this.myEntry = new Entry()
  }

  remove(entry){
      this.diaryEntry = this.diaryEntry.filter(x=>x.id!==entry.id);
  }

  get entries(){
    return this.diaryEntry;
  }

  
}
