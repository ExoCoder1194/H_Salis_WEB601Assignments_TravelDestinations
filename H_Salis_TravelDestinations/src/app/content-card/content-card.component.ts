// content-card.component.ts
import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();

  constructor() {
    // Add at least 3 valid items
    this.contentList.add({
      id: 1,
      title: 'Sample Title 1',
      description: 'Sample Description 1',
      creator: 'Creator 1',
      imgURL: 'https://example.com/image1.jpg',
      type: 'Type 1',
      tags: ['tag1', 'tag2'],
    });

    // Add more items as needed
  }

  ngOnInit(): void {}
}
