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
    tags: ["SF", "영국"],
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
    tags: ["SF", "영국"],
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
    tags: ["SF", "영국"],
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
    tags: ["러시아"],
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
    tags: ["프랑스"],
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
    tags: ["프랑스"],
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
    tags: ["호밀밭의 파수꾼", "미국"],
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
    tags: ["호밀밭의 파수꾼", "미국"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },
  {
    id: 1009,
    category: "literature",
    textKo: "대단한 것은 아니지만 맥아 우유 속에는 비타민이 듬뿍 들어 있다. 그러니까 나는 H. V. 콜필드인 것이다. 즉, 홀든 비타민 콜필드가 내 본질이지 뭔가!",
    textEn: "It isn't much, but you get quite a lot of vitamins in the malted milk. H. V. Caulfield. Holden Vitamin Caulfield.",
    tags: ["호밀밭의 파수꾼", "미국"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },
  {
    id: 1010,
    category: "literature",
    textKo: "\"앨리는 죽었어. 오빠는 늘 그 말만 한다니까! 누가 죽거나 해서 천국에 가면 그건 실제로...\"\n\"앨리가 죽은 건 나도 알아. 내가 그것도 모르는 것 같니? 그래도 좋아할 순 있잖아? 누가 죽었다고 해서 좋아하던 것까지 그만둘 순 없지 않니? 특히 우리가 알고 있는, 살아 있는 사람보다 천 배나 좋은 사람이라면 더욱 그렇지.\"",
    textEn: "\"Allie's dead—You always say that! If someboedy's dead and everything, and in Heaven, then it isn't really—\"\n\"I know he's dead! Don't you think I know that? I can still like him, though, can't I? Just because somebody's dead, you don't just stop liking them, for God's sake—especially if they were about a thousand times nicer than the people you know that're alive and all.\"",
    tags: ["호밀밭의 파수꾼", "미국"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },
  {
    id: 1011,
    category: "literature",
    textKo: "그러나 아무 말도 하지 않고 내버려두었다. 어린애들이 황금 링을 잡으려 할 때는 그냥 내버려두고 아무 말도 해서는 안 된다. 떨어지면 떨어지는 거다. 아무 말도 해서는 안 된다.",
    textEn: "The thing with kids is, if they want to grab for the gold ring, you have to let them do it, and not say anything. If they fall off, they fall off, but it's bad if you say anything to them.",
    tags: ["호밀밭의 파수꾼", "미국"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },
  {
    id: 1012,
    category: "literature",
    textKo: "누가 제발이라는 말을 하면 난 우울해진다. 상대가 피비건 누구건 마찬가지다. 정말 그 말은 사람을 울적하게 만든다.",
    textEn: "That's depressing, when somebody says \"please\" to you. I mean if it's Pheobe or somebody. That depressed the hell out of me.",
    tags: ["호밀밭의 파수꾼", "미국"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },
  {
    id: 1013,
    category: "literature",
    textKo: "\"애들이란 달릴 때는 저희가 어디로 달리고 있는지 모르잖아? 그런 때 내가 어딘가에서 나타나 그애를 붙잡아야 하는 거야. 하루 종일 그 일만 하면 돼. 이를테면 호밀밭의 파수꾼이 되는 거야.\"",
    textEn: "\"What  I have to do, I have to catch everybody if they start to go over the cliff—I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I'd do all day. I'd just be the catcher in the rye and all.\"",
    tags: ["호밀밭의 파수꾼", "미국"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },
  {
    id: 1014,
    category: "literature",
    textKo: "\"이야기 좀 하지 않겠소?\" 이건 어린애 같은 발언이었지만 그때 내 기분은 미묘했다. \"그렇게 급해요?\"",
    textEn: "\"Don't you feel like talking for a while?\" I asked her. It was a childish thing to say, but I was feeling so damn peculiar. \"Are you in a very big hurry?\"",
    tags: ["호밀밭의 파수꾼", "미국"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },
  {
    id: 1015,
    category: "literature",
    textKo: "피투성이가 된 나를 바보 같은 구경꾼들이 내려다보는 건 원치 않았다.",
    textEn: "I didn't want a bunch of stupid rubbernecks looking at me when I was all gory.",
    tags: ["호밀밭의 파수꾼", "미국"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },
  {
    id: 1016,
    category: "literature",
    textKo: "어떤 사물들은 언제까지나 그대로 있어야 한다. 저 유리집에다 넣어 그냥 그대로 간직해야 한다. 그것이 불가능하다는 것은 알고 있지만, 그 불가능이 너무나 안타깝다. 어쨌든 나는 걸어가면서 계속 그런 생각을 했다.",
    textEn: "Cetain things they should stay the way they are. You ought to be able to stick them in one of those big glass cases and just leave them alone. I know that's impossible, but it's too bad anyway. Anyway, I kept thinking about all that while I walked.",
    tags: ["호밀밭의 파수꾼", "미국"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },
  {
    id: 1017,
    category: "literature",
    textKo: "\"앨리, 나를 사라지게 하지 마. 앨리, 나를 사라지게 하지 마. 앨리, 나를 사라지게 하지 마.\" 하고 말했다. 그래서 내가 사라지지 않고 길 건너편에 당도하자 나는 앨리에게 고맙다고 말했다.",
    textEn: "I'd say to him, \"Allie, don't let me disappear. Allie, don't let me disappear. Please, Allie.\" And then when I'd reach the other side of the street without disappearing, I'd thank him.",
    tags: ["호밀밭의 파수꾼", "미국"],
    meta: {
      title: "호밀밭의 파수꾼",
      author: "제롬 데이비드 샐린저",
      publisher: "문예출판사"
    }
  },
  {
    id: 1018,
    category: "literature",
    textKo: "반항. 파트로클레스가 죽자 아킬레우스는 신의 창조에 대항한다.",
    tags: ["프랑스"],
    meta: {
      title: "작가수첩II",
      author: "알베르 카뮈",
      publisher: "책세상"
    }
  },
  {
    id: 1019,
    category: "literature",
    textKo: "위대한 이만 알리 : \"세계는 썩은 고기다. 누구든 이 세계의 한 조각을 원하는 자는 개들과 함께 살게 될 것이다.\"",
    tags: ["프랑스"],
    meta: {
      title: "작가수첩II",
      author: "알베르 카뮈",
      publisher: "책세상"
    }
  },
  {
    id: 1020,
    category: "literature",
    textKo: "\"예술의 궁극에 있는 것은 사랑받을 수 없다.\" 그렇지만 \"우리는 모두 다 죽는다, 그러나 예술은 남는다.\"",
    tags: ["프랑스"],
    meta: {
      title: "작가수첩II",
      author: "알베르 카뮈",
      publisher: "책세상"
    }
  },
  {
    id: 1021,
    category: "literature",
    textKo: "신세계의 가치를 아는 자들에게\n예언과 더불어 이것들을 던져 버렸나니\n각 세대는 소멸하는 몽상이요\n한 사람은 새로운 탄생이기 때문이니라.",
    tags: ["미국"],
    meta: {
      title: "죽은 시인의 사회",
      author: "N. H. 클라인바움",
      publisher: "서교출판사"
    }
  },
  {
    id: 1022,
    category: "literature",
    textKo: "문제의 핵심이, 그러니까 가장 지저분한 것이 뭐냐 하면, 나란 놈은 심술궂은 인간도 아닐뿐더러 심지어 악에 받친 인간도 아니라는 사실을, 그저 괜스레 참새들이나 놀래는 주제에 그걸 자기 위안거리로 삼는 인간이라는 사실을 시시각각, 심지어 울화통이 터져 미칠 것 같은 순간에도 속으로 수치스럽게 의식하고 있었다는 점이다.",
    tags: ["러시아"],
    meta: {
      title: "지하로부터의 수기",
      author: "표트르 도스토옙스키",
      publisher: "민음사"
    }
  },
  {
    id: 1023,
    category: "literature",
    textKo: "오만한 말이여, 너는 어디로 달려가느냐,\n어디에 네 발굽 내려놓으려느냐?\n오 강대한 운명의 지배자여!",
    tags: ["러시아"],
    meta: {
      title: "청동 기마상",
      author: "알렉산드르 푸쉬킨",
      publisher: "불명"
    }
  },
  {
    id: 1024,
    category: "literature",
    textKo: "6동 1호에 기이하고 특이한 사람들만 모인 것인지, 보통 사람들이 이곳에 들어오면서 특이해진 것인지 그는 알 수 없었다.",
    tags: ["러시아"],
    meta: {
      title: "삶과 운명",
      author: "바실리 그로스만",
      publisher: "창비"
    }
  },
  {
    id: 1025,
    category: "literature",
    textKo: "\"병사가 술을 진탕 마셨다, 그러고 끝. 늙은이의 할망구가 죽었다, 정확한 묘사지. 정말 웃기고, 불쌍하고, 흥미롭고, 요컨대 인간이 무엇을 위해 사는지 알 수 없다는 거야.\"",
    tags: ["러시아"],
    meta: {
      title: "삶과 운명",
      author: "바실리 그로스만",
      publisher: "창비"
    }
  },
  {
    id: 1026,
    category: "literature",
    textKo: "옐레나 안드레예브나: 오늘은 날씨가 참 좋군요...... 덥지도 않고......\n(사이)\n보이니쯔끼: 이런 날씨에는 목을 매달기도 좋지요......",
    tags: ["러시아"],
    meta: {
      title: "바냐 아저씨",
      author: "안톤 체호프",
      publisher: "불명"
    }
  },
  {
    id: 1027,
    category: "literature",
    textKo: "\"이건 희한한데, 뭐가 이보다도 더 위대한 것이 있겠는가?\"\n\"자유가 있다.\" 하고 콩브페르가 말했다.\n이번에는 마리우스가 고개를 수그렸다. 이 단순하고 쌀쌀한 말은 강철 칼날처럼 그의 서사시적 격정의 토로를 꿰뚫었고, 그는 그 격정이 가슴속에서 스러지는 것을 느꼈다.",
    tags: ["프랑스"],
    meta: {
      title: "레 미제라블",
      author: "빅토르 위고",
      publisher: "민음사"
    }
  },
  {
    id: 1028,
    category: "literature",
    textKo: "혁명의 논리와 그 철학 사이에는 다음과 같은 차이가 있다. 즉 혁명의 논리는 필연적으로 전쟁에 도달할 수 있는 반면, 그 철학은 평화에만 귀착할 수 있다는 것.",
    tags: ["프랑스"],
    meta: {
      title: "레 미제라블",
      author: "빅토르 위고",
      publisher: "민음사"
    }
  },
  {
    id: 1029,
    category: "literature",
    textKo: "이에 따르면, 전 우주의 인구 역시 영이라는 결론이 도출된다. 따라서 당신이 때때로 마주치는 사람들은 혼란에 빠진 상상력의 산물에 불과하다.",
    tags: ["SF", "영국"],
    meta: {
      title: "은하수를 여행하는 히치하이커를 위한 안내서",
      author: "더글라스 애덤스",
      publisher: "책세상"
    }
  },
  {
    id: 1030,
    category: "literature",
    textKo: "\"당신들은 모두 미쳤어.\" 포드 프리펙트가 설명했다.\n\"당신들은 완전히 돌았어.\" 그가 시사했다.\n\"당신들은 집단으로 돌았어.\" 그가 의견을 피력했다.",
    tags: ["SF", "영국"],
    meta: {
      title: "은하수를 여행하는 히치하이커를 위한 안내서",
      author: "더글라스 애덤스",
      publisher: "책세상"
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
  {
    id: 2008,
    category: "music",
    textEn: "There's lots of questions answered and metaphysical astronomical songs",
    tags: ["Tally Hall"],
    meta: {
      title: "The Whole World and You",
      album: "Marvin's Marvelous Mechanical Museum",
      artist: "Tally Hall",
      year: 2005
    }
  },
  {
    id: 2009,
    category: "music",
    textEn: "You understand mechanical hands are the ruler of everything\nThe ruler of everything\nI'm the ruler of everything in the end",
    tags: ["Tally Hall"],
    meta: {
      title: "Ruler of Everything",
      album: "Marvin's Marvelous Mechanical Museum",
      artist: "Tally Hall",
      year: 2005
    }
  },
  {
    id: 2010,
    category: "music",
    textEn: "I've been living a lie, a metamorphical scheme",
    tags: ["Tally Hall"],
    meta: {
      title: "Ruler of Everything",
      album: "Marvin's Marvelous Mechanical Museum",
      artist: "Tally Hall",
      year: 2005
    }
  },
  {
    id: 2011,
    category: "music",
    textEn: "You practice your mannerisms into the wall\nIf this mirror were clearer I'd be standing so tall",
    tags: ["Tally Hall"],
    meta: {
      title: "Ruler of Everything",
      album: "Marvin's Marvelous Mechanical Museum",
      artist: "Tally Hall",
      year: 2005
    }
  },
  {
    id: 2012,
    category: "music",
    textEn: "Do you hear the clock stop when you reach the end?",
    tags: ["Tally Hall"],
    meta: {
      title: "Ruler of Everything",
      album: "Marvin's Marvelous Mechanical Museum",
      artist: "Tally Hall",
      year: 2005
    }
  },
  {
    id: 2013,
    category: "music",
    textEn: "But when you try to pretend to understand\nYou resemble a fool although you're only a man\nSo give it up and smile (time, time, time, time...)",
    tags: ["Tally Hall"],
    meta: {
      title: "Ruler of Everything",
      album: "Marvin's Marvelous Mechanical Museum",
      artist: "Tally Hall",
      year: 2005
    }
  },
  {
    id: 2014,
    category: "music",
    textEn: "Listening to painted whispered\nLight on top forgotten hill",
    tags: ["Tally Hall"],
    meta: {
      title: "Taken for a Ride",
      album: "Marvin's Marvelous Mechanical Museum",
      artist: "Tally Hall",
      year: 2005
    }
  },
  {
    id: 2015,
    category: "music",
    textEn: "One secondary smile to go that extra mile\nTo make me feel today, to make it go away",
    tags: ["Tally Hall"],
    meta: {
      title: "Taken for a Ride",
      album: "Marvin's Marvelous Mechanical Museum",
      artist: "Tally Hall",
      year: 2005
    }
  },
  {
    id: 2016,
    category: "music",
    textEn: "The chemistry is gone, taken for a ride\nFar away from you, no longer left inside",
    tags: ["Tally Hall"],
    meta: {
      title: "Taken for a Ride",
      album: "Marvin's Marvelous Mechanical Museum",
      artist: "Tally Hall",
      year: 2005
    }
  },
  {
    id: 2017,
    category: "music",
    textEn: "And there's something, and there's something\nNext to nothing",
    tags: ["Tally Hall"],
    meta: {
      title: "Taken for a Ride",
      album: "Marvin's Marvelous Mechanical Museum",
      artist: "Tally Hall",
      year: 2005
    }
  },
  {
    id: 2018,
    category: "music",
    textEn: "And if we cut open your heart, pour it in a cup\nDo you think it'd be enough, do you think it'd be enough\nTo fill my heart with music?",
    tags: ["Jukebox the Ghost"],
    meta: {
      title: "Under My Skin",
      album: "Let Live % Let Ghosts",
      artist: "Jukebox the Ghost",
      year: 2008
    }
  },
  {
    id: 2019,
    category: "music",
    textEn: "Like a Cheshire cat, I think that you are just a grin\nAnd I can feel you laughing under my skin\nAnd the happy palpitations are making me grin\nYou know it fills my heart with music",
    tags: ["Jukebox the Ghost"],
    meta: {
      title: "Under My Skin",
      album: "Let Live % Let Ghosts",
      artist: "Jukebox the Ghost",
      year: 2008
    }
  }, 
  {
    id: 2020,
    category: "music",
    textEn: "But you are certainly my poison of choice, sigh",
    tags: ["Jukebox the Ghost"],
    meta: {
      title: "Victoria",
      album: "Let Live % Let Ghosts",
      artist: "Jukebox the Ghost",
      year: 2008
    }
  }, 
  {
    id: 2021,
    category: "music",
    textEn: "I think I'll go down in flames\nWouldn't ask you to join me\n'Cause that would be insane\nBut you could warm your hands",
    tags: ["Jukebox the Ghost"],
    meta: {
      title: "Lighting Myself on Fire",
      album: "Let Live % Let Ghosts",
      artist: "Jukebox the Ghost",
      year: 2008
    }
  }, 
  {
    id: 2022,
    category: "music",
    textEn: "And when I drink you down\nMy heart makes a sound\nLike this",
    tags: ["Jukebox the Ghost"],
    meta: {
      title: "Victoria",
      album: "Let Live % Let Ghosts",
      artist: "Jukebox the Ghost",
      year: 2008
    }
  },
  {
    id: 2023,
    category: "music",
    textEn: "I built a little empire out of some crazy garbage\nCalled the blood of the exploited working class",
    tags: ["They Might Be Giants"],
    meta: {
      title: "Kiss Me, Son Of God",
      album: "Lincoln",
      artist: "They Might Be Giants",
      year: 1988
    }
  }, 
  {
    id: 2024,
    category: "music",
    textEn: "Now you're the only one here who can tell me if it's true\nThat you love me and I love me",
    tags: ["They Might Be Giants"],
    meta: {
      title: "Kiss Me, Son Of God",
      album: "Lincoln",
      artist: "They Might Be Giants",
      year: 1988
    }
  }, 
  {
    id: 2025,
    category: "music",
    textEn: "Now I laugh and make a fortune\nOff the same ones that I tortured\nAnd a world screams, \"Kiss me, Son of God\"",
    tags: ["They Might Be Giants"],
    meta: {
      title: "Kiss Me, Son Of God",
      album: "Lincoln",
      artist: "They Might Be Giants",
      year: 1988
    }
  }, 
  {
    id: 2026,
    category: "music",
    textEn: "D, world destruction\nOver and overture\nN, do I need apostrophe\nT, need this torture?",
    tags: ["They Might Be Giants"],
    meta: {
      title: "Don't Let's Start",
      album: "Lincoln",
      artist: "They Might Be Giants",
      year: 1988
    }
  },  
  {
    id: 2027,
    category: "music",
    textEn: "Everything sticks like a broken record\nEverything sticks until it goes away\nAnd the truth is, we don't know anything",
    tags: ["They Might Be Giants"],
    meta: {
      title: "Ana Ng",
      album: "Lincoln",
      artist: "They Might Be Giants",
      year: 1988
    }
  }, 
  {
    id: 2028,
    category: "music",
    textEn: "We can write the chapters of existence starting now, starting now\nWe'll throw it all down",
    tags: ["sElf"],
    meta: {
      title: "Dead Man",
      album: "Gizmodgery",
      artist: "Self",
      year: 2000
    }
  }, 
  {
    id: 2029,
    category: "music",
    textEn: "Behind every story, there's a quick head\nBehind every smile, there's a clown",
    tags: ["sElf"],
    meta: {
      title: "Dead Man",
      album: "Gizmodgery",
      artist: "Self",
      year: 2000
    }
  }, 
  {
    id: 2030,
    category: "music",
    textEn: "To understand it, guess I'd have to be a dead man\nTrying not to laugh out loud",
    tags: ["sElf"],
    meta: {
      title: "Dead Man",
      album: "Gizmodgery",
      artist: "Self",
      year: 2000
    }
  }, 
  {
    id: 2031,
    category: "music",
    textEn: "Letting the days go by, let the water hold me down\nLetting the days go by, water flowing underground",
    tags: ["Talking Heads"],
    meta: {
      title: "Once in a Lifetime",
      album: "Remain in Light",
      artist: "Talking Heads",
      year: 1980
    }
  }, 
  {
    id: 2032,
    category: "music",
    textEn: "Into the blue again, after the money's gone\nOnce in a lifetime, water flowing underground",
    tags: ["Talking Heads"],
    meta: {
      title: "Once in a Lifetime",
      album: "Remain in Light",
      artist: "Talking Heads",
      year: 1980
    }
  }, 
  {
    id: 2033,
    category: "music",
    textEn: "And you may ask yourself, \"Am I right, am I wrong?\"\nAnd you may say to yourself, \"My God, what have I done?\"",
    tags: ["Talking Heads"],
    meta: {
      title: "Once in a Lifetime",
      album: "Remain in Light",
      artist: "Talking Heads",
      year: 1980
    }
  }, 
  {
    id: 2034,
    category: "music",
    textEn: "Time isn't holding up, time isn't after us\nSame as it ever was, same as it ever was",
    tags: ["Talking Heads"],
    meta: {
      title: "Once in a Lifetime",
      album: "Remain in Light",
      artist: "Talking Heads",
      year: 1980
    }
  }, 
  {
    id: 2035,
    category: "music",
    textEn: "Strange but not a stranger\nI'm an ordinary guy\nBurning down the house",
    tags: ["Talking Heads"],
    meta: {
      title: "Burning Down the House",
      album: "Speaking in Tongues",
      artist: "Talking Heads",
      year: 1983
    }
  }, 
  {
    id: 2036,
    category: "music",
    textEn: "I am the son and the heir\nOf a shyness that is criminally vulgar\nI am the son and heir\nOf nothing in particular",
    tags: ["The Smiths"],
    meta: {
      title: "How Soon Is Now?",
      album: "Hatful of Hollow",
      artist: "The Smiths",
      year: 1984
    }
  }, 
  {
    id: 2037,
    category: "music",
    textEn: "When you say, \"It's gonna happen now\"\nWell, when exactly do you mean?\nSee I've already waited too long\nAnd all my hope is gone",
    tags: ["The Smiths"],
    meta: {
      title: "How Soon Is Now?",
      album: "Hatful of Hollow",
      artist: "The Smiths",
      year: 1984
    }
  }, 
  {
    id: 2038,
    category: "music",
    textEn: "Just like everybody else does",
    tags: ["The Smiths"],
    meta: {
      title: "How Soon Is Now?",
      album: "Hatful of Hollow",
      artist: "The Smiths",
      year: 1984
    }
  }, 
  {
    id: 2039,
    category: "music",
    textEn: "I'll sleep in this place with the lonely crowd\nLie in the dark, where the shadows run from themselves",
    tags: ["Cream"],
    meta: {
      title: "White Room",
      album: "Wheels of Fire",
      artist: "Cream",
      year: 1968
    }
  }, 
  {
    id: 2040,
    category: "music",
    textEn: "Here am I floating 'round my tin can\nFar above the moon\nPlanet Earth is blue\nAnd there's nothing I can do",
    tags: ["Bowie"],
    meta: {
      title: "Space Oddity",
      album: "David Bowie",
      artist: "David Bowie",
      year: 1969
    }
  }, 
  {
    id: 2041,
    category: "music",
    textEn: "It's such a burden to carry 'round\nThe vestiges of dead dreams",
    tags: ["of Montreal"],
    meta: {
      title: "Requiem for O.M.M.2",
      album: "The Sunlandic Twins",
      artist: "Of Montreal",
      year: 2005
    }
  }, 
  {
    id: 2042,
    category: "music",
    textEn: "My mind rejects the frequency\nIt's static craziness to me\nIs it a solar fever?",
    tags: ["of Montreal"],
    meta: {
      title: "A Sentence Of Sorts In Kongsvinger",
      album: "Hissing Fauna, Are You the Destroyer?",
      artist: "Of Montreal",
      year: 2007
    }
  }, 

  // 3. 게임 (Game)
  {
    id: 3001,
    category: "game",
    textKo: "* 그 모든 일이 있었음에도, 여전히 당신이다.",
    textEn: "* Despite everything, it's still you.",
    tags: ["Undertale"],
    meta: {
      title: "언더테일",
      year: 2015
    }
  },
  {
    id: 3002,
    category: "game",
    textKo: "* 너는 의지로 가득 찼다.",
    textEn: "* You are filled with DETERMINATION.",
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
  },
  {
    id: 3008,
    category: "game",
    textKo: "원시 파충류 뇌야, 고마워.",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  },
  {
    id: 3009,
    category: "game",
    textKo: "색다른 생각, 색다른 언어로 이뤄진 영혼의 바다. 너무나도 깊고, 너무나도 시끄러운 의식. 이는 섬뜩하며, 겉잡을 수조차 없으나, 관자놀이를 문지르니 한결 편안해진다. 그래, 좋다. 남은 건 오직 집중, 아주 깊은 집중 뿐이니......",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  },
  {
    id: 3010,
    category: "game",
    textKo: "[엄청난 외로움이 당신을 덮쳐온다. 세상 모두가 너를 빼놓고 무언가를 하고 있다.]",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3011,
    category: "game",
    textKo: "\"그건 경무사님의 뇌가 이데올로기에서 부유하고 있기 때문이에요. 사실상 익사하고 있죠...\"",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3012,
    category: "game",
    textKo: "\"당신이 주사위를 던질 때마다 무언가 사라지는 거예요. 다른 결말이라든가, 전혀 다른 세상이 없어지는 거죠...",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3013,
    category: "game",
    textKo: "이 친구가 곧 지옥의 기관이야. 절대로 멈추지 않지. 단지 계속해서 나빠지기만 할 뿐이라고.",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3014,
    category: "game",
    textKo: "\"그렇다면 알려드리지 않기로 했던 제 선택이 옳았군요, 그렇죠?\" 경위는 엷은 미소를 짓는다. \"어쨌든, 창백은 그렇게 무서운 것도 아니지요. 가령, 바다나 죽음, 우리가 자기 눈 뒤에서 영생을 갇혀 산다는 사실에 비하면...\"",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3015,
    category: "game",
    textKo: "\"그게 바로 이데올로기예요. 마치 보이지 않는 힘이 어디에나 존재하고, 경무사님을 이리로 저리로 밀고 당기는데, 경무사님은 그게 *있는* 줄도 모르는 거죠.\"",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3016,
    category: "game",
    textKo: "[불꽃이 렌즈에 반사되자 그의 안경은 금빛으로 물든다. 당신은 다시 한번 확신으로 가득 찬다. 이 남자는 나의 형제다.]",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3017,
    category: "game",
    textKo: "진정한 사랑은 가능하다\n오직 다음 세상의, 신세대들에게서\n우리에게는 너무 늦었다\n.\n중산층을 무너뜨려라",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3018,
    category: "game",
    textKo: "[오늘의 일시적인 위안물들: 나뉘피는 담배, 거친 농담. 상처 주기 전에 나누는 오늘의 포옹.]",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3019,
    category: "game",
    textKo: "\"포옹 대마왕이요? 그 두 단어가 어떻게 하나가 될 수 있죠?\"\n\"글쎄요, 사실 우리에겐 다른 사람의 몸을 마음대로 할 권리가 없잖아요. 그러니 남을 포옹하는 것도 정말 괴물 같은 일이라고 불릴 만하죠.\"",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3020,
    category: "game",
    textKo: "[당신은 괴짜처럼 무생물을 향해 소리치고 있다. 정답을 맞히는 데 문제가 있는 것도 당연하다.]",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3021,
    category: "game",
    textKo: "[태양은 망자에게 아무것도 해 주지 않아, 정신을 놓아버린 가망 없는 사람들에게도 마찬가지지.]",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3022,
    category: "game",
    textKo: "\"나아가자, 저 거친 창백 너머로.\"",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3023,
    category: "game",
    textKo: "그 무엇도 날 치유해줄 순 없겠지만, 그래도 웃기는 넥타이 하나는 건졌군.",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3024,
    category: "game",
    textKo: "넌 현대 과학의 속박에서 벗어나, *외계* 문화로부터 기원한 초감각적 지식의 회랑에 입성했다.",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3025,
    category: "game",
    textKo: "이미 삭고 부어버린 얼굴은 앞으로 평생을 가겠지만, 당신에게는 살아갈 나날들이 있습니다. 아직 희망은 있습니다.",
    tags: ["Disco Elysium"],
    meta: {
      title: "디스코 엘리시움",
      year: 2019
    }
  }, 
  {
    id: 3026,
    category: "game",
    textKo: "나에겐 이행해야 할 신성한 임무가 있다. 난 세계를 정화해야 한다.",
    textEn: "J'ai une mission sacrée à mener à bien. Je dois puripier le monde.",
    tags: ["OFF"],
    meta: {
      title: "OFF",
      year: 2008
    }
  },
  {
    id: 3027,
    category: "game",
    textKo: "\"멋진 경치야. 너도 그렇게 생각하지? 이게 단지 비디오 게임이라는 사실을 잊게 해준다니까.\"",
    tags: ["OFF"],
    meta: {
      title: "OFF",
      year: 2008
    }
  },
  {
    id: 3028,
    category: "game",
    textKo: "* 별이란 게 뭐야?\n* 만질 수 있는 거야?\n* 먹을 수 있는 거야?\n* 죽일 수 있는 거야?\n* ...\n* 혹시 네가 별이야?",
    textEn: "* What is a star?\n* Can you touch it?\n* Can you eat it?\n* Can you kill it?\n* ...\n* Are you a star?",
    tags: ["Undertale"],
    meta: {
      title: "언더테일",
      year: 2015
    }
  },
  {
    id: 3029,
    category: "game",
    textKo: "* 이 지옥같은 세상에서는, 단 3개의 사탕만이 허락되는 법이다...",
    textEn: "* In this hellish world, you can only take 3 pieces of candy...",
    tags: ["Undertale"],
    meta: {
      title: "언더테일",
      year: 2015
    }
  },
  {
    id: 3030,
    category: "game",
    textKo: "* 난 19살인데 벌써 내 모든 인생을 낭비했어.",
    textEn: "* I'm 19 years old and I've already wasted my entire life.",
    tags: ["Undertale"],
    meta: {
      title: "언더테일",
      year: 2015
    }
  },
  {
    id: 3031,
    category: "game",
    textKo: "* 네!? 대학에 가요?\n* 왜... 왜 그런 짓을 했대요!?",
    textEn: "* What!? He went to COLLEGE? \n* Well... why'd he have to go do THAT!?",
    tags: ["Deltarune"],
    meta: {
      title: "델타룬",
      year: 2025
    }
  }

];
