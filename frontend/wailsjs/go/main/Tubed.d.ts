// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {tubed} from '../models';

export function Configure(arg1:string,arg2:string):Promise<void>;

export function GetInstanceApi():Promise<string>;

export function GetInstanceFrontend():Promise<string>;

export function GetInstancesApi(arg1:string):Promise<Array<{[key: string]: string}>>;

export function GetProvider():Promise<string>;

export function GetTrending():Promise<Array<tubed.Video>>;

export function GetVideo(arg1:string):Promise<tubed.Video>;

export function SetInstance(arg1:string):Promise<void>;

export function SetProvider(arg1:string):Promise<void>;