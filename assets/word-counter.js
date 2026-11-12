(()=>{"use strict";
const editor=document.getElementById("inputText");
const app=document.getElementById("word-counter-app");
if(!editor||!app)return;
const byId=id=>document.getElementById(id);
const countWords=text=>{
 if(!text.trim())return 0;
 if(typeof Intl!=="undefined"&&Intl.Segmenter){
  const segmenter=new Intl.Segmenter(undefined,{granularity:"word"});
  let total=0;
  for(const part of segmenter.segment(text))if(part.isWordLike)total++;
  return total;
 }
 const matches=text.match(/[\p{L}\p{M}\p{N}]+(?:['’][\p{L}\p{M}]+)*(?:[-‐‑‒–—][\p{L}\p{M}]+(?:['’][\p{L}\p{M}]+)*)*/gu);
 return matches?matches.length:0;
};
const formatTime=words=>words===0?"0 min":words<200?"<1 min":Math.ceil(words/200)+" min";
function update(){
 const text=editor.value;
 const words=countWords(text);
 const sentences=(text.match(/[.!?。！？]+(?=\s|$)/gu)||[]).length;
 const trimmed=text.trim();
 const paragraphs=trimmed?trimmed.split(/\n\s*\n+/u).filter(part=>part.trim()).length:0;
 byId("wc-words").textContent=words.toLocaleString();
 byId("wc-characters").textContent=Array.from(text).length.toLocaleString();
 byId("wc-no-spaces").textContent=Array.from(text.replace(/\s/gu,"")).length.toLocaleString();
 byId("wc-sentences").textContent=sentences.toLocaleString();
 byId("wc-paragraphs").textContent=paragraphs.toLocaleString();
 byId("wc-reading").textContent=formatTime(words);
}
editor.addEventListener("input",update);
byId("wc-clear").addEventListener("click",()=>{
 editor.value="";
 update();
 editor.focus();
 byId("wc-status").textContent="Text cleared.";
});
byId("wc-copy-count").addEventListener("click",async()=>{
 const count=String(countWords(editor.value));
 try{
  if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(count);
  else{
   const helper=document.createElement("textarea");
   helper.value=count;helper.setAttribute("readonly","");
   helper.style.position="fixed";helper.style.opacity="0";
   document.body.appendChild(helper);helper.select();
   const copied=document.execCommand("copy");helper.remove();
   if(!copied)throw new Error("Copy unavailable");
  }
  byId("wc-status").textContent="Word count copied: "+count;
 }catch{
  byId("wc-status").textContent="Could not copy automatically. Your word count is "+count+".";
 }
});
update();
})();