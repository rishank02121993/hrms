import { Component } from '@angular/core';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {
  attendees = [
    { name: 'John Doe', role: 'Project Manager' },
    { name: 'Jane Smith', role: 'Developer' },
    { name: 'Michael Johnson', role: 'Designer' },
    { name: 'Emily Davis', role: 'QA Tester' }
  ];

  getInitials(name: string): string {
    const nameParts = name.split(' ');
    return nameParts.map(part => part.charAt(0).toUpperCase()).join('');
  }

  generateColor(index: number): string {
    const hue = (index * 137.5) % 360; // Distribute hues evenly
    return `hsl(${hue}, 70%, 50%)`; // HSL format with fixed saturation and lightness
  }
}
