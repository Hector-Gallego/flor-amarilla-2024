document.addEventListener("DOMContentLoaded", function() {
  var audio = document.querySelector("audio");
  var lyrics = document.querySelector("#lyrics");

  var lyricsData = [
    { text: "Por un tiempo fue difícil", time: 5 },
    { text: "pero últimamente he estado mejor", time: 8 },
    { text: "que los últimos 4 fríos diciembres que recuerdo", time: 12 },
    { text: "y veo a mi familia cada mes", time: 19 },
    { text: "encontré una chica que mis padres aman", time: 22 },
    { text: "ella vendrá a pasar la noche y creo que lo tengo todo", time: 26 },
    { text: "y agradezco a Dios cada día", time: 33 },
    { text: "por la chica que me envió", time: 35 },
    { text: "Pero sé que las cosas que me da, me las puede quitar", time: 40 },
    { text: "Y te abrazo cada noche", time: 46 },
    { text: "es una sensación a la que quiero acostumbrarme", time: 50 },
    { text: "pero no hay hombre más aterrorizado", time: 55 },
    { text: "que el hombre que corre el riesgo de perderte", time: 59 },
    { text: "oh, espero no perderte", time: 67 },
    { text: "por favor, quédate", time: 73 },
    { text: "te quiero, te necesito. Oh Dios, no te lleves", time: 77 },
    { text: "estas cosas hermosas que tengo", time: 83 },
    { text: "por favor, quédate", time: 86 },
    { text: "te quiero, te necesito. Oh Dios, no te lleves", time: 89 },
    { text: "estas cosas hermosas que tengo", time: 97 },
    { text: "por favor, no te lleves", time: 107 },
    { text: "recuperé mi razón, me siento cuerdo", time: 112 },
    { text: "ha pasado un tiempo, pero estoy encontrando mi fe", time: 116 },
    { text: "si todo va bien y es grandioso", time: 119 },
    { text: "¿por qué me siento esperando a que se vaya?", time: 121 },
    { text: "oh, déjame decirte, sé que tengo lo suficiente", time: 125 },
    { text: "tengo paz, tengo amor", time: 129 },
    { text: "pero estoy despierto por la noche pensando que podría perderlo todo", time: 133 },
    { text: "por favor, quédate", time: 140 },
    { text: "te quiero, te necesito. Oh Dios, no te lleves", time: 145 },
    { text: "estas cosas hermosas que tengo", time: 152 },
    { text: "por favor, quédate", time: 162 },
    { text: "te quiero, te necesito. Oh Dios, necesito", time: 166 },
    { text: "estas cosas hermosas que tengo", time: 173 },
    { text: "Gracias por ser parte de mi vida, Te amo mucho, Kelly Haideé ❤. Con cariño, Héctor Gallego", time: 176 },
  ];

  audio.addEventListener("loadeddata", function() {
    audio.play(); // Reproduce el audio una vez que esté cargado
  });

  audio.addEventListener("timeupdate", updateLyrics);

  function updateLyrics() {
    var time = Math.floor(audio.currentTime);
  
    var currentLine = lyricsData.find(
      (line) => time >= line.time && time < line.time + 5
    );

    if (currentLine) {
      lyrics.style.opacity = 1;
      lyrics.innerHTML = currentLine.text;
    } else {
      lyrics.style.opacity = 0; 
    }
  }
});
