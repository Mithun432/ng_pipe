import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomsPipe } from '../pipes/customs.pipe';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,FormsModule,CustomsPipe,JsonPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  public details=[
    {Name:"Kiran", Gender:"M", Mark:"31", Result:"Pass"},
    {Name:"Alan", Gender:"M", Mark:"11", Result:"Fail"},
    {Name:"Devika", Gender:"F", Mark:"27", Result:"Fail"},
    {Name:"Paul", Gender:"M", Mark:"48", Result:"Pass"},
    {Name:"Anusree", Gender:"F", Mark:"39", Result:"Pass"},
    {Name:"Nayana", Gender:"F", Mark:"30", Result:"Fail"},
    {Name:"Ram", Gender:"M", Mark:"36", Result:"Pass"},
  
  ]
}
