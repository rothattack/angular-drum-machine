import { Component, OnInit, HostListener, Input } from "@angular/core";
import Pad from "../core/pad.interface";

@Component({
  selector: "drum-machine",
  templateUrl: "./machine.component.html",
  styleUrls: ["./machine.component.scss"]
})
export class MachineComponent implements OnInit {
  constructor() {}
  @HostListener("document:keydown", ["$event"])
  pads: Pad[] = [
    {
      sound: "808",
      key: "k"
    },
    {
      sound: "808",
      key: "k"
    },
    {
      sound: "808",
      key: "k"
    },
    {
      sound: "808",
      key: "k"
    }
  ];
  ngOnInit() {}
  play() {
    console.log("clicked");
  }
}
