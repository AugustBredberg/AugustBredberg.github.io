import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { NavigationComponent } from './navigation.component'

import { RouterTestingModule } from '@angular/router/testing'

describe('NavigationComponent', () => {
  let component: NavigationComponent
  let fixture: ComponentFixture<NavigationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavigationComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it(`should have variable 'home' not empty`, () => {
    expect(component.home).toBeTruthy()
    expect(component.home).toBeDefined()
  })
})
