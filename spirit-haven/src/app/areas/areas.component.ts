import { Component } from '@angular/core';
import { AreaPanelSetData } from '../types/PanelSetData';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss'],
})
export class AreasComponent {
  areas = PanelData.areas;
}

export class PanelData {
  static areas: AreaPanelSetData[] = [
    {
      title: 'Austin',
      repEmail: 'rep.austin@spirit-haven.org',
      areaSocials: [
        'https://www.facebook.com/groups/523531024350569/?ref=share',
      ],
    },
    {
      title: 'Central Texas',
      areaSocials: [
        'https://www.facebook.com/groups/237605116443924/?ref=share',
      ],
    },
    {
      title: 'Coastal Bend',
      areaSocials: [
        'https://www.facebook.com/groups/377304389759694/?ref=share',
      ],
    },
    {
      title: 'North Texas',
      repEmail: 'rep.northtx@spirit-haven.org',
      areaSocials: [
        'https://www.facebook.com/groups/208979852990280/?ref=share',
      ],
    },
    {
      title: 'Outlands',
      areaSocials: [
        'https://www.facebook.com/groups/1094520530559051/?ref=share',
      ],
    },
    {
      title: 'San Antonio',
      repEmail: 'rep.sanantonio@spirit-haven.org',
      areaSocials: [
        'https://www.facebook.com/groups/1621450471496118/?ref=share',
      ],
    },
    {
      title: 'Southeast Texas',
      repEmail: 'rep.southeasttx@spirit-haven.org',
      areaSocials: [
        'https://www.facebook.com/groups/305840530103416/?ref=share',
      ],
    },
    {
      title: 'West Texas',
      repEmail: 'rep.westtexas@spirit-haven.org',
      areaSocials: [
        'https://www.facebook.com/groups/2519156421503293/?ref=share',
      ],
    },
  ];
}
