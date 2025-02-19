import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultXmlComponent } from './result-xml.component';

describe('ResultXmlComponent', () => {
  let component: ResultXmlComponent;
  let fixture: ComponentFixture<ResultXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultXmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
