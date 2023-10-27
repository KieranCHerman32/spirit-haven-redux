import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-panel-set',
  templateUrl: './panel-set.component.html',
  styleUrls: ['./panel-set.component.scss'],
})
export class PanelSetComponent implements OnInit {
  @Input() multi: boolean = true;
  @Input() panelSetTitle: string = '';
  @Input() panelSetData: any[] = [];

  @Input() panelType: string = '';

  @ViewChildren(MatExpansionPanel)
  panels!: QueryList<MatExpansionPanel>;
  exPanel: any[] = [];

  ngOnInit(): void {
    // console.log(this.panelSetData); // DO NOT REMOVE. Logging panelSetData *somehow* prevents the array from becoming randomly ordered.
  }

  mailTo(email: string) {
    return `mailto:${email}`;
  }

  displaySocial(url: string) {
    const regEx = new RegExp('w*\\.[a-z]*\\.[a-z]*');
    if (regEx.test(url)) {
      const urlArr = url.match(regEx);
      const urlStr = urlArr![0].split('.')[1];

      switch (urlStr) {
        case 'facebook':
          return 'Facebook';
        case 'twitter' || 'x':
          return 'Twitter';
        case 'tiktok':
          return 'TikTok';
        case 'instagram':
          return 'Instagram';
        default:
          return;
      }
    } else {
      return url;
    }
  }

  getPanelType(panelType: string) {
    return this.panelType.trim() == panelType;
  }

  findPanel(index: number) {
    return this.panels.get(index);
  }

  showToggle(index: number) {
    return !this.exPanel.includes(index) ? 'add' : 'remove';
  }

  showDivider(index: number) {
    return !this.exPanel.includes(index);
  }

  togglePanel(index: number) {
    const panel = this.findPanel(index);
    if (this.multi == true) {
      !this.exPanel.includes(index)
        ? this.exPanel.push(index)
        : this.exPanel.splice(this.exPanel.indexOf(index), 1);
    } else {
      !this.exPanel.includes(index)
        ? (this.exPanel = [index])
        : (this.exPanel = []);
    }

    panel?.toggle();
  }
}
