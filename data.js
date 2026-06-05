/**
 * 무작위 텍스트 생성기용 데이터베이스 파일 (data.js)
 * 각 항목은 카테고리(literature, music, game)와 해당 정보, 태그 목록을 포함합니다.
 * 번역본 지원을 위해 textKo와 textEn을 나누어 저장합니다.
 */

const TEXT_DATA = [
  // 1. 문학 (Literature)
  {
    id: 1001,
    category: "literature",
    textKo: "겁먹지 마시오",
    textEn: "DON'T PANIC",
    tags: ["SF", "영국 문학"],
    meta: {
      title: "은하수를 여행하는 히치하이커를 위한 안내서",
      author: "더글라스 애덤스",
      publisher: "책세상"
    }
  },
  {
    id: 1002,
    category: "literature",
    textKo: "안녕, 그리고 물고기는 고마웠어요.",
    textEn: "So long, and thanks for all the fish.",
    tags: ["SF", "영국 문학"],
    meta: {
      title: "은하수를 여행하는 히치하이커를 위한 안내서",
      author: "더글라스 애덤스",
      publisher: "책세상"
    }
  },
  {
    id: 1003,
    category: "literature",
    textKo: "그냥 지금 포기하고 미쳐버리면 시간이 훨씬 절약되지 않을까?",
    textEn: "Would it save you a lot of time if I just gave up and went mad now?",
    tags: ["SF", "영국 문학"],
    meta: {
      title: "은하수를 여행하는 히치하이커를 위한 안내서",
      author: "더글라스 애덤스",
      publisher: "책세상"
    }
  },
  {
    id: 1004,
    category: "literature",
    textKo: "\"그럼 또 어때!\" 나는 혼자 이렇게 대답하며 소리쳤다. \"이제는 어차피 죄다 엉망진창인걸!\"",
    tags: ["러시아 문학"],
    meta: {
      title: "지하로부터의 수기",
      author: "표도르 도스토옙스키",
      publisher: "민음사"
    }
  },
  {
    id: 1005,
    category: "literature",
    textKo: "정말로 진정한 철학적 문제는 오직 하나, 그것은 바로 자살이다.",
    textEn: "Il n'y a qu'un seul problème philosophique vraiment sérieux : c'est le suicide.",
    tags: ["프랑스 문학"],
    meta: {
      title: "시지프 신화",
      author: "알베르 카뮈",
      publisher: "열린책들"
    }
  },
  {
    id: 1006,
    category: "literature",
    textKo: "결론인즉, 역사는 오직 정신적 승리의 타도라는 수단을 통해서만 그 목표를 찾을 수 있다. 우리는 그럴 수밖에 없는지라......",
    tags: ["프랑스 문학"],
    meta: {
      title: "작가수첩II",
      author: "알베르 카뮈",
      publisher: "책세상"
    }
  },
  {
    id: 1007,
    category: "literature",
    textKo: "그 때문인지 나는 센트럴 파크의 남단에 있는 연못을 생각하고 있었다. 내가 집에 돌아갈 무렵에는 그 연못이 얼어붙어 있지나 않을까. 만일 얼어붙었다면 오리들은 어디로 갔을까.",
    textEn: "I was wondering if it would be frozen over when I got home, and if it was, where did the ducks go. I was wondering where the ducks went when the lagoon got all icy and frozen over.",
    tags: ["미국 문학"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },
  {
    id: 1008,
    category: "literature",
    textKo: "우스운 이야기다. 누구에게든 아무 말 하지 않는 것이 좋다. 말을 하면 모든 인간이 그리워지기 시작하니까.",
    textEn: "It's funny. Don't ever tell anybody anything. If you do, you start missing everybody.",
    tags: ["미국 문학"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },

  // 2. 음악 (Music)
  {
    id: 2001,
    category: "music",
    textEn: "I'm your only friend\nI'm not your only friend\nBut I'm a little glowing friend\nBut really I'm not actually your friend\nBut I am",
    tags: ["They Might Be Giants"],
    meta: {
      title: "Birdhouse in Your Soul",
      album: "Flood",
      artist: "They Might Be Giants",
      year: 1989
    }
  },
  {
    id: 2002,
    category: "music",
    textEn: "Make a little birdhouse in your soul",
    tags: ["They Might Be Giants"],
    meta: {
      title: "Birdhouse in Your Soul",
      album: "Flood",
      artist: "They Might Be Giants",
      year: 1989
    }
  },
  {
    id: 2003,
    category: "music",
    textEn: "Make a hole with a gun perpendicular\nTo the name of this town in a desktop globe",
    tags: ["They Might Be Giants"],
    meta: {
      title: "Ana Ng",
      album: "Lincoln",
      artist: "They Might Be Giants",
      year: 1988
    }
  },
  {
    id: 2004,
    category: "music",
    textEn: "And her voice is a backwards record\nIt's like a whirlpool and it never ends",
    tags: ["They Might Be Giants"],
    meta: {
      title: "Ana Ng",
      album: "Lincoln",
      artist: "They Might Be Giants",
      year: 1988
    }
  },
  {
    id: 2005,
    category: "music",
    textEn: "Ana Ng and I are getting old\nAnd we still haven't walked\nIn the glow of each other's majestic presence",
    tags: ["They Might Be Giants"],
    meta: {
      title: "Ana Ng",
      album: "Lincoln",
      artist: "They Might Be Giants",
      year: 1988
    }
  },
  {
    id: 2006,
    category: "music",
    textEn: "In the gallows or the ghetto\nIn the town or the meadow\nIn the billows even over the sun\nEvery end of the time is another begun",
    tags: ["Tally Hall"],
    meta: {
      title: "Ruler of Everything",
      album: "Marvin's Marvelous Mechanical Museum",
      artist: "Tally Hall",
      year: 2005
    }
  },
  {
    id: 2007,
    category: "music",
    textEn: "Everybody likes to get taken for turns\nTo see how bright the fire inside of us burns\nAnd everybody wants to get evil tonight\nBut all good devils masquerade under the light",
    tags: ["Tally Hall"],
    meta: {
      title: "Turn the Lights Off",
      album: "Good & Evil",
      artist: "Tally Hall",
      year: 2011
    }
  },

  // 3. 게임 (Game)
  {
    id: 3001,
    category: "game",
    textKo: "그 모든 일이 있었음에도, 여전히 당신이다.",
    textEn: "Despite everything, it's still you.",
    tags: ["Undertale"],
    meta: {
      title: "언더테일",
      year: 2015
    }
  },
  {
    id: 3002,
    category: "game",
    textKo: "너는 의지로 가득 찼다.",
    textEn: "You are filled with DETERMINATION.",
    tags: ["Undertale"],
    meta: {
      title: "언더테일",
      year: 2015
    }
  },
  {
    id: 3003,
    category: "game",
    textKo: "누구나 노력만 하면 훌륭한 사람이 될 수 있어!",
    textEn: "EVERYONE CAN BE A GREAT PERSON IF THEY TRY!",
    tags: ["Undertale"],
    meta: {
      title: "언더테일",
      year: 2015
    }
  },
  {
    id: 3004,
    category: "game",
    textKo: "난 더 나아지고 싶은 게 아냐. 더 나빠졌으면 좋겠어.",
    textEn: "\"I don't want to get better, I want to get worse,\"",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  },
  {
    id: 3005,
    category: "game",
    textKo: "\"모든 사상과 정치체제가 이 도시에선 실패했지만, 그럼에도 전 이 도시를 사랑합니다. 최소한 당신이 그런 만큼은 말입니다.\"",
    textEn: "\"Every school of thought and government has failed in this city — but I love it nonetheless. It belongs to me as much as it belongs to you.\"",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  },
  {
    id: 3006,
    category: "game",
    textKo: "\"그럼 우린 대체 뭘 하고 있는 거지? 모든 걸 현상 유지만 하면서 말이야.\"",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  },
  {
    id: 3007,
    category: "game",
    textKo: "[사람들은 아름답습니다. 마치 조각상처럼. 그들 스스로가 자신의 패러디이자 비극입니다. 피조물의 민주적 군상이지요...]",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }

];
