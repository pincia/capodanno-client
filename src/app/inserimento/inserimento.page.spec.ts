import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserimentoPage } from './inserimento.page';

describe('InserimentoPage', () => {
  let component: InserimentoPage;
  let fixture: ComponentFixture<InserimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
