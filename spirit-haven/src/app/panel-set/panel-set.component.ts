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
  @Input() panelSetTitle = '';
  @Input() panelSetData: any[] = [];

  @ViewChildren(MatExpansionPanel)
  panels!: QueryList<MatExpansionPanel>;
  exPanel: any[] = [];

  ngOnInit(): void {
    console.log(this.panelSetData); // DO NOT REMOVE. Logging panelSetData *somehow* prevents the array from becoming randomly ordered.
  }

  mailTo(email: string) {
    return `mailto:${email}`;
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
    !this.exPanel.includes(index)
      ? this.exPanel.push(index)
      : this.exPanel.splice(this.exPanel.indexOf(index), 1);
    panel?.toggle();
  }
}
