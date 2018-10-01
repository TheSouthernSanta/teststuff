import { Component, OnInit } from '@angular/core';
import { MEMES } from '../mock-memes';


@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {

  constructor() { }
  memes = MEMES;

  ngOnInit() {
  }
}
