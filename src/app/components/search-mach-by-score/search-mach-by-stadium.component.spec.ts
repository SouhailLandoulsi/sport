import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMachByStadiumComponent } from './search-mach-by-stadium.component';

describe('SearchMachByStadiumComponent', () => {
  let component: SearchMachByStadiumComponent;
  let fixture: ComponentFixture<SearchMachByStadiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMachByStadiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMachByStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
