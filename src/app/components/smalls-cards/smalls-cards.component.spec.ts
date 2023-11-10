import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallsCardsComponent } from './smalls-cards.component';

describe('SmallsCardsComponent', () => {
  let component: SmallsCardsComponent;
  let fixture: ComponentFixture<SmallsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallsCardsComponent]
    });
    fixture = TestBed.createComponent(SmallsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
