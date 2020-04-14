import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsBlockComponent } from './tweets-block.component';

describe('TweetsBlockComponent', () => {
  let component: TweetsBlockComponent;
  let fixture: ComponentFixture<TweetsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
