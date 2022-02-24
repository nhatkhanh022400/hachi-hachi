import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterArticlesComponent } from './footer-articles.component';

describe('FooterArticlesComponent', () => {
  let component: FooterArticlesComponent;
  let fixture: ComponentFixture<FooterArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
