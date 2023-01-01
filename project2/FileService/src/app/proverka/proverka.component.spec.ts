import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProverkaComponent } from './proverka.component';

describe('ProverkaComponent', () => {
  let component: ProverkaComponent;
  let fixture: ComponentFixture<ProverkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProverkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProverkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
