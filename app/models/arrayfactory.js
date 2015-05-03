angular
.module('hor')
.factory('arrayFactory', function(){
  var images = [
    {
      url: 'assets/img/human/AaronKoh.png',
      hof: 'Human',
      des: 'Author: Aaron Koh is a Staff Writer for the magazine PC World.'
    },
    {
      url: 'assets/img/human/Anastasia.png',
      hof: 'Human',
      des: 'Anastasia Shpagina is a 22-year old from Ukraine who looks this way without plastic surgery.'
    },
    {
      url: 'assets/img/human/Arnold.jpg',
      hof: 'Human',
      des: 'Arnold: No pain, no gain.'
    },
    {
      url: 'assets/img/human/C3P0.png',
      hof: 'Human',
      des: 'Anthony Daniels is a British Actor who portrayed C3P0.'
    },
    // {
    //   url: 'assets/img/human/DeanaFerguson.png',
    //   hof: 'Human',
    //   des: 'Author: Deana Ferguson was a major figure in the Vancouver poetry scene that formed around the Kootenay School of Writing. '
    // },
    {
      url: 'assets/img/human/Fembot.jpg',
      hof: 'Human',
      des: 'Austin Powers: Fembot Cindy is an American glamour spokesmodel and actress.'
    },
    // {
    //   url: 'assets/img/human/GeraldHopkins.png',
    //   hof: 'Human',
    //   des: 'Author: Reverend Father Gerard Manley Hopkins was an English poet, Roman Catholic convert, and a Jesuit priest, whose posthumous fame established him among the leading Victorian poets.'
    // },
    // {
    //   url: 'assets/img/human/GertudeStein1.png',
    //   hof: 'Human',
    //   des: 'Author: Gertrude Stein was an American writer of novels, poetry and plays.'
    // },
    // {
    //   url: 'assets/img/human/GertrudeStein2.png',
    //   hof: 'Human',
    //   des: 'Author: Gertrude Stein was an American writer of novels, poetry and plays.'
    // },
    {
      url: 'assets/img/human/Hiroshi.png',
      hof: 'Human',
      des: 'Professor Hiroshi Ishiguro is director of the Intelligent Robotics Laboratory, part of the Department of Systems Innovation in the Graduate School of Engineering Science at Osaka University, Japan. '
    },
    // {
    //   url: 'assets/img/human/JessicaRay.png',
    //   hof: 'Human',
    //   des: 'Author: Jessica B. Ray is American artist, poet, educator.'
    // },
    {
      url: 'assets/img/human/Justin.png',
      hof: 'Human',
      des: 'Justin Jedlica, known as The Human Ken Doll, is a Slovak American businessperson and model. He is known as the man who came to national attention for undergoing over 100 plastic surgeries.'
    },
    // {
    //   url: 'assets/img/human/MezBreeze.png',
    //   hof: 'Human',
    //   des: 'Mez Breeze is an Australian-based artist and practitioner of net.art, working primarily with code poetry, electronic literature, and digital multimedia works combining text, code, image and sound.'
    // },
    {
      url: 'assets/img/human/SarahTeasedale.png',
      hof: 'Human',
      des: 'Sara Teasdale was an American lyric poet.'
    },
    {
      url: 'assets/img/human/Sarah.png',
      hof: 'Human',
      des: 'Despite what you may have heard, Sarah Palin is not a robot.'
    },
    // {
    //   url: 'assets/img/human/ShelbyAsquith.png',
    //   hof: 'Human',
    //   des: 'Author: Shelby Marie Asquith is a 22-year old poet from Austin, TX.'
    // },
    {
      url: 'assets/img/human/Shpagina.jpg',
      hof: 'Human',
      des: 'Anastasia Shpagina is a 22-year old from Ukraine who looks this way without plastic surgery. REALLY!'
    },
    // {
    //   url: 'assets/img/human/TristanTzara.png',
    //   hof: 'Human',
    //   des: 'Author: Tristan Tzara was a French avant-garde poet, essayist and performance artist of Romanian Jewish descent.'
    // },
    {
      url: 'assets/img/human/Valeria.png',
      hof: 'Human',
      des: 'Valeria Valeryevna Lukyanova is a Moldovan-Ukrainian model and entertainer, notable for her resemblance to a Barbie doll.'
    },
    {
      url: 'assets/img/human/ValeriaLukyanova.png',
      hof: 'Human',
      des: 'Valeria Valeryevna Lukyanova is a Moldovan-Ukrainian model and entertainer, notable for her resemblance to a Barbie doll.'
    },
    {
      url: 'assets/img/robot/Aico.jpg',
      hof: 'Robot',
      des: 'Introduced at CES2015 by Toshiba, ChihiraAico is a humanoid robot made to resemble a 32-yr old woman and uses 43 pneumatic actuators for its movements, including 24 in its shoulders, arms and hands and 15 in the face. '
    },
    {
      url: 'assets/img/robot/Android.png',
      hof: 'Robot',
      des: 'Kodomoroid is a robot designed by Professor Ishiguro at Osaka University.'
    },
    // {
    //   url: 'assets/img/robot/BotPoet1.png',
    //   hof: 'Robot',
    //   des: 'Author: Robopoet is an algorithm that takes a block of text, analyses each word, and then assembles them into couplets with approximately the same rhythmic characteristics.'
    // },
    // {
    //   url: 'assets/img/robot/BotPoet2.png',
    //   hof: 'Robot',
    //   des: 'Author: Robopoet is an algorithm that takes a block of text, analyses each word, and then assembles them into couplets with approximately the same rhythmic characteristics.'
    // },
    // {
    //   url: 'assets/img/robot/BotPoet3.png',
    //   hof: 'Robot',
    //   des: 'Author: Robopoet is an algorithm that takes a block of text, analyses each word, and then assembles them into couplets with approximately the same rhythmic characteristics.'
    // },
    {
      url: 'assets/img/robot/Cameron.png',
      hof: 'Robot',
      des: 'Robot of Terminator Cameron on display at Museum Miraikan, Tokyo, Japan.'
    },
    // {
    //   url: 'assets/img/robot/ComPoet.png',
    //   hof: 'Robot',
    //   des: 'Author: ComPoet is an program that generates random poems based on natural language generation.'
    // },
    // {
    //   url: 'assets/img/robot/CyberPoet.png',
    //   hof: 'Robot',
    //   des: 'Author: CyberPoet merges multiple media sources to create random poetry.'
    // },
    {
      url: 'assets/img/robot/Femdroid.png',
      hof: 'Robot',
      des: 'Femdroid is a DARPA sponsored research robot with the ability to express emotions.'
    },
    {
      url: 'assets/img/robot/GemDK.png',
      hof: 'Robot',
      des: 'Introduced in 2011, Geminoid DK is an android that is nearly indistinguishable from a human.'
    },
    {
      url: 'assets/img/robot/GemF.png',
      hof: 'Robot',
      des: 'Android Geminoid F was a special showcase for Valentines Day by Professor Ishiguro of Osaka University.'
    },
    {
      url: 'assets/img/robot/GEMHS.jpg',
      hof: 'Robot',
      des: 'This android named Geminoid DK was made to replace Professor Henrik Scharfe. On my!'
    },
    {
      url: 'assets/img/robot/GeminoidDK.jpg',
      hof: 'Robot',
      des: 'Introduced in 2011, Geminoid DK is an android that is nearly indistinguishable from a human.'
    },
    {
      url: 'assets/img/robot/GooglePoet.png',
      hof: 'Robot',
      des: 'Author: Google predictive search generated poetry.'
    },
    {
      url: 'assets/img/robot/Hiroshi.png',
      hof: 'Robot',
      des: 'Android copy of Professor Ishiguro, famous roboticist at Osaka University.'
    },
    {
      url: 'assets/img/robot/JanusNode.png',
      hof: 'Robot',
      des: 'Author: User-configurable rule-based text generator.'
    },
    // {
    //   url: 'assets/img/robot/JanusNode2.png',
    //   hof: 'Robot',
    //   des: 'Author: User-configurable rule-based text generator.'
    // },
    {
      url: 'assets/img/robot/Q1.jpg',
      hof: 'Robot',
      des: 'The Repliee Q1 actroid is a type of android with strong visual human-likeness developed by Osaka University and manufactured by Kokoro Company Ltd.'
    },
    // {
    //   url: 'assets/img/robot/RoboPoet1.png',
    //   hof: 'Robot',
    //   des: 'Author: Robopoet is an algorithm that takes a block of text, analyses each word, and then assembles them into couplets with approximately the same rhythmic characteristics.'
    // },
    // {
    //   url: 'assets/img/robot/RoboPoet2.png',
    //   hof: 'Robot',
    //   des: 'Author: Robopoet is an algorithm that takes a block of text, analyses each word, and then assembles them into couplets with approximately the same rhythmic characteristics.'
    // },
    {
      url: 'assets/img/robot/RoboPoet3.png',
      hof: 'Robot',
      des: 'Author: Robopoet is an algorithm that takes a block of text, analyses each word, and then assembles them into couplets with approximately the same rhythmic characteristics.'
    },
    {
      url: 'assets/img/robot/Roxxy.png',
      hof: 'Robot',
      des: 'Roxxxy is a full-sized interactive android built by the company TrueCompanion.'
    },
    {
      url: 'assets/img/robot/T2.jpg',
      hof: 'Robot',
      des: 'Terminator: a animatron robot at Universal Studios in Los Angeles.'
    },
    {
      url: 'assets/img/robot/Vaudeville.jpg',
      hof: 'Robot',
      des: 'Geminoid Vaudeville is an android robot created at the Intelligent Robotics Laboratory in Tokyo, Japan.'
    },
    {
      url: 'assets/img/robot/yangyang.jpg',
      hof: 'Robot',
      des: 'YangYang is a life-size humanoid robot modeled after Sarah Palin and able to exhibit human facial expressions.'
    }
  ]

  images = _.shuffle(images)
  images = _.sample(images, 5)

  return images
});
