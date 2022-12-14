import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar-searcher',
  templateUrl: './navbar-searcher.component.html',
  styleUrls: ['./navbar-searcher.component.css']
})
export class NavbarSearcherComponent {

  @ViewChild('txtToSearch') txtToSearch!:ElementRef<HTMLInputElement>;

  constructor( private NavbarService:NavbarService) {}

  public search() {
    const value = this.txtToSearch.nativeElement.value;

    if (value.length == 0) {return;}

    this.NavbarService.searchGifs(value);
    this.txtToSearch.nativeElement.value = '';
  }
  
}
