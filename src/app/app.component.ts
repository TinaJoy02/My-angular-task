import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { ServiceComponent } from "./webservice/service.component";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavComponent, PortfolioComponent, RouterLink, FooterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
