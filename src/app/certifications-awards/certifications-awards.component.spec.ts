import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CertificationsAwardsComponent } from './certifications-awards.component';

describe('CertificationsAwardsComponent', () => {
  let component: CertificationsAwardsComponent;
  let fixture: ComponentFixture<CertificationsAwardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationsAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationsAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
