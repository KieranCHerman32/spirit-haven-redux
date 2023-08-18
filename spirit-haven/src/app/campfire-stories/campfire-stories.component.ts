import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { TimelineEvent } from '../types/TimelineEvent';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-campfire-stories',
  templateUrl: './campfire-stories.component.html',
  styleUrls: ['./campfire-stories.component.scss'],
})
export class CampfireStoriesComponent {
  stories: TimelineEvent[] = Events.stories;
}
export class Events {
  // TODO: Will be replaced/populated with API response(s) //
  static stories: TimelineEvent[] = [
    {
      title: 'The First Gathering',
      content: [
        `It was at Robert's and Gloria's place in Von Ormy, and it was warm in the day time and cold for the circle. It was so cold that the dry ice hardly fogged. During the circle the torches sang, an event we never explained, but did enjoy. In the first meeting there was most debate about the name, because the group was so varied in their styles. ... It was good energy, like a family picnic. We tried to set up a pattern that was clear and positive, with plenty of room for diversity.`,
      ],
    },
  ];
}
