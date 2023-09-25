import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ['./footer.component.css'],
  imports: [DatePipe],
  standalone: true,
})
export class FooterComponent {
  today: number = Date.now();
}