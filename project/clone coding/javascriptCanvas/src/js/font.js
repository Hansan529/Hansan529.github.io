let cF = new FontFace(
  "RixInooAriDuriR",
  "url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/RixInooAriDuriR.woff2)"
);

let cF2 = new FontFace(
  "KOTRAHOPE",
  "url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2)"
);

let cF3 = new FontFace(
  "GangwonEduSaeeum_OTFMediumA",
  "url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduSaeeum_OTFMediumA.woff)"
);

let cF4 = new FontFace(
  "SDSamliphopangche_Outline",
  "url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff)"
);

document.fonts.add(cF);
document.fonts.add(cF2);
document.fonts.add(cF3);
document.fonts.add(cF4);

// font_file.load().then(
//   () => {
//     // 글꼴이 성공적으로 로드되었습니다!
//     mycanvas.width = 650;
//     mycanvas.height = 100;
//     var ctx = mycanvas.getContext("2d");

//     ctx.font = "bold 36px myfont";
//     ctx.fillText("Bitter font loaded", 20, 50);
//   },
//   (err) => {
//     console.error(err);
//   }
// );
