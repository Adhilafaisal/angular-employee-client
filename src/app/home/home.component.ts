import { Component } from '@angular/core';
import { ApiService } from '../employee/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private api: ApiService) {
    // this.api.getALLEmployee().subscribe({
      
    // })
}
}