import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  public id: string | null = '0';
  protected photoCover: string = '';
  protected cardTitle: string = '';
  protected cardDescription: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => this.id === value.get('id'));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter((article) => article)[0];
    this.id = result.id;
    this.photoCover = result.photo;
    this.cardTitle = result.title;
    this.cardDescription = result.description;
  }
}
