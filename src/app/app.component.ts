import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimationComponent } from './animation/animation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'PranavKumarDubey';
}
