import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member-triptych',
  templateUrl: './member-triptych.component.html',
  styleUrls: ['./member-triptych.component.scss'],
})
export class MemberTriptychComponent {
  @Input() direction = '';
  @Input() alternate = false;
}
