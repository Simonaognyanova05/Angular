import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // template: `<h1>Hello World, {{title}}!</h1>`,
  templateUrl: './app.component.html',
  // styles: ['h1 { color: red}']
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components-demo';
}
