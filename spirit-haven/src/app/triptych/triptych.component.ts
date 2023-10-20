import { Component, Input, OnInit } from '@angular/core';
import { TriptychContent } from '../types/TriptychContent';

@Component({
  selector: 'app-triptych',
  templateUrl: './triptych.component.html',
  styleUrls: ['./triptych.component.scss'],
})
export class TriptychComponent implements OnInit {
  @Input() dirClass = '';
  @Input() content = '';
  contentArr: TriptychContent[] = [];
  button: String = '';

  ngOnInit(): void {
    switch (this.content.toLowerCase()) {
      case 'membership':
        this.contentArr = Content.memberContent;
        this.button = 'Sign Up';
        break;
      case 'nav':
        this.contentArr = Content.navContent;
        this.button = 'Learn More';
        break;
      default:
        break;
    }

    console.log(this.dirClass);
  }
}

export class Content {
  static memberContent: TriptychContent[] = [
    {
      title: '6 Months',
      subtitle: '$15 for 6 Months',
      nav: '/membership/6-month',
    },
    {
      title: 'Yearly',
      subtitle: '$30 for 12 Months',
      nav: '/membership/annual',
    },
    {
      title: 'Student Yearly',
      subtitle: '$30 for 12 Months\n(+ Reduced Festival Attendance Rate)',
      nav: '/membership/student-annual',
    },
  ];
  static navContent: TriptychContent[] = [
    {
      title: 'WorkEnds',
      nav: '/ranch/workends',
    },
    {
      title: 'Community Service',
      nav: '/community/community-service',
    },
    {
      title: 'Join A Team',
      nav: '/community/#join-a-team',
    },
  ];
}
