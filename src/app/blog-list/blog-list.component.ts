import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: any[] = [];

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    this.scully.available$.subscribe(posts => {
      this.blogPosts = posts.filter(post => post.route.startsWith('/blog/'));
    });
  }
}