import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElencoPage } from './elenco.page';

describe('ElencoPage', () => {
  let component: ElencoPage;
  let fixture: ComponentFixture<ElencoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElencoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
