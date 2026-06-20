const profiles = {
  INTJ: {
    code: "INTJ",
    name: "黑曜策酿家",
    symbol: "♛",
    image: window.profileAssets.INTJ,
    headline: "你像一杯结构清晰、余味克制的深烘手冲，安静，但极有判断力。",
    description: "你习惯先看全局，再决定是否出手。你不爱无效热闹，更擅长用准确、稳固、长期有效的方式推进事情。在本命啡常的叙事里，你代表的是理性、审美和掌控感并存的精品咖啡人格。",
    drink: "黑曜拼配手冲",
    social: "少量高质量连接",
    flavor: "深烘、坚果、可可、克制回甘",
    accent: "#5b3424"
  },
  INTP: {
    code: "INTP",
    name: "冷萃研究员",
    symbol: "⚗",
    image: window.profileAssets.INTP,
    headline: "你会反复拆解一杯咖啡背后的逻辑，也会认真琢磨生活里所有隐藏机制。",
    description: "你不喜欢表面化结论，真正吸引你的是结构、原理和那些别人没看见的连接点。你的人格很适合被塑造成项目中的风味实验者和产品共创者，理性里带一点可爱的好奇心。",
    drink: "慢萃冷泡咖啡",
    social: "安静观察型社交",
    flavor: "清透、层次、理性、后调悠长",
    accent: "#7a553e"
  },
  ENTJ: {
    code: "ENTJ",
    name: "浓缩统筹官",
    symbol: "♚",
    image: window.profileAssets.ENTJ,
    headline: "你像一杯醒目的双份浓缩，出场就有方向感，也天然具备组织气场。",
    description: "你看事情常常先看效率、结构和结果，一旦确认目标，就会快速整合资源推进落地。放进本命啡常的语境里，你是那种会把灵感真正变成体系的人，是团队与门店感最强的一型。",
    drink: "双份意式浓缩",
    social: "目标驱动型链接",
    flavor: "强烈、直接、厚实、干净收口",
    accent: "#8a4a26"
  },
  ENTP: {
    code: "ENTP",
    name: "风味发明家",
    symbol: "✦",
    image: window.profileAssets.ENTP,
    headline: "你会把灵感当作日常饮品，越新鲜、越反转、越能激发你的兴奋感。",
    description: "你不满足于按部就班，你更喜欢翻新规则、碰撞想法、把寻常体验改造成更有记忆点的表达。对本命啡常来说，你代表的是创意联名、话题感和产品叙事里的突破口。",
    drink: "创意特调风味咖啡",
    social: "点子点燃型社交",
    flavor: "跳跃、活泼、明亮、反差感",
    accent: "#a66b3d"
  },
  INFJ: {
    code: "INFJ",
    name: "月光调香师",
    symbol: "☾",
    image: window.profileAssets.INFJ,
    headline: "你像一杯在夜里慢慢展开香气的咖啡，柔和却有记忆点，细腻且坚定。",
    description: "你擅长捕捉情绪和氛围，也愿意在理解别人之后再给出自己的判断。你的结果很适合用来承接项目里关于情绪价值、仪式感和陪伴型消费的表达。",
    drink: "花香拿铁",
    social: "深度共鸣型关系",
    flavor: "花香、温柔、层次感、慢热",
    accent: "#9a5c45"
  },
  INFP: {
    code: "INFP",
    name: "云朵手冲师",
    symbol: "❀",
    image: window.profileAssets.INFP,
    headline: "你像一杯带有故事感的柔和手冲，轻盈、真诚，也保留着自己的小宇宙。",
    description: "你会本能地靠近那些有温度、有审美、有个人表达感的事物。你不喜欢被粗暴定义，更愿意在自由和安静中慢慢确认自己喜欢什么。你很适合被写成品牌中的梦感人格原型。",
    drink: "奶油花果手冲",
    social: "温柔筛选型靠近",
    flavor: "柔顺、花果、轻盈、绵长",
    accent: "#9f7158"
  },
  ENFJ: {
    code: "ENFJ",
    name: "暖场主理人",
    symbol: "☼",
    image: window.profileAssets.ENFJ,
    headline: "你像一杯端上来就让气氛变柔软的招牌奶咖，稳定、有温度，也有带动性。",
    description: "你常常不是只在表达自己，而是在自然地照顾场域、观察他人和维持连接。你的人格很适合成为项目中最有陪伴感、最有主理人气质的一型。",
    drink: "暖糖丝绒拿铁",
    social: "主动照顾型社交",
    flavor: "温暖、圆润、顺滑、亲和",
    accent: "#a56a42"
  },
  ENFP: {
    code: "ENFP",
    name: "气泡寻味客",
    symbol: "☄",
    image: window.profileAssets.ENFP,
    headline: "你像一杯带气泡感的新奇特调，总能在熟悉生活里找出值得兴奋的入口。",
    description: "你对新鲜感、可能性和情绪流动非常敏锐，也更容易被有趣的人、故事和体验点燃。对于本命啡常来说，你是把品牌做出分享欲和传播欲的天然载体。",
    drink: "柑橘气泡咖啡",
    social: "高感染力共振",
    flavor: "清亮、跳跃、果感、扩散感",
    accent: "#bb7a43"
  },
  ISTJ: {
    code: "ISTJ",
    name: "标准烘焙官",
    symbol: "⌘",
    image: window.profileAssets.ISTJ,
    headline: "你像一杯稳定到几乎不会失手的经典配方，可靠、克制，而且值得长期信赖。",
    description: "你偏爱清晰规则和明确标准，也愿意用持续、扎实的方式把事情做对做好。你在项目叙事里非常适合承担“品质感”和“可信赖”这两个关键词。",
    drink: "经典拼配美式",
    social: "稳健低噪型配合",
    flavor: "稳定、平衡、烘烤感、可信赖",
    accent: "#78503b"
  },
  ISFJ: {
    code: "ISFJ",
    name: "温柔照料师",
    symbol: "♡",
    image: window.profileAssets.ISFJ,
    headline: "你像一杯总会被人默默记住的温奶咖，不喧哗，却让人有被安放的感觉。",
    description: "你很在意他人的舒适度和细节体验，也常常用安静而稳定的方式完成照顾。这样的气质很适合被写进本命啡常的陪伴场景和日常复购逻辑里。",
    drink: "香草暖奶咖",
    social: "体贴回应型关系",
    flavor: "柔和、奶香、安心、包裹感",
    accent: "#98654a"
  },
  ESTJ: {
    code: "ESTJ",
    name: "门店指挥官",
    symbol: "⚑",
    image: window.profileAssets.ESTJ,
    headline: "你像一套高峰期也不会乱掉的门店系统，利落、清楚、执行到位。",
    description: "你做事讲秩序，也擅长把模糊状态整理成可执行步骤。你在团队里常常是让人放心的那个角色，能把效率和稳定感真正落到地面。",
    drink: "高效双萃美式",
    social: "组织协调型推进",
    flavor: "干脆、醒神、稳定、执行力",
    accent: "#8a5738"
  },
  ESFJ: {
    code: "ESFJ",
    name: "人气招待官",
    symbol: "❥",
    image: window.profileAssets.ESFJ,
    headline: "你像一杯人人看得懂、也愿意靠近的热门奶咖，明亮、友好，很有亲近感。",
    description: "你会主动让别人舒服，也很懂得如何在具体互动里制造被重视的感觉。对于品牌来说，这是一种非常适合承接社交场景和用户关系经营的人格力量。",
    drink: "焦糖欢迎拿铁",
    social: "高亲和型互动",
    flavor: "甜润、热情、顺口、易亲近",
    accent: "#bf7e4e"
  },
  ISTP: {
    code: "ISTP",
    name: "萃取工匠",
    symbol: "⚙",
    image: window.profileAssets.ISTP,
    headline: "你像一杯靠工艺赢人的萃取作品，干净、精准，而且有一种不动声色的厉害。",
    description: "你擅长边观察边动手，对流程、工具和真实反馈异常敏锐。你不一定高调表达，但往往能在关键细节里做出最有效的调整。",
    drink: "匠作手冲浓萃",
    social: "轻社交高操作感",
    flavor: "精确、利落、木质感、技术派",
    accent: "#7a4f35"
  },
  ISFP: {
    code: "ISFP",
    name: "拿铁艺术家",
    symbol: "❦",
    image: window.profileAssets.ISFP,
    headline: "你像一杯把奶泡、纹理和氛围都做得刚刚好的拿铁，柔和却很有审美坚持。",
    description: "你对视觉、触感和当下体验的敏感度很高，也更愿意用作品和氛围表达自己。你的结果特别适合对接本命啡常项目里关于周边、审美消费和生活方式的部分。",
    drink: "丝绒拉花拿铁",
    social: "舒适感优先的靠近",
    flavor: "绵密、奶感、审美、松弛",
    accent: "#b47449"
  },
  ESTP: {
    code: "ESTP",
    name: "城市快闪客",
    symbol: "⚡",
    image: window.profileAssets.ESTP,
    headline: "你像一杯在街头第一口就能把人叫醒的冷感咖啡，干脆、灵活，而且有即时吸引力。",
    description: "你反应快，行动力强，不太喜欢把生活过得太迟疑。你偏爱真实、直接、立刻见效的体验，很适合和快闪、联名、线下互动这类高动能场景绑定。",
    drink: "冰镇闪击特调",
    social: "现场感带动型互动",
    flavor: "冰爽、迅捷、刺激、行动派",
    accent: "#9a5834"
  },
  ESFP: {
    code: "ESFP",
    name: "甜感气氛组",
    symbol: "✶",
    image: window.profileAssets.ESFP,
    headline: "你像一杯自带分享欲的甜感咖啡，出场就有画面，也最容易让人心情变好。",
    description: "你很擅长让场面活起来，也更懂得如何把一件事做得有记忆、有温度、有即时快乐。对品牌来说，你是最有社交传播力和内容表现力的一型。",
    drink: "奶油可可摩卡",
    social: "氛围点亮型连接",
    flavor: "甜感、轻松、表现力、即刻快乐",
    accent: "#cf8752"
  }
};

const questions = [
  {
    dimension: "能量取向",
    title: "刚到一个陌生但气氛不错的咖啡活动现场，你通常会怎么开始？",
    options: [
      { label: "我会先主动认识几个人", body: "互动越快，我越容易进入状态。", delta: { EI: 2 } },
      { label: "如果别人先开口，我会很自然接上", body: "我不排斥社交，只是不一定抢先。", delta: { EI: 1 } },
      { label: "我会先安静观察一会儿", body: "确认气氛舒服之后，我才更想加入。", delta: { EI: -1 } },
      { label: "我更想先找个角落自己熟悉环境", body: "一个人缓冲一下会让我更自在。", delta: { EI: -2 } }
    ]
  },
  {
    dimension: "能量取向",
    title: "一整周都很忙，终于到了周末，你最想用什么方式恢复状态？",
    options: [
      { label: "约朋友出门，换个热闹场景", body: "外界互动会让我重新充上电。", delta: { EI: 2 } },
      { label: "找一两个人轻松见面喝杯咖啡", body: "有陪伴但不过载，是刚好的放松。", delta: { EI: 1 } },
      { label: "自己待着，慢慢做点喜欢的小事", body: "安静会让我恢复得更稳。", delta: { EI: -1 } },
      { label: "彻底断联半天，先别被任何人打扰", body: "我需要完整的独处才能回血。", delta: { EI: -2 } }
    ]
  },
  {
    dimension: "能量取向",
    title: "在新认识的小组里，你通常更像哪一类人？",
    options: [
      { label: "那个先把气氛带起来的人", body: "只要感觉对，我会自然点亮现场。", delta: { EI: 2 } },
      { label: "那个很快就能聊起来的人", body: "我适应不算慢，也乐于参与。", delta: { EI: 1 } },
      { label: "那个先听、先看、再慢慢加入的人", body: "我需要先感受一下整体氛围。", delta: { EI: -1 } },
      { label: "那个存在感不高但观察很完整的人", body: "我通常会先在心里把场域读清楚。", delta: { EI: -2 } }
    ]
  },
  {
    dimension: "能量取向",
    title: "如果你要发起一场和咖啡有关的小活动，你更享受哪个环节？",
    options: [
      { label: "在现场和大家不断互动", body: "实时反馈会让我越做越兴奋。", delta: { EI: 2 } },
      { label: "把朋友们都串起来，让场子顺起来", body: "我喜欢人与人之间流动的感觉。", delta: { EI: 1 } },
      { label: "把内容和体验细节准备好就很满足", body: "我不一定想一直站在最前面。", delta: { EI: -1 } },
      { label: "活动结束后自己复盘会更有满足感", body: "热闹之后，我更享受回到自己的节奏。", delta: { EI: -2 } }
    ]
  },
  {
    dimension: "能量取向",
    title: "当你对一个话题非常感兴趣时，你更常见的表达方式是？",
    options: [
      { label: "立刻想找人聊，越聊越有灵感", body: "我会在互动里把想法推得更远。", delta: { EI: 2 } },
      { label: "愿意表达，也愿意带动别人一起讨论", body: "分享会让我更清楚自己在想什么。", delta: { EI: 1 } },
      { label: "先自己想明白，再挑人说", body: "我更在意表达的质量。", delta: { EI: -1 } },
      { label: "先沉浸式研究，不急着讲出来", body: "很多内容我更愿意在内部消化。", delta: { EI: -2 } }
    ]
  },
  {
    dimension: "感知方式",
    title: "面对一款新咖啡，你第一时间更会注意哪一部分？",
    options: [
      { label: "它的处理法、产地、参数细节", body: "具体信息越扎实，我越容易被打动。", delta: { SN: -2 } },
      { label: "它实际喝起来是不是有清楚层次", body: "我很看重真实体验和稳定表现。", delta: { SN: -1 } },
      { label: "它背后的概念、名字和情绪设定", body: "故事感会让我迅速建立兴趣。", delta: { SN: 1 } },
      { label: "它能不能延伸成一个完整世界观", body: "如果想象空间很大，我会特别兴奋。", delta: { SN: 2 } }
    ]
  },
  {
    dimension: "感知方式",
    title: "做一份新产品概念时，你更容易先从哪一步进入？",
    options: [
      { label: "先找真实案例、竞品和数据", body: "我需要落地材料来判断方向。", delta: { SN: -2 } },
      { label: "先确认用户会不会真的用、真的买", body: "实际场景比空想更重要。", delta: { SN: -1 } },
      { label: "先构思它能代表什么感觉和身份", body: "情绪与符号感是我的切入口。", delta: { SN: 1 } },
      { label: "先想它有没有机会变成一个更大的叙事", body: "概念一旦成立，细节就会自己长出来。", delta: { SN: 2 } }
    ]
  },
  {
    dimension: "感知方式",
    title: "逛一家新的精品咖啡店时，你最容易被什么吸住？",
    options: [
      { label: "豆单、菜单、设备和出品稳定度", body: "这些会直接影响我是否认可它。", delta: { SN: -2 } },
      { label: "空间动线和服务是否顺手自然", body: "我很在意使用体验是否真实舒服。", delta: { SN: -1 } },
      { label: "视觉氛围、品牌语气和细节小巧思", body: "我会先从整体感觉进入。", delta: { SN: 1 } },
      { label: "它是否像一个有生命力的小宇宙", body: "如果它能让我联想到更大的故事，我会记很久。", delta: { SN: 2 } }
    ]
  },
  {
    dimension: "感知方式",
    title: "别人向你介绍一个项目时，你更想先听到什么？",
    options: [
      { label: "它现在具体做到什么程度了", body: "我更信任清楚的现状。", delta: { SN: -2 } },
      { label: "它解决了什么真实问题", body: "我会先判断它有没有现实价值。", delta: { SN: -1 } },
      { label: "它的灵感和概念从哪里来", body: "我喜欢先进入想法本身。", delta: { SN: 1 } },
      { label: "它未来有可能变成什么样", body: "愿景和潜力会先抓住我。", delta: { SN: 2 } }
    ]
  },
  {
    dimension: "感知方式",
    title: "如果你来设计一杯联名咖啡，你会最先锁定哪件事？",
    options: [
      { label: "风味逻辑一定要先自洽", body: "原料和味型的合理性不能乱。", delta: { SN: -2 } },
      { label: "用户喝下去时的实际体验", body: "真实反馈永远比概念漂亮更重要。", delta: { SN: -1 } },
      { label: "它要传递怎样的角色气质", body: "人格感会决定这杯产品的灵魂。", delta: { SN: 1 } },
      { label: "它能不能让人一眼就想拍照分享", body: "我会优先想象它的场景传播力。", delta: { SN: 2 } }
    ]
  },
  {
    dimension: "判断方式",
    title: "朋友在选创业方向时来问你意见，你更可能怎么回应？",
    options: [
      { label: "先拆资源、路径和风险", body: "现实条件得先看清楚。", delta: { TF: 2 } },
      { label: "先判断这事是否真正可执行", body: "热爱重要，但能走通更重要。", delta: { TF: 1 } },
      { label: "先看这件事是不是他真心想做的", body: "长期走下去，认同感不能缺。", delta: { TF: -1 } },
      { label: "先看这条路会不会让他更像自己", body: "我会先关心人，而不是先关心结构。", delta: { TF: -2 } }
    ]
  },
  {
    dimension: "判断方式",
    title: "团队里两个人意见不合时，你更习惯怎么介入？",
    options: [
      { label: "先厘清分歧点，迅速收束成方案", body: "问题先讲清楚，事情才能推进。", delta: { TF: 2 } },
      { label: "先看哪种方案的效率和结果更好", body: "我会优先判断哪种更合理。", delta: { TF: 1 } },
      { label: "先顾及双方情绪，避免关系先受伤", body: "我希望对话还能继续走下去。", delta: { TF: -1 } },
      { label: "先保护每个人被理解的感觉", body: "我会很在意处理方式是否足够温柔。", delta: { TF: -2 } }
    ]
  },
  {
    dimension: "判断方式",
    title: "如果要选一个合作伙伴，你第一优先更偏向哪一种？",
    options: [
      { label: "专业稳定、执行极清晰的人", body: "合作首先要可靠。", delta: { TF: 2 } },
      { label: "脑子清楚、配合高效的人", body: "我看重做事是否顺畅有效。", delta: { TF: 1 } },
      { label: "价值观舒服、相处有温度的人", body: "合作关系也得能长期相处。", delta: { TF: -1 } },
      { label: "会认真照顾人感受的人", body: "我更信任有人情味的合作。", delta: { TF: -2 } }
    ]
  },
  {
    dimension: "判断方式",
    title: "当你要给别人反馈一份作品时，你最自然的方式是？",
    options: [
      { label: "直接指出问题，并给出修改方向", body: "清楚比绕弯更有效。", delta: { TF: 2 } },
      { label: "先讲逻辑，再补建议", body: "我会尽量让对方知道为什么。", delta: { TF: 1 } },
      { label: "先肯定亮点，再慢慢说不足", body: "我会考虑对方接收时的感受。", delta: { TF: -1 } },
      { label: "我会尽量用柔和方式表达不同意见", body: "表达方式对我来说和内容一样重要。", delta: { TF: -2 } }
    ]
  },
  {
    dimension: "判断方式",
    title: "当一个决定必须二选一，而两边都不完美时，你更依赖什么？",
    options: [
      { label: "理性比较，选总体最优解", body: "我会尽量降低情绪干扰。", delta: { TF: 2 } },
      { label: "看成本、结果和效率哪个更合适", body: "现实权衡比理想完整更重要。", delta: { TF: 1 } },
      { label: "看哪一个更不违背自己的内心", body: "我没法完全把感受排除掉。", delta: { TF: -1 } },
      { label: "看哪一个会让关系和情绪代价更小", body: "我会优先减少伤害。", delta: { TF: -2 } }
    ]
  },
  {
    dimension: "生活节奏",
    title: "如果这个周末突然空出来半天，你更自然的反应会是？",
    options: [
      { label: "马上安排路线和目标", body: "空档最好尽快被放进清晰计划里。", delta: { JP: 2 } },
      { label: "会先列几个可选方案", body: "我喜欢大致有个框架。", delta: { JP: 1 } },
      { label: "看心情走，临场决定就行", body: "留一点变化空间会更自在。", delta: { JP: -1 } },
      { label: "什么都不定，让当下带我走", body: "未知本身就很有吸引力。", delta: { JP: -2 } }
    ]
  },
  {
    dimension: "生活节奏",
    title: "今天安排被临时打乱时，你更常见的真实反应是？",
    options: [
      { label: "会明显不舒服，想立刻重建秩序", body: "计划被打断会影响我状态。", delta: { JP: 2 } },
      { label: "会调整，但希望尽快拉回原节奏", body: "我能接受变化，但最好别太散。", delta: { JP: 1 } },
      { label: "没关系，顺势改方案也挺有趣", body: "变化不一定是坏事。", delta: { JP: -1 } },
      { label: "挺好，临时变化反而会让我更有活力", body: "我喜欢过程里的即兴感。", delta: { JP: -2 } }
    ]
  },
  {
    dimension: "生活节奏",
    title: "做一个你真的在意的项目时，你更常见的推进方式是？",
    options: [
      { label: "先搭清楚结构，再逐步往里填", body: "框架明确会让我最安心。", delta: { JP: 2 } },
      { label: "先列出阶段目标，一步步推进", body: "我喜欢按节奏稳稳落地。", delta: { JP: 1 } },
      { label: "先动起来，边做边迭代", body: "很多好方向是在过程中长出来的。", delta: { JP: -1 } },
      { label: "我更享受自由试验，再慢慢定型", body: "先把可能性打开比定死更重要。", delta: { JP: -2 } }
    ]
  },
  {
    dimension: "生活节奏",
    title: "你处理待办事项时，更接近下面哪一种？",
    options: [
      { label: "必须排优先级，不然会难受", body: "顺序感会直接影响我的效率。", delta: { JP: 2 } },
      { label: "大方向有计划，细节可以弹性一点", body: "有边界但不必过满。", delta: { JP: 1 } },
      { label: "我通常按现场状态决定先做什么", body: "灵活切换会让我更顺手。", delta: { JP: -1 } },
      { label: "经常一边探索一边重新排序", body: "我不喜欢被固定流程绑住。", delta: { JP: -2 } }
    ]
  },
  {
    dimension: "生活节奏",
    title: "如果你要策划一次品牌快闪活动，你最想先确认什么？",
    options: [
      { label: "时间表、分工表和所有执行节点", body: "先把控盘系统搭起来。", delta: { JP: 2 } },
      { label: "关键流程和底线风险", body: "至少主要结构要先稳住。", delta: { JP: 1 } },
      { label: "现场是否能留出一些临场发挥空间", body: "适度变化会让活动更有生命力。", delta: { JP: -1 } },
      { label: "有没有机会边做边长出更好玩的版本", body: "我会期待活动现场带来的新灵感。", delta: { JP: -2 } }
    ]
  }
];

const state = {
  current: 0,
  answers: Array(questions.length).fill(null),
  nickname: ""
};

const els = {
  options: document.getElementById("options"),
  questionTitle: document.getElementById("question-title"),
  dimensionPill: document.getElementById("dimension-pill"),
  progressLabel: document.getElementById("progress-label"),
  progressPercent: document.getElementById("progress-percent"),
  progressFill: document.getElementById("progress-fill"),
  prevBtn: document.getElementById("prev-btn"),
  questionHint: document.getElementById("question-hint"),
  resultPanel: document.getElementById("result-panel"),
  resultImage: document.getElementById("result-image"),
  resultCode: document.getElementById("result-code"),
  resultName: document.getElementById("result-name"),
  resultHeadline: document.getElementById("result-headline"),
  resultDescription: document.getElementById("result-description"),
  resultDrink: document.getElementById("result-drink"),
  resultSocial: document.getElementById("result-social"),
  resultFlavor: document.getElementById("result-flavor"),
  resultSymbol: document.getElementById("result-symbol"),
  retakeBtn: document.getElementById("retake-btn"),
  scrollGalleryBtn: document.getElementById("scroll-gallery-btn"),
  viewGalleryBtn: document.getElementById("view-gallery-btn"),
  jumpQuizBtn: document.getElementById("jump-quiz-btn"),
  nickname: document.getElementById("nickname"),
  galleryGrid: document.getElementById("gallery-grid"),
  heroImageA: document.getElementById("hero-image-a"),
  heroImageB: document.getElementById("hero-image-b"),
  heroImageC: document.getElementById("hero-image-c")
};

function renderQuestion() {
  const question = questions[state.current];
  const percent = Math.round(((state.current + 1) / questions.length) * 100);
  els.dimensionPill.textContent = question.dimension;
  els.questionTitle.textContent = question.title;
  els.progressLabel.textContent = `第 ${state.current + 1} 题 / 共 ${questions.length} 题`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressFill.style.width = `${percent}%`;
  els.prevBtn.disabled = state.current === 0;
  els.prevBtn.style.opacity = state.current === 0 ? "0.45" : "1";
  els.questionHint.textContent = "请选择最像你的一项，四个选项代表不同强度的倾向。";

  els.options.innerHTML = "";

  question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-card";
    if (state.answers[state.current] === index) {
      btn.classList.add("active");
    }
    btn.innerHTML = `
      <span class="option-index">${String(index + 1).padStart(2, "0")}</span>
      <h4 class="option-title">${option.label}</h4>
      <p class="option-body">${option.body}</p>
    `;
    btn.addEventListener("click", () => {
      state.answers[state.current] = index;
      renderQuestion();
      setTimeout(() => {
        if (state.current < questions.length - 1) {
          state.current += 1;
          renderQuestion();
        } else {
          showResult();
        }
      }, 180);
    });
    els.options.appendChild(btn);
  });
}

function computeCode() {
  const score = { EI: 0, SN: 0, TF: 0, JP: 0 };
  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const delta = questions[questionIndex].options[answerIndex].delta;
    Object.keys(delta).forEach((key) => {
      score[key] += delta[key];
    });
  });

  return `${score.EI >= 0 ? "E" : "I"}${score.SN >= 0 ? "N" : "S"}${score.TF >= 0 ? "T" : "F"}${score.JP >= 0 ? "J" : "P"}`;
}

function showResult() {
  const code = computeCode();
  const profile = profiles[code];
  state.nickname = els.nickname.value.trim();

  document.documentElement.style.setProperty("--accent", profile.accent);
  els.resultImage.src = profile.image;
  els.resultImage.alt = `${profile.code} ${profile.name}`;
  els.resultCode.textContent = profile.code;
  els.resultName.textContent = state.nickname ? `${state.nickname} 的结果：${profile.name}` : profile.name;
  els.resultHeadline.textContent = profile.headline;
  els.resultDescription.textContent = profile.description;
  els.resultDrink.textContent = profile.drink;
  els.resultSocial.textContent = profile.social;
  els.resultFlavor.textContent = profile.flavor;
  els.resultSymbol.textContent = `${profile.symbol}  ${profile.name}`;
  els.resultPanel.classList.remove("hidden");
  els.resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function retake() {
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  els.resultPanel.classList.add("hidden");
  renderQuestion();
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildGallery() {
  Object.values(profiles).forEach((profile) => {
    const card = document.createElement("article");
    card.className = "persona-card";
    card.innerHTML = `
      <img src="${profile.image}" alt="${profile.code} ${profile.name}">
      <div class="persona-card-copy">
        <span class="persona-card-code">${profile.code}</span>
        <h3>${profile.name}</h3>
        <p>${profile.headline}</p>
      </div>
    `;
    els.galleryGrid.appendChild(card);
  });
}

function renderHeroImages() {
  if (els.heroImageA) {
    els.heroImageA.src = profiles.ENFP.image;
    els.heroImageA.alt = `${profiles.ENFP.code} ${profiles.ENFP.name}`;
  }
  if (els.heroImageB) {
    els.heroImageB.src = profiles.INTJ.image;
    els.heroImageB.alt = `${profiles.INTJ.code} ${profiles.INTJ.name}`;
  }
  if (els.heroImageC) {
    els.heroImageC.src = profiles.ISFP.image;
    els.heroImageC.alt = `${profiles.ISFP.code} ${profiles.ISFP.name}`;
  }
}

els.prevBtn.addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

els.retakeBtn.addEventListener("click", retake);
els.scrollGalleryBtn.addEventListener("click", () => {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth", block: "start" });
});
els.viewGalleryBtn.addEventListener("click", () => {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth", block: "start" });
});
els.jumpQuizBtn.addEventListener("click", () => {
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderHeroImages();
buildGallery();
renderQuestion();
