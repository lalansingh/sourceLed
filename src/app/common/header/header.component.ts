import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public slideimages: any = [
    // { image: 'header-crosol-1.jpg', title: '3 HD LED', description: '3 D HD Security Light Motion' },
    { image: 'stree-and-security-light-motion.png', title: 'Downlight', description: '5 Watt LED Economy' },
    { image: 'man-light-6wrc-4ml.png', title: 'Street Light', description: '60 Watt LED Ecomomy Street Light' },
    { image: 'led-bulb-tube-light.png', title: '81L', description: '9 Watt LED Light' },
    { image: '5-watt-led-downlight-tp.png', title: '81L', description: '9 Watt LED Light' }
  ];
  constructor() {

  }

  ngOnInit() {
  }

}
