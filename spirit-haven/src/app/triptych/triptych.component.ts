import { Component, Input, OnInit } from '@angular/core';
import { TriptychContent } from '../types/TriptychContent';

@Component({
  selector: 'app-triptych',
  templateUrl: './triptych.component.html',
  styleUrls: ['./triptych.component.scss'],
})
export class TriptychComponent implements OnInit {
  @Input() direction = '';
  @Input() content = '';
  contentArr: TriptychContent[] = [];

  ngOnInit(): void {
    switch (this.content.toLowerCase()) {
      case 'membership':
        this.contentArr = ContentArr.memberContent;
        break;
      case 'nav':
        this.contentArr = ContentArr.navContent;
        break;
      default:
        break;
    }
  }
}

export class ContentArr {
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
      subtitle: '$30 for 12 Months (+ Reduced Festival Attendance Rate)',
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
