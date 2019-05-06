import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPokemonComponent } from './not-pokemon.component';

describe('NotPokemonComponent', () => {
  let component: NotPokemonComponent;
  let fixture: ComponentFixture<NotPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
