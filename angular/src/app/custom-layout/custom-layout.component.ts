import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { HeaderComponent } from "../shared/header/header.component";
import { MainContentComponent } from "../shared/main-content/main-content.component";

@Component({
  selector: 'app-custom-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, MainContentComponent],
  templateUrl: './custom-layout.component.html',
  styleUrl: './custom-layout.component.scss'
})
export class CustomLayoutComponent {

}
