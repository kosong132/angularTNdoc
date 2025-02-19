import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilecompareComponent } from './file-compare-upload.component';

describe('FileCompareUploadComponent', () => {
  let component: FilecompareComponent;
  let fixture: ComponentFixture<FilecompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilecompareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilecompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
