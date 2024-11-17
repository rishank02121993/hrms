import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarOpen = false;
  isSubMenuOpen = false;


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
