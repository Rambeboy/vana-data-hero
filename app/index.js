(function(_0x2dca45,_0x398fc0){const _0x440597=_0x5a19,_0x456179=_0x2dca45();while(!![]){try{const _0x1d3e22=-parseInt(_0x440597(0xcc))/0x1+-parseInt(_0x440597(0xdd))/0x2+parseInt(_0x440597(0xc8))/0x3+-parseInt(_0x440597(0xd9))/0x4+parseInt(_0x440597(0xbf))/0x5*(-parseInt(_0x440597(0xd4))/0x6)+-parseInt(_0x440597(0x101))/0x7*(parseInt(_0x440597(0xe3))/0x8)+parseInt(_0x440597(0xe6))/0x9;if(_0x1d3e22===_0x398fc0)break;else _0x456179['push'](_0x456179['shift']());}catch(_0x409c3b){_0x456179['push'](_0x456179['shift']());}}}(_0xeb80,0xb051c));import{Config}from'./config/config.js';import{proxyList}from'./config/proxy_list.js';import{Core}from'./src/core/core.js';import{Telegram}from'./src/core/telegram.js';import{Bless}from'./src/utils/bless.js';import{Helper}from'./src/utils/helper.js';import _0x425ea7 from'./src/utils/logger.js';async function operation(_0x5c2e6b,_0x27556a,_0x6666d4,_0x46e82b){const _0x1097c4=_0x5a19,_0x3a79a9=new Core(_0x5c2e6b,_0x27556a,_0x6666d4,_0x46e82b);try{await _0x3a79a9[_0x1097c4(0xff)](!![]),await _0x3a79a9[_0x1097c4(0x104)](!![]),await _0x3a79a9[_0x1097c4(0xea)]();if(_0x3a79a9[_0x1097c4(0xfc)])while(_0x3a79a9[_0x1097c4(0xfc)][_0x1097c4(0xcf)]!=0x0){await _0x3a79a9[_0x1097c4(0x103)](),_0x3a79a9[_0x1097c4(0xfc)][_0x1097c4(0xfe)]&&await _0x3a79a9[_0x1097c4(0xf3)]();}for(const _0x19137c of _0x3a79a9['tasks'][_0x1097c4(0xdc)](_0x912fc7=>_0x912fc7[_0x1097c4(0xca)][_0x1097c4(0x105)]==0x0)){await _0x3a79a9[_0x1097c4(0xd3)](_0x19137c);}await Helper['delay'](0x1b77400,_0x5c2e6b,_0x1097c4(0xc6)+_0x5c2e6b['id']+_0x1097c4(0xc4)+Helper[_0x1097c4(0xe5)](0x1b77400),_0x3a79a9),await operation(_0x5c2e6b,_0x27556a,_0x6666d4,_0x46e82b);}catch(_0x23ed81){_0x425ea7['error']('Error\x20:\x20'+err[_0x1097c4(0xdb)]);if(_0x23ed81[_0x1097c4(0xdb)][_0x1097c4(0xf8)]('401')){if(_0x5c2e6b[_0x1097c4(0xf5)]=='query')await Helper[_0x1097c4(0xdf)](0x3e8,_0x5c2e6b,'Error\x20:\x20'+_0x23ed81[_0x1097c4(0xdb)]+_0x1097c4(0xfd),_0x3a79a9);else{await Helper[_0x1097c4(0xdf)](0x1388,_0x5c2e6b,'Error\x20:\x20'+_0x23ed81['message']+_0x1097c4(0x102),_0x3a79a9);const _0x5f3d67=new Telegram();await _0x5f3d67['useSession'](_0x5c2e6b[_0x1097c4(0xf9)],_0x46e82b);const _0xe64f0e=await _0x5f3d67['client'][_0x1097c4(0xd2)]();_0xe64f0e[_0x1097c4(0xf5)]=_0x1097c4(0xda),_0xe64f0e['accounts']=_0x5c2e6b[_0x1097c4(0xf9)],_0xe64f0e['id']=_0xe64f0e['id'][_0x1097c4(0xde)];let _0x20eb40=await _0x5f3d67[_0x1097c4(0x106)](_0xe64f0e)[_0x1097c4(0xec)](async()=>{return await _0x5f3d67['initWebView'](_0xe64f0e);})['catch'](_0x4798c7=>{throw _0x4798c7;});const _0x3ae606=Helper[_0x1097c4(0xbe)](_0x20eb40);await _0x5f3d67['disconnect'](),await Helper[_0x1097c4(0xdf)](0x1388,_0xe64f0e,'Successfully\x20get\x20new\x20query',_0x3a79a9),await operation(_0xe64f0e,_0x20eb40,_0x3ae606,_0x46e82b);}}else _0x23ed81[_0x1097c4(0xdb)][_0x1097c4(0xf8)](_0x1097c4(0xd6))?(await Helper['delay'](0x1388,_0x5c2e6b,'Error\x20:\x20'+_0x23ed81['message']+_0x1097c4(0xe8),_0x3a79a9),await process[_0x1097c4(0xe9)]()):(await Helper[_0x1097c4(0xdf)](0x1388,_0x5c2e6b,_0x1097c4(0xe0)+_0x23ed81['message']+_0x1097c4(0xf1),_0x3a79a9),await operation(_0x5c2e6b,_0x27556a,_0x6666d4,_0x46e82b));}}let init=![];async function startBot(){return new Promise(async(_0x5f14e1,_0x22d558)=>{const _0x354420=_0x5a19;try{_0x425ea7[_0x354420(0xef)](_0x354420(0xcd));const _0x1ff343=await new Telegram();init==![]&&(await _0x1ff343[_0x354420(0xc5)](),init=!![]);const _0xfac405=Helper[_0x354420(0xe2)](_0x354420(0xf9)),_0x28174e=[];proxyList[_0x354420(0x105)]>0x0&&(_0xfac405['length']!=proxyList[_0x354420(0x105)]&&_0x22d558(_0x354420(0xc7)+_0xfac405['length']+_0x354420(0xe7)+proxyList[_0x354420(0x105)]+_0x354420(0xd0)));for(const _0x5a1464 of _0xfac405){const _0x4f3f21=_0xfac405[_0x354420(0xc9)](_0x5a1464),_0x2f3ace=proxyList[_0x354420(0x105)]>0x0?proxyList[_0x4f3f21]:undefined;if(!_0x5a1464[_0x354420(0xf8)](_0x354420(0xfb))){await _0x1ff343['useSession'](_0x354420(0xd5)+_0x5a1464,_0x2f3ace),_0x1ff343['session']=_0x5a1464;const _0x225bc5=await _0x1ff343[_0x354420(0xf0)]['getMe']();_0x225bc5[_0x354420(0xf5)]=_0x354420(0xda),_0x225bc5[_0x354420(0xf9)]='accounts/'+_0x5a1464,_0x225bc5['id']=_0x225bc5['id'][_0x354420(0xde)];let _0x18fec6=await _0x1ff343['resolvePeer'](_0x225bc5)[_0x354420(0xec)](async()=>{const _0x4db8d1=_0x354420;return await _0x1ff343[_0x4db8d1(0xd1)](_0x225bc5);})[_0x354420(0x107)](_0xbd6bc9=>{throw _0xbd6bc9;});const _0x267238=Helper[_0x354420(0xbe)](_0x18fec6);await _0x1ff343[_0x354420(0xc2)](),_0x28174e[_0x354420(0xe1)]([_0x225bc5,_0x18fec6,_0x267238,_0x2f3ace]);}else{let _0x27a6e3=Helper['readQueryFile'](_0x354420(0xd5)+_0x5a1464+_0x354420(0xd7)),_0x221ac8=Helper['queryToJSON'](_0x27a6e3);!_0x221ac8['user']&&(_0x221ac8=await Helper[_0x354420(0xbe)](await Helper[_0x354420(0xee)](_0x27a6e3)),_0x27a6e3=await Helper[_0x354420(0xee)](_0x27a6e3));const _0x22345f=_0x221ac8['user'];_0x22345f['type']=_0x354420(0xfb),_0x22345f[_0x354420(0xeb)]=_0x22345f[_0x354420(0xe4)],_0x22345f[_0x354420(0xd8)]=_0x22345f[_0x354420(0xcb)],_0x28174e[_0x354420(0xe1)]([_0x22345f,_0x27a6e3,_0x221ac8,_0x2f3ace]);}}Config[_0x354420(0x108)]!=_0x354420(0xf7)&&(Helper[_0x354420(0xc0)]=new Bless());const _0xe3ba9f=_0x28174e[_0x354420(0xfa)](async _0x25c8bd=>{await operation(_0x25c8bd[0x0],_0x25c8bd[0x1],_0x25c8bd[0x2],_0x25c8bd[0x3]);});await Promise[_0x354420(0xf4)](_0xe3ba9f),_0x5f14e1();}catch(_0x3973d3){_0x425ea7[_0x354420(0xef)]('BOT\x20STOPPED'),_0x425ea7[_0x354420(0xf6)](JSON[_0x354420(0xce)](_0x3973d3)),_0x22d558(_0x3973d3);}});}function _0xeb80(){const _0x6d17f7=['\x20Processing\x20Complete,\x20Restarting\x20in\x20','init','Account\x20','You\x20have\x20','2687781PDriuw','indexOf','completed','last_name','1284564NfGOqd','BOT\x20STARTED','stringify','lives','\x20Proxy','initWebView','getMe','completeTask','6cxdZjU','accounts/','API','/query.txt','lastName','4831740LraoGn','sessions','message','filter','1008582DJmmEi','value','delay','Error\x20:\x20','push','getSession','8pUFWqe','first_name','msToTime','36644391cTPjKW','\x20Session\x20but\x20you\x20provide\x20',',\x20Exiting\x20bot...','exit','getGameInformation','firstName','then','Welcome\x20&\x20Enjoy\x20Sir!','launchParamToQuery','info','client',',\x20Retrying\x20after\x205\x20Seconds','clear','guessImage','all','type','error','TWIST','includes','accounts','map','query','game',',\x20Query\x20Is\x20Expired,\x20Please\x20Get\x20New\x20Query','key','getUserInfo','Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date','1112153wEwjHl',',\x20Query\x20Is\x20Expired,\x20Getting\x20New\x20Query\x20in\x205\x20Seconds','getCurrentImage','getTask','length','resolvePeer','catch','DISPLAY','queryToJSON','5448265getLtu','twist','log','disconnect','VANA\x20DATA\x20HERO\x20BOT'];_0xeb80=function(){return _0x6d17f7;};return _0xeb80();}function _0x5a19(_0x160db9,_0x38400e){const _0xeb8022=_0xeb80();return _0x5a19=function(_0x5a190c,_0x1cd15c){_0x5a190c=_0x5a190c-0xbe;let _0x5dc759=_0xeb8022[_0x5a190c];return _0x5dc759;},_0x5a19(_0x160db9,_0x38400e);}((async()=>{const _0x24de8f=_0x5a19;try{_0x425ea7[_0x24de8f(0xf2)](),_0x425ea7[_0x24de8f(0xef)](''),_0x425ea7['info']('Application\x20Started'),console[_0x24de8f(0xc1)](_0x24de8f(0xc3)),console[_0x24de8f(0xc1)](),console['log']('Author\x20:\x20Nofan\x20Rambe'),console[_0x24de8f(0xc1)](_0x24de8f(0xed)),console[_0x24de8f(0xc1)](_0x24de8f(0x100)),console[_0x24de8f(0xc1)](),console[_0x24de8f(0xc1)](),await startBot();}catch(_0x4f9037){console[_0x24de8f(0xc1)]('Error\x20During\x20executing\x20bot',_0x4f9037),await startBot();}})());