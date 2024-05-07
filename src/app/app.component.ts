import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { NgclassComponent } from './Components/ngclass/ngclass.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent ,NgclassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project-app';
}
