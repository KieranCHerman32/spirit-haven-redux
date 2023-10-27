import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaPanelSetData, PanelSetData } from '../types/PanelSetData';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  private fragment!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.fragment = fragment;
        document.querySelector(`#${this.fragment}`)!.scrollIntoView();
      }
    });
  }
}
