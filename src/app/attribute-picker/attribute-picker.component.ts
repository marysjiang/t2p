import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSliderChange, MatSlider } from '@angular/material';
import { POD } from '../models/pod.model';
import { POG } from '../models/pog.model';

@Component({
  selector: 'app-attribute-picker',
  templateUrl: './attribute-picker.component.html',
  styleUrls: ['./attribute-picker.component.css'],
})

export class AttributePickerComponent implements OnInit {
  POD: POD;
  POG: POG;

  constructor(private router: Router) { }

  ngOnInit() {
    this.POD = new POD(0, 0);
    this.POG = new POG(0, 0);
  }

  public onPOGHonestySliderChange(event: MatSliderChange) {
    this.POG.setHonesty(event.value);
  }

  public onPOGDesirabilitySliderChange(event: MatSliderChange) {
    this.POG.setDesirability(event.value);
  }

  public onPODHonestySliderChange(event: MatSliderChange) {
    this.POD.setHonesty(event.value);

  }

  public onPODDesirabilitySliderChange(event: MatSliderChange) {
    this.POD.setDesirability(event.value);
  }

  public navigate(event: Event) {
    event.preventDefault();
    this.router.navigate(['storyline-generator'], { state: {
      POGHonesty: this.POG.getHonesty(),
      POGDesirability: this.POG.getDesirability(),
      PODHonesty: this.POD.getHonesty(),
      PODDesirability: this.POD.getDesirability() } });
  }
}
