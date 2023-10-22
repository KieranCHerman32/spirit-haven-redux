import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from '@coreui/angular';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurnBannerComponent } from './burn-banner/burn-banner.component';
import { CampfireStoriesComponent } from './campfire-stories/campfire-stories.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PrincipleDividerComponent } from './principle-divider/principle-divider.component';
import { PrinciplesComponent } from './principles/principles.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CollageComponent } from './collage/collage.component';
import { TriptychComponent } from './triptych/triptych.component';
import { HeaderComponent } from './header/header.component';
import { CommunityComponent } from './community/community.component';
import { MemberTriptychComponent } from './member-triptych/member-triptych.component';
import { VolunteerTriptychComponent } from './volunteer-triptych/volunteer-triptych.component';
import { PanelSetComponent } from './panel-set/panel-set.component';
import { CommunityServiceComponent } from './community-service/community-service.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faInstagram);
  }
}
