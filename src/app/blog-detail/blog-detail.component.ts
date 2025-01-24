import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog: any;

  constructor(private route: ActivatedRoute, private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.scully.available$.subscribe(posts => {
      this.blog = posts.find(post => post.route === `/blog/${slug}`);
    });
  }
}