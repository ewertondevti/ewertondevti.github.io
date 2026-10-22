'use client';
import { useEffect, useRef, useState } from 'react';

export function MotionLayer({locale}:{locale:string}) {
  const [paused,setPaused]=useState(false);
  useEffect(()=>{
    document.documentElement.dataset.motion=paused?'paused':'running';
  },[paused]);
  useEffect(()=>{
    const targets=document.querySelectorAll<HTMLElement>('.section-heading,.about-copy,.principles article,.current-practice,.career-row,.project,.skills-grid>div,.degree,.contact-layout');
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target);}}),{threshold:.08});
    targets.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--delay',`${i%3*75}ms`);observer.observe(el);});
    let frame=0;
    const scroll=()=>{if(!frame)frame=requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty('--progress',`${max>0?scrollY/max:0}`);frame=0;});};
    window.addEventListener('scroll',scroll,{passive:true});scroll();
    return ()=>{observer.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',scroll);targets.forEach(el=>el.classList.remove('reveal'));};
  },[]);
  return <><div className="reading-progress" aria-hidden="true"/><button className="motion-control" aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?'▶':'Ⅱ'} <span>{locale==='en'?(paused?'Resume motion':'Pause motion'):(paused?'Retomar animação':'Pausar animação')}</span></button></>;
}

export function GenerativeForm({locale}:{locale:string}) {
 const canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const el=canvas.current!;const ctx=el.getContext('2d');if(!ctx)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0, angle=0, visible=true, mouseX=0, mouseY=0, tx=0,ty=0, width=0,height=0,last=0;
  const resize=new ResizeObserver(()=>{const r=el.getBoundingClientRect();width=r.width;height=r.height;const d=Math.min(devicePixelRatio,2);el.width=width*d;el.height=height*d;ctx.setTransform(d,0,0,d,0,0);});resize.observe(el);
  const observer=new IntersectionObserver(([e])=>{visible=e.isIntersecting;});observer.observe(el);
  const move=(e:PointerEvent)=>{const r=el.getBoundingClientRect();tx=(e.clientX-r.left)/r.width-.5;ty=(e.clientY-r.top)/r.height-.5;};
  const leave=()=>{tx=0;ty=0;};el.addEventListener('pointermove',move);el.addEventListener('pointerleave',leave);
  function draw(now:number){
   frame=requestAnimationFrame(draw);
   if(!visible||document.hidden||now-last<32)return;
   const dt=Math.min((now-last)/1000,.05);last=now;
   const still=reduced.matches||document.documentElement.dataset.motion==='paused';
   if(!still){angle+=dt*.14;mouseX+=(tx-mouseX)*.06;mouseY+=(ty-mouseY)*.06;}
   ctx!.clearRect(0,0,width,height);
   const light=document.documentElement.dataset.theme==='light';const rgb=light?'59,93,38':'205,238,161';
   const scale=Math.min(width,height)*.36;
   const a=angle+mouseX*.5,b=.5+mouseY*.4;
   const project=(x:number,y:number,z:number)=>{const X=x*Math.cos(a)+z*Math.sin(a),Z=z*Math.cos(a)-x*Math.sin(a);const Y=y*Math.cos(b)-Z*Math.sin(b),D=y*Math.sin(b)+Z*Math.cos(b);const p=3.8/(3.8-D);return [width/2+X*scale*p,height/2+Y*scale*p,D];};
   // Parametric torus: original code-native sculpture, no product imagery.
   for(let ring=0;ring<40;ring++){
    const u=ring/40*Math.PI*2;ctx!.beginPath();let depth=0;
    for(let j=0;j<=72;j++){const v=j/72*Math.PI*2;const radius=.72+.27*Math.cos(v);const [x,y,z]=project(radius*Math.cos(u),radius*Math.sin(u),.27*Math.sin(v));depth=z;if(j===0)ctx!.moveTo(x,y);else ctx!.lineTo(x,y);}
    ctx!.strokeStyle=`rgba(${rgb},${.13+(depth+1)*.18})`;ctx!.lineWidth=.8;ctx!.stroke();
   }
   for(let j=0;j<12;j++){
    const v=j/12*Math.PI*2;ctx!.beginPath();for(let i=0;i<=120;i++){const u=i/120*Math.PI*2,r=.72+.27*Math.cos(v);const [x,y]=project(r*Math.cos(u),r*Math.sin(u),.27*Math.sin(v));if(i===0)ctx!.moveTo(x,y);else ctx!.lineTo(x,y);}ctx!.strokeStyle=`rgba(${rgb},.23)`;ctx!.stroke();
   }
   for(let i=0;i<5;i++){const u=angle*(i%2?1:-1)+i*1.26;const [x,y]=project(.99*Math.cos(u),.99*Math.sin(u),0);ctx!.beginPath();ctx!.arc(x,y,2.5,0,Math.PI*2);ctx!.fillStyle=`rgba(${rgb},.95)`;ctx!.shadowColor=`rgb(${rgb})`;ctx!.shadowBlur=15;ctx!.fill();ctx!.shadowBlur=0;}
  }
  frame=requestAnimationFrame(draw);
  return ()=>{cancelAnimationFrame(frame);resize.disconnect();observer.disconnect();el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',leave);};
 },[]);
 return <div className="generative-form"><span className="form-caption mono">FIG. 01 / CONTINUOUS EVOLUTION</span><div className="form-grid"/><canvas ref={canvas} aria-hidden="true"/><div className="form-center" aria-hidden="true">es<span>.</span></div><span className="form-coordinate mono">BASED IN PORTUGAL</span><span className="form-foot mono">{locale==='en'?'SYSTEMS → STRUCTURE → EXPERIENCE':'SISTEMAS → ESTRUTURA → EXPERIÊNCIA'}</span></div>;
}
