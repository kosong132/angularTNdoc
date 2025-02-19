import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiListComponent } from './edi-file-list.component';

describe('EdiFileListComponent', () => {
  let component: EdiListComponent;
  let fixture: ComponentFixture<EdiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
