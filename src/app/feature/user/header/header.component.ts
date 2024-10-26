import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isCollapsed = true; // State variable to track the collapsed state

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed; // Toggle the collapsed state
  }
}
