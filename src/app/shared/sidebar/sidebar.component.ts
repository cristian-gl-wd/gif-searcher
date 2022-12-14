import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  get history() {
    return this.NavbarService.history;
  }
  
  constructor( private NavbarService: NavbarService) {}

  public searchAgain(item: string) {
    this.NavbarService.searchGifs(item);
  }

}
