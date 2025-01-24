import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'naatukodiblog';
  blogPosts: any[] = [];

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    this.scully.available$.subscribe(routes => {
      this.blogPosts = routes
        .filter(route => route.route.startsWith('/blog/')) // Fetch only blogs
        .sort((a, b) => new Date(b['date']).getTime() - new Date(a['date']).getTime()); // Sort newest first
    });
  }
}

