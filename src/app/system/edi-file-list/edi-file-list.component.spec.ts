import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiFileListComponent } from './edi-file-list.component';

describe('EdiFileListComponent', () => {
  let component: EdiFileListComponent;
  let fixture: ComponentFixture<EdiFileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiFileListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdiFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
