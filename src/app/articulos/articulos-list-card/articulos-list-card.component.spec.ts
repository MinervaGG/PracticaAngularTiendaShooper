import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosListCardComponent } from './articulos-list-card.component';

describe('ArticulosListCardComponent', () => {
  let component: ArticulosListCardComponent;
  let fixture: ComponentFixture<ArticulosListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
