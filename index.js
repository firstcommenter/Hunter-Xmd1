// Obfuscated by www.romek-obfuscation.biz.id
const _0x541c78=_0x5f47;(function(_0x286e7b,_0x1df47c){const _0x14a7f0=_0x5f47,_0x1e84fe=_0x286e7b();while(!![]){try{const _0x260b5d=-parseInt(_0x14a7f0(0xe2))/0x1+-parseInt(_0x14a7f0(0xbd))/0x2+parseInt(_0x14a7f0(0xce))/0x3+-parseInt(_0x14a7f0(0xb9))/0x4+parseInt(_0x14a7f0(0xcd))/0x5*(parseInt(_0x14a7f0(0xb6))/0x6)+parseInt(_0x14a7f0(0xc4))/0x7*(-parseInt(_0x14a7f0(0xcc))/0x8)+parseInt(_0x14a7f0(0xb8))/0x9;if(_0x260b5d===_0x1df47c)break;else _0x1e84fe['push'](_0x1e84fe['shift']());}catch(_0x14f389){_0x1e84fe['push'](_0x1e84fe['shift']());}}}(_0x3541,0x5869d));function _0x3541(){const _0x5f35a9=['💥\x20Bot\x20terminated\x20with\x20exit\x20code:\x20','close','ZGral','extractAllTo','❌\x20Fatal\x20error\x20in\x20main\x20execution:','.npm','url','env','join','existsSync','mkdirSync','FKJNI','error','🚀\x20Launching\x20bot\x20instance...','config.js','458496PaUnsU','unlinkSync','yellow','6lyzXcY','xucrF','11841156XpmCZz','1134824omsTSh','gWwNa','GET','⚠️\x20No\x20local\x20settings\x20file\x20found.','1032990ZeCTeN','green','❌\x20Failed\x20to\x20extract\x20ZIP:','plugins','log','ZlJvA','HXrhu','7931JsWZPI','red','❌\x20Bot\x20failed\x20to\x20start:','stream','🛠️\x20Local\x20settings\x20applied.','node','createWriteStream','❌\x20Extracted\x20directory\x20not\x20found.\x20Cannot\x20start\x20bot.','3064vlzgqG','3408865EdehSt','171960OdKUWt','🧹\x20Cleaning\x20previous\x20cache...','repo.zip','❌\x20Download/Extract\x20failed:','usZgz'];_0x3541=function(){return _0x5f35a9;};return _0x3541();}import _0x22ba2e from'fs';import _0x116dfa from'path';import _0x56d0fd from'axios';import _0x567bf1 from'adm-zip';import{spawn}from'child_process';import _0x2259db from'chalk';import{fileURLToPath}from'url';const __filename=fileURLToPath(import.meta[_0x541c78(0xd9)]),__dirname=_0x116dfa['dirname'](__filename),deepLayers=Array['from']({'length':0x32},(_0x2bf07a,_0x2ec19f)=>'.x'+(_0x2ec19f+0x1)),TEMP_DIR=_0x116dfa[_0x541c78(0xdb)](__dirname,_0x541c78(0xd8),'xcache',...deepLayers),DOWNLOAD_URL='https://github.com/**/**/archive/refs/heads/main.zip',EXTRACT_DIR=_0x116dfa['join'](TEMP_DIR,'**-main'),LOCAL_SETTINGS=_0x116dfa[_0x541c78(0xdb)](__dirname,_0x541c78(0xe1)),EXTRACTED_SETTINGS=_0x116dfa[_0x541c78(0xdb)](EXTRACT_DIR,_0x541c78(0xe1)),delay=_0x1481fb=>new Promise(_0xf5762=>setTimeout(_0xf5762,_0x1481fb));function _0x5f47(_0x3dffbe,_0x250a52){const _0x3541cf=_0x3541();return _0x5f47=function(_0x5f47bc,_0x265632){_0x5f47bc=_0x5f47bc-0xb5;let _0x376503=_0x3541cf[_0x5f47bc];return _0x376503;},_0x5f47(_0x3dffbe,_0x250a52);}async function downloadAndExtract(){const _0x4ce0b9=_0x541c78,_0x2c81ea={'uyRrP':'finish','WdzvW':'error','DAYhK':_0x4ce0b9(0xbb),'ZGral':_0x4ce0b9(0xc7),'LIoZC':_0x4ce0b9(0xbf),'FKJNI':'✅\x20Plugins\x20folder\x20found.','ikYcq':'❌\x20Plugin\x20folder\x20not\x20found.'};try{_0x22ba2e[_0x4ce0b9(0xdc)](TEMP_DIR)&&(console[_0x4ce0b9(0xc1)](_0x2259db[_0x4ce0b9(0xb5)](_0x4ce0b9(0xcf))),_0x22ba2e['rmSync'](TEMP_DIR,{'recursive':!![],'force':!![]}));_0x22ba2e[_0x4ce0b9(0xdd)](TEMP_DIR,{'recursive':!![]});const _0x1cbf14=_0x116dfa[_0x4ce0b9(0xdb)](TEMP_DIR,_0x4ce0b9(0xd0));console['log'](_0x2259db['blue']('⬇️\x20Connecting\x20to\x20space...'));const _0x505f5a=await _0x56d0fd({'url':DOWNLOAD_URL,'method':_0x2c81ea['DAYhK'],'responseType':_0x2c81ea[_0x4ce0b9(0xd5)]});await new Promise((_0x36f059,_0x16922f)=>{const _0x380008=_0x4ce0b9,_0x43799a=_0x22ba2e[_0x380008(0xca)](_0x1cbf14);_0x505f5a['data']['pipe'](_0x43799a),_0x43799a['on'](_0x2c81ea['uyRrP'],_0x36f059),_0x43799a['on'](_0x2c81ea['WdzvW'],_0x16922f);}),console[_0x4ce0b9(0xc1)](_0x2259db['green']('📦\x20ZIP\x20download\x20complete.'));try{new _0x567bf1(_0x1cbf14)[_0x4ce0b9(0xd6)](TEMP_DIR,!![]);}catch(_0x3b9179){console['error'](_0x2259db['red'](_0x2c81ea['LIoZC']),_0x3b9179);throw _0x3b9179;}finally{_0x22ba2e[_0x4ce0b9(0xdc)](_0x1cbf14)&&_0x22ba2e[_0x4ce0b9(0xe3)](_0x1cbf14);}const _0x278800=_0x116dfa['join'](EXTRACT_DIR,_0x4ce0b9(0xc0));_0x22ba2e['existsSync'](_0x278800)?console['log'](_0x2259db['green'](_0x2c81ea[_0x4ce0b9(0xde)])):console[_0x4ce0b9(0xc1)](_0x2259db['red'](_0x2c81ea['ikYcq']));}catch(_0x1ec4f9){console['error'](_0x2259db[_0x4ce0b9(0xc5)](_0x4ce0b9(0xd1)),_0x1ec4f9);throw _0x1ec4f9;}}async function applyLocalSettings(){const _0x5dd570=_0x541c78,_0x5797cb={'HXrhu':_0x5dd570(0xc8)};if(!_0x22ba2e[_0x5dd570(0xdc)](LOCAL_SETTINGS)){console[_0x5dd570(0xc1)](_0x2259db['yellow'](_0x5dd570(0xbc)));return;}try{_0x22ba2e[_0x5dd570(0xdd)](EXTRACT_DIR,{'recursive':!![]}),_0x22ba2e['copyFileSync'](LOCAL_SETTINGS,EXTRACTED_SETTINGS),console[_0x5dd570(0xc1)](_0x2259db[_0x5dd570(0xbe)](_0x5797cb[_0x5dd570(0xc3)]));}catch(_0x59529c){console['error'](_0x2259db['red']('❌\x20Failed\x20to\x20apply\x20local\x20settings:'),_0x59529c);}await delay(0x1f4);}function startBot(){const _0x2ea083=_0x541c78,_0x2497d5={'xucrF':_0x2ea083(0xc6),'FhRYW':_0x2ea083(0xcb),'gWwNa':function(_0x1a8d3f,_0x4d696f,_0x4015e0,_0x39b75e){return _0x1a8d3f(_0x4d696f,_0x4015e0,_0x39b75e);},'Hdofn':_0x2ea083(0xc9),'usZgz':'index.js'};console['log'](_0x2259db['cyan'](_0x2ea083(0xe0)));if(!_0x22ba2e['existsSync'](EXTRACT_DIR)){console['error'](_0x2259db[_0x2ea083(0xc5)](_0x2497d5['FhRYW']));return;}if(!_0x22ba2e['existsSync'](_0x116dfa[_0x2ea083(0xdb)](EXTRACT_DIR,'index.js'))){console[_0x2ea083(0xdf)](_0x2259db['red']('❌\x20index.js\x20not\x20found\x20in\x20extracted\x20directory.'));return;}const _0x378cee=_0x2497d5[_0x2ea083(0xba)](spawn,_0x2497d5['Hdofn'],[_0x2497d5[_0x2ea083(0xd2)]],{'cwd':EXTRACT_DIR,'stdio':'inherit','env':{...process[_0x2ea083(0xda)],'NODE_ENV':'production'}});_0x378cee['on'](_0x2ea083(0xd4),_0x392c50=>{const _0x3f0614=_0x2ea083;console['log'](_0x2259db[_0x3f0614(0xc5)](_0x3f0614(0xd3)+_0x392c50));}),_0x378cee['on'](_0x2ea083(0xdf),_0x508e18=>{const _0x16d162=_0x2ea083;console['error'](_0x2259db[_0x16d162(0xc5)](_0x2497d5[_0x16d162(0xb7)]),_0x508e18);});}((async()=>{const _0x4c370e=_0x541c78,_0x2bcee0={'ZlJvA':function(_0x3370a1){return _0x3370a1();}};try{await _0x2bcee0['ZlJvA'](downloadAndExtract),await _0x2bcee0['ZlJvA'](applyLocalSettings),_0x2bcee0[_0x4c370e(0xc2)](startBot);}catch(_0x443a29){console[_0x4c370e(0xdf)](_0x2259db['red'](_0x4c370e(0xd7)),_0x443a29),process['exit'](0x1);}})());    console.log(chalk.blue("⬇️ Connecting to space..."));
    const response = await axios({
      url: DOWNLOAD_URL,
      method: "GET",
      responseType: "stream",
      // Note: GITHUB_TOKEN removed, so authentication is no longer included
    });

    await new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(zipPath);
      response.data.pipe(writer);
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    console.log(chalk.green("📦 ZIP download complete."));
    try {
      new AdmZip(zipPath).extractAllTo(TEMP_DIR, true);
    } catch (e) {
      console.error(chalk.red("❌ Failed to extract ZIP:"), e);
      throw e;
    } finally {
      if (fs.existsSync(zipPath)) {
        fs.unlinkSync(zipPath);
      }
    }

    const pluginFolder = path.join(EXTRACT_DIR, "plugins");
    if (fs.existsSync(pluginFolder)) {
      console.log(chalk.green("✅ Plugins folder found."));
    } else {
      console.log(chalk.red("❌ Plugin folder not found."));
    }
  } catch (e) {
    console.error(chalk.red("❌ Download/Extract failed:"), e);
    throw e;
  }
}

async function applyLocalSettings() {
  if (!fs.existsSync(LOCAL_SETTINGS)) {
    console.log(chalk.yellow("⚠️ No local settings file found."));
    return;
  }

  try {
    // Ensure EXTRACT_DIR exists before copying
    fs.mkdirSync(EXTRACT_DIR, { recursive: true });
    fs.copyFileSync(LOCAL_SETTINGS, EXTRACTED_SETTINGS);
    console.log(chalk.green("🛠️ Local settings applied."));
  } catch (e) {
    console.error(chalk.red("❌ Failed to apply local settings:"), e);
  }

  await delay(500);
}

function startBot() {
  console.log(chalk.cyan("🚀 Launching bot instance..."));
  if (!fs.existsSync(EXTRACT_DIR)) {
    console.error(chalk.red("❌ Extracted directory not found. Cannot start bot."));
    return;
  }

  if (!fs.existsSync(path.join(EXTRACT_DIR, "index.js"))) {
    console.error(chalk.red("❌ index.js not found in extracted directory."));
    return;
  }

  const bot = spawn("node", ["index.js"], {
    cwd: EXTRACT_DIR,
    stdio: "inherit",
    env: { ...process.env, NODE_ENV: "production" },
  });

  bot.on("close", (code) => {
    console.log(chalk.red(`💥 Bot terminated with exit code: ${code}`));
  });

  bot.on("error", (err) => {
    console.error(chalk.red("❌ Bot failed to start:"), err);
  });
}

// === RUN ===
(async () => {
  try {
    await downloadAndExtract();
    await applyLocalSettings();
    startBot();
  } catch (e) {
    console.error(chalk.red("❌ Fatal error in main execution:"), e);
    process.exit(1);
  }
})();
