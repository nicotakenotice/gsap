import { AfterViewInit, Component } from '@angular/core';
import { TimelineControllerComponent } from '@lib/components';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TimelineControllerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  tl = gsap.timeline({ paused: true });

  constructor() { }

  ngAfterViewInit(): void {
    this.buildTimeline();
  }

  buildTimeline(): void {
    this.tl
      .to('.letter', { color: 'green', duration: 1, stagger: 1 });
  }
}
