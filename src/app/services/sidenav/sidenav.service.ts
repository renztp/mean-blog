import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private isSideNavOpenObject = new BehaviorSubject<boolean>(false);
  public isSideNavOpen$: Observable<boolean> = this.isSideNavOpenObject.asObservable();

  constructor() { }

  toggleSideNavState(): void {
    const currentSideNavState = this.isSideNavOpenObject.getValue();
    this.isSideNavOpenObject.next(!currentSideNavState);
  }

  getSideNavState(): boolean {
    return this.isSideNavOpenObject.getValue();
  }
}
