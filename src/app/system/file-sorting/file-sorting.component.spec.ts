import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSortingComponent } from './file-sorting.component';

describe('FileSortingComponent', () => {
  let component: FileSortingComponent;
  let fixture: ComponentFixture<FileSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileSortingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
