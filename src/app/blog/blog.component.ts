import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  blogPost: any;
  currentUrl: string = window.location.href;

  constructor(private route: ActivatedRoute, private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    this.scully.available$.subscribe(routes => {
      const slug = this.route.snapshot.paramMap.get('slug');
      this.blogPost = routes.find(route => route.route === `/blog/${slug}`);
    });
  }
}
