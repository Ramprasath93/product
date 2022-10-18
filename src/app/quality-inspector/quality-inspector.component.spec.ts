import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityInspectorComponent } from './quality-inspector.component';

describe('QualityInspectorComponent', () => {
  let component: QualityInspectorComponent;
  let fixture: ComponentFixture<QualityInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityInspectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
