import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangarComponent } from './hangar.component';

describe('HangarComponent', () => {
  let component: HangarComponent;
  let fixture: ComponentFixture<HangarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HangarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
