import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons:any = [
    {'name':'david','lastname':'uribe'},
    {'name':'juan','lastname':'cardona'},
    {'name':'francisto','lastname':'mendoza'},
    {'name':'pedro','lastname':'fuentes'},
    {'name':'felix','lastname':'santos'},
    {'name':'bernardo','lastname':'pedroza'}
  ];
  personsFilter:any = {'name':'','lastname':''};
}
