import { Component, OnInit, AfterViewInit  } from '@angular/core';
declare var anime: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, AfterViewInit{
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    let textWrapper = document.querySelector('.name .letters');
    let textWrapperSecond = document.querySelector('.title .letters');
    // @ts-ignore
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");
    // @ts-ignore
    textWrapperSecond.innerHTML = textWrapperSecond.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.name , .letter , .title',
        rotateY: [-90, 0],
        duration: 2300,
        delay: (el: any, i: number) => 85 * i
      }).add({
      targets: '.name , .title',
      opacity: 0,
      duration: 2000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }
}
