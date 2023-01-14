import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
 
navbarCollapsed = true;
 
toggleNavbarCollapsing() { //to collapse the header 
    this.navbarCollapsed = !this.navbarCollapsed;
}

}
