import { AfterViewInit, Component, HostListener } from '@angular/core';
import { TimelineEvent } from '../types/TimelineEvent';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements AfterViewInit {
  lineHeight = 0;
  events: TimelineEvent[] = Events.events;
  stories: TimelineEvent[] = Events.stories;
  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.setLineHeight();
  }

  ngAfterViewInit() {
    document.querySelectorAll('.title').forEach((item, index) => {
      index % 2 == 0 ? item.classList.add('start') : item.classList.add('end');
    });

    document.querySelectorAll('mat-icon.circle').forEach((item, index) => {
      index % 2 == 0 ? item.classList.add('left') : item.classList.add('right');
    });

    document.querySelectorAll('.content').forEach((item, index) => {
      index % 2 == 0 ? item.classList.add('start') : item.classList.add('end');
    });

    this.setLineHeight();
  }

  setLineHeight() {
    let height = document
      .querySelector('.container-fluid')
      ?.getBoundingClientRect().height;

    this.lineHeight = height ?? 0;
  }
}

export class Events {
  // TODO: Will be replaced/populated with API response(s) //
  static events: TimelineEvent[] = [
    {
      date: 'Samhain 1980',
      title: 'Council of the Mystic Arts Founded',
      content: [
        `In the Spring of 1980, I made contact outside of my coven with several people prominent in the Craft whom I had been hearing about, putting together faces and names. We saw the need for a working network/council through which anyone who needed special help could send an SOS.`,
        `We got together at Samhain 1980 for a meeting and ritual to form the council. It was named 'The Council of the Mystic Arts' in order to assure our friends and connections with Christian and Buddhist leanings that they were welcome to be a part of the network.`,
      ],
      author: `Bertie Estes, CMA's first Director`,
      authored: 'c. 1997',
    },
    {
      date: 'Beltane & Samhain 1981',
      title: 'New Name: Council of Magickal Arts',
      content: [
        `At the May 5, 1981 Beltane meeting there were representatives from nine covens present. At the end of the first year, Bertie Estes from San Antonio, who was the first Director/Editor [of the Accord], passed on the job to me. When I took over the responsibility of Director/Editor, there was $28.90 in the Treasury and probably 20-25 members.`,
        `We changed the name from the Council of the Mystic Arts to the Council of the Magickal Arts at Samhain 1981 because the membership at that time felt "Magickal" more adequately described what we were all about. By October 1983, we had 18 individual and/or group memberships with over $200 in the Treasury.`,
      ],
      author: ` Judy Carusone, Director 1981-193, Editor 1981-1990`,
      authored: 'c. 1992',
    },
    {
      date: 'Beltane 1987',
      title: 'Early Gatherings',
      content: [
        `A tentative schedule lists a "Craft Fair", three workshops and the Maypole Dance for Saturday activities, plus opening, closing, and main rituals.`,
      ],
    },
    {
      date: 'Beltane 1991',
      title: 'Early Gatherings',
      content: [
        'The first Festival is held at the Recreation Plantation in Dripping Springs.',
      ],
    },
    {
      date: 'Winter 1991',
      title: 'The Accord',
      content: [
        'The newsletter, previously physically printed, gets named the Accord and begins to be produced with a desktop publishing software as a magazine.',
      ],
    },
    {
      date: 'November 18, 1993',
      title: 'The Council of Magickal Arts, INCORPORATED!',
      content: [
        'The Council of Magickal arts officially becomes a corporation and gets a new birthday. CMA is a Scorpio Sun, Aquarius Moon, and Aries Rising.',
      ],
    },
    {
      date: 'Samhain 1995',
      title: 'Festivals Expand',
      content: [
        'Festival begins starting on Thursday due to a packed schedule. The program becomes a 12 page guide, with a schedule of workshops and rituals covering two pages.',
      ],
    },
    {
      date: 'Samhain 1997',
      title: 'The Push for our Own Land',
      content: [
        `The Land Fund - initiated by Tiny's speech at Great Works - kicks off, raising funds through auctions, T-shirt and mug sales, as well as through member-driven outreach.`,
      ],
    },
  ];
  static stories: TimelineEvent[] = [
    {
      title: 'The First Gathering',
      content: [
        `It was at Robert's and Gloria's place in Von Ormy, and it was warm in the day time and cold for the circle. It was so cold that the dry ice hardly fogged. During the circle the torches sang, an event we never explained, but did enjoy. In the first meeting there was most debate about the name, because the group was so varied in their styles. ... It was good energy, like a family picnic. We tried to set up a pattern that was clear and positive, with plenty of room for diversity.`,
      ],
    },
  ];
}
