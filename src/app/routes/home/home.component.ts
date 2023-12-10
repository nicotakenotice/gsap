import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  tl = gsap.timeline();

  constructor() { }

  ngAfterViewInit(): void {
    this.tl
      .to('.letter', { color: 'green', duration: 1, stagger: 1 })
      .pause();
  }
}
