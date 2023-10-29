import { Component } from '@angular/core';
import { CSPanelSetData, PanelSetData } from '../types/PanelSetData';

@Component({
  selector: 'app-community-service',
  templateUrl: './community-service.component.html',
  styleUrls: ['./community-service.component.scss'],
})
export class CommunityServiceComponent {
  serviceOptions = panelData.serviceOptions;
}

export class panelData {
  static serviceOptions: CSPanelSetData[] = [
    {
      title: 'Bridge Trolls',
      desc: [
        'Join the team on the bridge!',
        'You will greet attendees as they cross the infamous Troll Bridge into the heart of the festival, pass along important last-minute information about safety and site conditions, and have a generally great time!',
      ],
      contact: ['Questions? Email the Troll Lead:'],
      email: 'troll.lead@spirit-haven.org',
      limited: true,
    },
    {
      title: "Carol's Corner & Information Services",
      desc: [
        'Are you friendly and helpful?',
        "Carol's Corner is the home of community service and so much more.",
        'We have convenience items for sale! Help us sell ice, wood, and festival merchandise, all for the benefit of Spirit Haven.',
        'We also host the Spirit Haven Fundraising Raffle, lovingly donated to by our wonderful vendors, and help run the Flying Monkey program.',
      ],
      contact: ['Want to join our team? Have any questions? Email us:'],
      email: 'carols@spirit-haven.org',
    },
    {
      title: 'Entertainment Support',
      desc: [
        'Want to help our guest speakers and bands settle in and find what they need during festival?',
        "Maybe you'll help guest speakers set up for their workshops or assist in delivering food/drinks to the band. Maybe you can give them a tour around Spirit Haven Ranch.",
        'Volunteer with our Guest Speaker Coordinator and Entertainment Team to make our special guests feel welcome.',
      ],
      contact: ['Questions? Email our leads:'],
      email: 'festival.entertainment@spirit-haven.org',
    },
    {
      title: 'Fire Crew',
      desc: [
        'Want to help build the magic of Revel?',
        "Don't mind some physical labor?",
        'Great with energy work?',
        "Awesome! You'd fit in perfectly! Fire crew is looking for people to help build the fire physically and energetically.",
      ],
      contact: ['Questions? Email the Fire Chief:'],
      email: 'fire.chief@spirit-haven.org',
    },
    {
      title: 'Water Dragons (Fire Crew)',
      desc: [
        'Hey look, a new Community Service!',
        "Wanna check out Fire Crew but don't have the mobility to throw trees? Then keep us hydrated instead!",
        'We need volunteers to make sure we are properly hydrated so we can build up the magic of Revel Fire!',
      ],
      contact: ['Questions? Email the Fire Chief:'],
      email: 'fire.chief@spirit-haven.org',
    },
    {
      title: 'Flying Monkeys',
      desc: [
        'Want to be of help wherever you may be needed? Be a Flying Monkey!',
        'This could include anything from helping with festival games, to running festival errands, to making announcements regarding schedule changes.',
      ],
      contact: ["Questions? Email the Carol's Lead:"],
      email: 'Carols@spirit-haven.org',
    },
    {
      title: 'Front Gate & Parking',
      desc: [
        'As part of the Front Gate Team, you will help in directing the flow of check-in for festival.',
        'Tasks include meeting and greeting people as they enter, making sure they check in properly, directing cars to the parking lot with parking passes, and keeping track of vehicles and owners for security purposes.',
      ],
      contact: ['Questions? Email the Gate Lead:'],
      email: 'gate.lead@spirit-haven.org',
    },
    {
      title: 'Guardians',
      desc: [
        'Come serve your community as a Guardian!',
        'We walk the property to promote physical and spiritual safety during festival.',
        'Enjoy delicious coffee, silly meetings, inside jokes, radio hijinks, and sometimes, sometimes … even a chance to save the day (no promises)!',
      ],
      contact: ['Questions? Email the Safety Services Lead:'],
      email: 'safetysvc.lead@spirit-haven.org',
      limited: true,
      misc: [
        'Good shoes and full-coverage clothing are required on shift, and new volunteers will need to attend Guardian 101 Training.',
      ],
    },
    {
      title: 'Happy Pagan Cafe',
      desc: [
        'Greet the early risers in the coffee shop!',
        'Help with setup/cleanup of supplies and keep the coffee brewing, the drinks pouring, and the conversation flowing.',
      ],
      contact: ['Questions? Email the Tearoom Lead:'],
      email: 'tearoom.lead@spirit-haven.org',
    },
    {
      title: 'Healers',
      desc: [
        "Join the team at Mathew's Self Healing Station!",
        'We need volunteers to assist with our self-serve First Aid station, helping folks with things like minor injuries, bug bites, sunburn, or overheating.',
        'There will be tasty cookies, plenty of laughs, camaraderie, and of course, chicken jokes.',
      ],
      contact: ['Questions? Email the Safety Services Lead:'],
      email: 'safetysvc.lead@spirit-haven.org',
      limited: true,
      misc: [
        'First Aid training is not required, however, wearing full-coverage clothing on shift is very much required.',
      ],
    },
    {
      title: 'Stage Crew',
      desc: [
        'Know your way around audio equipment? Assist our Stage Crew with setup for bands and performers!',
      ],
      contact: ['Questions? Email the Entertainment Coordinator:'],
      email: 'entertainment.coord@spirit-haven.org',
    },
    {
      title: 'Setup / Teardown Crew',
      desc: [
        'Come join the crew that finishes preparing the land and gathering the wood for festival.',
        "Your activities could include preparing food for the crew's community kitchen, harvesting or splitting wood, setting up carports or equipment, mowing a Sacred Space, painting, and more.",
      ],
      special: [
        'This is a multiple day commitment and request submission and approval is required.',
      ],
      misc: [
        'Approval qualifies you for complimentary Wednesday Early Entry.',
        'There are a limited number of spots for Setup/Teardown, so get your request in early!',
      ],
    },
  ];
}
