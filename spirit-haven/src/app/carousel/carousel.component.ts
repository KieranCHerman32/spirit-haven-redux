import { Component } from '@angular/core';
import { CarouselSlide } from '../types/CarouselSlide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  slides: CarouselSlide[] = SlideShow.slides;
}

export class SlideShow {
  static slides: CarouselSlide[] = [
    {
      src: '../../assets/jpg/grandmothers-right.jpg',
      title: 'Come home.',
      subtitle:
        'Our 100+ acre ranch is where we come together to celebrate as a community.\nIts name is Spirit Haven Ranch, but we prefer to call it home.',
    },
    {
      src: '../../assets/jpg/revel-wide.jpg',
      title: 'Find your community.',
      subtitle:
        'Visit for just one Festival or WorkEnd and make connections that last a lifetime.',
    },
    {
      src: '../../assets/jpg/guardian-fire-dark.jpg',
      title: 'Rekindle your spark.',
      subtitle:
        'Take a break from the mundane world and immerse yourself in a Pagan-centric space where you can fully be you.',
    },
    {
      src: '../../assets/jpg/altar.jpg',
      title: 'Discover your path.',
      subtitle:
        'Spirit Haven is made up of rich, diverse practices and traditions. \nGo to a workshop or strike up a conversation with just about anyone to learn something new.',
    },
    {
      src: '../../assets/jpg/lothlorien_path.jpg',
      title: 'A haven for your spirit.',
      subtitle:
        'A multicultural Pagan organization built on a foundation of love, community, and passion.',
    },
  ];
}
