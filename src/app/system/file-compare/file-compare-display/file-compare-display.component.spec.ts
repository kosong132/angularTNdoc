import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCompareDisplayComponent } from './file-compare-display.component';

describe('FileCompareDisplayComponent', () => {
  let component: FileCompareDisplayComponent;
  let fixture: ComponentFixture<FileCompareDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileCompareDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileCompareDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
