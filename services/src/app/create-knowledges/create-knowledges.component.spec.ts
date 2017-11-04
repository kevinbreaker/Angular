import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKnowledgesComponent } from './create-knowledges.component';

describe('CreateKnowledgesComponent', () => {
  let component: CreateKnowledgesComponent;
  let fixture: ComponentFixture<CreateKnowledgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKnowledgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKnowledgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
