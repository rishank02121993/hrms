import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
isDarkMode = false;
constructor(private renderer: Renderer2){}
ngOnInit(): void {
  // Check local storage for theme preference
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    this.isDarkMode = true;
    this.renderer.addClass(document.body, 'dark');
  }
}

toggleTheme(): void {
  this.isDarkMode = !this.isDarkMode;

  if (this.isDarkMode) {
    this.renderer.addClass(document.body, 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    this.renderer.removeClass(document.body, 'dark');
    localStorage.setItem('theme', 'light');
  }
}
}
