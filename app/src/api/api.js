const _0x101446=_0x5b05;function _0x3676(){const _0x2d2ae2=['22teFOpj','2155865mBrksV','1368BLDrRn','body','url','4iMCAWL','\x20:\x20','13dCWEQu','82089FqQvFS','414yWIxav','29etvDsR','X-Telegram-Web-App-Init-Data','info','Response\x20Data\x20:\x20','en-US,en;q=0.9,id;q=0.8','headers','content-type','httpsAgent','get','proxy','https://www.vanadatahero.com/challenges','text','GET','10888dFQLod','json','includes','randomUserAgent','statusText','status','20336016sVXFLI','generateHeaders','stringify','2867740KYrDBr','query','\x20-\x20','data','11138KOYKIt','Request\x20Body\x20:\x20','application/json','Request\x20Header\x20:\x20','352107wgPJTZ'];_0x3676=function(){return _0x2d2ae2;};return _0x3676();}function _0x5b05(_0x3de2af,_0xa22b70){const _0x367671=_0x3676();return _0x5b05=function(_0x5b05a4,_0x3d8ea3){_0x5b05a4=_0x5b05a4-0x78;let _0x237cd1=_0x367671[_0x5b05a4];return _0x237cd1;},_0x5b05(_0x3de2af,_0xa22b70);}(function(_0x28c237,_0x8065b6){const _0x20d945=_0x5b05,_0x17e3d3=_0x28c237();while(!![]){try{const _0x3630b9=parseInt(_0x20d945(0x78))/0x1*(-parseInt(_0x20d945(0x92))/0x2)+parseInt(_0x20d945(0x96))/0x3+-parseInt(_0x20d945(0x9c))/0x4*(-parseInt(_0x20d945(0x98))/0x5)+-parseInt(_0x20d945(0xa0))/0x6*(parseInt(_0x20d945(0x9f))/0x7)+parseInt(_0x20d945(0x85))/0x8*(-parseInt(_0x20d945(0x99))/0x9)+-parseInt(_0x20d945(0x8e))/0xa*(parseInt(_0x20d945(0x97))/0xb)+parseInt(_0x20d945(0x8b))/0xc*(parseInt(_0x20d945(0x9e))/0xd);if(_0x3630b9===_0x8065b6)break;else _0x17e3d3['push'](_0x17e3d3['shift']());}catch(_0x440102){_0x17e3d3['push'](_0x17e3d3['shift']());}}}(_0x3676,0x7825e));import _0x4f24b0 from'node-fetch';import{HttpsProxyAgent}from'https-proxy-agent';import{Helper}from'../utils/helper.js';import _0x1feed6 from'../utils/logger.js';export class API{constructor(_0x43ec9e,_0x456c74,_0x418cb8){const _0x4c8ac2=_0x5b05;this[_0x4c8ac2(0x9b)]=_0x418cb8,this['ua']=Helper[_0x4c8ac2(0x88)](),this[_0x4c8ac2(0x8f)]=_0x43ec9e,this[_0x4c8ac2(0x81)]=_0x456c74;}['generateHeaders'](_0x54dc6a=this[_0x101446(0x8f)]){const _0x3da599=_0x101446,_0x35bc13={'Accept':'application/json,\x20text/plain,\x20*/*','Accept-Language':_0x3da599(0x7c),'Content-Type':_0x3da599(0x94),'User-Agent':this['ua']};return _0x54dc6a&&(_0x35bc13[_0x3da599(0x79)]=_0x54dc6a),_0x35bc13;}async['fetch'](_0x43a040,_0x592812=_0x101446(0x84),_0x43d989,_0x3978ba={},_0x50224a={}){const _0x532e39=_0x101446;try{const _0x390da8=''+this[_0x532e39(0x9b)]+_0x43a040,_0xf5c0d7={..._0x50224a,...this[_0x532e39(0x8c)](_0x43d989)};_0x1feed6[_0x532e39(0x7a)](_0x592812+_0x532e39(0x9d)+_0x390da8+'\x20'+(this[_0x532e39(0x81)]?this[_0x532e39(0x81)]:'')),_0x1feed6['info'](_0x532e39(0x95)+JSON['stringify'](_0xf5c0d7));const _0x27929d={'method':_0x592812,'headers':_0xf5c0d7,'referrer':_0x532e39(0x82)};this['proxy']&&(_0x27929d[_0x532e39(0x7f)]=new HttpsProxyAgent(this[_0x532e39(0x81)]));_0x592812!==_0x532e39(0x84)&&(_0x27929d[_0x532e39(0x9a)]=JSON[_0x532e39(0x8d)](_0x3978ba),_0x1feed6[_0x532e39(0x7a)](_0x532e39(0x93)+JSON['stringify'](_0x3978ba)));const _0x3c58da=await _0x4f24b0(_0x390da8,_0x27929d);if(_0x3c58da['ok']){const _0x30ce67=_0x3c58da[_0x532e39(0x7d)][_0x532e39(0x80)](_0x532e39(0x7e));let _0x4d51f6;return _0x30ce67&&_0x30ce67[_0x532e39(0x87)]('application/json')?(_0x4d51f6=await _0x3c58da[_0x532e39(0x86)](),_0x4d51f6['status']=_0x3c58da[_0x532e39(0x8a)]):_0x4d51f6={'status':_0x3c58da[_0x532e39(0x8a)],'message':await _0x3c58da[_0x532e39(0x83)]()},_0x3c58da['ok']&&(_0x4d51f6[_0x532e39(0x8a)]=0xc8),_0x1feed6[_0x532e39(0x7a)](_0x532e39(0x7b)+JSON['stringify'](_0x4d51f6)),_0x4d51f6;}else throw _0x3c58da;}catch(_0x1ddea3){if(_0x1ddea3[_0x532e39(0x8a)]==0x193)return{'status':0x193,..._0x1ddea3['response'][_0x532e39(0x91)]};if(_0x1ddea3[_0x532e39(0x8a)]==0x1f7||_0x1ddea3[_0x532e39(0x8a)]==0x194)throw Error('Detect\x20API\x20change\x20Stopping\x20BOT..');else throw Error(_0x1ddea3[_0x532e39(0x8a)]+_0x532e39(0x90)+_0x1ddea3[_0x532e39(0x89)]);}}}