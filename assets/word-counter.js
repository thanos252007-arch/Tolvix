(()=>{"use strict";
const $=id=>document.getElementById(id),editor=$("inputText"),app=$("word-counter-app");
if(!app||!editor)return;
let last={words:[],wordCount:0,frequency:new Map()};
const chars=s=>Array.from(s||"");
function tokenize(text){
 let raw=[];
 if(typeof Intl!=="undefined"&&Intl.Segmenter){for(const p of new Intl.Segmenter(undefined,{granularity:"word"}).segment(text))if(p.isWordLike)raw.push(p.segment)}
 else raw=text.match(/[\p{L}\p{M}]+(?:['’][\p{L}\p{M}]+)*(?:[-‐‑‒–—][\p{L}\p{M}]+(?:['’][\p{L}\p{M}]+)*)*|[\p{N}]+(?:[.,][\p{N}]+)*/gu)||[];
 const hy=$("wc-hyphen-split").checked,con=$("wc-contraction-split").checked,nums=$("wc-ignore-numbers").checked,words=[];
 raw.forEach(token=>{let parts=hy?token.split(/[-‐‑‒–—]/u):[token];if(con)parts=parts.flatMap(p=>p.split(/['’]/u));parts.forEach(p=>{if(p&&!(nums&&!/[\p{L}\p{M}]/u.test(p)))words.push(p)})});
 return words;
}
function syllables(word){const w=(word.toLowerCase().match(/[a-z]+/g)||[]).join("");if(!w)return 0;if(w.length<=3)return 1;const x=w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,"").replace(/^y/,"");return Math.max(1,(x.match(/[aeiouy]{1,2}/g)||[]).length)}
function calculate(text){
 const words=tokenize(text),trim=text.trim(),freq=new Map();words.forEach(w=>{const k=w.toLocaleLowerCase();freq.set(k,(freq.get(k)||0)+1)});
 const sentences=(text.match(/[.!?。！？]+(?=\s|$)/gu)||[]).length,paragraphs=trim?trim.split(/\n\s*\n+/u).filter(x=>x.trim()).length:0,lines=trim?text.split(/\r\n|\r|\n/u).length:0;
 const lens=words.map(w=>chars(w).length),avg=lens.length?lens.reduce((a,b)=>a+b,0)/lens.length:0,longest=words.reduce((a,b)=>chars(b).length>chars(a).length?b:a,""),syll=words.reduce((n,w)=>n+syllables(w),0);
 return {words,wordCount:words.length,characters:chars(text).length,noSpaces:chars(text.replace(/\s/gu,"")).length,sentences,paragraphs,lines,unique:freq.size,avgWord:avg,avgSentence:sentences?words.length/sentences:words.length,longest,frequency:freq,flesch:words.length&&sentences?206.835-1.015*(words.length/sentences)-84.6*(syll/words.length):null,pages:words.length/500};
}
function put(id,value){$( "wc-"+id).textContent=value}
function time(count,speed){if(!count)return"0 min";const m=count/speed;if(m<1)return"<1 min";if(m<60)return Math.ceil(m)+" min";const h=Math.floor(m/60),r=Math.ceil(m%60);return h+" hr"+(r?" "+r+" min":"")}
function updateGoal(count){
 const vals=["min","target","max"].map(k=>$( "wc-"+k).value.trim()),[minS,targetS,maxS]=vals,min=minS===""?null:Number(minS),target=targetS===""?null:Number(targetS),max=maxS===""?null:Number(maxS),status=$("wc-goal-status"),fill=$("wc-progress-fill"),bar=$("wc-progress");
 if([min,target,max].some(x=>x!==null&&(!Number.isInteger(x)||x<0))||(target!==null&&target===0)||(min!==null&&max!==null&&min>max)||(target!==null&&min!==null&&target<min)||(target!==null&&max!==null&&target>max)){status.textContent="Check values: use whole numbers and keep minimum ≤ target ≤ maximum.";fill.style.width="0%";bar.setAttribute("aria-valuenow","0");return}
 if(target!==null){const p=Math.min(100,count/target*100);fill.style.width=p+"%";bar.setAttribute("aria-valuenow",String(Math.round(p)));status.textContent=count<target?(target-count)+" words to reach your target ("+Math.round(p)+"%).":count===target?"Target reached!":(count-target)+" words above your target. Target achieved."}else{fill.style.width="0%";bar.setAttribute("aria-valuenow","0");status.textContent="Set a target to track progress."}
 if(min!==null&&count<min)status.textContent+=" Below minimum by "+(min-count)+" words.";if(max!==null&&count>max)status.textContent+=" Above maximum by "+(count-max)+" words.";if(min!==null&&max!==null&&count>=min&&count<=max)status.textContent+=" Within your word range.";
}
function updateKeyword(d){
 const input=$("wc-keyword").value.trim(),out=$("wc-keyword-result");if(!input){out.textContent="Enter a keyword or phrase.";return}
 const phrase=tokenize(input).map(x=>x.toLocaleLowerCase());if(!phrase.length){out.textContent="Enter a searchable word or phrase.";return}
 const src=d.words.map(x=>x.toLocaleLowerCase());let hits=0;for(let i=0;i<=src.length-phrase.length;i++)if(phrase.every((w,j)=>src[i+j]===w))hits++;
 out.textContent="“"+input+"” appears "+hits+" time"+(hits===1?"":"s")+" · "+(d.wordCount?(hits*phrase.length/d.wordCount*100):0).toFixed(2)+"% of counted words.";
 const body=$("wc-top-words");body.replaceChildren();const rows=[...d.frequency].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,10);
 if(!rows.length){const tr=document.createElement("tr"),td=document.createElement("td");td.colSpan=3;td.textContent="Add text to see frequent words.";tr.append(td);body.append(tr);return}
 rows.forEach(([word,n])=>{const tr=document.createElement("tr");[word,String(n),(n/d.wordCount*100).toFixed(2)+"%"].forEach(value=>{const td=document.createElement("td");td.textContent=value;tr.append(td)});body.append(tr)});
}
function render(){
 const d=calculate(editor.value);last=d;
 ["words","characters","no-spaces","sentences","paragraphs","lines","unique"].forEach((k)=>put(k,d[k==="no-spaces"?"noSpaces":k].toLocaleString()));
 put("avg-word",d.avgWord.toFixed(1));put("avg-sentence",d.avgSentence.toFixed(1));put("longest",d.longest||"—");put("pages",d.pages.toFixed(2));
 put("reading",time(d.wordCount,Math.max(1,Number($("wc-reading-speed").value)||200)));put("speaking",time(d.wordCount,Math.max(1,Number($("wc-speaking-speed").value)||130)));
 $("wc-longest").title=d.longest?chars(d.longest).length+" characters":"No words";$("wc-char-hint").textContent=d.characters.toLocaleString()+" characters";
 put("flesch",d.flesch===null?"—":d.flesch.toFixed(1));$("wc-readability-label").textContent=d.flesch===null?"Add at least one English sentence for an approximate score.":d.flesch>=90?"Very easy (approximate)":d.flesch>=80?"Easy (approximate)":d.flesch>=70?"Fairly easy (approximate)":d.flesch>=60?"Plain English (approximate)":d.flesch>=50?"Fairly difficult (approximate)":d.flesch>=30?"Difficult (approximate)":"Very difficult (approximate)";
 updateGoal(d.wordCount);updateKeyword(d);
}
function compare(){const a=calculate($("wc-compare-a").value).wordCount,b=calculate($("wc-compare-b").value).wordCount;$("wc-count-a").textContent=a+" words";$("wc-count-b").textContent=b+" words";$("wc-compare-result").textContent=!$("wc-compare-a").value.trim()||!$("wc-compare-b").value.trim()?"Enter text in both boxes to compare them.":a===b?"Both versions have the same word count ("+a+").":b>a?"Version B has "+(b-a)+" more words than Version A.":"Version A has "+(a-b)+" more words than Version B."}
function report(){return ["Tolvix Word Counter Report","==========================","Words: "+last.wordCount,"Characters: "+last.characters,"Characters without spaces: "+last.noSpaces,"Sentences (estimated): "+last.sentences,"Paragraphs: "+last.paragraphs,"Lines: "+last.lines,"Unique words: "+last.unique,"Average word length: "+last.avgWord.toFixed(1),"Average sentence length: "+last.avgSentence.toFixed(1),"Longest word: "+(last.longest||"—"),"Estimated pages (500 words/page): "+last.pages.toFixed(2),"Reading time: "+$("wc-reading").textContent,"Speaking time: "+$("wc-speaking").textContent,"Flesch Reading Ease (English estimate): "+$("wc-flesch").textContent,"Goal: "+$("wc-goal-status").textContent,"Keyword: "+$("wc-keyword-result").textContent].join("\n")}
async function copy(value){try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(value);else{const t=document.createElement("textarea");t.value=value;t.style.position="fixed";t.style.opacity="0";document.body.append(t);t.select();if(!document.execCommand("copy"))throw Error();t.remove()}$("wc-status").textContent="Copied to clipboard."}catch(_){$("wc-status").textContent="Copy blocked by browser. Select and copy manually."}}
function download(name,data,type){const url=URL.createObjectURL(new Blob([data],{type})),a=document.createElement("a");a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
const csv=v=>'"'+String(v??"").replace(/"/g,'""')+'"';
editor.addEventListener("input",render);
["wc-min","wc-target","wc-max"].forEach(id=>$(id).addEventListener("input",()=>updateGoal(last.wordCount)));
["wc-reading-speed","wc-speaking-speed"].forEach(id=>$(id).addEventListener("input",render));
["wc-hyphen-split","wc-contraction-split","wc-ignore-numbers"].forEach(id=>$(id).addEventListener("change",render));
$("wc-keyword").addEventListener("input",()=>updateKeyword(last));
["wc-compare-a","wc-compare-b"].forEach(id=>$(id).addEventListener("input",compare));
$("wc-file").addEventListener("change",async e=>{const f=e.target.files&&e.target.files[0];if(!f)return;if(f.size>2*1024*1024){$("wc-status").textContent="TXT file exceeds the 2 MB limit.";e.target.value="";return}try{editor.value=await f.text();render();$("wc-status").textContent="Loaded "+f.name+" locally in your browser."}catch(_){$("wc-status").textContent="Could not read this file. Try a UTF-8 TXT file."}e.target.value=""});
$("wc-clear").addEventListener("click",()=>{editor.value="";render();$("wc-status").textContent="Editor cleared.";editor.focus()});
$("wc-copy-summary").addEventListener("click",()=>copy(report()));$("wc-copy-count").addEventListener("click",()=>copy(String(last.wordCount)));
$("wc-export-txt").addEventListener("click",()=>download("tolvix-word-count-report.txt",report(),"text/plain;charset=utf-8"));
$("wc-export-csv").addEventListener("click",()=>{const rows=[["Metric","Value"],["Words",last.wordCount],["Characters",last.characters],["Characters without spaces",last.noSpaces],["Sentences",last.sentences],["Paragraphs",last.paragraphs],["Lines",last.lines],["Unique words",last.unique],["Average word length",last.avgWord.toFixed(1)],["Average sentence length",last.avgSentence.toFixed(1)],["Longest word",last.longest],["Estimated pages",last.pages.toFixed(2)],["Reading time",$("wc-reading").textContent],["Speaking time",$("wc-speaking").textContent],["Flesch Reading Ease",$("wc-flesch").textContent]];download("tolvix-word-count-report.csv",rows.map(r=>r.map(csv).join(",")).join("\r\n"),"text/csv;charset=utf-8")});
$("wc-reset").addEventListener("click",()=>{editor.value="";["wc-min","wc-target","wc-max","wc-keyword","wc-compare-a","wc-compare-b"].forEach(id=>$(id).value="");["wc-hyphen-split","wc-contraction-split","wc-ignore-numbers"].forEach(id=>$(id).checked=false);$("wc-reading-speed").value="200";$("wc-speaking-speed").value="130";render();compare();$("wc-status").textContent="All fields reset.";editor.focus()});
render();compare();
})();