import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { CustomsPipe } from './pipes/customs.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TableComponent,RouterLink,UpperCasePipe,LowerCasePipe,DecimalPipe,PercentPipe,
  SlicePipe,CurrencyPipe,JsonPipe,DatePipe,CustomsPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task6';
  public details={ Name: "Mithun", Age: "24", Email:"mithunk@gmail.com" };
  public currentdate = new Date();
  
}
