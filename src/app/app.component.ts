import { Component } from '@angular/core';
import { ViewportService } from './services/viewport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spirit-haven';

  constructor(public viewportService: ViewportService) {}

  ngOnInit(): void {
    this.viewportService.getLayoutChange();
    this.viewportService.getBreakpointChange();
  }

  ngOnDestroy() {
    this.viewportService.destroyed.next();
    this.viewportService.destroyed.complete();
  }
}
