import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProverbsComponent } from './proverbs.component';

describe('ProverbsComponent', () => {
  let component: ProverbsComponent;
  let fixture: ComponentFixture<ProverbsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProverbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProverbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
