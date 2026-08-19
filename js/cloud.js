import {SUPABASE_URL,SUPABASE_ANON_KEY} from './config.js';

let client=null;
let pendingTimer=null;
let statusListener=()=>{};

export function cloudConfigured(){return !SUPABASE_URL.startsWith('YOUR_')&&!SUPABASE_ANON_KEY.startsWith('YOUR_')&&Boolean(window.supabase);}
export function onSyncStatus(listener){statusListener=listener;}
function status(value,message=''){statusListener({value,message});}
export function initCloud(){if(!cloudConfigured())return null;client=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);return client;}
export async function currentUser(){if(!client)return null;const {data}=await client.auth.getSession();return data.session?.user||null;}
export async function signUp(email,password){if(!client)throw new Error('Cloud backup is not configured.');const {data,error}=await client.auth.signUp({email,password});if(error)throw error;return data;}
export async function signIn(email,password){if(!client)throw new Error('Cloud backup is not configured.');const {data,error}=await client.auth.signInWithPassword({email,password});if(error)throw error;return data;}
export async function signOut(){if(!client)return;const {error}=await client.auth.signOut();if(error)throw error;status('local','Signed out');}
export async function loadCloudState(){const user=await currentUser();if(!user)return null;status('syncing','Loading backup...');const {data,error}=await client.from('user_data').select('state,updated_at').eq('user_id',user.id).maybeSingle();if(error)throw error;status('synced',data?'Backup restored':'Ready to back up');return data||null;}
export async function saveCloudState(state){const user=await currentUser();if(!user)return;status('syncing','Saving...');const {error}=await client.from('user_data').upsert({user_id:user.id,state,updated_at:new Date().toISOString()},{onConflict:'user_id'});if(error){status('error',error.message);throw error;}status('synced','Backed up');}
export function queueCloudSave(state){if(!client)return;clearTimeout(pendingTimer);status('syncing','Changes pending...');const snapshot=structuredClone(state);pendingTimer=setTimeout(()=>saveCloudState(snapshot).catch(()=>{}),700);}