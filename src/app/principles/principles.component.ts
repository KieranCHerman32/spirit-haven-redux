import { Component } from '@angular/core';
import { PanelSetData } from '../types/PanelSetData';

@Component({
  selector: 'app-principles',
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.scss'],
})
export class PrinciplesComponent {
  principles = panelData.principles;
}

export class panelData {
  static principles: PanelSetData[] = [
    {
      title: 'Inclusion',
      desc: [
        'As a member or guest of Spirit Haven, I recognize that each individual comes into the divine in their own way. I will be inclusive of every member of Spirit Haven and honor their person and their background, regardless of race, color, ethnicity, national origin (ancestry), religious affiliation, spiritual beliefs, sexual orientation, caste, sex, gender, gender identity and expression, relationship status, military status, age, immigration status, or serious disease or disability.',
      ],
    },
    {
      title: 'Acceptance',
      desc: [
        'As a member or guest of Spirit Haven, I accept that there are many ways one can integrate religious and spiritual practices into their daily lives and beliefs, and I will practice and promote acceptance at all times. I understand that Spirit Haven as a corporation accepts that its membership is diverse and does not advocate one path over another, nor disparage others for their beliefs. I will also accept others and their paths and will not disparage others for their beliefs.',
      ],
    },
    {
      title: 'Confidentiality',
      desc: [
        'As a member or guest of Spirit Haven, I acknowledge the right of each individual to maintain their own privacy as they see fit. I will, within the limits of the law, protect the confidentiality of others at all times. I will not reveal, share, or discuss the identity or personal information of others without the express advance consent of all persons involved.',
        'Specifically, I will not photograph or take video of any part of anyone, even in the background, without their express advance consent. I will move to a location with a backdrop if needed. I will also not post any photo or video on any social media platform without the express advance consent of all persons in that photograph or video.',
      ],
    },
    {
      title: 'Liberty',
      desc: [
        "As a member or guest of Spirit Haven, I will support each individual's inherent freedoms, including religious or spiritual belief, thought, and action, provided that they do not infringe upon, threaten, harm, or violate those of others. I will support a minimally restrictive yet safe environment to foster and protect each person's liberties, consistent with their safety, privacy, and general well-being.",
      ],
    },
    {
      title: 'Stewardship',
      desc: [
        'As a member or guest of Spirit Haven, I will be a conscientious steward of its resources, and I will protect, defend, and use them responsibly. I will practice good stewardship, keeping Spirit Haven Ranch clean and leaving it better than I found it.',
      ],
    },
    {
      title: 'Accountability',
      desc: [
        'As a member or guest of Spirit Haven, I will hold myself accountable at all times. I accept personal responsibility for my words, actions, and intentions. I understand this is the best way to promote a healthy environment of growth in which all members and guests of Spirit Haven can thrive, and I will act in accordance at all times.',
      ],
    },
    {
      title: 'Integrity',
      desc: [
        'As a member or guest of Spirit Haven, I will conduct myself with integrity at all times. I will act with empathy, respect, and in good faith toward the organization and the members and guests of the organization. I will not encourage nor participate in physical, mental, emotional, psychological, or spiritual abuse or violence. I will not encourage nor engage in theft, slander, or libel of any sort.',
      ],
    },
    {
      title: 'Child Safety & Welfare',
      desc: [
        'As a member or guest of Spirit Haven, I will protect the safety and welfare of the minor children (under 18 years of age) of the membership and guests at all times. I will neither encourage nor commit physical, mental, emotional, psychological, or spiritual harm or trauma, through action or inaction at any time.',
      ],
    },
    {
      title: 'Consent',
      desc: [
        "As a member or guest of Spirit Haven, I will protect the sanctity of other members and guests. I understand that each person's privacy, bodily autonomy, consent, and personhood are their own. I understand and will honor that consent must be freely given, reversible, informed, enthusiastic, and specific. I will protect and respect my own boundaries and those of others at all times.",
      ],
    },
  ];
}
