import { Component } from '@angular/core';
import { NavbarService } from '../../shared/services/navbar.service';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styleUrls: ['./gifs-page.component.css']
})
export class GifsPageComponent {

  get results() {
    return this.NavbarService.results;
  }

  constructor( private NavbarService: NavbarService ) {}

}
