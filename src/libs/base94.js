// https://codepoints.net/search?gc[]=Lu&gc[]=Ll&gc[]=Lt&gc[]=Lm&gc[]=Lo&gc[]=Nl


let codes = [
  0x0030,0x0039, // 0-9
  0x0041,0x005a, // A-Z
  0x0061,0x007a, // a-z
  0x00c0,0x02af,
  // 0x0370,0x0373,
  // 0x0376,0x0377,
  // 0x0391,0x03a1,
  // 0x03a3,0x03ff,
  // 0x0400,0x045f,
  // 0x0460,0x0481,
  // 0x048a,0x052f,
  // 0x0531,0x0556,
  // 0x0561,0x0587,
  // 0x05d0,0x05ea,
  // 0x07c0,0x07ea,
  // 0x2200,0x22ff, // Mathematical
  // 0x2500,0x257f, // Box Drawing

  // 0x0021, 0x07ff
];

let chars = "";
for (let i = 0; i < codes.length; i += 2) {
  for (let j = codes[i], k = codes[i + 1]; j <= k; j++) {
    chars += String.fromCharCode(j);
  }
}

// let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789αβΓγΔδεζηΘθικΛλμνΞξΠπρΣσςτυΦφχΨψΩωАаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЪъЫыЬьЭэЮюЯяІіѲѳѢѣѴѵ";
// chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞş' +
//         'ɀɁɂɃɄɅɆɈɉɊɋɌɍɎɏɑɒɓɔɕɖɗɘəɚɛɝɞɟɠɡɢɣɤɥɦɨɩɪɫɬɭɮɯɰɱɳɴɶɷɸɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫ';
let l = chars.length;
console.log("length", l);
let unique = {};
for (let i = 0; i < l; i++) {
  unique[chars[i]] = true;
}
chars = Object.keys(unique).sort().join("");
l = chars.length;
console.log("length", l);
console.log(chars);
function baseX(num) {
  let str = '';
  let l3 = num.toString(36).length;
  while (num) {
    str += chars[num % l];
    num = (num / l) >>> 0;
  }
  let l1 = str.length;
  let l2 = strToRaw(str).length;
  console.log(`(${l1}/${l2}/${l3})`);
  return str.split('').reverse().join('');
}

// 𐐜𐐮𐑅 𐐮𐑆 𐐩 𐐺𐐩𐑅 80 𐐯𐑌𐐿𐐬𐐼𐐮𐑍 𐑄𐐰𐐻 𐐲𐑅𐐲𐑆 𐑄 40 𐐿𐐰𐑉𐐮𐐿𐐻𐐲𐑉𐑆 (𐐲𐐹𐐲𐑉 𐐰𐑌𐐼 𐑊𐐵𐐲𐑉 𐐿𐐩𐑅)
//  𐐲𐑂 𐑄 𐐼𐐯𐑅𐐨𐑉𐐯𐐻  𐐰𐑊𐑁𐐰𐐺𐐯𐐻 𐐮𐑌𐑂𐐯𐑌𐐻𐐲𐐼 𐐺𐐴 𐐒𐑉𐐮𐑀𐐲𐑋 𐐏𐐲𐑍 𐐮𐑌 𐑄 𐑋𐐮𐐼 1800𐐯𐑅.

// 𐐆𐐻 𐐮𐑆 𐑌𐐪𐐻 𐐩 𐑂𐐯𐑉𐐨 𐐷𐐭𐑅𐑁𐐲𐑊 𐐯𐑌𐐿𐐬𐐼𐐮𐑍 𐑅𐐮𐑌𐑅 𐐮𐐻 𐐮𐑆 𐐲𐐺𐐵𐐻 𐐰𐑆 𐐮𐑁𐐮𐑇𐐲𐑌𐐻 𐐰𐑆 𐐺𐐩𐑅
// 16. 𐐒𐐲𐐻 𐐮𐐻 𐐮𐑆 𐐩 𐐹𐑉𐐮𐐻𐐨 𐑁𐐲𐑌 unicode 𐐻𐐯𐑅𐐻 𐑅𐐮𐑌𐑅 𐑄𐐨𐑆 𐐪𐑉 𐐸𐐴 𐐮𐑌𐐲𐑁 𐐮𐑌 𐑄
// unicode 𐑅𐐹𐐩 𐐻𐐭 𐑉𐐮𐐿𐐶𐐴𐐲𐑉 𐑅𐐲𐑉𐐲𐑀𐐩𐐻 𐐹𐐯𐑆 𐐮𐑌 𐐖𐐪𐑂𐐲𐐝𐐿𐑉𐐮𐐹𐐻.

var 𐐔𐐯𐑅𐐨𐑉𐐯𐐻 = '𐐀𐐁𐐂𐐃𐐄𐐅𐐆𐐇𐐈𐐉𐐊𐐋𐐌𐐍𐐎𐐏𐐐𐐑𐐒𐐓𐐔𐐕𐐖𐐗𐐘𐐙𐐚𐐛𐐜𐐝𐐞𐐟𐐠𐐡𐐢𐐣𐐤𐐥𐐦𐐧' +
              '𐐨𐐩𐐪𐐫𐐬𐐭𐐮𐐯𐐰𐐱𐐲𐐳𐐴𐐵𐐶𐐷𐐸𐐹𐐺𐐻𐐼𐐽𐐾𐐿𐑀𐑁𐑂𐑃𐑄𐑅𐑆𐑇𐑈𐑉𐑊𐑋𐑌𐑍𐑎𐑏';
function 𐐒𐐩𐑅𐐒𐐨(𐐤𐐲𐑋𐐺𐐲𐑉) {
  var 𐐝𐐻𐑉𐐮𐑍 = '';
  let l3 = 𐐤𐐲𐑋𐐺𐐲𐑉.toString(36).length;
  let l4 = 𐐤𐐲𐑋𐐺𐐲𐑉.toString(16).length;
  while (𐐤𐐲𐑋𐐺𐐲𐑉) {
    let i = (𐐤𐐲𐑋𐐺𐐲𐑉 % 80) << 1;
    𐐝𐐻𐑉𐐮𐑍 += 𐐔𐐯𐑅𐐨𐑉𐐯𐐻[i] + 𐐔𐐯𐑅𐐨𐑉𐐯𐐻[i + 1];
    𐐤𐐲𐑋𐐺𐐲𐑉 = (𐐤𐐲𐑋𐐺𐐲𐑉 / 80) >>> 0;
  }
  let l1 = 𐐝𐐻𐑉𐐮𐑍.length;
  let l2 = strToRaw(𐐝𐐻𐑉𐐮𐑍).length;
  console.log(`(${l1}/${l2}/${l3}/${l4})`);
  return 𐐝𐐻𐑉𐐮𐑍;
}

function strToRaw(str) {
  return unescape(encodeURIComponent(str));
}

let i = parseInt(require('crypto').randomBytes(7).toString('hex'), 16);
let j = Date.now();
console.log(`${j}-${i}`);
console.log(`${j.toString(16)}-${i.toString(16)}`);
console.log(`${j.toString(36)}-${i.toString(36)}`);
console.log(`${baseX(j)}-${baseX(i)}`);
console.log(`${𐐒𐐩𐑅𐐒𐐨(j)}-${𐐒𐐩𐑅𐐒𐐨(i)}`);
