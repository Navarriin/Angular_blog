import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-content',
  templateUrl: './primary-content.component.html',
  styleUrls: ['./primary-content.component.css'],
})
export class PrimaryContentComponent {
  @Input()
  contentImg: string = '';
  @Input()
  contentTitle: string = '';
  @Input()
  content: string = '';
  constructor() {}
}
