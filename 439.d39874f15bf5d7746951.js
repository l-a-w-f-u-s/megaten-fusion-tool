(self.webpackChunkmegaten_fusion_tool=self.webpackChunkmegaten_fusion_tool||[]).push([[439],{5439:(e,s,t)=>{"use strict";t.r(s),t.d(s,{CompendiumModule:()=>d,SMT5_COMPENDIUM_CONFIG:()=>p});var a=t(1116),o=t(9624),i=t(1670),r=t(6746),n=t(115),l=t(4541);const c=JSON.parse('{"lI":["alm","ail","rec","sup"],"Wd":["Charm","Mute","Panic","Poison","Sleep","Illusion"],"co":["HP","MP","St","Vi","Ma","Ag","Lu"],"iZ":["Matador,Daisoujou,Hell Biker,White Rider,Red Rider,Black Rider,Pale Rider,Mother Harlot,Trumpeter","Artemis","Cleopatra","Mephisto"],"MG":["Deity","Megami","Genma","Amatsu","Yoma","Fairy","Night","Tyrant","Dragon","Snake","Drake","Avatar","Holy","Beast","Wilder","Fury","Lady","Kishin","Wargod","Kunitsu","Vile","Herald","Divine","Fallen","Avian","Raptor","Femme","Brute","Jaki","Jirae","Haunt","Foul","Element","Fiend","Mitama","\u9b54\u795e","\u5973\u795e","\u5e7b\u9b54","\u5929\u6d25\u795e","\u5996\u9b54","\u5996\u7cbe","\u591c\u9b54","\u9b54\u738b","\u9f8d\u795e","\u9f8d\u738b","\u90aa\u9f8d","\u795e\u7363","\u8056\u7363","\u9b54\u7363","\u5996\u7363","\u7834\u58ca\u795e","\u5730\u6bcd\u795e","\u9b3c\u795e","\u8ecd\u795e","\u56fd\u6d25\u795e","\u90aa\u795e","\u5927\u5929\u4f7f","\u5929\u4f7f","\u5815\u5929\u4f7f","\u970a\u9ce5","\u51f6\u9ce5","\u9b3c\u5973","\u5996\u9b3c","\u90aa\u9b3c","\u5730\u970a","\u5e7d\u9b3c","\u5916\u9053","\u7cbe\u970a","\u9b54\u4eba","\u5fa1\u9b42"],"O9":{"w":1125,"-":100,"s":50,"n":0,"r":-100,"d":-1100},"sb":["phy","fir","ice","ele","for","lig","dar"],"tA":["oth","pas"]}');var u=t(5614);function S(e){const s={};for(let t=0;t<e.length;t++)s[e[t]]=t;return s}const M=c.sb.concat(c.lI),m=M.concat(c.tA),T={costs:[],upgrades:[]},_={};for(const[A,f]of Object.entries(SMT5_JAP_NAMES))_[f]=A;for(const A of M){const e=SMT5_AFFINITY_BONUSES.elements[A];T.costs.push(SMT5_AFFINITY_BONUSES.costs[e]),T.upgrades.push(SMT5_AFFINITY_BONUSES.upgrades[e])}for(const A of Object.values(SMT5_DEMON_DATA))A.price=A.lvl*A.lvl;for(const A of Object.values(SMT5_SKILL_DATA))A.rank||(A.rank=A.cost?Math.ceil((A.cost-1e3)/5):1);for(const[A,f]of Object.entries(SMT5_FUSION_PREREQS))SMT5_DEMON_DATA[A].prereq=f;const p={appTitle:"Shin Megami Tensei V",races:c.MG,raceOrder:S(c.MG),appCssClasses:["smt4","smt5"],lang:"en",engNames:_,affinityElems:M,skillData:SMT5_SKILL_DATA,skillElems:m,elemOrder:S(m),resistCodes:c.O9,affinityBonuses:T,demonData:SMT5_DEMON_DATA,evolveData:SMT5_EVOLUTIONS,dlcDemons:c.iZ,baseStats:c.co,resistElems:c.sb,ailmentElems:c.Wd,normalTable:SMT5_FUSION_CHART,elementTable:SMT5_ELEMENT_CHART,specialRecipes:SMT5_SPECIAL_RECIPES,settingsKey:"smt5-fusion-tool-settings",settingsVersion:1709211400};let d=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({providers:[o.Dx,r.Y,[{provide:n.vE,useExisting:r.Y}],[{provide:n.I7,useValue:p}]],imports:[[a.ez,l.D,i.V]]}),e})()}}]);