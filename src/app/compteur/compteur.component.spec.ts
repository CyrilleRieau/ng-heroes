import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurComponent } from './compteur.component';
import { By } from '@angular/platform-browser';

describe('CompteurComponent', () => {
  let component: CompteurComponent;
  let fixture: ComponentFixture<CompteurComponent>;
  let spanEl: HTMLSpanElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spanEl = fixture.debugElement.query(By.css('span')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increment counter to 1', ()=>{
    component.increment();
  expect(component.compte).toBe(1);
  fixture.detectChanges();
  expect(spanEl.textContent).toBe("1");
  });
  it('should decrement counter to -1', ()=>{
    let btnDecrement = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    //component.decrement();
    btnDecrement.click();
    expect(component.compte).toBe(-1);
    fixture.detectChanges();
    expect(spanEl.textContent).toBe("-1");
  });
  it('should reset counter to 0', ()=>{
    component.increment();
    component.decrement();
    expect(component.compte).toBe(0);
    fixture.detectChanges();
    expect(spanEl.textContent).toBe("0");
  });
});
