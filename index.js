const _0x293cb2=_0x2a5f;(function(_0x52c354,_0x28b7d5){const _0x796c85=_0x2a5f,_0x55d575=_0x52c354();while(!![]){try{const _0x179bc9=parseInt(_0x796c85(0x20e))/0x1*(-parseInt(_0x796c85(0x257))/0x2)+-parseInt(_0x796c85(0x21a))/0x3+parseInt(_0x796c85(0x1ee))/0x4*(parseInt(_0x796c85(0x23b))/0x5)+-parseInt(_0x796c85(0x1b1))/0x6*(parseInt(_0x796c85(0x224))/0x7)+-parseInt(_0x796c85(0x233))/0x8+-parseInt(_0x796c85(0x254))/0x9+parseInt(_0x796c85(0x21b))/0xa;if(_0x179bc9===_0x28b7d5)break;else _0x55d575['push'](_0x55d575['shift']());}catch(_0x4d2963){_0x55d575['push'](_0x55d575['shift']());}}}(_0x2105,0x33370),require(_0x293cb2(0x206)));const {default:kikiConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x293cb2(0x244)),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x293cb2(0x1aa)),pino=require('pino'),{Boom}=require(_0x293cb2(0x24c)),fs=require('fs'),yargs=require('yargs/yargs'),chalk=require('chalk'),FileType=require(_0x293cb2(0x20a)),path=require(_0x293cb2(0x237)),PhoneNumber=require(_0x293cb2(0x209)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require('./lib/myfunc');var low;try{low=require('lowdb');}catch(_0x2dc02c){low=require(_0x293cb2(0x1e0));}function _0x2105(){const _0x3939ff=['ephemeralMessage','@s.whatsapp.net','2526spItfx','messages','endsWith','write','video','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','.json','length','unlink','conversation','chat','sendVideo','cache','8958pFiTHG','asSticker','test','image/webp','keys','Leaving\x20Message\x20By\x20Kikiivz','data','status\x20bot','connection.update','contacts','ignore','from','owner','sendText','subject','WhatsApp','attrs','sendImage','\x0aitem3.X-ABLabel:Instagram\x0aitem4.ADR:;;','document','name','split','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','matchAll','mtype','error','call-creator','silent','database/database.json','.bin','writeFile','sendMessage','Restart\x20Required,\x20Restarting...','log','CB:call','Update\x20','international','setatus\x20bot','send5ButImg','connectionClosed','Owner','decodeJid','sticker','participants','Welcome','child','type','./lib/lowdb','offer','sendButtonText','close','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','fromMe','author','sendContact','mimetype','@broadcast','text','public','user','isBuffer','4ZQbLmI','application/octet-stream','image','messages.upsert','connectionLost','WebMessageInfo','\x0aitem1.TEL;waid=','loggedOut','json','fromBuffer','badSession','fromObject','withoutContact','profilePictureUrl','replace','Youtube\x20Cerator','https://youtube.com/channel/UCjjuhOD-Mt2XrKFptMVDysQ','push','end','query','packname','setStatus','participant','relayMessage','./settings','updateBlockStatus','1.0.0','awesome-phonenumber','file-type','APIs','cMod','getFile','281KWAWhf','message','ext','logout','Bye','audio','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','viewOnce','caption','KIKI\x20VZ\x20Multi\x20Device','Bayee\x20jelek','verifiedName','807843PxmsZy','10716790NYFxyR','notify','\x0aitem1.X-ABLabel:Ponsel\x0aitem2.EMAIL;type=INTERNET:','msg','BAE5','startsWith','block','output','redBright','791zDlAae','api','concat','\x0aitem2.X-ABLabel:Email\x0aitem3.URL:',';;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','entries','action','waUploadToServer','existsSync','resolve','key','groupMetadata','imageMessage','Message','parse','1909272YQICjm','server','github.com/kikivz/vraabot-MD','getNumber','path','readFileSync','./kiki','add','1358285zqbdjs','ping','string','content','status','alloc','remoteJid','status@broadcast','promises','@adiwajshing/baileys','readViewOnce','base64','utf-8','getName','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','categories','unwatchFile','@hapi/boom','viewOnceMessage','group-participants.update','APIKeys','asDocument','includes','sendAudio','contextInfo','918072amOUAo'];_0x2105=function(){return _0x3939ff;};return _0x2105();}const {Low,JSONFile}=low;global[_0x293cb2(0x225)]=(_0x110cc9,_0x48cf9f='/',_0x28506c={},_0x388668)=>(_0x110cc9 in global[_0x293cb2(0x20b)]?global[_0x293cb2(0x20b)][_0x110cc9]:_0x110cc9)+_0x48cf9f+(_0x28506c||_0x388668?'?'+new URLSearchParams(Object[_0x293cb2(0x229)]({..._0x28506c,..._0x388668?{[_0x388668]:global[_0x293cb2(0x24f)][_0x110cc9 in global[_0x293cb2(0x20b)]?global[_0x293cb2(0x20b)][_0x110cc9]:_0x110cc9]}:{}})):'');function _0x2a5f(_0x39ad9e,_0x2ad7f4){const _0x210534=_0x2105();return _0x2a5f=function(_0x2a5f4f,_0x3ddd36){_0x2a5f4f=_0x2a5f4f-0x1a9;let _0x27aaf6=_0x210534[_0x2a5f4f];return _0x27aaf6;},_0x2a5f(_0x39ad9e,_0x2ad7f4);}const store=makeInMemoryStore({'logger':pino()[_0x293cb2(0x1de)]({'level':_0x293cb2(0x1cc),'stream':'store'})});global['db']=new Low(new JSONFile(_0x293cb2(0x1cd))),global['db'][_0x293cb2(0x1b7)]={'users':{},'chats':{},'sticker':{},'database':{},'game':{},'settings':{},'others':{},...global['db']['data']||{}};if(global['db'])setInterval(async()=>{const _0x111764=_0x293cb2;if(global['db'][_0x111764(0x1b7)])await global['db'][_0x111764(0x25a)]();},0x1e*0x3e8);async function startkiki(){const _0x508591=_0x293cb2;let {version:_0x7557da,isLatest:_0x381ca9}=await fetchLatestBaileysVersion();const _0xa5df2=kikiConnect({'logger':pino({'level':_0x508591(0x1cc)}),'printQRInTerminal':!![],'browser':[_0x508591(0x217),'Safari',_0x508591(0x208)],'auth':state,'version':_0x7557da});return store['bind'](_0xa5df2['ev']),_0xa5df2['ws']['on'](_0x508591(0x1d3),async _0xab6938=>{const _0x4aebcc=_0x508591,_0x2002e1=_0xab6938[_0x4aebcc(0x23e)][0x0][_0x4aebcc(0x1c1)][_0x4aebcc(0x1cb)];if(_0xab6938[_0x4aebcc(0x23e)][0x0]['tag']==_0x4aebcc(0x1e1)){let _0x2abd7b=await _0xa5df2[_0x4aebcc(0x1e7)](_0x2002e1,global[_0x4aebcc(0x1bd)]);_0xa5df2[_0x4aebcc(0x1d0)](_0x2002e1,{'text':'Sistem\x20otomatis\x20block!\x0aJangan\x20menelpon\x20bot!\x0aSilahkan\x20Hubungi\x20Owner\x20Untuk\x20Dibuka\x20!'},{'quoted':_0x2abd7b}),await sleep(0x1f40),await _0xa5df2[_0x4aebcc(0x207)](_0x2002e1,_0x4aebcc(0x221));}}),_0xa5df2['ev']['on'](_0x508591(0x1f1),async _0x57030f=>{const _0x1e9bcd=_0x508591;try{mek=_0x57030f[_0x1e9bcd(0x258)][0x0];if(!mek[_0x1e9bcd(0x20f)])return;mek[_0x1e9bcd(0x20f)]=Object[_0x1e9bcd(0x1b5)](mek['message'])[0x0]===_0x1e9bcd(0x255)?mek['message'][_0x1e9bcd(0x255)][_0x1e9bcd(0x20f)]:mek[_0x1e9bcd(0x20f)];if(mek[_0x1e9bcd(0x22e)]&&mek['key']['remoteJid']===_0x1e9bcd(0x242))return;if(!_0xa5df2[_0x1e9bcd(0x1eb)]&&!mek[_0x1e9bcd(0x22e)][_0x1e9bcd(0x1e5)]&&_0x57030f[_0x1e9bcd(0x1df)]===_0x1e9bcd(0x21c))return;if(mek[_0x1e9bcd(0x22e)]['id'][_0x1e9bcd(0x220)](_0x1e9bcd(0x21f))&&mek[_0x1e9bcd(0x22e)]['id'][_0x1e9bcd(0x1ab)]===0x10)return;m=smsg(_0xa5df2,mek,store),require(_0x1e9bcd(0x239))(_0xa5df2,m,_0x57030f,store);}catch(_0x1e062f){console[_0x1e9bcd(0x1d2)](_0x1e062f);}}),_0xa5df2['ev']['on'](_0x508591(0x24e),async _0x13e918=>{const _0x33b75f=_0x508591;console['log'](_0x13e918);try{let _0x48c0bb=await _0xa5df2[_0x33b75f(0x22f)](_0x13e918['id']),_0x5374ef=_0x13e918[_0x33b75f(0x1dc)];for(let _0x4c7407 of _0x5374ef){try{ppuser=await _0xa5df2[_0x33b75f(0x1fb)](_0x4c7407,_0x33b75f(0x1f0));}catch{ppuser=_0x33b75f(0x214);}try{ppgroup=await _0xa5df2[_0x33b75f(0x1fb)](_0x13e918['id'],_0x33b75f(0x1f0));}catch{ppgroup=_0x33b75f(0x214);}let _0x2d73ed='@'+_0x4c7407[_0x33b75f(0x1c6)]('@')[0x0]+'\x20Leaving\x20To\x20'+_0x48c0bb[_0x33b75f(0x1bf)],_0x546f89='Welcome\x20To\x20'+_0x48c0bb[_0x33b75f(0x1bf)]+'\x20@'+_0x4c7407['split']('@')[0x0];if(_0x13e918[_0x33b75f(0x22a)]==_0x33b75f(0x23a)){let _0x277dbf=await prepareWAMessageMedia({'image':{'url':ppuser}},{'upload':_0xa5df2[_0x33b75f(0x22b)]});const _0x5567c2=generateWAMessageFromContent(_0x13e918['id'],proto[_0x33b75f(0x231)][_0x33b75f(0x1f9)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x277dbf[_0x33b75f(0x230)],'hydratedContentText':_0x546f89,'hydratedFooterText':'Welcome\x20Message\x20By\x20KazuKi','hydratedButtons':[{'urlButton':{'displayText':'Source\x20Code','url':'https://youtube.com/channel/UCueojYUvg1lLgdoWeX82UMw'}},{'urlButton':{'displayText':_0x33b75f(0x1fd),'url':_0x33b75f(0x1fe)}},{'quickReplyButton':{'displayText':_0x33b75f(0x1d9),'id':_0x33b75f(0x1bd)}},{'quickReplyButton':{'displayText':_0x33b75f(0x1b8),'id':_0x33b75f(0x23c)}},{'quickReplyButton':{'displayText':_0x33b75f(0x1dd),'id':_0x33b75f(0x1dd)}}]}}}),{'userJid':_0x13e918['id']});_0xa5df2[_0x33b75f(0x205)](_0x13e918['id'],_0x5567c2['message'],{'messageId':_0x5567c2['key']['id']});}else{if(_0x13e918[_0x33b75f(0x22a)]=='remove'){let _0x24f87b=await prepareWAMessageMedia({'image':{'url':ppuser}},{'upload':_0xa5df2[_0x33b75f(0x22b)]});const _0x372c97=generateWAMessageFromContent(_0x13e918['id'],proto[_0x33b75f(0x231)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x24f87b[_0x33b75f(0x230)],'hydratedContentText':_0x2d73ed,'hydratedFooterText':_0x33b75f(0x1b6),'hydratedButtons':[{'urlButton':{'displayText':'Source\x20Code','url':_0x33b75f(0x235)}},{'urlButton':{'displayText':_0x33b75f(0x1fd),'url':_0x33b75f(0x1fe)}},{'quickReplyButton':{'displayText':'Owner','id':_0x33b75f(0x1bd)}},{'quickReplyButton':{'displayText':_0x33b75f(0x1d6),'id':_0x33b75f(0x23c)}},{'quickReplyButton':{'displayText':_0x33b75f(0x218),'id':_0x33b75f(0x212)}}]}}}),{'userJid':_0x13e918['id']});_0xa5df2['relayMessage'](_0x13e918['id'],_0x372c97[_0x33b75f(0x20f)],{'messageId':_0x372c97[_0x33b75f(0x22e)]['id']});}}}}catch(_0x3b6620){console['log'](_0x3b6620);}}),_0xa5df2[_0x508591(0x1da)]=_0x29839d=>{const _0x30d51a=_0x508591;if(!_0x29839d)return _0x29839d;if(/:\d+@/gi[_0x30d51a(0x1b3)](_0x29839d)){let _0xfe6b17=jidDecode(_0x29839d)||{};return _0xfe6b17[_0x30d51a(0x1ec)]&&_0xfe6b17[_0x30d51a(0x234)]&&_0xfe6b17[_0x30d51a(0x1ec)]+'@'+_0xfe6b17[_0x30d51a(0x234)]||_0x29839d;}else return _0x29839d;},_0xa5df2['ev']['on']('contacts.update',_0x5801f0=>{const _0x214fc5=_0x508591;for(let _0xf115fa of _0x5801f0){let _0x5e2be2=_0xa5df2[_0x214fc5(0x1da)](_0xf115fa['id']);if(store&&store[_0x214fc5(0x1ba)])store[_0x214fc5(0x1ba)][_0x5e2be2]={'id':_0x5e2be2,'name':_0xf115fa['notify']};}}),_0xa5df2['getName']=(_0x599255,_0x3c89c7=![])=>{const _0x25fab5=_0x508591;id=_0xa5df2[_0x25fab5(0x1da)](_0x599255),_0x3c89c7=_0xa5df2[_0x25fab5(0x1fa)]||_0x3c89c7;let _0x2a23a3;if(id[_0x25fab5(0x259)]('@g.us'))return new Promise(async _0x426429=>{const _0x395a12=_0x25fab5;_0x2a23a3=store[_0x395a12(0x1ba)][id]||{};if(!(_0x2a23a3['name']||_0x2a23a3['subject']))_0x2a23a3=_0xa5df2['groupMetadata'](id)||{};_0x426429(_0x2a23a3[_0x395a12(0x1c5)]||_0x2a23a3[_0x395a12(0x1bf)]||PhoneNumber('+'+id[_0x395a12(0x1fc)]('@s.whatsapp.net',''))[_0x395a12(0x236)]('international'));});else _0x2a23a3=id==='0@s.whatsapp.net'?{'id':id,'name':_0x25fab5(0x1c0)}:id===_0xa5df2['decodeJid'](_0xa5df2[_0x25fab5(0x1ec)]['id'])?_0xa5df2[_0x25fab5(0x1ec)]:store[_0x25fab5(0x1ba)][id]||{};return(_0x3c89c7?'':_0x2a23a3[_0x25fab5(0x1c5)])||_0x2a23a3[_0x25fab5(0x1bf)]||_0x2a23a3[_0x25fab5(0x219)]||PhoneNumber('+'+_0x599255[_0x25fab5(0x1fc)]('@s.whatsapp.net',''))[_0x25fab5(0x236)](_0x25fab5(0x1d5));},_0xa5df2[_0x508591(0x1e7)]=async(_0x38ecff,_0x5ddf96,_0x7da0c2='',_0x2bc10a={})=>{const _0x1f2b3a=_0x508591;let _0x3bcdb2=[];for(let _0x486e9b of _0x5ddf96){_0x3bcdb2[_0x1f2b3a(0x1ff)]({'displayName':await _0xa5df2[_0x1f2b3a(0x248)](_0x486e9b+_0x1f2b3a(0x256)),'vcard':_0x1f2b3a(0x1e4)+ownername+_0x1f2b3a(0x1f4)+_0x486e9b+':'+_0x486e9b+_0x1f2b3a(0x21d)+email+_0x1f2b3a(0x227)+ig+_0x1f2b3a(0x1c3)+region+_0x1f2b3a(0x228)});}_0xa5df2[_0x1f2b3a(0x1d0)](_0x38ecff,{'contacts':{'displayName':_0x3bcdb2[_0x1f2b3a(0x1ab)]+'\x20Kontak','contacts':_0x3bcdb2},..._0x2bc10a},{'quoted':_0x7da0c2});},_0xa5df2[_0x508591(0x203)]=_0xe1a8de=>{const _0x40ca1f=_0x508591;return _0xa5df2[_0x40ca1f(0x201)]({'tag':'iq','attrs':{'to':_0x40ca1f(0x256),'type':'set','xmlns':_0x40ca1f(0x23f)},'content':[{'tag':_0x40ca1f(0x23f),'attrs':{},'content':Buffer[_0x40ca1f(0x1bc)](_0xe1a8de,_0x40ca1f(0x247))}]}),_0xe1a8de;},_0xa5df2['public']=!![],_0xa5df2['serializeM']=_0x939de5=>smsg(_0xa5df2,_0x939de5,store),_0xa5df2['ev']['on'](_0x508591(0x1b9),async _0x30f3eb=>{const _0x12e278=_0x508591,{connection:_0x5f0fbd,lastDisconnect:_0x3c19f4}=_0x30f3eb;if(_0x5f0fbd===_0x12e278(0x1e3)){let _0x3da7e6=new Boom(_0x3c19f4?.[_0x12e278(0x1ca)])?.[_0x12e278(0x222)]['statusCode'];if(_0x3da7e6===DisconnectReason[_0x12e278(0x1f8)])console['log'](_0x12e278(0x1a9)),_0xa5df2[_0x12e278(0x211)]();else{if(_0x3da7e6===DisconnectReason[_0x12e278(0x1d8)])console[_0x12e278(0x1d2)]('Connection\x20closed,\x20reconnecting....'),startkiki();else{if(_0x3da7e6===DisconnectReason[_0x12e278(0x1f2)])console[_0x12e278(0x1d2)]('Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),startkiki();else{if(_0x3da7e6===DisconnectReason['connectionReplaced'])console[_0x12e278(0x1d2)](_0x12e278(0x249)),_0xa5df2['logout']();else{if(_0x3da7e6===DisconnectReason[_0x12e278(0x1f5)])console[_0x12e278(0x1d2)](_0x12e278(0x1c7)),_0xa5df2[_0x12e278(0x211)]();else{if(_0x3da7e6===DisconnectReason['restartRequired'])console[_0x12e278(0x1d2)](_0x12e278(0x1d1)),startkiki();else{if(_0x3da7e6===DisconnectReason['timedOut'])console[_0x12e278(0x1d2)]('Connection\x20TimedOut,\x20Reconnecting...'),startkiki();else _0xa5df2[_0x12e278(0x200)]('Unknown\x20DisconnectReason:\x20'+_0x3da7e6+'|'+_0x5f0fbd);}}}}}}}console['log']('Connected...',_0x30f3eb);}),_0xa5df2['ev']['on']('creds.update',saveState),_0xa5df2[_0x508591(0x1d7)]=async(_0x44ffb3,_0xd299e3='',_0xc1641d='',_0x3cbc0d,_0x1224c4=[],_0x240d93={})=>{const _0x43c9b1=_0x508591;let _0x1c5f37=await prepareWAMessageMedia({'image':_0x3cbc0d},{'upload':_0xa5df2['waUploadToServer']});var _0x592e30=generateWAMessageFromContent(m[_0x43c9b1(0x1ae)],proto[_0x43c9b1(0x231)][_0x43c9b1(0x1f9)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x1c5f37[_0x43c9b1(0x230)],'hydratedContentText':_0xd299e3,'hydratedFooterText':_0xc1641d,'hydratedButtons':_0x1224c4}}}),_0x240d93);_0xa5df2[_0x43c9b1(0x205)](_0x44ffb3,_0x592e30['message'],{'messageId':_0x592e30[_0x43c9b1(0x22e)]['id']});},_0xa5df2[_0x508591(0x1e2)]=(_0x52882e,_0x297992=[],_0x3d89ee,_0x38ff12,_0x4b2715='',_0x327ab3={})=>{const _0x557447=_0x508591;let _0x304652={'text':_0x3d89ee,'footer':_0x38ff12,'buttons':_0x297992,'headerType':0x2,..._0x327ab3};_0xa5df2[_0x557447(0x1d0)](_0x52882e,_0x304652,{'quoted':_0x4b2715,..._0x327ab3});},_0xa5df2[_0x508591(0x1be)]=(_0x5dfbfe,_0x38ce10,_0x3db74f='',_0x244fe9)=>_0xa5df2[_0x508591(0x1d0)](_0x5dfbfe,{'text':_0x38ce10,..._0x244fe9},{'quoted':_0x3db74f}),_0xa5df2[_0x508591(0x1c2)]=async(_0x45b521,_0x3d9dca,_0x15a28a='',_0x49570b='',_0x3d38d9)=>{const _0x2f2cc1=_0x508591;let _0x262875=Buffer['isBuffer'](_0x3d9dca)?_0x3d9dca:/^data:.*?\/.*?;base64,/i[_0x2f2cc1(0x1b3)](_0x3d9dca)?Buffer[_0x2f2cc1(0x1bc)](_0x3d9dca[_0x2f2cc1(0x1c6)]`,`[0x1],_0x2f2cc1(0x246)):/^https?:\/\//['test'](_0x3d9dca)?await await getBuffer(_0x3d9dca):fs[_0x2f2cc1(0x22c)](_0x3d9dca)?fs[_0x2f2cc1(0x238)](_0x3d9dca):Buffer['alloc'](0x0);return await _0xa5df2[_0x2f2cc1(0x1d0)](_0x45b521,{'image':_0x262875,'caption':_0x15a28a,..._0x3d38d9},{'quoted':_0x49570b});},_0xa5df2[_0x508591(0x1af)]=async(_0x63ff17,_0x258ed,_0x20e08b='',_0x30cd56='',_0xcfee1b=![],_0x2ed38c)=>{const _0x18aa6d=_0x508591;let _0x5092b8=Buffer[_0x18aa6d(0x1ed)](_0x258ed)?_0x258ed:/^data:.*?\/.*?;base64,/i['test'](_0x258ed)?Buffer['from'](_0x258ed[_0x18aa6d(0x1c6)]`,`[0x1],'base64'):/^https?:\/\//[_0x18aa6d(0x1b3)](_0x258ed)?await await getBuffer(_0x258ed):fs[_0x18aa6d(0x22c)](_0x258ed)?fs['readFileSync'](_0x258ed):Buffer['alloc'](0x0);return await _0xa5df2['sendMessage'](_0x63ff17,{'video':_0x5092b8,'caption':_0x20e08b,'gifPlayback':_0xcfee1b,..._0x2ed38c},{'quoted':_0x30cd56});},_0xa5df2[_0x508591(0x252)]=async(_0x3d2f78,_0x4bbb6a,_0x5af4f3='',_0x118013=![],_0x28e188)=>{const _0x37e626=_0x508591;let _0x59b9b1=Buffer['isBuffer'](_0x4bbb6a)?_0x4bbb6a:/^data:.*?\/.*?;base64,/i['test'](_0x4bbb6a)?Buffer[_0x37e626(0x1bc)](_0x4bbb6a[_0x37e626(0x1c6)]`,`[0x1],_0x37e626(0x246)):/^https?:\/\//['test'](_0x4bbb6a)?await await getBuffer(_0x4bbb6a):fs[_0x37e626(0x22c)](_0x4bbb6a)?fs['readFileSync'](_0x4bbb6a):Buffer[_0x37e626(0x240)](0x0);return await _0xa5df2[_0x37e626(0x1d0)](_0x3d2f78,{'audio':_0x59b9b1,'ptt':_0x118013,..._0x28e188},{'quoted':_0x5af4f3});},_0xa5df2['sendTextWithMentions']=async(_0xba781a,_0x1b9ba4,_0x8754d6,_0x25109e={})=>_0xa5df2[_0x508591(0x1d0)](_0xba781a,{'text':_0x1b9ba4,'contextInfo':{'mentionedJid':[..._0x1b9ba4[_0x508591(0x1c8)](/@(\d{0,16})/g)]['map'](_0x144613=>_0x144613[0x1]+'@s.whatsapp.net')},..._0x25109e},{'quoted':_0x8754d6}),_0xa5df2['sendImageAsSticker']=async(_0x15bddb,_0x1342dd,_0x2acc18,_0x524f5c={})=>{const _0x41de1d=_0x508591;let _0xedf3fd=Buffer[_0x41de1d(0x1ed)](_0x1342dd)?_0x1342dd:/^data:.*?\/.*?;base64,/i['test'](_0x1342dd)?Buffer[_0x41de1d(0x1bc)](_0x1342dd[_0x41de1d(0x1c6)]`,`[0x1],'base64'):/^https?:\/\//[_0x41de1d(0x1b3)](_0x1342dd)?await await getBuffer(_0x1342dd):fs[_0x41de1d(0x22c)](_0x1342dd)?fs[_0x41de1d(0x238)](_0x1342dd):Buffer[_0x41de1d(0x240)](0x0),_0x2c87bd;return _0x524f5c&&(_0x524f5c[_0x41de1d(0x202)]||_0x524f5c['author'])?_0x2c87bd=await writeExifImg(_0xedf3fd,_0x524f5c):_0x2c87bd=await imageToWebp(_0xedf3fd),await _0xa5df2[_0x41de1d(0x1d0)](_0x15bddb,{'sticker':{'url':_0x2c87bd},..._0x524f5c},{'quoted':_0x2acc18}),_0x2c87bd;},_0xa5df2['sendVideoAsSticker']=async(_0x21ee2e,_0x270156,_0x1b94e5,_0x1393cc={})=>{const _0x5a236c=_0x508591;let _0x302f61=Buffer[_0x5a236c(0x1ed)](_0x270156)?_0x270156:/^data:.*?\/.*?;base64,/i[_0x5a236c(0x1b3)](_0x270156)?Buffer[_0x5a236c(0x1bc)](_0x270156[_0x5a236c(0x1c6)]`,`[0x1],_0x5a236c(0x246)):/^https?:\/\//[_0x5a236c(0x1b3)](_0x270156)?await await getBuffer(_0x270156):fs[_0x5a236c(0x22c)](_0x270156)?fs['readFileSync'](_0x270156):Buffer['alloc'](0x0),_0x38b5b2;return _0x1393cc&&(_0x1393cc['packname']||_0x1393cc['author'])?_0x38b5b2=await writeExifVid(_0x302f61,_0x1393cc):_0x38b5b2=await videoToWebp(_0x302f61),await _0xa5df2[_0x5a236c(0x1d0)](_0x21ee2e,{'sticker':{'url':_0x38b5b2},..._0x1393cc},{'quoted':_0x1b94e5}),_0x38b5b2;},_0xa5df2['downloadAndSaveMediaMessage']=async(_0x2c295b,_0x2ba123,_0x562d10=!![])=>{const _0x276f30=_0x508591;let _0x2b0ae5=_0x2c295b[_0x276f30(0x21e)]?_0x2c295b['msg']:_0x2c295b,_0x5c60ce=(_0x2c295b[_0x276f30(0x21e)]||_0x2c295b)[_0x276f30(0x1e8)]||'',_0x33ae88=_0x2c295b[_0x276f30(0x1c9)]?_0x2c295b[_0x276f30(0x1c9)]['replace'](/Message/gi,''):_0x5c60ce[_0x276f30(0x1c6)]('/')[0x0];const _0x25cd95=await downloadContentFromMessage(_0x2b0ae5,_0x33ae88);let _0x309dbe=Buffer[_0x276f30(0x1bc)]([]);for await(const _0x1e2865 of _0x25cd95){_0x309dbe=Buffer[_0x276f30(0x226)]([_0x309dbe,_0x1e2865]);}let _0x52fb66=await FileType[_0x276f30(0x1f7)](_0x309dbe);return trueFileName=_0x562d10?_0x2ba123+'.'+_0x52fb66[_0x276f30(0x210)]:_0x2ba123,await fs['writeFileSync'](trueFileName,_0x309dbe),trueFileName;},_0xa5df2['downloadMediaMessage']=async _0x27e119=>{const _0x57ae7f=_0x508591;let _0x2bc255=(_0x27e119[_0x57ae7f(0x21e)]||_0x27e119)[_0x57ae7f(0x1e8)]||'',_0x1ba0c6=_0x27e119[_0x57ae7f(0x1c9)]?_0x27e119[_0x57ae7f(0x1c9)]['replace'](/Message/gi,''):_0x2bc255[_0x57ae7f(0x1c6)]('/')[0x0];const _0x3bc9ff=await downloadContentFromMessage(_0x27e119,_0x1ba0c6);let _0x30319c=Buffer[_0x57ae7f(0x1bc)]([]);for await(const _0x2eed19 of _0x3bc9ff){_0x30319c=Buffer[_0x57ae7f(0x226)]([_0x30319c,_0x2eed19]);}return _0x30319c;},_0xa5df2['sendMedia']=async(_0x40a293,_0x286652,_0x4bb371='',_0x5e2f15='',_0x355d48='',_0x1d165f={})=>{const _0x12e9fc=_0x508591;let _0x2f3b42=await _0xa5df2['getFile'](_0x286652,!![]),{mime:_0x34759c,ext:_0x12fe3c,res:_0x221cd5,data:_0x32e168,filename:_0x23e884}=_0x2f3b42;if(_0x221cd5&&_0x221cd5[_0x12e9fc(0x23f)]!==0xc8||file[_0x12e9fc(0x1ab)]<=0x10000)try{throw{'json':JSON[_0x12e9fc(0x232)](file['toString']())};}catch(_0x357c02){if(_0x357c02[_0x12e9fc(0x1f6)])throw _0x357c02['json'];}let _0x15956f='',_0x54b370=_0x34759c,_0x2ffbe7=_0x23e884;if(_0x1d165f[_0x12e9fc(0x250)])_0x15956f=_0x12e9fc(0x1c4);if(_0x1d165f[_0x12e9fc(0x1b2)]||/webp/['test'](_0x34759c)){let {writeExif:_0x3e0d7c}=require('./lib/exif'),_0x13f9a6={'mimetype':_0x34759c,'data':_0x32e168};_0x2ffbe7=await _0x3e0d7c(_0x13f9a6,{'packname':_0x1d165f[_0x12e9fc(0x202)]?_0x1d165f[_0x12e9fc(0x202)]:global[_0x12e9fc(0x202)],'author':_0x1d165f[_0x12e9fc(0x1e6)]?_0x1d165f[_0x12e9fc(0x1e6)]:global[_0x12e9fc(0x1e6)],'categories':_0x1d165f[_0x12e9fc(0x24a)]?_0x1d165f[_0x12e9fc(0x24a)]:[]}),await fs['promises'][_0x12e9fc(0x1ac)](_0x23e884),_0x15956f=_0x12e9fc(0x1db),_0x54b370=_0x12e9fc(0x1b4);}else{if(/image/[_0x12e9fc(0x1b3)](_0x34759c))_0x15956f=_0x12e9fc(0x1f0);else{if(/video/['test'](_0x34759c))_0x15956f=_0x12e9fc(0x25b);else{if(/audio/[_0x12e9fc(0x1b3)](_0x34759c))_0x15956f=_0x12e9fc(0x213);else _0x15956f=_0x12e9fc(0x1c4);}}}return await _0xa5df2[_0x12e9fc(0x1d0)](_0x40a293,{[_0x15956f]:{'url':_0x2ffbe7},'caption':_0x5e2f15,'mimetype':_0x54b370,'fileName':_0x4bb371,..._0x1d165f},{'quoted':_0x355d48,..._0x1d165f}),fs['promises'][_0x12e9fc(0x1ac)](_0x2ffbe7);},_0xa5df2['copyNForward']=async(_0x4f5421,_0x30583f,_0x4353e2=![],_0x374265={})=>{const _0x470ce7=_0x508591;let _0x505508;_0x374265[_0x470ce7(0x245)]&&(_0x30583f[_0x470ce7(0x20f)]=_0x30583f[_0x470ce7(0x20f)]&&_0x30583f[_0x470ce7(0x20f)]['ephemeralMessage']&&_0x30583f[_0x470ce7(0x20f)][_0x470ce7(0x255)][_0x470ce7(0x20f)]?_0x30583f[_0x470ce7(0x20f)]['ephemeralMessage'][_0x470ce7(0x20f)]:_0x30583f[_0x470ce7(0x20f)]||undefined,_0x505508=Object[_0x470ce7(0x1b5)](_0x30583f[_0x470ce7(0x20f)][_0x470ce7(0x24d)][_0x470ce7(0x20f)])[0x0],delete(_0x30583f[_0x470ce7(0x20f)]&&_0x30583f[_0x470ce7(0x20f)][_0x470ce7(0x1bb)]?_0x30583f[_0x470ce7(0x20f)][_0x470ce7(0x1bb)]:_0x30583f[_0x470ce7(0x20f)]||undefined),delete _0x30583f['message'][_0x470ce7(0x24d)]['message'][_0x505508][_0x470ce7(0x215)],_0x30583f['message']={..._0x30583f['message']['viewOnceMessage'][_0x470ce7(0x20f)]});let _0x1650b3=Object['keys'](_0x30583f[_0x470ce7(0x20f)])[0x0],_0x268d4e=await generateForwardMessageContent(_0x30583f,_0x4353e2),_0x568749=Object[_0x470ce7(0x1b5)](_0x268d4e)[0x0],_0x503475={};if(_0x1650b3!=_0x470ce7(0x1ad))_0x503475=_0x30583f[_0x470ce7(0x20f)][_0x1650b3][_0x470ce7(0x253)];_0x268d4e[_0x568749]['contextInfo']={..._0x503475,..._0x268d4e[_0x568749][_0x470ce7(0x253)]};const _0x25a939=await generateWAMessageFromContent(_0x4f5421,_0x268d4e,_0x374265?{..._0x268d4e[_0x568749],..._0x374265,..._0x374265[_0x470ce7(0x253)]?{'contextInfo':{..._0x268d4e[_0x568749]['contextInfo'],..._0x374265[_0x470ce7(0x253)]}}:{}}:{});return await _0xa5df2[_0x470ce7(0x205)](_0x4f5421,_0x25a939[_0x470ce7(0x20f)],{'messageId':_0x25a939[_0x470ce7(0x22e)]['id']}),_0x25a939;},_0xa5df2[_0x508591(0x20c)]=(_0x39999d,_0x8a6cc3,_0x4a27f5='',_0x5a9935=_0xa5df2['user']['id'],_0x1e19fc={})=>{const _0x47771d=_0x508591;let _0x2ca0bc=Object[_0x47771d(0x1b5)](_0x8a6cc3[_0x47771d(0x20f)])[0x0],_0x3711dd=_0x2ca0bc==='ephemeralMessage';_0x3711dd&&(_0x2ca0bc=Object[_0x47771d(0x1b5)](_0x8a6cc3['message'][_0x47771d(0x255)]['message'])[0x0]);let _0x11404e=_0x3711dd?_0x8a6cc3['message'][_0x47771d(0x255)]['message']:_0x8a6cc3[_0x47771d(0x20f)],_0x57f2b6=_0x11404e[_0x2ca0bc];if(typeof _0x57f2b6===_0x47771d(0x23d))_0x11404e[_0x2ca0bc]=_0x4a27f5||_0x57f2b6;else{if(_0x57f2b6['caption'])_0x57f2b6[_0x47771d(0x216)]=_0x4a27f5||_0x57f2b6[_0x47771d(0x216)];else{if(_0x57f2b6['text'])_0x57f2b6['text']=_0x4a27f5||_0x57f2b6[_0x47771d(0x1ea)];}}if(typeof _0x57f2b6!==_0x47771d(0x23d))_0x11404e[_0x2ca0bc]={..._0x57f2b6,..._0x1e19fc};if(_0x8a6cc3[_0x47771d(0x22e)][_0x47771d(0x204)])_0x5a9935=_0x8a6cc3['key']['participant']=_0x5a9935||_0x8a6cc3[_0x47771d(0x22e)][_0x47771d(0x204)];else{if(_0x8a6cc3[_0x47771d(0x22e)][_0x47771d(0x204)])_0x5a9935=_0x8a6cc3[_0x47771d(0x22e)][_0x47771d(0x204)]=_0x5a9935||_0x8a6cc3[_0x47771d(0x22e)][_0x47771d(0x204)];}if(_0x8a6cc3[_0x47771d(0x22e)][_0x47771d(0x241)][_0x47771d(0x251)](_0x47771d(0x256)))_0x5a9935=_0x5a9935||_0x8a6cc3['key'][_0x47771d(0x241)];else{if(_0x8a6cc3[_0x47771d(0x22e)][_0x47771d(0x241)][_0x47771d(0x251)](_0x47771d(0x1e9)))_0x5a9935=_0x5a9935||_0x8a6cc3[_0x47771d(0x22e)]['remoteJid'];}return _0x8a6cc3[_0x47771d(0x22e)][_0x47771d(0x241)]=_0x39999d,_0x8a6cc3[_0x47771d(0x22e)][_0x47771d(0x1e5)]=_0x5a9935===_0xa5df2[_0x47771d(0x1ec)]['id'],proto[_0x47771d(0x1f3)][_0x47771d(0x1f9)](_0x8a6cc3);},_0xa5df2[_0x508591(0x20d)]=async(_0x4f1b06,_0x4ffafc)=>{const _0x1f66a4=_0x508591;let _0x356f35,_0x3083d1=Buffer[_0x1f66a4(0x1ed)](_0x4f1b06)?_0x4f1b06:/^data:.*?\/.*?;base64,/i[_0x1f66a4(0x1b3)](_0x4f1b06)?Buffer[_0x1f66a4(0x1bc)](_0x4f1b06[_0x1f66a4(0x1c6)]`,`[0x1],_0x1f66a4(0x246)):/^https?:\/\//[_0x1f66a4(0x1b3)](_0x4f1b06)?await(_0x356f35=await getBuffer(_0x4f1b06)):fs['existsSync'](_0x4f1b06)?(filename=_0x4f1b06,fs[_0x1f66a4(0x238)](_0x4f1b06)):typeof _0x4f1b06===_0x1f66a4(0x23d)?_0x4f1b06:Buffer['alloc'](0x0),_0x1f1337=await FileType['fromBuffer'](_0x3083d1)||{'mime':_0x1f66a4(0x1ef),'ext':_0x1f66a4(0x1ce)};filename=path['join'](__filename,'../src/'+new Date()*0x1+'.'+_0x1f1337[_0x1f66a4(0x210)]);if(_0x3083d1&&_0x4ffafc)fs[_0x1f66a4(0x243)][_0x1f66a4(0x1cf)](filename,_0x3083d1);return{'res':_0x356f35,'filename':filename,'size':await getSizeMedia(_0x3083d1),..._0x1f1337,'data':_0x3083d1};},_0xa5df2;}startkiki();let file=require[_0x293cb2(0x22d)](__filename);fs['watchFile'](file,()=>{const _0x1e663d=_0x293cb2;fs[_0x1e663d(0x24b)](file),console[_0x1e663d(0x1d2)](chalk[_0x1e663d(0x223)](_0x1e663d(0x1d4)+__filename)),delete require[_0x1e663d(0x1b0)][file],require(file);});