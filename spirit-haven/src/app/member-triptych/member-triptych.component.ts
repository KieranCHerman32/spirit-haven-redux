import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-triptych',
  templateUrl: './member-triptych.component.html',
  styleUrls: ['./member-triptych.component.scss'],
})
export class MemberTriptychComponent implements OnInit {
  @Input() direction = '';
  @Input() alternate = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.direction);
  }
}
