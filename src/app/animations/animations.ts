import {
    animation, trigger, animateChild, group,state,
    transition, animate, style, query
  } from '@angular/animations';
  

  export const Animations = {
    heightAnimation:  trigger('heightAnimation', [
      state('true', style({
        height: '{{height}}vw',
      }),{ params: { height: '40'}}),
      state('false', style({
        height: '{{height}}vw',
      }),{ params: { height: '19.5'}}),
      transition('true => false', [
        animate('0.2s')
      ]),
      transition('false => true', [
        animate('0.2s')
      ]),
    ]),
    colorChangeAnimation:  trigger('colorChangeAnimation', [
      state('true', style({
        backgroundColor: '{{color}}'
      }),{ params: { color: 'orange'}}),
      state('false', style({
        backgroundColor: '{{color}}'
      }),{ params: { color: '#292929'}}),
      transition('true => false', [
        animate('0.2s')
      ]),
      transition('false => true', [
        animate('0.2s')
      ]),
    ]),

}