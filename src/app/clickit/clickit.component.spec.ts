import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickitComponent } from './clickit.component';

describe('ClickitComponent', () => {
  let component: ClickitComponent;
  let fixture: ComponentFixture<ClickitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
