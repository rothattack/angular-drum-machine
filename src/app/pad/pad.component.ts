import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "drum-pad",
  templateUrl: "./pad.component.html",
  styleUrls: ["./pad.component.scss"]
})
export class PadComponent implements OnInit {
  @Input() sound: string;
  @Input("trigger-key") triggerKey: string;
  @Output("trigger-pad") triggerPad: EventEmitter<any> = new EventEmitter();

  onPadTrigger(item: any) {
    this.triggerPad.emit(item);
  }
  constructor() {}

  ngOnInit() {}
}
