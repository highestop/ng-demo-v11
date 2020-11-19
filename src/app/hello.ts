import { AfterContentInit, Component, ContentChildren, Directive, QueryList } from "@angular/core";

@Component({
  selector: "hello",
  template: `<h1>Hello!</h1>`,
})
export class HelloComponent {
  constructor() {
    console.log("component");
  }
}

@Directive({
  selector: "[appHello]"
})
export class HelloDirective implements AfterContentInit {
  @ContentChildren(HelloComponent)
  contentComponents: QueryList<HelloComponent>;

  constructor() {
    console.log("directive");
  }

  ngAfterContentInit() {
    console.log(this.contentComponents?.length);
  }
}
