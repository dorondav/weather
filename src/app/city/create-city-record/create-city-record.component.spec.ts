import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCityRecordComponent } from './create-city-record.component';

describe('CreateCityRecordComponent', () => {
  let component: CreateCityRecordComponent;
  let fixture: ComponentFixture<CreateCityRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCityRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCityRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
