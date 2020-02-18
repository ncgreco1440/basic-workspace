import { async, TestBed } from '@angular/core/testing';
import { FeatureProfileDetailsModule } from './feature-profile-details.module';

describe('FeatureProfileDetailsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureProfileDetailsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureProfileDetailsModule).toBeDefined();
  });
});
