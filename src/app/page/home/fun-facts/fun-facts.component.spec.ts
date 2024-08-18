import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsComponent } from './fun-facts.component';

describe('FunFactsComponent', () => {
  let component: FunFactsComponent;
  let fixture: ComponentFixture<FunFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunFactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
