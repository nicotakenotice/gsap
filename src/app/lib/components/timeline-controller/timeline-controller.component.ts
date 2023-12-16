import { Component, Input } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-timeline-controller',
  standalone: true,
  imports: [],
  templateUrl: './timeline-controller.component.html',
  styleUrl: './timeline-controller.component.scss'
})
export class TimelineControllerComponent {
  @Input() tl = gsap.timeline();
}
