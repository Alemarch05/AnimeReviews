import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../../Layouts/footer/footer.component";
import { NavBarComponent } from "../../../Layouts/nav-bar/nav-bar.component";

@Component({
  selector: 'app-routing-pages',
  imports: [RouterOutlet, FooterComponent, NavBarComponent],
  templateUrl: './routing-pages.component.html',
  styleUrl: './routing-pages.component.scss'
})
export class RoutingPagesComponent {

}
