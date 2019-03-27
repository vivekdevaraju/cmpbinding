import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated  = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  ngOnInit() {
  }
  onAddServer(serverNameInput) {
    console.log(serverNameInput.value);
    this.serverCreated.emit({serverName:serverNameInput.value,serverContent:this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
}
