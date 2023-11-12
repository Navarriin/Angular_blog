import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-primary-content',
  templateUrl: './primary-content.component.html',
  styleUrls: ['./primary-content.component.css'],
})
export class PrimaryContentComponent {
  protected contentImg: string = '';
  protected contentTitle: string = '';
  protected content: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id === id)[0];
    this.contentImg = result.photo;
    this.contentTitle = result.title;
    this.content = result.description;
  }
}
