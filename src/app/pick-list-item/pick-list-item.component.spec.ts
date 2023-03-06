import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickListItemComponent } from './pick-list-item.component';

describe('PickListItemComponent', () => {
  let component: PickListItemComponent;
  let fixture: ComponentFixture<PickListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
