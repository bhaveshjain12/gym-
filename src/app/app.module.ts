import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GymComponent } from './gym/gym.component';
import { JoinComponent } from './join/join.component';
import { appRoutes } from './routerConfig';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ElementsComponent } from './elements/elements.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { ContectComponent } from './contect/contect.component';
@NgModule({
  declarations: [
    AppComponent,
    GymComponent,
    JoinComponent,
    BlogComponent,
    AboutComponent,
    PricingComponent,
    GalleryComponent,
    ElementsComponent,
    SingleBlogComponent,
    ContectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
