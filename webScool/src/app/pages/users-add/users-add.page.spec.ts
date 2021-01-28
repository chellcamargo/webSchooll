import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsersAddPage } from './users-add.page';

describe('UsersAddPage', () => {
  let component: UsersAddPage;
  let fixture: ComponentFixture<UsersAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
