import React, { useState, useEffect, useMemo } from "react";
import { throttle } from 'lodash';
import './Main.scss';

import axios from 'axios';
import MainSlider from "../components/MainSlider";
import Mypage from "../components/Mypage";
import WhoAmI from "../components/WhoAmI";
import UseStack from "../components/stack/UseStack";
import Career from "../components/career/Career";
import { useBase } from "../store/baseStore";

import arrowUp from '../assets/arrow_up.png';
import arrowBottom from '../assets/arrow_bottom.png';

export default function Main({ resize }) {
  const lastPage = 3;
  const store = useBase();

  // window.addEventListener("mousewheel", e => {
  //   if (e.deltaY > 0 && page !== 3) {
  //     page = page+1
  //     setPage(page);
  //   } else if (e.deltaY < 0 && page !== 0) {
  //     page = page-1
  //     setPage(page);
  //   }
  // });

  useEffect(() => {
    var WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight*4,
    MAX_PARTICLES = 100,
    DRAW_INTERVAL = 60,
    container = document.querySelector('#root'),
    canvas = document.querySelector('#pixie'),
    context = canvas.getContext('2d'),
    gradient = null,
    pixies = new Array();

    function setDimensions(e) {
      WIDTH = window.innerWidth;
      HEIGHT = window.innerHeight;
      container.style.width = WIDTH+'px';
      container.style.height = HEIGHT+'px';
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
    }
    setDimensions();
    window.addEventListener('resize', setDimensions);

    function Circle() {
      this.settings = {ttl:8000, xmax:5, ymax:2, rmax:10, rt:1, xdef:960, ydef:540, xdrift:4, ydrift: 4, random:true, blink:true};

      this.reset = function() {
        this.x = (this.settings.random ? WIDTH*Math.random() : this.settings.xdef);
        this.y = (this.settings.random ? HEIGHT*Math.random() : this.settings.ydef);
        this.r = ((this.settings.rmax-1)*Math.random()) + 1;
        this.dx = (Math.random()*this.settings.xmax) * (Math.random() < .5 ? -1 : 1);
        this.dy = (Math.random()*this.settings.ymax) * (Math.random() < .5 ? -1 : 1);
        this.hl = (this.settings.ttl/DRAW_INTERVAL)*(this.r/this.settings.rmax);
        this.rt = Math.random()*this.hl;
        this.settings.rt = Math.random()+1;
        this.stop = Math.random()*.2+.4;
        this.settings.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
        this.settings.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
      }

      this.fade = function() {
        this.rt += this.settings.rt;
      }

      this.draw = function() {
        if(this.settings.blink && (this.rt <= 0 || this.rt >= this.hl)) {
          this.settings.rt = this.settings.rt*-1;
        } else if(this.rt >= this.hl) {
          this.reset();
        }

        var newo = 1-(this.rt/this.hl);
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
        context.closePath();

        var cr = this.r*newo;
        gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr <= 0 ? 1 : cr));
        gradient.addColorStop(0.0, 'rgba(255,255,255,'+newo+')');
        gradient.addColorStop(this.stop, 'rgba(77,101,181,'+(newo*.6)+')');
        gradient.addColorStop(1.0, 'rgba(77,101,181,0)');
        context.fillStyle = gradient;
        context.fill();
      }

      this.move = function() {
        this.x += (this.rt/this.hl)*this.dx;
        this.y += (this.rt/this.hl)*this.dy;
        if(this.x > WIDTH || this.x < 0) this.dx *= -1;
        if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
      }

      this.getX = function() { return this.x; }
      this.getY = function() { return this.y; }
    }

    for (var i = 0; i < MAX_PARTICLES; i++) {
      pixies.push(new Circle());
      pixies[i].reset();
    }

    function draw() {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      for(var i = 0; i < pixies.length; i++) {
        pixies[i].fade();
        pixies[i].move();
        pixies[i].draw();
      }
    }

    setInterval(draw, DRAW_INTERVAL);
  }, []);

  return (
    <>
      <div 
        className="main"
        style={{
          height: resize[1]*4 + "px",
          top: -resize[1]*store.page + "px"
        }}>
        <Mypage resize={resize} />
        <WhoAmI resize={resize} />
        <UseStack resize={resize} />
        <Career resize={resize} />
      </div>
      <div 
        className="main-arrow-up"
        onClick={()=>{
          if (store.page !== 0)
            store.setPage(store.page-1);
        }}>
          <img src={arrowUp} />
      </div>
      <div 
        className="main-arrow-bottom"
        onClick={()=>{
          if (store.page !== lastPage) {
            window.scrollTo({ 
              top: 0,
              left: 0,
              behavior: 'smooth', 
            });
            store.setPage(store.page+1);
          }
        }}>
          <img src={arrowBottom} />
      </div>
      <div className="pixie-background">
        <canvas id="pixie"></canvas>
      </div>
      {/* <div className="main-link"
        style={{
          top: ((resize[1]-660)/2+"px"),
          left: ((resize[0]-500)/2+"px"),
        }}>
        <div className="main-title">yeju's portfolio</div>
        <div className="main-subtitle">
          깃허브 주소:&nbsp;
          <a href="https://github.com/choiyeju">
            https://github.com/choiyeju
          </a>
        </div>
        <div className="main-slider"><MainSlider /></div>
      </div> */}
      {/* <div id="mountains"></div>
      <div id="grass"></div> */}
    </>
  );
}
