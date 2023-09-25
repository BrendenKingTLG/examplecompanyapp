import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class NavbarComponent {
  menuVis = false;

  test(){
    if (this.menuVis) {
      let x = Array.from(document.getElementsByClassName('navMenu') as HTMLCollectionOf<HTMLElement>)
      x.forEach(element => {
        element.style.display = "none";
      });
      this.menuVis = false
    } else {
      let x = Array.from(document.getElementsByClassName('navMenu') as HTMLCollectionOf<HTMLElement>)
      x.forEach(element => {
        element.style.display = "block";
      });
      this.menuVis = true
    }

  }

}
