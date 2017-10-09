import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroesComponent } from './list-heroes.component';
import { HeroesService } from '../heroes.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { By } from '@angular/platform-browser';
import { Hero } from '../hero';

describe('ListHeroesComponent', () => {
  let component: ListHeroesComponent;
  let fixture: ComponentFixture<ListHeroesComponent>;
  let lis:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHeroesComponent ],
      imports:[HttpClientModule],
      providers: [HeroesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeroesComponent);    
    component = fixture.componentInstance;
    let service = fixture.debugElement.injector.get(HeroesService);
    spyOn(service, 'getAllHeroes').and.returnValue(Observable.of([new Hero("test", 1), new Hero("test 2", 1), new Hero("test 3", 1)]));
    fixture.detectChanges();
  });

  it('should create', () => {
   expect(component).toBeTruthy();
  });
  it('should create with 3 li', () => {
    expect(component).toBeTruthy();
    let lis= fixture.debugElement.queryAll(By.css('li'));
    expect(lis.length).toBe(3);
   });
   it('should capitalize the hero name', ()=> {
    let heroTest = new Hero('test', 1);
    component.inspect(heroTest);
  expect(heroTest.name).toBe('Test'); 
  let li = fixture.debugElement.query(By.css('li')).nativeElement;
  li.click();
  fixture.detectChanges();
  expect(li.textContent.trim()).toBe('Test');
  })
});
