import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenagerComponent } from './list-menager.component';

describe('ListMenagerComponent', () => {
  let component: ListMenagerComponent;
  let fixture: ComponentFixture<ListMenagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMenagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMenagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
