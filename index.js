const FILE_PATH = process.env.FILE_PATH || './temp'; // 运行文件夹，节点文件存放目录
const projectPageURL = process.env.URL || '';        // 填写项目域名可开启自动访问保活，非标端口的前缀是http://
const intervalInseconds = process.env.TIME || 120;   // 自动访问间隔时间（120秒）
const UUID = process.env.UUID || '89c13786-25aa-4520-b2e7-12cd60fb5202';
const NEZHA_SERVER = process.env.NEZHA_SERVER || 'nz.abc.cn';      // 哪吒3个变量不全不运行
const NEZHA_PORT = process.env.NEZHA_PORT || '5555';              // 哪吒端口为{443,8443,2096,2087,2083,2053}其中之一时开启tls
const NEZHA_KEY = process.env.NEZHA_KEY || '';                   // 哪吒客户端密钥
const ARGO_DOMAIN = process.env.ARGO_DOMAIN || '';              // 固定隧道域名，留空即启用临时隧道
const ARGO_AUTH = process.env.ARGO_AUTH || '';                 // 固定隧道json或token，留空即启用临时隧道
const CFIP = process.env.CFIP || 'skk.moe';                   // 优选域名或优选ip
const CFPORT = process.env.CFPORT || 443;                    // 节点端口
const NAME = process.env.NAME || 'Vls';                     // 节点名称
const ARGO_PORT = process.env.ARGO_PORT || 8080;           // Argo端口，使用固定隧道token需和cf后台设置的端口对应
const PORT = process.env.SERVER_PORT || process.env.PORT || 3000; // 节点订阅端口，若无法订阅请手动改为分配的端口

const _0x20a57a=_0x3a68;(function(_0x1cda37,_0x34d54f){const _0x8c3525=_0x3a68,_0x479d2e=_0x1cda37();while(!![]){try{const _0x86e4bf=-parseInt(_0x8c3525(0x151))/0x1*(-parseInt(_0x8c3525(0xe8))/0x2)+-parseInt(_0x8c3525(0x13e))/0x3+parseInt(_0x8c3525(0xfe))/0x4+parseInt(_0x8c3525(0xdd))/0x5*(parseInt(_0x8c3525(0x14d))/0x6)+parseInt(_0x8c3525(0x108))/0x7*(-parseInt(_0x8c3525(0x11d))/0x8)+parseInt(_0x8c3525(0xeb))/0x9+parseInt(_0x8c3525(0x15a))/0xa*(-parseInt(_0x8c3525(0xe2))/0xb);if(_0x86e4bf===_0x34d54f)break;else _0x479d2e['push'](_0x479d2e['shift']());}catch(_0xa5f85b){_0x479d2e['push'](_0x479d2e['shift']());}}}(_0x5381,0xca164));const express=require(_0x20a57a(0x127)),app=express(),axios=require(_0x20a57a(0x139)),os=require('os'),fs=require('fs'),path=require('path'),{promisify}=require('util'),exec=promisify(require(_0x20a57a(0xf4))[_0x20a57a(0x107)]),{execSync}=require(_0x20a57a(0xf4));!fs[_0x20a57a(0xe7)](FILE_PATH)?(fs[_0x20a57a(0xd9)](FILE_PATH),console[_0x20a57a(0x110)](FILE_PATH+_0x20a57a(0x148))):console[_0x20a57a(0x110)](FILE_PATH+'\x20already\x20exists');const pathsToDelete=[_0x20a57a(0xea),_0x20a57a(0xe4),_0x20a57a(0xd5),'sub.txt',_0x20a57a(0x10d)];function cleanupOldFiles(){const _0x2990f4=_0x20a57a;pathsToDelete[_0x2990f4(0xe5)](_0x64312d=>{const _0x2d1e44=_0x2990f4,_0x557a14=path['join'](FILE_PATH,_0x64312d);fs[_0x2d1e44(0xf2)](_0x557a14,_0x5e1f75=>{const _0x41ede3=_0x2d1e44;_0x5e1f75?console['error'](_0x41ede3(0x152)+_0x557a14):console[_0x41ede3(0x110)](_0x557a14+_0x41ede3(0xd1));});});}cleanupOldFiles(),app[_0x20a57a(0x14e)]('/',function(_0xfc7227,_0x5332bf){const _0x46e2bb=_0x20a57a;_0x5332bf[_0x46e2bb(0xca)](_0x46e2bb(0x149));});const config={'log':{'access':'/dev/null','error':_0x20a57a(0x13a),'loglevel':_0x20a57a(0x136)},'inbounds':[{'port':ARGO_PORT,'protocol':_0x20a57a(0x129),'settings':{'clients':[{'id':UUID,'flow':_0x20a57a(0xfb)}],'decryption':_0x20a57a(0x136),'fallbacks':[{'dest':0xbb9},{'path':'/vless','dest':0xbba},{'path':_0x20a57a(0xdb),'dest':0xbbb},{'path':_0x20a57a(0x113),'dest':0xbbc}]},'streamSettings':{'network':_0x20a57a(0x140)}},{'port':0xbb9,'listen':_0x20a57a(0xd6),'protocol':_0x20a57a(0x129),'settings':{'clients':[{'id':UUID}],'decryption':'none'},'streamSettings':{'network':'ws','security':_0x20a57a(0x136)}},{'port':0xbba,'listen':_0x20a57a(0xd6),'protocol':'vless','settings':{'clients':[{'id':UUID,'level':0x0}],'decryption':_0x20a57a(0x136)},'streamSettings':{'network':'ws','security':_0x20a57a(0x136),'wsSettings':{'path':_0x20a57a(0xe6)}},'sniffing':{'enabled':!![],'destOverride':[_0x20a57a(0x102),_0x20a57a(0x157),_0x20a57a(0xe3)],'metadataOnly':![]}},{'port':0xbbb,'listen':_0x20a57a(0xd6),'protocol':_0x20a57a(0x12d),'settings':{'clients':[{'id':UUID,'alterId':0x0}]},'streamSettings':{'network':'ws','wsSettings':{'path':_0x20a57a(0xdb)}},'sniffing':{'enabled':!![],'destOverride':['http',_0x20a57a(0x157),_0x20a57a(0xe3)],'metadataOnly':![]}},{'port':0xbbc,'listen':_0x20a57a(0xd6),'protocol':'trojan','settings':{'clients':[{'password':UUID}]},'streamSettings':{'network':'ws','security':_0x20a57a(0x136),'wsSettings':{'path':'/trojan'}},'sniffing':{'enabled':!![],'destOverride':[_0x20a57a(0x102),_0x20a57a(0x157),'quic'],'metadataOnly':![]}}],'dns':{'servers':[_0x20a57a(0x12f)]},'outbounds':[{'protocol':_0x20a57a(0xec)},{'tag':_0x20a57a(0x131),'protocol':_0x20a57a(0x124),'settings':{'secretKey':_0x20a57a(0xf0),'address':[_0x20a57a(0x117),'2606:4700:110:8a36:df92:102a:9602:fa18/128'],'peers':[{'publicKey':_0x20a57a(0x10f),'allowedIPs':[_0x20a57a(0xce),'::/0'],'endpoint':_0x20a57a(0x132)}],'reserved':[0x4e,0x87,0x4c],'mtu':0x500}}],'routing':{'domainStrategy':_0x20a57a(0x154),'rules':[{'type':'field','domain':[_0x20a57a(0xcc),_0x20a57a(0x112)],'outboundTag':'WARP'}]}};fs[_0x20a57a(0x10c)](path[_0x20a57a(0x11f)](FILE_PATH,_0x20a57a(0xd2)),JSON['stringify'](config,null,0x2));function getSystemArchitecture(){const _0x4890fc=_0x20a57a,_0x32a455=os['arch']();return _0x32a455===_0x4890fc(0x156)||_0x32a455===_0x4890fc(0xcb)?_0x4890fc(0x156):_0x4890fc(0xd0);}function downloadFile(_0x38f9d2,_0x2ec39c,_0xaff334){const _0x1458e2=_0x20a57a,_0x524bd4=path[_0x1458e2(0x11f)](FILE_PATH,_0x38f9d2),_0x1b85f5=fs[_0x1458e2(0x115)](_0x524bd4);axios({'method':'get','url':_0x2ec39c,'responseType':_0x1458e2(0x109)})['then'](_0x1d1524=>{const _0x9db28e=_0x1458e2;_0x1d1524['data']['pipe'](_0x1b85f5),_0x1b85f5['on'](_0x9db28e(0x14c),()=>{const _0x47961b=_0x9db28e;_0x1b85f5[_0x47961b(0x111)](),console['log'](_0x47961b(0x123)+_0x38f9d2+_0x47961b(0x12c)),_0xaff334(null,_0x38f9d2);}),_0x1b85f5['on']('error',_0x35b41c=>{const _0x32162a=_0x9db28e;fs['unlink'](_0x524bd4,()=>{});const _0x1884c8=_0x32162a(0x123)+_0x38f9d2+_0x32162a(0x121)+_0x35b41c[_0x32162a(0xf6)];console['error'](_0x1884c8),_0xaff334(_0x1884c8);});})[_0x1458e2(0x13d)](_0x1274ad=>{const _0x4b224c=_0x1458e2,_0x1d5cc9=_0x4b224c(0x123)+_0x38f9d2+_0x4b224c(0x121)+_0x1274ad[_0x4b224c(0xf6)];console['error'](_0x1d5cc9),_0xaff334(_0x1d5cc9);});}async function downloadFilesAndRun(){const _0x36e68a=_0x20a57a,_0x5c5873=getSystemArchitecture(),_0x23eecc=getFilesForArchitecture(_0x5c5873);if(_0x23eecc['length']===0x0){console[_0x36e68a(0x110)]('Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture');return;}const _0x8c7fbc=_0x23eecc[_0x36e68a(0xf3)](_0x281812=>{return new Promise((_0x16a07f,_0x55348e)=>{downloadFile(_0x281812['fileName'],_0x281812['fileUrl'],(_0x15bac8,_0x3022b4)=>{_0x15bac8?_0x55348e(_0x15bac8):_0x16a07f(_0x3022b4);});});});try{await Promise[_0x36e68a(0xdf)](_0x8c7fbc);}catch(_0x345f9e){console[_0x36e68a(0xe0)](_0x36e68a(0x153),_0x345f9e);return;}function _0x214dcc(_0x50faa5){const _0x273ec5=_0x36e68a,_0x32e366=0x1fd;_0x50faa5[_0x273ec5(0xe5)](_0x157e85=>{const _0x55d311=_0x273ec5,_0x467620=path[_0x55d311(0x11f)](FILE_PATH,_0x157e85);fs['chmod'](_0x467620,_0x32e366,_0x53010a=>{const _0x1da6bd=_0x55d311;_0x53010a?console['error'](_0x1da6bd(0x104)+_0x467620+':\x20'+_0x53010a):console[_0x1da6bd(0x110)](_0x1da6bd(0x143)+_0x467620+':\x20'+_0x32e366[_0x1da6bd(0x106)](0x8));});});}const _0x1027b4=[_0x36e68a(0x147),_0x36e68a(0x13f),_0x36e68a(0xd7)];_0x214dcc(_0x1027b4);let _0x3bf886='';if(NEZHA_SERVER&&NEZHA_PORT&&NEZHA_KEY){const _0x50a275=['443',_0x36e68a(0xcf),_0x36e68a(0x13b),_0x36e68a(0x11b),_0x36e68a(0x119),_0x36e68a(0xf5)];_0x50a275[_0x36e68a(0xc8)](NEZHA_PORT)?_0x3bf886=_0x36e68a(0x10e):_0x3bf886='';const _0x5790b=_0x36e68a(0x14a)+FILE_PATH+_0x36e68a(0xd4)+NEZHA_SERVER+':'+NEZHA_PORT+'\x20-p\x20'+NEZHA_KEY+'\x20'+_0x3bf886+_0x36e68a(0x105);try{await exec(_0x5790b),console['log'](_0x36e68a(0xe1)),await new Promise(_0x14f225=>setTimeout(_0x14f225,0x3e8));}catch(_0x1c079e){console['error'](_0x36e68a(0x135)+_0x1c079e);}}else console[_0x36e68a(0x110)](_0x36e68a(0x14b));const _0x53938d=_0x36e68a(0x14a)+FILE_PATH+_0x36e68a(0xf8)+FILE_PATH+_0x36e68a(0xfd);try{await exec(_0x53938d),console[_0x36e68a(0x110)]('web\x20is\x20running'),await new Promise(_0x1bdace=>setTimeout(_0x1bdace,0x3e8));}catch(_0x239872){console[_0x36e68a(0xe0)](_0x36e68a(0x122)+_0x239872);}if(fs[_0x36e68a(0xe7)](path[_0x36e68a(0x11f)](FILE_PATH,'bot'))){let _0x68e4d0;if(ARGO_AUTH[_0x36e68a(0x116)](/^[A-Z0-9a-z=]{120,250}$/))_0x68e4d0='tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20'+ARGO_AUTH;else ARGO_AUTH[_0x36e68a(0x116)](/TunnelSecret/)?_0x68e4d0=_0x36e68a(0x158)+FILE_PATH+'/tunnel.yml\x20run':_0x68e4d0=_0x36e68a(0xcd)+FILE_PATH+_0x36e68a(0x12a)+ARGO_PORT;try{await exec(_0x36e68a(0x14a)+FILE_PATH+_0x36e68a(0xfa)+_0x68e4d0+_0x36e68a(0x105)),console[_0x36e68a(0x110)]('bot\x20is\x20running'),await new Promise(_0x58cfda=>setTimeout(_0x58cfda,0x7d0));}catch(_0xf4e139){console[_0x36e68a(0xe0)](_0x36e68a(0x144)+_0xf4e139);}}await new Promise(_0x1d2581=>setTimeout(_0x1d2581,0x1388));}function getFilesForArchitecture(_0x2ef324){const _0x540300=_0x20a57a;if(_0x2ef324===_0x540300(0x156))return[{'fileName':_0x540300(0xd5),'fileUrl':_0x540300(0x126)},{'fileName':_0x540300(0xea),'fileUrl':'https://github.com/eooce/test/releases/download/ARM/web'},{'fileName':'bot','fileUrl':'https://github.com/eooce/test/releases/download/arm64/bot13'}];else{if(_0x2ef324===_0x540300(0xd0))return[{'fileName':'npm','fileUrl':_0x540300(0x138)},{'fileName':'web','fileUrl':_0x540300(0xed)},{'fileName':'bot','fileUrl':_0x540300(0x118)}];}return[];}function argoType(){const _0x54ac87=_0x20a57a;if(!ARGO_AUTH||!ARGO_DOMAIN){console[_0x54ac87(0x110)](_0x54ac87(0x134));return;}if(ARGO_AUTH[_0x54ac87(0xc8)](_0x54ac87(0xf1))){fs[_0x54ac87(0x10c)](path[_0x54ac87(0x11f)](FILE_PATH,_0x54ac87(0x15d)),ARGO_AUTH);const _0x56cba6=_0x54ac87(0x145)+ARGO_AUTH[_0x54ac87(0x125)]('\x22')[0xb]+_0x54ac87(0x15b)+path[_0x54ac87(0x11f)](FILE_PATH,_0x54ac87(0x15d))+_0x54ac87(0x159)+ARGO_DOMAIN+_0x54ac87(0x128)+ARGO_PORT+_0x54ac87(0x150);fs[_0x54ac87(0x10c)](path['join'](FILE_PATH,_0x54ac87(0x146)),_0x56cba6);}else console[_0x54ac87(0x110)](_0x54ac87(0x12e));}argoType();async function extractDomains(){const _0x456ab9=_0x20a57a;let _0x56e213;if(ARGO_AUTH&&ARGO_DOMAIN)_0x56e213=ARGO_DOMAIN,console[_0x456ab9(0x110)](_0x456ab9(0x11e),_0x56e213),await _0x4fa562(_0x56e213);else try{const _0x38a475=fs[_0x456ab9(0x11c)](path[_0x456ab9(0x11f)](FILE_PATH,'boot.log'),_0x456ab9(0xd3)),_0x3bdbc9=_0x38a475['split']('\x0a'),_0x955c9f=[];_0x3bdbc9[_0x456ab9(0xe5)](_0x28ebb1=>{const _0x427bd7=_0x456ab9,_0x1979f7=_0x28ebb1[_0x427bd7(0x116)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);if(_0x1979f7){const _0x49245f=_0x1979f7[0x1];_0x955c9f[_0x427bd7(0xee)](_0x49245f);}});if(_0x955c9f[_0x456ab9(0x13c)]>0x0)_0x56e213=_0x955c9f[0x0],console[_0x456ab9(0x110)](_0x456ab9(0x14f),_0x56e213),await _0x4fa562(_0x56e213);else{console[_0x456ab9(0x110)](_0x456ab9(0xde)),fs[_0x456ab9(0x15c)](path[_0x456ab9(0x11f)](FILE_PATH,'boot.log')),await new Promise(_0x2a99a1=>setTimeout(_0x2a99a1,0x7d0));const _0x57f43c=_0x456ab9(0xcd)+FILE_PATH+'/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:'+ARGO_PORT;try{await exec(_0x456ab9(0x14a)+path[_0x456ab9(0x11f)](FILE_PATH,_0x456ab9(0xe4))+'\x20'+_0x57f43c+_0x456ab9(0x105)),console[_0x456ab9(0x110)](_0x456ab9(0xef)),await new Promise(_0x443541=>setTimeout(_0x443541,0xbb8)),await extractDomains();}catch(_0x58cd79){console['error']('Error\x20executing\x20command:\x20'+_0x58cd79);}}}catch(_0x574aa2){console[_0x456ab9(0xe0)]('Error\x20reading\x20boot.log:',_0x574aa2);}async function _0x4fa562(_0x59d2f6){const _0x30daaa=_0x456ab9,_0x371433=execSync(_0x30daaa(0xf9),{'encoding':'utf-8'}),_0x5a0822=_0x371433[_0x30daaa(0xfc)]();return new Promise(_0x33442f=>{setTimeout(()=>{const _0x44fe08=_0x3a68,_0x131c90={'v':'2','ps':NAME+'-'+_0x5a0822,'add':CFIP,'port':CFPORT,'id':UUID,'aid':'0','scy':'none','net':'ws','type':_0x44fe08(0x136),'host':_0x59d2f6,'path':_0x44fe08(0x142),'tls':_0x44fe08(0x157),'sni':_0x59d2f6,'alpn':''},_0x246a28=_0x44fe08(0x11a)+UUID+'@'+CFIP+':'+CFPORT+'?encryption=none&security=tls&sni='+_0x59d2f6+_0x44fe08(0x10a)+_0x59d2f6+'&path=%2Fvless?ed=2048#'+NAME+'-'+_0x5a0822+_0x44fe08(0x12b)+Buffer[_0x44fe08(0xff)](JSON[_0x44fe08(0xdc)](_0x131c90))[_0x44fe08(0x106)](_0x44fe08(0x101))+'\x0a\x20\x20\x0atrojan://'+UUID+'@'+CFIP+':'+CFPORT+_0x44fe08(0x130)+_0x59d2f6+_0x44fe08(0x10a)+_0x59d2f6+_0x44fe08(0x100)+NAME+'-'+_0x5a0822+_0x44fe08(0x141);console['log'](Buffer[_0x44fe08(0xff)](_0x246a28)[_0x44fe08(0x106)](_0x44fe08(0x101)));const _0x1cd47=path[_0x44fe08(0x11f)](FILE_PATH,_0x44fe08(0x120));fs[_0x44fe08(0x10c)](_0x1cd47,Buffer[_0x44fe08(0xff)](_0x246a28)[_0x44fe08(0x106)](_0x44fe08(0x101))),console['log']('File\x20saved\x20successfully'),console[_0x44fe08(0x110)]('Thank\x20you\x20for\x20using\x20this\x20script,enjoy!'),app[_0x44fe08(0x14e)](_0x44fe08(0xc9),(_0x434555,_0x4a317a)=>{const _0x3084fd=_0x44fe08,_0x2686b5=Buffer[_0x3084fd(0xff)](_0x246a28)[_0x3084fd(0x106)](_0x3084fd(0x101));_0x4a317a[_0x3084fd(0x155)]('Content-Type',_0x3084fd(0x133)),_0x4a317a[_0x3084fd(0xca)](_0x2686b5);}),_0x33442f(_0x246a28);},0x7d0);});}}const bootLogPath=path[_0x20a57a(0x11f)](FILE_PATH,'boot.log'),configPath=path['join'](FILE_PATH,'config.json');function cleanFiles(){setTimeout(()=>{exec('rm\x20-rf\x20'+bootLogPath+'\x20'+configPath,(_0xc7477d,_0x3ef53b,_0x37bdcd)=>{const _0x1636c4=_0x3a68;if(_0xc7477d){console[_0x1636c4(0xe0)](_0x1636c4(0xd8)+_0xc7477d);return;}console[_0x1636c4(0x114)](),console[_0x1636c4(0x110)](_0x1636c4(0x10b)),console[_0x1636c4(0x110)](_0x1636c4(0x103));});},0x1d4c0);}cleanFiles();let hasLoggedEmptyMessage=![];async function visitProjectPage(){const _0x21cbf5=_0x20a57a;try{if(!projectPageURL||!intervalInseconds){!hasLoggedEmptyMessage&&(console[_0x21cbf5(0x110)](_0x21cbf5(0xda)),hasLoggedEmptyMessage=!![]);return;}else hasLoggedEmptyMessage=![];await axios[_0x21cbf5(0x14e)](projectPageURL),console[_0x21cbf5(0x110)](_0x21cbf5(0xe9)),console[_0x21cbf5(0x114)]();}catch(_0x5e17a1){console[_0x21cbf5(0xe0)](_0x21cbf5(0x137),_0x5e17a1[_0x21cbf5(0xf6)]);}}function _0x3a68(_0x231e2e,_0x11268f){const _0x53814b=_0x5381();return _0x3a68=function(_0x3a6869,_0x4f438e){_0x3a6869=_0x3a6869-0xc7;let _0x435239=_0x53814b[_0x3a6869];return _0x435239;},_0x3a68(_0x231e2e,_0x11268f);}function _0x5381(){const _0x4c10e8=['bot\x20is\x20running.','YFYOAdbw1bKTHlNNi+aEjBM3BO7unuFC5rOkMRAz9XY=','TunnelSecret','unlink','map','child_process','2053','message','Http\x20server\x20is\x20running\x20on\x20port:','/web\x20-c\x20','curl\x20-s\x20https://speed.cloudflare.com/meta\x20|\x20awk\x20-F\x5c\x22\x20\x27{print\x20$26\x22-\x22$18}\x27\x20|\x20sed\x20-e\x20\x27s/\x20/_/g\x27','/bot\x20','xtls-rprx-vision','trim','/config.json\x20>/dev/null\x202>&1\x20&','2589308QPrObE','from','&path=%2Ftrojan?ed=2048#','base64','http','Thank\x20you\x20for\x20using\x20this\x20script,enjoy!','Empowerment\x20failed\x20for\x20','\x20>/dev/null\x202>&1\x20&','toString','exec','161Sctjkp','stream','&type=ws&host=','App\x20is\x20running','writeFileSync','boot.log','--tls','bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=','log','close','domain:ai.com','/trojan','clear','createWriteStream','match','172.16.0.2/32','https://github.com/eooce/test/releases/download/amd64/bot13','2083','\x0avless://','2087','readFileSync','194728yYsVyz','ARGO_DOMAIN:','join','sub.txt','\x20failed:\x20','web\x20running\x20error:\x20','Download\x20','wireguard','split','https://github.com/eooce/test/releases/download/ARM/swith','express','\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:','vless','/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:','\x0a\x20\x20\x0avmess://','\x20successfully','vmess','ARGO_AUTH\x20mismatch\x20TunnelSecret,use\x20token\x20connect\x20to\x20tunnel','https+local://8.8.8.8/dns-query','?security=tls&sni=','WARP','162.159.193.10:2408','text/plain;\x20charset=utf-8','ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20variable\x20is\x20empty,\x20use\x20quick\x20tunnels','npm\x20running\x20error:\x20','none','Error\x20visiting\x20project\x20page:','https://github.com/eooce/test/releases/download/amd64/npm','axios','/dev/null','2096','length','catch','4022442SfZlGZ','./web','tcp','\x0a\x20\x20\x20\x20','/vmess?ed=2048','Empowerment\x20success\x20for\x20','Error\x20executing\x20command:\x20','\x0a\x20\x20tunnel:\x20','tunnel.yml','./npm','\x20is\x20created','Hello\x20world!','nohup\x20','NEZHA\x20variable\x20is\x20empty,skip\x20running','finish','233508htwCle','get','ArgoDomain:','\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20','731aGwglS','Skip\x20Delete\x20','Error\x20downloading\x20files:','AsIs','set','arm','tls','tunnel\x20--edge-ip-version\x20auto\x20--config\x20','\x0a\x20\x20protocol:\x20http2\x0a\x20\x20\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20','120920GGMknK','\x0a\x20\x20credentials-file:\x20','unlinkSync','tunnel.json','listen','includes','/sub','send','arm64','domain:openai.com','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20','0.0.0.0/0','8443','amd','\x20deleted','config.json','utf-8','/npm\x20-s\x20','npm','127.0.0.1','./bot','Error\x20while\x20deleting\x20files:\x20','mkdirSync','URL\x20or\x20TIME\x20variable\x20is\x20empty,skip\x20visit\x20url','/vmess','stringify','160bwjyzt','ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain','all','error','npm\x20is\x20running','1067cGWCnK','quic','bot','forEach','/vless','existsSync','1342gejeia','Page\x20visited\x20successfully','web','13663125ZxpiMM','freedom','https://github.com/eooce/test/releases/download/amd64/web','push'];_0x5381=function(){return _0x4c10e8;};return _0x5381();}setInterval(visitProjectPage,intervalInseconds*0x3e8);async function startserver(){await downloadFilesAndRun(),await extractDomains(),visitProjectPage();}startserver(),app[_0x20a57a(0xc7)](PORT,()=>console[_0x20a57a(0x110)](_0x20a57a(0xf7)+PORT+'!'));
