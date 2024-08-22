import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiriesComponent } from './inquiries.component';

describe('InquiriesComponent', () => {
  let component: InquiriesComponent;
  let fixture: ComponentFixture<InquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquiriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
