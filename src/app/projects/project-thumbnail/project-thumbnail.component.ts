import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-thumbnail',
  templateUrl: './project-thumbnail.component.html',
  styleUrls: ['./project-thumbnail.component.scss']
})
export class ProjectThumbnailComponent implements OnInit {
  @Input() project: any;

  constructor() {
  }

  ngOnInit() {
  }

}
