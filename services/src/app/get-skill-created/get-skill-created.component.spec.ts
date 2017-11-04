import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSkillCreatedComponent } from './get-skill-created.component';

describe('GetSkillCreatedComponent', () => {
  let component: GetSkillCreatedComponent;
  let fixture: ComponentFixture<GetSkillCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSkillCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSkillCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
