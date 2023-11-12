import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-smalls-cards',
  templateUrl: './smalls-cards.component.html',
  styleUrls: ['./smalls-cards.component.css'],
})
export class SmallsCardsComponent {
  @Input()
  id: string | null = '0';
  protected photoCover: string = '';
  protected titleSmallCard: string = '';
  protected contentSmallCard: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => this.id === value.get('id'));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter((value) => value.id === id)[0];
    this.photoCover = result.photo;
    this.titleSmallCard = result.title;
    this.contentSmallCard = result.description;
  }
}
