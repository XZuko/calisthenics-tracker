export const icons={dashboard:'⌂',schedule:'▦',exercises:'◇',history:'↺'};
export function escapeHTML(value=''){return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
export function toast(message){const el=document.createElement('div');el.className='toast';el.textContent=message;document.querySelector('#toast-region').append(el);setTimeout(()=>el.remove(),2400);}
export function targetLabel(exercise,item){const unit=exercise.type==='hold'?'sec':'reps';return `${item.sets} × ${item.target} ${unit}${item.weight?` · +${item.weight} kg`:''}`;}
export function formatDuration(seconds=0){const m=Math.floor(seconds/60),s=seconds%60;return m>=60?`${Math.floor(m/60)}h ${m%60}m`:`${m}m ${s}s`;}
export function dialog(content){const d=document.createElement('dialog');d.className='modal';d.innerHTML=`<div class="modal-inner">${content}</div>`;document.body.append(d);d.addEventListener('close',()=>d.remove());d.showModal();return d;}
