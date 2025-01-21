import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiFileAutoGeneratorComponent } from './edi-file-auto-generator.component';

describe('EdiFileAutoGeneratorComponent', () => {
  let component: EdiFileAutoGeneratorComponent;
  let fixture: ComponentFixture<EdiFileAutoGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiFileAutoGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdiFileAutoGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
