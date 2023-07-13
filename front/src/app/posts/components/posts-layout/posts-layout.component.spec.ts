import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsLayoutComponent } from './posts-layout.component';

describe('PostsLayoutComponent', () => {
  let component: PostsLayoutComponent;
  let fixture: ComponentFixture<PostsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsLayoutComponent]
    });
    fixture = TestBed.createComponent(PostsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
