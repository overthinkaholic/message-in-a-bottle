/**
 * 무작위 텍스트 생성기용 데이터베이스 파일 (data.js)
 * 각 항목은 카테고리(literature, music, game)와 해당 정보, 태그 목록을 포함합니다.
 * 번역본 지원을 위해 textKo와 textEn을 나누어 저장합니다.
 */

const TEXT_DATA = [
  // 1. 문학 (Literature)
  {
    id: 101,
    category: "literature",
    textKo: "그는 단지 자신이 존재한다는 사실만으로도 세상이 조금 더 나아졌다고 믿고 싶었다.",
    tags: ["최인훈", "광장"],
    meta: {
      title: "광장",
      author: "최인훈",
      publisher: "문학과지성사"
    }
  },
  {
    id: 102,
    category: "literature",
    textKo: "새는 알에서 나오려고 투쟁한다. 알은 세계다. 태어나려는 자는 하나의 세계를 깨뜨려야 한다.",
    textEn: "The bird fights its way out of the egg. The egg is the world. Who would be born must first destroy a world.",
    tags: ["헤르만 헤세", "데미안"],
    meta: {
      title: "데미안",
      author: "헤르만 헤세",
      publisher: "민음사"
    }
  },
  {
    id: 103,
    category: "literature",
    textKo: "날개야 다시 돋아라. 날자. 날자. 날자. 한 번만 더 날자꾸나. 한 번만 더 날아 보자꾸나.",
    tags: ["이상", "날개"],
    meta: {
      title: "날개",
      author: "이상",
      publisher: "문학과지성사"
    }
  },
  {
    id: 104,
    category: "literature",
    textKo: "죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를, 잎새에 이는 바람에도 나는 괴로워했다.",
    tags: ["윤동주", "하늘과 바람과 별과 시"],
    meta: {
      title: "하늘과 바람과 별과 시",
      author: "윤동주",
      publisher: "정음사"
    }
  },
  {
    id: 105,
    category: "literature",
    textKo: "빅 브라더가 당신을 지켜보고 있다.",
    textEn: "Big Brother is watching you.",
    tags: ["조지 오웰", "1984"],
    meta: {
      title: "1984",
      author: "조지 오웰",
      publisher: "민음사"
    }
  },
  {
    id: 106,
    category: "literature",
    textKo: "인간은 파멸할지언정 패배하지는 않는다.",
    textEn: "A man can be destroyed but not defeated.",
    tags: ["어네스트 헤밍웨이", "노인과 바다"],
    meta: {
      title: "노인과 바다",
      author: "어네스트 헤밍웨이",
      publisher: "민음사"
    }
  },
  {
    id: 107,
    category: "literature",
    textKo: "누군가를 사랑한다는 것은, 우리의 인생 과업 중 가장 어려운 일일 것이다.",
    textEn: "To love is good, too: love is difficult.",
    tags: ["라이너 마리아 릴케", "말테의 수기"],
    meta: {
      title: "말테의 수기",
      author: "라이너 마리아 릴케",
      publisher: "민음사"
    }
  },

  // 2. 음악 (Music)
  {
    id: 201,
    category: "music",
    textKo: "우리는 차가운 밤을 지나 함께 타오를 테니까.",
    tags: ["실리카겔", "NO PAIN"],
    meta: {
      title: "NO PAIN",
      album: "NO PAIN",
      artist: "실리카겔",
      year: 2022
    }
  },
  {
    id: 202,
    category: "music",
    textKo: "언젠가 세상은 영화가 끝나듯 멈추겠지만, 내 마음의 사랑은 결코 끝나지 않으리.",
    tags: ["신해철", "민물장어의 꿈"],
    meta: {
      title: "민물장어의 꿈",
      album: "락 & 樂",
      artist: "신해철",
      year: 1999
    }
  },
  {
    id: 203,
    category: "music",
    textKo: "너의 목소리가 들려. 아무리 애를 쓰고 막아보려 해도 너의 목소리가 들려.",
    tags: ["델리스파이스", "차우차우"],
    meta: {
      title: "차우차우",
      album: "Deli Spice",
      artist: "델리스파이스",
      year: 1997
    }
  },
  {
    id: 204,
    category: "music",
    textKo: "언젠간 가겠지 푸르른 이 청춘, 지고 또 피는 꽃잎처럼.",
    tags: ["산울림", "청춘"],
    meta: {
      title: "청춘",
      album: "산울림 7집",
      artist: "산울림",
      year: 1981
    }
  },
  {
    id: 205,
    category: "music",
    textKo: "분노한 채 과거를 뒤돌아보지 말라고, 네가 말하는 걸 들었어.",
    textEn: "Don't look back in anger, I heard you say.",
    tags: ["Oasis", "Don't Look Back In Anger"],
    meta: {
      title: "Don't Look Back In Anger",
      album: "(What's the Story) Morning Glory?",
      artist: "Oasis",
      year: 1995
    }
  },
  {
    id: 206,
    category: "music",
    textKo: "우리는 챔피언이야, 친구들. 그리고 끝까지 계속 싸워나갈 거야.",
    textEn: "We are the champions, my friends, and we'll keep on fighting till the end.",
    tags: ["Queen", "We Are The Champions"],
    meta: {
      title: "We Are The Champions",
      album: "News of the World",
      artist: "Queen",
      year: 1977
    }
  },
  {
    id: 207,
    category: "music",
    textKo: "주저하는 연인들을 위해, 아름다운 기억만을 남겨두고 싶어.",
    tags: ["잔나비", "주저하는 연인들을 위해"],
    meta: {
      title: "주저하는 연인들을 위해",
      album: "전설",
      artist: "잔나비",
      year: 2019
    }
  },

  // 3. 게임 (Game)
  {
    id: 301,
    category: "game",
    textKo: "바람이 불고 있다... 살아야겠다.",
    tags: ["젤다의 전설"],
    meta: {
      title: "젤다의 전설 브레스 오브 더 와일드",
      year: 2017
    }
  },
  {
    id: 302,
    category: "game",
    textKo: "나도 전에는 너처럼 모험가였지, 무릎에 화살을 맞기 전까지는 말이야.",
    textEn: "I used to be an adventurer like you, then I took an arrow in the knee.",
    tags: ["스카이림"],
    meta: {
      title: "엘더스크롤 V: 스카이림",
      year: 2011
    }
  },
  {
    id: 303,
    category: "game",
    textKo: "케이크는 거짓말이야.",
    textEn: "The cake is a lie.",
    tags: ["포탈"],
    meta: {
      title: "포탈 (Portal)",
      year: 2007
    }
  },
  {
    id: 304,
    category: "game",
    textKo: "태양 만세!",
    textEn: "Praise the Sun!",
    tags: ["다크 소울"],
    meta: {
      title: "다크 소울 (Dark Souls)",
      year: 2011
    }
  },
  {
    id: 305,
    category: "game",
    textKo: "마음 속에 굳은 의지가 가득해졌다.",
    textEn: "You are filled with determination.",
    tags: ["언더테일"],
    meta: {
      title: "언더테일 (Undertale)",
      year: 2015
    }
  },
  {
    id: 306,
    category: "game",
    textKo: "전쟁... 전쟁은 변하지 않는다.",
    textEn: "War... war never changes.",
    tags: ["폴아웃"],
    meta: {
      title: "폴아웃 (Fallout)",
      year: 1997
    }
  },
  {
    id: 307,
    category: "game",
    textKo: "인간을 심판하는 것은 인간의 법률이지만, 나를 인도하는 것은 나의 소명이다.",
    textEn: "It is the laws of men that judge, but it is my duty that guides.",
    tags: ["어쌔신 크리드"],
    meta: {
      title: "어쌔신 크리드 2",
      year: 2009
    }
  }
];
