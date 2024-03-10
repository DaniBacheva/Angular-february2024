import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Post } from '../../types/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] | null = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {


    // this.api.getPosts(5).subscribe((posts) => {
    //console.log(posts);
    //this.posts = posts;
    //this.isLoading = false;
    //}

    this.api.getPosts(5).subscribe({
      next: (posts) => {
        console.log(posts);
        this.posts = posts;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log("Error:", err)
      }
    })
  }
}
