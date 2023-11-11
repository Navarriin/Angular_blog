import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smalls-cards',
  templateUrl: './smalls-cards.component.html',
  styleUrls: ['./smalls-cards.component.css'],
})
export class SmallsCardsComponent {
  @Input()
  id: string = '0';
  @Input()
  photoCover: string = '';
  @Input()
  titleSmallCard: string = '';
  @Input()
  contentSmallCard: string = '';
  constructor() {}
}
