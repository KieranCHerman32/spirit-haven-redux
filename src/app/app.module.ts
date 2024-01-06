import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, DropdownService } from '@coreui/angular';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreasComponent } from './areas/areas.component';
import { BurnBannerComponent } from './burn-banner/burn-banner.component';
import { CampfireStoriesComponent } from './campfire-stories/campfire-stories.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollageComponent } from './collage/collage.component';
import { CommunityServiceComponent } from './community-service/community-service.component';
import { CommunityComponent } from './community/community.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { MemberTriptychComponent } from './member-triptych/member-triptych.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PanelSetComponent } from './panel-set/panel-set.component';
import { PrincipleDividerComponent } from './principle-divider/principle-divider.component';
import { PrinciplesComponent } from './principles/principles.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TriptychComponent } from './triptych/triptych.component';
import { VolunteerTriptychComponent } from './volunteer-triptych/volunteer-triptych.component';
import { ViewportService } from './services/viewport.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PrincipleDividerComponent,
    BurnBannerComponent,
    PrivacyPolicyComponent,
    AboutComponent,
    PrinciplesComponent,
    HistoryComponent,
    CampfireStoriesComponent,
    TimelineComponent,
    HomeComponent,
    CarouselComponent,
    CountdownComponent,
    CollageComponent,
    TriptychComponent,
    HeaderComponent,
    CommunityComponent,
    MemberTriptychComponent,
    VolunteerTriptychComponent,
    PanelSetComponent,
    CommunityServiceComponent,
    AreasComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    NgbModule,
    MatDividerModule,
    FontAwesomeModule,
    NgOptimizedImage,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    CarouselModule,
    MatSidenavModule,
    LayoutModule,
  ],
  providers: [
    ViewportService,
    DropdownService,
    {
      provide: APP_INITIALIZER,
      useFactory: (vs: ViewportService) => () => {
        return vs.load();
      },
      deps: [ViewportService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faInstagram);
  }
}
