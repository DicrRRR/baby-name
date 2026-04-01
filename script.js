// ==================== 古籍数据库 ====================

// 性别标识：male=男孩，female=女孩，both=通用
// personality: 未来性格特点分析
// detailed: 详细解析（包含易经、八卦、紫微斗数、事业、婚姻、学业等）
const ancientBooks = {
    shijing: [
        // 双字名
        { name: "静姝", pinyin: "jìng shū", source: "《诗经·邶风·静女》", meaning: "娴静美好，形容女子文雅安静", wuxing: "金木", gender: "female", 
          personality: "性格温婉内敛，待人真诚善良，做事沉稳有条理，具有艺术气质和审美能力",
          detailed: {
            yiJing: "此名对应易经第 2 卦坤卦，地势坤，君子以厚德载物。象征柔顺包容，德行深厚。",
            baGua: "属坤卦，代表大地、母亲、包容。卦象为地，主温和、稳重、有承载力。",
            ziWei: "紫微斗数中对应天府星，主富贵、稳定、善于理财持家。",
            naYin: "纳音属海中金，内涵丰富，如海中之金，需经磨砺方显光彩。",
            wuXing: "金木组合，金克木，需注意平衡。金主坚毅，木主仁慈，性格刚柔并济。",
            destiny: "一生平稳安康，中年后运势渐佳，晚年福寿双全。",
            career: "适合从事教育、艺术、医疗、财务等稳定性工作，能稳步发展。",
            marriage: "婚姻美满，配偶忠诚可靠，家庭和睦，子女孝顺。",
            education: "学业顺利，尤其擅长文科艺术类科目，有较高学历潜力。"
          }
        },
        { name: "婉清", pinyin: "wǎn qīng", source: "《诗经·郑风·野有蔓草》", meaning: "温婉清丽，形容女子温柔清澈", wuxing: "土水", gender: "female",
          personality: "性情温和柔顺，心思细腻敏感，善解人意，具有包容力和亲和力",
          detailed: {
            yiJing: "对应易经第 29 卦坎卦，水流不息，象征智慧与灵活变通。",
            baGua: "属坎卦，代表水、智慧、险阻。卦象为水，主聪明、灵活、适应力强。",
            ziWei: "紫微斗数中对应太阴星，主温柔、聪慧、有艺术天赋。",
            naYin: "纳音属涧下水，如山中清泉，纯净透彻，品性高洁。",
            wuXing: "土水组合，土克水，需注意情绪调节。土主诚信，水主智慧，为人诚实聪明。",
            destiny: "早年平顺，中年运势上升，晚年生活富足安乐。",
            career: "适合文学、设计、公关、心理咨询等需要沟通创意的工作。",
            marriage: "感情丰富，婚姻幸福，能经营温馨家庭。",
            education: "学习能力强，尤擅语言文化类，有望获得高等学历。"
          }
        },
        { name: "子衿", pinyin: "zǐ jīn", source: "《诗经·郑风·子衿》", meaning: "学识渊博，才华横溢", wuxing: "水木", gender: "both",
          personality: "聪慧好学，思维敏捷，有求知欲和上进心，文采斐然，气质儒雅" },
        { name: "采薇", pinyin: "cǎi wēi", source: "《诗经·小雅·采薇》", meaning: "坚韧不拔，志向高远", wuxing: "木土", gender: "female",
          personality: "意志坚定，不轻言放弃，有独立精神，面对困难能保持乐观态度" },
        { name: "思齐", pinyin: "sī qí", source: "《诗经·大雅·思齐》", meaning: "见贤思齐，追求卓越", wuxing: "金金", gender: "both",
          personality: "有上进心，善于学习他人长处，追求完美，自律性强" },
        { name: "燕婉", pinyin: "yàn wǎn", source: "《诗经·邶风·新台》", meaning: "安详温婉，性情柔和", wuxing: "土土", gender: "female",
          personality: "性格温顺，家庭观念强，善持家，待人接物得体大方" },
        { name: "如华", pinyin: "rú huá", source: "《诗经·郑风·有女同车》", meaning: "如花般美丽动人", wuxing: "金水", gender: "female",
          personality: "外表出众，自信开朗，有魅力和感染力，社交能力强" },
        { name: "清扬", pinyin: "qīng yáng", source: "《诗经·郑风·野有蔓草》", meaning: "清秀高雅，气度不凡", wuxing: "水火", gender: "both",
          personality: "气质清新脱俗，性格开朗豁达，有独特见解，不拘小节" },
        { name: "穆清", pinyin: "mù qīng", source: "《诗经·大雅·烝民》", meaning: "清明祥和，品德高尚", wuxing: "木水", gender: "male",
          personality: "品行端正，为人正直，有责任感，处事公正，受人尊敬" },
        { name: "嘉卉", pinyin: "jiā huì", source: "《诗经·小雅·四月》", meaning: "美好的草木，寓意生机勃勃", wuxing: "木木", gender: "female",
          personality: "充满活力，乐观向上，生命力旺盛，适应能力强" },
        { name: "哲成", pinyin: "zhé chéng", source: "《诗经·大雅·抑》", meaning: "明智成功，成就非凡", wuxing: "火金", gender: "male",
          personality: "聪明睿智，判断力强，做事有计划，容易在事业上取得成功" },
        { name: "维桢", pinyin: "wéi zhēn", source: "《诗经·大雅·文王》", meaning: "维护栋梁，担当重任", wuxing: "土木", gender: "male",
          personality: "有担当精神，领导能力强，能承担重任，是团队中的核心人物" },
        { name: "徽音", pinyin: "huī yīn", source: "《诗经·大雅·思齐》", meaning: "美好声誉，德音远播", wuxing: "金水", gender: "female",
          personality: "名声良好，言行举止得体，有影响力，善于表达和沟通" },
        { name: "骏德", pinyin: "jùn dé", source: "《诗经·大雅·荡》", meaning: "卓越品德，才德兼备", wuxing: "金火", gender: "male",
          personality: "品德高尚，才华出众，有理想抱负，能成为行业精英" },
        { name: "舜华", pinyin: "shùn huá", source: "《诗经·郑风·有女同车》", meaning: "如木槿花般美丽", wuxing: "金水", gender: "female",
          personality: "美丽大方，温柔体贴，有艺术天赋，生活品味高" },
        // 单字名
        { name: "静", pinyin: "jìng", source: "《诗经·邶风·柏舟》", meaning: "安静、平和、淡泊", wuxing: "金", gender: "female",
          personality: "性格沉静，内心平和，遇事不慌，有定力" },
        { name: "淑", pinyin: "shū", source: "《诗经·周南·关雎》", meaning: "善良、美好、贤惠", wuxing: "水", gender: "female",
          personality: "心地善良，温柔贤惠，待人真诚" },
        { name: "俊", pinyin: "jùn", source: "《诗经·郑风·野有蔓草》", meaning: "英俊、杰出、优秀", wuxing: "火", gender: "male",
          personality: "外表英俊，才华出众，有领导风范" },
        { name: "雅", pinyin: "yǎ", source: "《诗经·大雅》", meaning: "高雅、文雅、正派", wuxing: "木", gender: "both",
          personality: "气质高雅，举止文雅，品味不凡" },
        { name: "慧", pinyin: "huì", source: "《诗经·大雅·卷阿》", meaning: "聪明、智慧、灵巧", wuxing: "水", gender: "female",
          personality: "天资聪颖，悟性高，善解人意" }
    ],
    chuci: [
        { name: "云旗", pinyin: "yún qí", source: "《楚辞·离骚》", meaning: "志向高远，如云中之旗", wuxing: "水金", gender: "male" },
        { name: "望舒", pinyin: "wàng shū", source: "《楚辞·离骚》", meaning: "迎接光明，前程似锦", wuxing: "水金", gender: "both" },
        { name: "怀瑾", pinyin: "huái jǐn", source: "《楚辞·九章》", meaning: "怀抱美玉，品德高尚", wuxing: "土火", gender: "male" },
        { name: "瑜璟", pinyin: "yú jǐng", source: "《楚辞·九章》", meaning: "美玉的光彩，才华出众", wuxing: "金火", gender: "male" },
        { name: "嘉树", pinyin: "jiā shù", source: "《楚辞·九章》", meaning: "美好的树木，茁壮成长", wuxing: "木木", gender: "male" },
        { name: "辰星", pinyin: "chén xīng", source: "《楚辞·远游》", meaning: "如星辰般闪耀", wuxing: "土火", gender: "male" },
        { name: "修远", pinyin: "xiū yuǎn", source: "《楚辞·离骚》", meaning: "路漫漫其修远兮，求索不止", wuxing: "金土", gender: "male" },
        { name: "若华", pinyin: "ruò huá", source: "《楚辞·天问》", meaning: "如花般绚烂", wuxing: "木水", gender: "female" },
        { name: "飞扬", pinyin: "fēi yáng", source: "《楚辞·九歌》", meaning: "意气风发，昂扬向上", wuxing: "水火", gender: "male" },
        { name: "安歌", pinyin: "ān gē", source: "《楚辞·九歌》", meaning: "安然歌唱，生活美好", wuxing: "土木", gender: "female" },
        { name: "峻茂", pinyin: "jùn mào", source: "《楚辞·离骚》", meaning: "高大茂盛，兴旺发达", wuxing: "土木", gender: "male" },
        { name: "信芳", pinyin: "xìn fāng", source: "《楚辞·离骚》", meaning: "诚信芳香，品德美好", wuxing: "金木", gender: "both" },
        { name: "昭华", pinyin: "zhāo huá", source: "《楚辞·九章》", meaning: "光明华美，光彩照人", wuxing: "火水", gender: "female" },
        { name: "承宇", pinyin: "chéng yǔ", source: "《楚辞·九章》", meaning: "承载宇宙，胸怀广阔", wuxing: "金土", gender: "male" },
        { name: "芳若", pinyin: "fāng ruò", source: "《楚辞·九章》", meaning: "芬芳如若，气质优雅", wuxing: "木木", gender: "female" }
    ],
    lunyu: [
        { name: "志学", pinyin: "zhì xué", source: "《论语·为政》", meaning: "立志向学，勤奋上进", wuxing: "火水", gender: "male" },
        { name: "博文", pinyin: "bó wén", source: "《论语·雍也》", meaning: "博学多才，文采斐然", wuxing: "水水", gender: "male" },
        { name: "弘毅", pinyin: "hóng yì", source: "《论语·泰伯》", meaning: "胸怀宽广，意志坚定", wuxing: "水木", gender: "male" },
        { name: "敏行", pinyin: "mǐn xíng", source: "《论语·里仁》", meaning: "行动敏捷，做事高效", wuxing: "水水", gender: "both" },
        { name: "思远", pinyin: "sī yuǎn", source: "《论语·述而》", meaning: "思虑深远，目光长远", wuxing: "金土", gender: "both" },
        { name: "德馨", pinyin: "dé xīn", source: "《论语·学而》", meaning: "品德高尚，声名远播", wuxing: "火金", gender: "both" },
        { name: "知乐", pinyin: "zhì lè", source: "《论语·雍也》", meaning: "知足常乐，心态平和", wuxing: "火火", gender: "both" },
        { name: "仁德", pinyin: "rén dé", source: "《论语·里仁》", meaning: "仁爱厚德，品行端正", wuxing: "金火", gender: "male" },
        { name: "礼义", pinyin: "lǐ yì", source: "《论语·学而》", meaning: "懂礼明义，为人正直", wuxing: "火木", gender: "male" },
        { name: "智勇", pinyin: "zhì yǒng", source: "《论语·宪问》", meaning: "智勇双全，胆识过人", wuxing: "火土", gender: "male" },
        { name: "文质", pinyin: "wén zhì", source: "《论语·雍也》", meaning: "文质彬彬，然后君子", wuxing: "水金", gender: "male" },
        { name: "友直", pinyin: "yǒu zhí", source: "《论语·季氏》", meaning: "交友正直，品行端正", wuxing: "水火", gender: "male" },
        { name: "慧中", pinyin: "huì zhōng", source: "《论语·先进》", meaning: "秀外慧中，聪慧内敛", wuxing: "水火", gender: "female" },
        { name: "雅正", pinyin: "yǎ zhèng", source: "《论语·述而》", meaning: "典雅正直，品格高尚", wuxing: "木金", gender: "female" }
    ],
    daodejing: [
        { name: "若水", pinyin: "ruò shuǐ", source: "《道德经》", meaning: "上善若水，利万物而不争", wuxing: "木水", gender: "both" },
        { name: "致虚", pinyin: "zhì xū", source: "《道德经》", meaning: "致虚极，守静笃", wuxing: "火水", gender: "both" },
        { name: "守静", pinyin: "shǒu jìng", source: "《道德经》", meaning: "保持内心的宁静", wuxing: "金金", gender: "female" },
        { name: "知常", pinyin: "zhī cháng", source: "《道德经》", meaning: "知晓常道，明理通达", wuxing: "火金", gender: "both" },
        { name: "玄德", pinyin: "xuán dé", source: "《道德经》", meaning: "深奥的德行，品德崇高", wuxing: "水火", gender: "male" },
        { name: "希言", pinyin: "xī yán", source: "《道德经》", meaning: "少言寡语，行胜于言", wuxing: "水木", gender: "male" },
        { name: "自然", pinyin: "zì rán", source: "《道德经》", meaning: "道法自然，顺应天性", wuxing: "火火", gender: "both" },
        { name: "无为", pinyin: "wú wéi", source: "《道德经》", meaning: "无为而治，顺势而为", wuxing: "水土", gender: "male" },
        { name: "抱朴", pinyin: "bào pǔ", source: "《道德经》", meaning: "保持朴实本真", wuxing: "水木", gender: "both" },
        { name: "含章", pinyin: "hán zhāng", source: "《道德经》", meaning: "内含美德，不事张扬", wuxing: "水火", gender: "female" },
        { name: "知止", pinyin: "zhī zhǐ", source: "《道德经》", meaning: "知足知止，明哲保身", wuxing: "火火", gender: "both" },
        { name: "柔顺", pinyin: "róu shùn", source: "《道德经》", meaning: "柔弱胜刚强", wuxing: "金金", gender: "female" },
        { name: "长生", pinyin: "cháng shēng", source: "《道德经》", meaning: "天长地久，生生不息", wuxing: "火金", gender: "male" },
        { name: "清静", pinyin: "qīng jìng", source: "《道德经》", meaning: "清静无为，心境澄明", wuxing: "水金", gender: "female" }
    ],
    tangshi: [
        { name: "明月", pinyin: "míng yuè", source: "唐诗", meaning: "如明月般皎洁明亮", wuxing: "火木", gender: "both" },
        { name: "清风", pinyin: "qīng fēng", source: "唐诗", meaning: "清爽怡人，气质不凡", wuxing: "水木", gender: "male" },
        { name: "星河", pinyin: "xīng hé", source: "唐诗", meaning: "如星河般璀璨", wuxing: "金水", gender: "male" },
        { name: "雨桐", pinyin: "yǔ tóng", source: "唐诗", meaning: "梧桐细雨，诗意盎然", wuxing: "水木", gender: "female" },
        { name: "雪梅", pinyin: "xuě méi", source: "唐诗", meaning: "雪中梅花，坚韧高洁", wuxing: "水木", gender: "female" },
        { name: "云帆", pinyin: "yún fān", source: "唐诗", meaning: "直挂云帆济沧海", wuxing: "水水", gender: "male" },
        { name: "天翊", pinyin: "tiān yì", source: "唐诗", meaning: "翱翔天际，展翅高飞", wuxing: "火木", gender: "male" },
        { name: "浩然", pinyin: "hào rán", source: "唐诗", meaning: "浩然正气，胸襟开阔", wuxing: "水金", gender: "male" },
        { name: "诗涵", pinyin: "shī hán", source: "唐诗", meaning: "富有诗意，内涵丰富", wuxing: "金水", gender: "female" },
        { name: "梦琪", pinyin: "mèng qí", source: "唐诗", meaning: "如梦似幻，珍贵美好", wuxing: "木木", gender: "female" },
        { name: "逸飞", pinyin: "yì fēi", source: "唐诗", meaning: "超凡脱俗，自由飞翔", wuxing: "土水", gender: "male" },
        { name: "翰林", pinyin: "hàn lín", source: "唐诗", meaning: "文采风流，学识渊博", wuxing: "水木", gender: "male" },
        { name: "晓月", pinyin: "xiǎo yuè", source: "唐诗", meaning: "拂晓之月，清新明亮", wuxing: "火木", gender: "female" },
        { name: "俊杰", pinyin: "jùn jié", source: "唐诗", meaning: "英俊杰出，人才出众", wuxing: "火木", gender: "male" },
        { name: "玲珑", pinyin: "líng lóng", source: "唐诗", meaning: "精巧细致，聪明伶俐", wuxing: "火火", gender: "female" },
        { name: "鹏飞", pinyin: "péng fēi", source: "唐诗", meaning: "大鹏展翅，志向远大", wuxing: "水水", gender: "male" }
    ],
    songci: [
        { name: "雨荷", pinyin: "yǔ hé", source: "宋词", meaning: "雨后荷花，清新脱俗", wuxing: "水木", gender: "female" },
        { name: "婉婷", pinyin: "wǎn tíng", source: "宋词", meaning: "温婉婷婷，优雅动人", wuxing: "土火", gender: "female" },
        { name: "梦蝶", pinyin: "mèng dié", source: "宋词", meaning: "庄周梦蝶，意境优美", wuxing: "木火", gender: "female" },
        { name: "念真", pinyin: "niàn zhēn", source: "宋词", meaning: "念念不忘，真诚待人", wuxing: "火金", gender: "both" },
        { name: "依晨", pinyin: "yī chén", source: "宋词", meaning: "依靠晨光，充满希望", wuxing: "土金", gender: "female" },
        { name: "芷若", pinyin: "zhǐ ruò", source: "宋词", meaning: "香草名，气质高雅", wuxing: "木木", gender: "female" },
        { name: "语堂", pinyin: "yǔ táng", source: "宋词", meaning: "谈笑风生，学识渊博", wuxing: "木土", gender: "male" },
        { name: "锦书", pinyin: "jǐn shū", source: "宋词", meaning: "云中谁寄锦书来", wuxing: "金金", gender: "both" },
        { name: "疏影", pinyin: "shū yǐng", source: "宋词", meaning: "疏影横斜水清浅", wuxing: "木土", gender: "female" },
        { name: "暗香", pinyin: "àn xiāng", source: "宋词", meaning: "暗香浮动月黄昏", wuxing: "水水", gender: "female" },
        { name: "子轩", pinyin: "zǐ xuān", source: "宋词", meaning: "气宇轩昂，风度翩翩", wuxing: "水木", gender: "male" },
        { name: "欣怡", pinyin: "xīn yí", source: "宋词", meaning: "欣喜愉悦，心情舒畅", wuxing: "木土", gender: "female" },
        { name: "浩然", pinyin: "hào rán", source: "宋词", meaning: "浩然正气，胸怀坦荡", wuxing: "水金", gender: "male" },
        { name: "可馨", pinyin: "kě xīn", source: "宋词", meaning: "可爱温馨，令人喜爱", wuxing: "木金", gender: "female" },
        { name: "铭哲", pinyin: "míng zhé", source: "宋词", meaning: "铭记哲理，智慧超群", wuxing: "金火", gender: "male" },
        { name: "雅芙", pinyin: "yǎ fú", source: "宋词", meaning: "高雅如芙蓉", wuxing: "木木", gender: "female" }
    ],
    // 周易
    zhouyi: [
        { name: "元亨", pinyin: "yuán hēng", source: "《周易·乾卦》", meaning: "大吉大利，亨通顺利", wuxing: "木水", gender: "male",
          personality: "胸怀宽广，处事圆融，有领导才能",
          detailed: {
            yiJing: "对应易经第 1 卦乾卦，元亨利贞。象征创始、亨通、有利、正固。",
            baGua: "属乾卦，代表天、父、刚健。卦象为天，主创造力、领导力、决断力。",
            ziWei: "紫微斗数中对应紫微星，帝王之星，主尊贵与权威。",
            naYin: "纳音需要根据具体出生年份确定。",
            wuXing: "木水组合，水生木，五行相生。木主仁慈生长，水主智慧流动。",
            destiny: "一生运势强盛，早年积累，中年腾飞，晚年德高望重。",
            career: "适合政治、企业管理、自主创业等领导型职业。",
            marriage: "婚姻稳定，配偶优秀，能相互扶持成就事业。",
            education: "学业优异，有深造潜力，适合管理、法律等专业。"
          }
        },
        { name: "利贞", pinyin: "lì zhēn", source: "《周易·乾卦》", meaning: "有利且正固，坚守正道", wuxing: "火金", gender: "male",
          personality: "正直坚定，原则性强，值得信赖",
          detailed: {
            yiJing: "对应易经乾卦四德之一，利者义之和，贞者事之干。",
            baGua: "属乾卦，刚健中正，具有坚定的意志力。",
            ziWei: "紫微斗数中对应天府星，主稳定与财富。",
            naYin: "纳音五行属火金，需结合八字分析。",
            wuXing: "火金组合，火克金，需注意平衡。火主礼，金主义。",
            destiny: "一生正直做人，财运稳定，晚年福寿安康。",
            career: "适合法律、金融、公务员等稳定性职业。",
            marriage: "感情专一，婚姻长久，家庭和睦。",
            education: "学习踏实，成绩稳定，适合法学、商科。"
          }
        },
        { name: "谦益", pinyin: "qiān yì", source: "《周易·谦卦》", meaning: "谦虚受益，满招损谦受益", wuxing: "木土", gender: "both",
          personality: "谦虚谨慎，待人友善，善于学习",
          detailed: {
            yiJing: "对应易经第 15 卦谦卦，地山谦，君子以裒多益寡。",
            baGua: "属谦卦，山在地下，象征谦逊低调。",
            ziWei: "紫微斗数中对应天同星，主福德与人缘。",
            naYin: "纳音五行根据出生年份确定。",
            wuXing: "木土组合，木克土，需注意脾胃健康。",
            destiny: "因谦虚而得人相助，一生贵人运强。",
            career: "适合教育、咨询、服务业等需要人际关系的职业。",
            marriage: "婚姻美满，夫妻相敬如宾。",
            education: "学习态度好，善於请教，学业有成。"
          }
        },
        { name: "泰来", pinyin: "tài lái", source: "《周易·泰卦》", meaning: "否极泰来，好运降临", wuxing: "水火", gender: "male",
          personality: "乐观向上，逆境中能保持希望",
          detailed: {
            yiJing: "对应易经第 11 卦泰卦，天地泰，君子道长小人道消。",
            baGua: "属泰卦，天地交泰，象征通达安泰。",
            ziWei: "紫微斗数中对应太阳星，主光明与名声。",
            naYin: "纳音需要根据八字分析。",
            wuXing: "水火组合，水火既济，阴阳调和。",
            destiny: "先苦后甜，中年后运势大好，晚年富贵。",
            career: "适合贸易、销售、公关等需要应变能力的职业。",
            marriage: "感情经历波折后终获幸福。",
            education: "学习能力强，考试运佳。"
          }
        }
    ],
    // 尚书
    shangshu: [
        { name: "禹辰", pinyin: "yǔ chén", source: "《尚书·虞书》", meaning: "如大禹般伟大，时辰吉祥", wuxing: "水土", gender: "male",
          personality: "有担当精神，做事认真负责",
          detailed: {
            yiJing: "对应易经治水之功，象征成就与责任。",
            baGua: "属坎卦，代表水、智慧、险阻中的成功。",
            ziWei: "紫微斗数中对应破军星，主开创与变革。",
            naYin: "纳音水土，需结合具体年份。",
            wuXing: "水土组合，土克水，需注意情绪管理。",
            destiny: "少年磨砺，中年成就大业，晚年安享尊荣。",
            career: "适合工程、建筑、水利、公共事业。",
            marriage: "婚姻稳定，配偶贤惠。",
            education: "理工科天赋强，适合工程技术类专业。"
          }
        },
        { name: "舜华", pinyin: "shùn huá", source: "《尚书·舜典》", meaning: "如舜帝般德才兼备，才华横溢", wuxing: "金水", gender: "female",
          personality: "品德高尚，才华出众，有领导魅力",
          detailed: {
            yiJing: "对应易经顺德之美，象征德行与才能。",
            baGua: "属坤卦，代表大地母亲的包容与孕育。",
            ziWei: "紫微斗数中对应太阴星，主温柔与智慧。",
            naYin: "纳音金水，相生之象。",
            wuXing: "金水组合，金生水，聪明智慧。",
            destiny: "一生顺遂，贵人相助，事业家庭双丰收。",
            career: "适合管理、教育、文化艺术领域。",
            marriage: "婚姻美满，配偶优秀。",
            education: "文科理科皆宜，综合素质高。"
          }
        }
    ],
    // 礼记
    liji: [
        { name: "明德", pinyin: "míng dé", source: "《礼记·大学》", meaning: "光明的德行，明明德于天下", wuxing: "火火", gender: "male",
          personality: "品德高尚，光明磊落，受人尊敬",
          detailed: {
            yiJing: "对应易经离卦，光明普照，德行远播。",
            baGua: "属离卦，代表火、光明、文明。",
            ziWei: "紫微斗数中对应太阳星，主名声与地位。",
            naYin: "纳音属火，热情洋溢。",
            wuXing: "火火组合，火势旺盛，热情积极。",
            destiny: "名声远播，事业有成，受人敬仰。",
            career: "适合教育、传媒、公共服务行业。",
            marriage: "婚姻稳定，家庭和睦。",
            education: "学习成绩优异，有望获得高学历。"
          }
        },
        { name: "至善", pinyin: "zhì shàn", source: "《礼记·大学》", meaning: "达到最完善的境界", wuxing: "火金", gender: "both",
          personality: "追求完美，善良正直，自律严谨",
          detailed: {
            yiJing: "对应易经止于至善的境界。",
            baGua: "属艮卦，代表止、稳重、坚持。",
            ziWei: "紫微斗数中对应天梁星，主清贵与长寿。",
            naYin: "纳音火金，需平衡发展。",
            wuXing: "火金组合，锻炼成器，历经磨砺。",
            destiny: "追求卓越，人生境界不断提升。",
            career: "适合学术研究、医疗、法律等专业领域。",
            marriage: "对感情认真，婚姻质量高。",
            education: "学术天赋强，适合深造研究。"
          }
        }
    ],
    // 孟子
    mengzi: [
        { name: "浩然", pinyin: "hào rán", source: "《孟子·公孙丑》", meaning: "浩然正气，刚直不阿", wuxing: "水金", gender: "male",
          personality: "正直勇敢，有正义感，不畏强权",
          detailed: {
            yiJing: "对应易经乾卦，刚健中正，浩然之气。",
            baGua: "属乾卦，代表天、正义、刚直。",
            ziWei: "紫微斗数中对应七杀星，主决断与勇气。",
            naYin: "纳音水金，相生之象。",
            wuXing: "水金组合，金水相生，聪明正直。",
            destiny: "一生正气凛然，事业有成，名留青史。",
            career: "适合法律、军警、政治等正义事业。",
            marriage: "感情专一，婚姻稳定。",
            education: "学习认真，适合法学、政治学专业。"
          }
        },
        { name: "思孟", pinyin: "sī mèng", source: "《孟子》", meaning: "思考如孟子，智慧深远", wuxing: "金水", gender: "both",
          personality: "善于思考，有哲学思维，见解独到",
          detailed: {
            yiJing: "对应易经艮卦，思考深沉，见解独到。",
            baGua: "属艮卦，代表山、静止、思考。",
            ziWei: "紫微斗数中对应天机星，主智慧与谋略。",
            naYin: "纳音金水，聪明伶俐。",
            wuXing: "金水组合，金白水清，思维敏捷。",
            destiny: "以智慧立身，学术或思想领域有建树。",
            career: "适合哲学、研究、写作、咨询行业。",
            marriage: "精神交流重要，婚姻和谐。",
            education: "学术天赋极高，适合研究生深造。"
          }
        }
    ]
};

// ==================== 天干地支与五行 ====================

const heavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

const stemWuxing = {
    '甲': '木', '乙': '木',
    '丙': '火', '丁': '火',
    '戊': '土', '己': '土',
    '庚': '金', '辛': '金',
    '壬': '水', '癸': '水'
};

const branchWuxing = {
    '子': '水', '丑': '土', '寅': '木', '卯': '木',
    '辰': '土', '巳': '火', '午': '火', '未': '土',
    '申': '金', '酉': '金', '戌': '土', '亥': '水'
};

const nayinTable = {
    '甲子': '海中金', '乙丑': '海中金',
    '丙寅': '炉中火', '丁卯': '炉中火',
    '戊辰': '大林木', '己巳': '大林木',
    '庚午': '路旁土', '辛未': '路旁土',
    '壬申': '剑锋金', '癸酉': '剑锋金',
    '甲戌': '山头火', '乙亥': '山头火',
    '丙子': '涧下水', '丁丑': '涧下水',
    '戊寅': '城头土', '己卯': '城头土',
    '庚辰': '白蜡金', '辛巳': '白蜡金',
    '壬午': '杨柳木', '癸未': '杨柳木',
    '甲申': '泉中水', '乙酉': '泉中水',
    '丙戌': '屋上土', '丁亥': '屋上土',
    '戊子': '霹雳火', '己丑': '霹雳火',
    '庚寅': '松柏木', '辛卯': '松柏木',
    '壬辰': '长流水', '癸巳': '长流水',
    '甲午': '沙中金', '乙未': '沙中金',
    '丙申': '山下火', '丁酉': '山下火',
    '戊戌': '平地木', '己亥': '平地木',
    '庚子': '壁上土', '辛丑': '壁上土',
    '壬寅': '金箔金', '癸卯': '金箔金',
    '甲辰': '覆灯火', '乙巳': '覆灯火',
    '丙午': '天河水', '丁未': '天河水',
    '戊申': '大驿土', '己酉': '大驿土',
    '庚戌': '钗钏金', '辛亥': '钗钏金',
    '壬子': '桑柘木', '癸丑': '桑柘木',
    '甲寅': '大溪水', '乙卯': '大溪水',
    '丙辰': '沙中土', '丁巳': '沙中土',
    '戊午': '天上火', '己未': '天上火',
    '庚申': '石榴木', '辛酉': '石榴木',
    '壬戌': '大海水', '癸亥': '大海水'
};

// ==================== 易经六十四卦信息 ====================
const yiJingGua = [
    { num: 1, name: "乾卦", symbol: "☰☰", meaning: "天行健，君子以自强不息", trait: "刚健、创造、领导力" },
    { num: 2, name: "坤卦", symbol: "☷☷", meaning: "地势坤，君子以厚德载物", trait: "柔顺、包容、承载力" },
    { num: 3, name: "屯卦", symbol: "☵☶", meaning: "云雷屯，君子以经纶", trait: "初生、艰难、积累" },
    { num: 4, name: "蒙卦", symbol: "☶☵", meaning: "山下出泉，君子以果行育德", trait: "启蒙、教育、成长" },
    { num: 5, name: "需卦", symbol: "☵☰", meaning: "云上于天，君子以饮食宴乐", trait: "等待、需求、时机" },
    { num: 6, name: "讼卦", symbol: "☰☵", meaning: "天与水违，君子作事谋始", trait: "争讼、谨慎、预防" },
    { num: 7, name: "师卦", symbol: "☵☷", meaning: "地中有水，君子以容民畜众", trait: "统领、组织、纪律" },
    { num: 8, name: "比卦", symbol: "☷☵", meaning: "地上有水，先王以建万国亲诸侯", trait: "亲密、合作、团结" }
];

// ==================== 紫微斗数主星信息 ====================
const ziWeiStars = [
    { name: "紫微星", trait: "帝王之星，主尊贵、领导力、权威", career: "适合管理、政治、企业领导", marriage: "配偶优秀，婚姻稳定" },
    { name: "天府星", trait: "财帛之星，主富贵、稳定、善于理财", career: "适合金融、商业、财务", marriage: "家庭富足，婚姻美满" },
    { name: "太阳星", trait: "光明之星，主热情、博爱、名声", career: "适合公众事业、传媒、教育", marriage: "配偶开朗，感情热烈" },
    { name: "太阴星", trait: "月亮之星，主温柔、聪慧、艺术", career: "适合艺术、文学、设计", marriage: "感情细腻，婚姻温馨" },
    { name: "天机星", trait: "智慧之星，主聪明、机智、善变", career: "适合策划、咨询、科技", marriage: "配偶聪明，关系灵活" },
    { name: "天同星", trait: "福德之星，主享受、温和、人缘", career: "适合服务、娱乐、餐饮", marriage: "感情和睦，生活惬意" }
];

// 生成名字详细解析（默认）
function generateDefaultDetailed(nameData) {
    const guaIndex = Math.floor(Math.random() * yiJingGua.length);
    const starIndex = Math.floor(Math.random() * ziWeiStars.length);
    const yiJing = yiJingGua[guaIndex];
    const ziWei = ziWeiStars[starIndex];
    
    return {
        yiJing: `此名对应易经第${yiJing.num}卦${yiJing.name}，${yiJing.meaning}。象征${yiJing.trait}。`,
        baGua: `属${yiJing.name}，${yiJing.trait}。卦象显示此人具有领导才能或特殊才华。`,
        ziWei: `紫微斗数中对应${ziWei.name}，${ziWei.trait}。`,
        naYin: `纳音五行根据出生年份确定，建议结合八字分析。`,
        wuXing: `名字五行为"${nameData.wuxing}"，${nameData.wuxing.split('').map(w => `${w}主${getWuxingTrait(w)}`).join('，')}。`,
        destiny: "一生命运起伏有序，青年积累经验，中年事业发展，晚年安享福寿。",
        career: `事业方面：${ziWei.career}。名字寓意有助于职业发展。`,
        marriage: `婚姻感情：${ziWei.marriage}。名字中的美好寓意有助于吸引良缘。`,
        education: "学业运势良好，勤奋努力可获得理想学历，尤其适合与名字寓意相关的专业领域。"
    };
}

function getWuxingTrait(w) {
    const traits = {
        '金': '坚毅、果断、正义',
        '木': '仁慈、生长、创意',
        '水': '智慧、流动、适应',
        '火': '热情、光明、活力',
        '土': '诚信、稳重、包容'
    };
    return traits[w] || '平衡';
}

// ==================== 星座信息 ====================

const constellations = [
    { name: '摩羯座', start: '12-22', end: '01-19', element: '土', trait: '踏实稳重，有责任感' },
    { name: '水瓶座', start: '01-20', end: '02-18', element: '风', trait: '创新独立，思想前卫' },
    { name: '双鱼座', start: '02-19', end: '03-20', element: '水', trait: '浪漫梦幻，富有同情心' },
    { name: '白羊座', start: '03-21', end: '04-19', element: '火', trait: '热情开朗，勇敢无畏' },
    { name: '金牛座', start: '04-20', end: '05-20', element: '土', trait: '稳健踏实，注重实际' },
    { name: '双子座', start: '05-21', end: '06-21', element: '风', trait: '聪明机智，善于沟通' },
    { name: '巨蟹座', start: '06-22', end: '07-22', element: '水', trait: '温柔体贴，重视家庭' },
    { name: '狮子座', start: '07-23', end: '08-22', element: '火', trait: '自信大方，领导力强' },
    { name: '处女座', start: '08-23', end: '09-22', element: '土', trait: '细致完美，分析能力强' },
    { name: '天秤座', start: '09-23', end: '10-23', element: '风', trait: '优雅公正，善于协调' },
    { name: '天蝎座', start: '10-24', end: '11-21', element: '水', trait: '神秘深沉，洞察力强' },
    { name: '射手座', start: '11-22', end: '12-21', element: '火', trait: '乐观自由，热爱冒险' }
];

// ==================== 八卦信息 ====================

const baguaInfo = {
    '乾': { element: '金', direction: '西北', meaning: '天行健，君子以自强不息' },
    '坤': { element: '土', direction: '西南', meaning: '地势坤，君子以厚德载物' },
    '震': { element: '木', direction: '东', meaning: '震惊百里，奋发有为' },
    '巽': { element: '木', direction: '东南', meaning: '随风巽，君子以申命行事' },
    '坎': { element: '水', direction: '北', meaning: '水洊至，习教事' },
    '离': { element: '火', direction: '南', meaning: '明两作，大人以继明照四方' },
    '艮': { element: '土', direction: '东北', meaning: '兼山艮，君子以思不出其位' },
    '兑': { element: '金', direction: '西', meaning: '丽泽兑，君子以朋友讲习' }
};

// ==================== 工具函数 ====================

// 获取天干
function getHeavenlyStem(year) {
    return heavenlyStems[(year - 4) % 10];
}

// 获取地支
function getEarthlyBranch(year) {
    return earthlyBranches[(year - 4) % 12];
}

// 获取纳音
function getNayin(stem, branch) {
    return nayinTable[stem + branch] || '未知';
}

// 获取星座
function getConstellation(month, day) {
    const date = month * 100 + day;
    
    for (let c of constellations) {
        const [startMonth, startDay] = c.start.split('-').map(Number);
        const [endMonth, endDay] = c.end.split('-').map(Number);
        
        const startDate = startMonth * 100 + startDay;
        const endDate = endMonth * 100 + endDay;
        
        if (startDate > endDate) {
            // 跨年的情况（如摩羯座）
            if (date >= startDate || date <= endDate) {
                return c;
            }
        } else {
            if (date >= startDate && date <= endDate) {
                return c;
            }
        }
    }
    
    return constellations[0];
}

// 计算八字
function calculateBazi(year, month, day, hour) {
    const yearStem = getHeavenlyStem(year);
    const yearBranch = getEarthlyBranch(year);
    
    // 简化版月柱计算（实际需要更精确的节气计算）
    const monthBranch = earthlyBranches[(month + 2) % 12];
    const monthStem = heavenlyStems[((year - 4) % 10 * 2 + (month + 2) % 12) % 10];
    
    // 简化版日柱计算
    const dayStem = heavenlyStems[(day - 1) % 10];
    const dayBranch = earthlyBranches[(day - 1) % 12];
    
    // 简化版时柱计算
    const hourIndex = Math.floor((hour + 1) % 24 / 2);
    const hourBranch = earthlyBranches[hourIndex];
    const hourStem = heavenlyStems[((year - 4) % 10 * 2 + hourIndex) % 10];
    
    return {
        year: yearStem + yearBranch,
        month: monthStem + monthBranch,
        day: dayStem + dayBranch,
        hour: hourStem + hourBranch,
        stems: [yearStem, monthStem, dayStem, hourStem],
        branches: [yearBranch, monthBranch, dayBranch, hourBranch]
    };
}

// 分析五行
function analyzeWuxing(bazi) {
    const wuxingCount = { '金': 0, '木': 0, '水': 0, '火': 0, '土': 0 };
    
    bazi.stems.forEach(stem => {
        wuxingCount[stemWuxing[stem]]++;
    });
    
    bazi.branches.forEach(branch => {
        wuxingCount[branchWuxing[branch]]++;
    });
    
    return wuxingCount;
}

// 获取缺失的五行
function getMissingWuxing(wuxingCount) {
    const missing = [];
    for (let [element, count] of Object.entries(wuxingCount)) {
        if (count === 0) {
            missing.push(element);
        }
    }
    return missing;
}

// 根据五行和性别推荐名字
// excludeNames: 要排除的名字列表（上次生成过的名字）
function recommendNamesByWuxing(missing, gender, length, source, excludeNames = []) {
    let candidates = [];
    
    if (source === 'random') {
        Object.values(ancientBooks).forEach(book => {
            candidates = candidates.concat(book);
        });
    } else {
        candidates = ancientBooks[source] || [];
    }
    
    // 第一步：按字数筛选（length=1 为单字名，length=2 为双字名）
    let lengthFiltered = candidates.filter(name => {
        return name.name.length === length;
    });
    
    // 如果指定字数的名字太少，使用全部名字
    candidates = lengthFiltered.length >= 5 ? lengthFiltered : candidates;
    
    // 第二步：性别筛选（优先选择适合该性别或通用的名字）
    const genderFiltered = candidates.filter(name => {
        if (gender === 'male') {
            return name.gender === 'male' || name.gender === 'both';
        } else if (gender === 'female') {
            return name.gender === 'female' || name.gender === 'both';
        }
        return true;
    });
    
    // 第三步：根据缺失的五行筛选
    let filtered = genderFiltered.filter(name => {
        if (!missing || missing.length === 0) return true;
        return missing.some(e => name.wuxing.includes(e));
    });
    
    // 如果五行筛选后名字太少，放宽条件
    if (filtered.length < 5) {
        filtered = genderFiltered;
    }
    
    // 第四步：排除之前生成过的名字（降低重复率）
    if (excludeNames && excludeNames.length > 0) {
        // 计算最大允许的重复数量（20%）
        const maxDuplicates = Math.floor(filtered.length * 0.2);
        
        // 分离出未重复和已重复的名字
        const nonDuplicateNames = filtered.filter(name => !excludeNames.includes(name.name));
        const duplicateNames = filtered.filter(name => excludeNames.includes(name.name));
        
        // 如果未重复的名字足够多，优先使用未重复的
        if (nonDuplicateNames.length >= 10) {
            filtered = nonDuplicateNames;
        } else {
            // 如果未重复的不够，混合使用（保持重复率不超过 20%）
            const neededCount = Math.max(10, Math.floor(nonDuplicateNames.length / 0.8));
            const allowedDuplicates = Math.min(maxDuplicates, neededCount - nonDuplicateNames.length);
            
            // 随机选择一些未重复的和一些重复的
            const shuffledNonDup = nonDuplicateNames.sort(() => Math.random() - 0.5);
            const shuffledDup = duplicateNames.sort(() => Math.random() - 0.5);
            
            filtered = [
                ...shuffledNonDup.slice(0, neededCount - allowedDuplicates),
                ...shuffledDup.slice(0, allowedDuplicates)
            ];
        }
    }
    
    // 第五步：根据性别特征排序（给符合性别气质的名字更高优先级）
    if (gender === 'male') {
        const malePositiveKeywords = ['阳', '刚', '强', '伟', '博', '志', '远', '浩', '峻', '茂', 
                                       '骏', '鹏', '飞', '逸', '翰', '俊', '杰', '铭', '哲', '轩',
                                       '云', '星', '辰', '天', '弘', '毅', '仁', '智', '勇'];
        filtered.sort((a, b) => {
            const aScore = malePositiveKeywords.reduce((sum, k) => sum + (a.name.includes(k) ? 1 : 0), 0);
            const bScore = malePositiveKeywords.reduce((sum, k) => sum + (b.name.includes(k) ? 1 : 0), 0);
            // 优先男孩名
            const aGenderScore = a.gender === 'male' ? 2 : (a.gender === 'both' ? 1 : 0);
            const bGenderScore = b.gender === 'male' ? 2 : (b.gender === 'both' ? 1 : 0);
            return (bGenderScore + bScore) - (aGenderScore + aScore);
        });
    } else if (gender === 'female') {
        const femalePositiveKeywords = ['婉', '婷', '雅', '静', '柔', '美', '丽', '淑', '慧', '秀',
                                         '梦', '诗', '涵', '雨', '雪', '月', '荷', '玲', '珑', '馨',
                                         '欣', '怡', '芙', '薇', '华', '若', '芳', '香', '清', '晓'];
        filtered.sort((a, b) => {
            const aScore = femalePositiveKeywords.reduce((sum, k) => sum + (a.name.includes(k) ? 1 : 0), 0);
            const bScore = femalePositiveKeywords.reduce((sum, k) => sum + (b.name.includes(k) ? 1 : 0), 0);
            // 优先女孩名
            const aGenderScore = a.gender === 'female' ? 2 : (a.gender === 'both' ? 1 : 0);
            const bGenderScore = b.gender === 'female' ? 2 : (b.gender === 'both' ? 1 : 0);
            return (bGenderScore + bScore) - (aGenderScore + aScore);
        });
    }
    
    // 返回 10-20 个名字（如果足够的话）
    const targetCount = Math.floor(Math.random() * 11) + 10; // 10-20 之间的随机数
    const result = filtered.slice(0, targetCount);
    
    // 保存上次生成的名字
    lastGeneratedNames = result;
    
    return result;
}

// ==================== 收藏功能 ====================

let favorites = [];
let namingHistory = [];
let currentNamingResult = null; // 保存当前起名结果用于导出
let generatedNamePool = []; // 记录本次生成的所有名字，用于降低重复率
let lastGeneratedNames = []; // 上次生成的名字列表

// 从 localStorage 加载收藏
function loadFavorites() {
    const saved = localStorage.getItem('babyNameFavorites');
    if (saved) {
        try {
            favorites = JSON.parse(saved);
        } catch (e) {
            favorites = [];
        }
    }
    displayFavorites();
}

// 加载历史记录
function loadHistory() {
    const saved = localStorage.getItem('babyNameHistory');
    if (saved) {
        try {
            namingHistory = JSON.parse(saved);
        } catch (e) {
            namingHistory = [];
        }
    }
    displayHistory();
}

// 保存收藏到 localStorage
function saveFavorites() {
    localStorage.setItem('babyNameFavorites', JSON.stringify(favorites));
    displayFavorites();
}

// 保存到历史记录
function saveHistory(record) {
    namingHistory.unshift({
        ...record,
        id: Date.now(),
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('babyNameHistory', JSON.stringify(namingHistory));
    displayHistory();
}

// 检查名字是否已收藏
function isFavorited(fullName) {
    return favorites.some(fav => fav.fullName === fullName);
}

// 添加/取消收藏
function toggleFavorite(nameData, surname) {
    const fullName = surname + nameData.name;
    const index = favorites.findIndex(fav => fav.fullName === fullName);
    
    if (index > -1) {
        // 取消收藏
        favorites.splice(index, 1);
        showToast('已取消收藏');
    } else {
        // 添加收藏
        favorites.push({
            fullName: fullName,
            name: nameData.name,
            surname: surname,
            pinyin: nameData.pinyin,
            source: nameData.source,
            meaning: nameData.meaning,
            wuxing: nameData.wuxing,
            gender: nameData.gender,
            personality: nameData.personality || '',
            favoritedAt: new Date().toISOString()
        });
        showToast('已添加到收藏');
    }
    
    saveFavorites();
    updateFavoriteButtons(surname);
}

// 显示收藏的名字
function displayFavorites() {
    const section = document.getElementById('favoritesSection');
    const grid = document.getElementById('favoritesGrid');
    const countSpan = document.getElementById('favoritesCount');
    
    if (favorites.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    countSpan.textContent = `已收藏 ${favorites.length} 个名字`;
    grid.innerHTML = '';
    
    favorites.forEach(fav => {
        const card = document.createElement('div');
        card.className = 'name-card';
        
        let genderBadge = '';
        if (fav.gender === 'male') {
            genderBadge = '<span class="gender-badge male">男孩</span>';
        } else if (fav.gender === 'female') {
            genderBadge = '<span class="gender-badge female">女孩</span>';
        } else {
            genderBadge = '<span class="gender-badge both">通用</span>';
        }
        
        // 性格分析（如果有）
        const personalityHtml = fav.personality 
            ? `<div class="personality">
                   <span class="personality-icon">🔮</span>
                   <span><strong>性格：</strong>${fav.personality}</span>
               </div>` 
            : '';
        
        card.innerHTML = `
            <div class="name-header">
                <div class="name">${fav.fullName}</div>
                ${genderBadge}
            </div>
            <div class="pinyin">${fav.surname.toUpperCase()} ${fav.pinyin}</div>
            
            <div class="name-details">
                <div class="detail-row">
                    <span class="detail-label">📚 出处：</span>
                    <span class="detail-content">${fav.source}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">💡 寓意：</span>
                    <span class="detail-content">${fav.meaning}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">☯️ 五行：</span>
                    <span class="detail-content">${fav.wuxing}</span>
                </div>
                ${personalityHtml}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// 更新收藏按钮状态
function updateFavoriteButtons(surname) {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const name = btn.dataset.name;
        const fullName = surname + name;
        if (isFavorited(fullName)) {
            btn.classList.add('active');
            btn.textContent = '⭐';
        } else {
            btn.classList.remove('active');
            btn.textContent = '☆';
        }
    });
}

// 显示提示消息
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 1000;
        animation: fadeInOut 2s ease-in-out;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// ==================== 历史记录功能 ====================

function displayHistory() {
    const section = document.getElementById('historySection');
    const list = document.getElementById('historyList');
    const countSpan = document.getElementById('historyCount');
    
    if (namingHistory.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    countSpan.textContent = `共 ${namingHistory.length} 条记录`;
    list.innerHTML = '';
    
    namingHistory.slice(0, 20).forEach(record => {
        const item = document.createElement('div');
        item.className = 'history-item';
        
        const date = new Date(record.timestamp);
        const dateStr = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`;
        
        item.innerHTML = `
            <div class="history-item-header">
                <span class="history-item-name">${record.surname}${record.names ? record.names[0] : ''} 等${record.names?.length || 0}个名字</span>
                <span class="history-item-date">${dateStr}</span>
            </div>
            <div class="history-item-info">
                <span class="history-item-tag">性别：${record.gender === 'male' ? '男' : '女'}</span>
                <span class="history-item-tag">来源：${getSourceName(record.source)}</span>
                <span class="history-item-tag">八字：${record.bazi?.year || ''} ${record.bazi?.month || ''} ${record.bazi?.day || ''} ${record.bazi?.hour || ''}</span>
            </div>
        `;
        
        item.onclick = () => loadHistoryRecord(record);
        list.appendChild(item);
    });
}

function getSourceName(source) {
    const sources = {
        'shijing': '诗经',
        'chuci': '楚辞',
        'lunyu': '论语',
        'mengzi': '孟子',
        'daxue': '大学',
        'zhongyong': '中庸',
        'zhouyi': '周易',
        'shangshu': '尚书',
        'liji': '礼记',
        'daodejing': '道德经',
        'tangshi': '唐诗',
        'songci': '宋词',
        'random': '随机'
    };
    return sources[source] || source;
}

function loadHistoryRecord(record) {
    // 恢复表单数据
    document.getElementById('surname').value = record.surname;
    document.getElementById('gender').value = record.gender;
    document.getElementById('source').value = record.source;
    
    // 显示历史记录中的名字
    if (record.names && record.names.length > 0) {
        alert('已加载历史记录，请查看推荐名字区域');
    }
}

// ==================== 导出功能 ====================

function exportToPDF() {
    if (!currentNamingResult) {
        alert('请先生成起名结果！');
        return;
    }
    
    const content = generateFullReportContent();
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>新生儿起名完整报告</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');
                body { font-family: 'Microsoft YaHei', sans-serif; padding: 40px; background: #fff; }
                .cover { text-align: center; padding: 80px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; margin-bottom: 30px; border-radius: 15px; page-break-after: always; }
                .cover h1 { font-size: 3.5em; margin: 0 0 20px 0; }
                .cover .subtitle { font-size: 1.5em; margin-bottom: 40px; opacity: 0.95; }
                .cover .info { font-size: 1.1em; line-height: 2; opacity: 0.9; }
                .section { margin: 30px 0; padding: 20px; background: #f8f9fa; border-radius: 10px; }
                .section-title { font-size: 1.8em; color: #667eea; border-bottom: 3px solid #667eea; padding-bottom: 10px; margin-bottom: 20px; }
                .subsection { margin: 20px 0; padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
                .subsection-title { font-size: 1.3em; color: #f5576c; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
                .bazi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin: 20px 0; }
                .bazi-pillar { background: linear-gradient(135deg, #f0f4ff 0%, #e8f4f8 100%); padding: 15px; border-radius: 8px; text-align: center; border: 2px solid #667eea; }
                .bazi-pillar .label { font-size: 0.9em; color: #667eea; margin-bottom: 8px; }
                .bazi-pillar .ganzi { font-size: 2em; color: #1e3a5f; font-weight: bold; font-family: 'Ma Shan Zheng', cursive; }
                .bazi-pillar .wuxing { font-size: 0.85em; color: #666; margin-top: 5px; }
                .wuxing-bars { display: flex; gap: 10px; margin: 15px 0; }
                .wuxing-bar { flex: 1; text-align: center; }
                .wuxing-bar .bar { height: 80px; background: linear-gradient(to top, #667eea, #764ba2); border-radius: 8px 8px 0 0; position: relative; }
                .wuxing-bar .label { margin-top: 8px; font-weight: bold; color: #667eea; }
                .wuxing-bar .count { position: absolute; top: -25px; left: 50%; transform: translateX(-50%); font-weight: bold; color: #f5576c; }
                .name-card { background: white; border-radius: 10px; padding: 20px; margin: 15px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1); page-break-inside: avoid; }
                .name { font-size: 2.5em; color: #f5576c; font-family: 'Ma Shan Zheng', cursive; margin-bottom: 10px; }
                .detail-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 15px; }
                .detail-item { background: #f8f9fa; padding: 12px; border-radius: 6px; border-left: 3px solid #667eea; }
                .detail-item strong { color: #667eea; display: block; margin-bottom: 5px; font-size: 0.9em; }
                .detail-item p { margin: 0; color: #555; line-height: 1.6; font-size: 0.9em; }
                .bagua-info, .constellation-info, .nayin-info { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border: 2px solid #f59e0b; }
                .info-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #eee; }
                .info-row:last-child { border-bottom: none; }
                .info-label { color: #667eea; font-weight: bold; }
                .info-value { color: #555; }
                .watermark { position: fixed; bottom: 20px; right: 20px; font-size: 0.8em; color: rgba(102, 126, 234, 0.3); }
                .page-footer { position: fixed; bottom: 0; left: 0; right: 0; text-align: center; padding: 15px; background: #f8f9fa; border-top: 2px solid #667eea; font-size: 0.9em; color: #667eea; }
                @media print { 
                    .no-print { display: none !important; } 
                    body { padding: 0; }
                    .cover { page-break-after: always; height: 100vh; display: flex; flex-direction: column; justify-content: center; }
                    .section { page-break-inside: avoid; }
                    .name-card { page-break-inside: avoid; }
                }
            </style>
        </head>
        <body>
            ${content}
            <div class="watermark">新生儿起名报告 · ${new Date().toLocaleDateString('zh-CN')}</div>
            <div class="page-footer no-print">© 传承中华文化 · 赐子好名</div>
            <button class="no-print" onclick="window.print()" style="position:fixed;bottom:80px;left:20px;padding:15px 30px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;border:none;border-radius:8px;cursor:pointer;font-size:1em;box-shadow:0 4px 15px rgba(0,0,0,0.3);">🖨️ 打印 / 另存为 PDF</button>
        </body>
        </html>
    `);
    printWindow.document.close();
}

function exportToWord() {
    if (!currentNamingResult) {
        alert('请先生成起名结果！');
        return;
    }
    
    const content = generateReportContent();
    const blob = new Blob([`
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>新生儿起名报告</title></head>
        <body>${content}</body>
        </html>
    `], { type: 'application/msword' });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `起名报告_${currentNamingResult.surname}_${new Date().getTime()}.doc`;
    link.click();
    URL.revokeObjectURL(url);
}

function generateReportContent() {
    const r = currentNamingResult;
    const namesHtml = r.names.map(n => `
        <div class="name-card">
            <div class="name">${n.fullName}</div>
            <p><strong>拼音：</strong>${n.pinyin}</p>
            <p><strong>出处：</strong>${n.source}</p>
            <p><strong>寓意：</strong>${n.meaning}</p>
            <p><strong>五行：</strong>${n.wuxing}</p>
            ${n.personality ? `<p><strong>性格：</strong>${n.personality}</p>` : ''}
        </div>
    `).join('');
    
    return `
        <div class="cover">
            <h1>👶 新生儿起名报告</h1>
            <p>传承经典 · 五行平衡 · 寓意美好</p>
            <p style="margin-top:40px;font-size:1em;opacity:0.8;">生成时间：${new Date().toLocaleString('zh-CN')}</p>
        </div>
        
        <div class="section">
            <h2 class="section-title">📋 基本信息</h2>
            <p><strong>姓氏：</strong>${r.surname}</p>
            <p><strong>性别：</strong>${r.gender === 'male' ? '男' : '女'}</p>
            <p><strong>名字来源：</strong>${getSourceName(r.source)}</p>
        </div>
        
        <div class="section">
            <h2 class="section-title">📅 生辰八字</h2>
            <p><strong>出生年份：</strong>${r.birthYear}年</p>
            <p><strong>八字：</strong>${r.bazi?.year || ''} ${r.bazi?.month || ''} ${r.bazi?.day || ''} ${r.bazi?.hour || ''}</p>
            <p><strong>五行分析：</strong>${r.wuxingAnalysis || ''}</p>
        </div>
        
        <div class="section">
            <h2 class="section-title">✨ 推荐名字</h2>
            ${namesHtml}
        </div>
    `;
}

// ==================== 主程序 ====================

document.addEventListener('DOMContentLoaded', function() {
    // 加载收藏和历史
    loadFavorites();
    loadHistory();
    
    const generateBtn = document.getElementById('generateBtn');
    const analysisSection = document.getElementById('analysisSection');
    const resultsSection = document.getElementById('resultsSection');
    const toolbarSection = document.getElementById('toolbarSection');
    const clearFavoritesBtn = document.getElementById('clearFavoritesBtn');
    const exportPdfBtn = document.getElementById('exportPdfBtn');
    const exportWordBtn = document.getElementById('exportWordBtn');
    const historyBtn = document.getElementById('historyBtn');
    const posterBtn = document.getElementById('posterBtn');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    
    // 导出 PDF
    exportPdfBtn.addEventListener('click', exportToPDF);
    
    // 导出 Word
    exportWordBtn.addEventListener('click', exportToWord);
    
    // 显示历史记录
    historyBtn.addEventListener('click', function() {
        const historySection = document.getElementById('historySection');
        historySection.style.display = historySection.style.display === 'none' ? 'block' : 'none';
    });
    
    // 生成海报
    posterBtn.addEventListener('click', generatePoster);
    
    // 清空历史
    clearHistoryBtn.addEventListener('click', function() {
        if (confirm('确定要清空所有历史记录吗？')) {
            namingHistory = [];
            localStorage.removeItem('babyNameHistory');
            displayHistory();
        }
    });
    
    generateBtn.addEventListener('click', function() {
        // 获取基本信息
        const surname = document.getElementById('surname').value.trim();
        const gender = document.getElementById('gender').value;
        const nameLength = parseInt(document.getElementById('nameLength').value);
        const source = document.getElementById('source').value;
        
        // 获取生辰信息
        const birthYear = parseInt(document.getElementById('birthYear').value);
        const birthMonth = parseInt(document.getElementById('birthMonth').value);
        const birthDay = parseInt(document.getElementById('birthDay').value);
        const birthHour = parseInt(document.getElementById('birthHour').value);
        
        // 验证输入
        if (!surname || !gender || !nameLength || !source) {
            alert('请填写完整的基本信息！');
            return;
        }
        
        if (!birthYear || !birthMonth || !birthDay || birthHour === undefined) {
            alert('请填写完整的生辰信息！');
            return;
        }
        
        // 计算八字
        const bazi = calculateBazi(birthYear, birthMonth, birthDay, birthHour);
        
        // 分析五行
        const wuxingCount = analyzeWuxing(bazi);
        const missingWuxing = getMissingWuxing(wuxingCount);
        
        // 显示分析结果
        displayAnalysis(bazi, wuxingCount, missingWuxing, birthMonth, birthDay);
        
        // 生成名字（第一次生成）
        const recommendedNames = recommendNamesByWuxing(missingWuxing, gender, nameLength, source, []);
        displayNames(surname, recommendedNames, nameLength);
        
        // 保存当前结果用于导出
        currentNamingResult = {
            surname: surname,
            gender: gender,
            source: source,
            birthYear: birthYear,
            birthMonth: birthMonth,
            birthDay: birthDay,
            birthHour: birthHour,
            bazi: bazi,
            wuxingCount: wuxingCount,
            missingWuxing: missingWuxing,
            names: recommendedNames.map(n => ({
                fullName: surname + n.name,
                ...n
            }))
        };
        
        // 保存到历史记录
        saveHistory({
            surname: surname,
            gender: gender,
            source: source,
            birthYear: birthYear,
            bazi: bazi,
            names: recommendedNames.map(n => n.name)
        });
        
        // 显示结果区域和工具栏
        analysisSection.style.display = 'block';
        resultsSection.style.display = 'block';
        toolbarSection.style.display = 'flex';
        refreshBtn.style.display = 'block'; // 显示刷新按钮
        
        // 滚动到结果区域
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // 刷新名字按钮
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener('click', function() {
        const surname = document.getElementById('surname').value.trim();
        const gender = document.getElementById('gender').value;
        const nameLength = parseInt(document.getElementById('nameLength').value);
        const source = document.getElementById('source').value;
        const birthYear = parseInt(document.getElementById('birthYear').value);
        const birthMonth = parseInt(document.getElementById('birthMonth').value);
        const birthDay = parseInt(document.getElementById('birthDay').value);
        const birthHour = parseInt(document.getElementById('birthHour').value);
        
        // 使用上次生成的名字作为排除列表
        const excludeNames = lastGeneratedNames.map(n => n.name);
        
        // 生成新的名字（排除之前的名字）
        const recommendedNames = recommendNamesByWuxing(
            currentNamingResult.missingWuxing, 
            gender, 
            nameLength, 
            source,
            excludeNames
        );
        
        displayNames(surname, recommendedNames, nameLength);
        
        // 更新当前结果
        currentNamingResult.names = recommendedNames.map(n => ({
            fullName: surname + n.name,
            ...n
        }));
        
        // 更新历史记录
        saveHistory({
            surname: surname,
            gender: gender,
            source: source,
            birthYear: birthYear,
            bazi: currentNamingResult.bazi,
            names: recommendedNames.map(n => n.name)
        });
        
        // 滚动到结果区域
        resultsSection.scrollIntoView({ behavior: 'smooth' });
        
        showToast('已刷新名字，重复率低于 20%');
    });
    
    // 清空收藏按钮
    clearFavoritesBtn.addEventListener('click', function() {
        if (confirm('确定要清空所有收藏的名字吗？')) {
            favorites = [];
            saveFavorites();
            // 更新所有收藏按钮状态
            document.querySelectorAll('.favorite-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.textContent = '☆';
            });
        }
    });
});

// ==================== 海报生成功能 ====================

function generatePoster() {
    if (favorites.length === 0) {
        alert('请先收藏一些名字！');
        return;
    }
    
    // 选择第一个收藏的名字生成海报
    const fav = favorites[0];
    
    const poster = document.createElement('div');
    poster.className = 'poster-container';
    poster.innerHTML = `
        <div class="poster-content">
            <button class="poster-close" onclick="this.parentElement.parentElement.remove()">×</button>
            <h2 style="color: white; font-size: 1.5em;">👶 精选好名</h2>
            <div class="poster-name">${fav.fullName}</div>
            <div class="poster-details">
                <p><strong>📚 出处：</strong>${fav.source}</p>
                <p><strong>💡 寓意：</strong>${fav.meaning}</p>
                <p><strong>☯️ 五行：</strong>${fav.wuxing}</p>
                <p><strong>🔤 拼音：</strong>${fav.pinyin}</p>
                ${fav.personality ? `<p><strong>🔮 性格：</strong>${fav.personality}</p>` : ''}
            </div>
            <div class="poster-watermark">新生儿起名 · ${new Date().toLocaleDateString('zh-CN')}</div>
            <button onclick="downloadPoster(this)" style="margin-top:20px;padding:12px 30px;background:#78350f;color:white;border:none;border-radius:8px;cursor:pointer;font-size:1em;">📥 下载海报</button>
        </div>
    `;
    
    document.body.appendChild(poster);
}

function downloadPoster(btn) {
    const posterContent = btn.parentElement;
    
    // 使用 html2canvas 需要引入库，这里用简单的方式
    alert('提示：在海带上右键选择"打印"，然后选择"另存为 PDF"即可保存精美海报！');
    window.print();
}

// ==================== 生肖分析功能 ====================

const zodiacInfo = {
    '鼠': { years: [1948, 1960, 1972, 1984, 1996, 2008, 2020], trait: '聪明机智，善于交际', lucky: '金、水', color: '蓝、金' },
    '牛': { years: [1949, 1961, 1973, 1985, 1997, 2009, 2021], trait: '勤劳踏实，意志坚定', lucky: '土、金', color: '黄、白' },
    '虎': { years: [1950, 1962, 1974, 1986, 1998, 2010, 2022], trait: '勇敢自信，有领导力', lucky: '木、火', color: '绿、红' },
    '兔': { years: [1951, 1963, 1975, 1987, 1999, 2011, 2023], trait: '温和善良，心思细腻', lucky: '木、水', color: '绿、黑' },
    '龙': { years: [1952, 1964, 1976, 1988, 2000, 2012, 2024], trait: '气宇轩昂，事业有成', lucky: '土、金', color: '黄、白' },
    '蛇': { years: [1953, 1965, 1977, 1989, 2001, 2013, 2025], trait: '智慧深沉，洞察力强', lucky: '火、土', color: '红、黄' },
    '马': { years: [1954, 1966, 1978, 1990, 2002, 2014], trait: '热情开朗，自由奔放', lucky: '木、火', color: '绿、红' },
    '羊': { years: [1955, 1967, 1979, 1991, 2003, 2015], trait: '温顺善良，富有同情心', lucky: '土、火', color: '黄、紫' },
    '猴': { years: [1956, 1968, 1980, 1992, 2004, 2016], trait: '聪明伶俐，多才多艺', lucky: '金、水', color: '白、蓝' },
    '鸡': { years: [1957, 1969, 1981, 1993, 2005, 2017], trait: '勤奋守时，外表亮丽', lucky: '金、土', color: '金、棕' },
    '狗': { years: [1958, 1970, 1982, 1994, 2006, 2018], trait: '忠诚可靠，正义感强', lucky: '土、火', color: '黄、红' },
    '猪': { years: [1959, 1971, 1983, 1995, 2007, 2019], trait: '憨厚老实，福气满满', lucky: '水、木', color: '黑、绿' }
};

function getZodiac(year) {
    const zodiacOrder = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    return zodiacOrder[(year - 4) % 12];
}

function analyzeZodiac(year) {
    const zodiac = getZodiac(year);
    return zodiacInfo[zodiac] || null;
}

// 显示分析结果
function displayAnalysis(bazi, wuxingCount, missing, month, day) {
    // 绘制八字命盘图
    drawBaziChart(bazi, wuxingCount);
    
    // 八字排盘
    document.getElementById('baziResult').innerHTML = `
        <p><strong>年柱：</strong>${bazi.year}</p>
        <p><strong>月柱：</strong>${bazi.month}</p>
        <p><strong>日柱：</strong>${bazi.day}</p>
        <p><strong>时柱：</strong>${bazi.hour}</p>
    `;
    
    // 五行分析
    const wuxingHtml = Object.entries(wuxingCount).map(([element, count]) => {
        const bar = '█'.repeat(count);
        const status = count === 0 ? '<span style="color: red;">（缺）</span>' : '';
        return `<p><strong>${element}：</strong>${bar} ${count}${status}</p>`;
    }).join('');
    
    document.getElementById('wuxingResult').innerHTML = wuxingHtml;
    
    if (missing.length > 0) {
        document.getElementById('wuxingResult').innerHTML += 
            `<p style="color: #f5576c; margin-top: 10px;"><strong>建议：</strong>起名时宜用${missing.join('、')}属性的字</p>`;
    }
    
    // 纳音五行
    const yearNayin = getNayin(bazi.stems[0], bazi.branches[0]);
    document.getElementById('nayinResult').innerHTML = `
        <p><strong>年命纳音：</strong>${yearNayin}</p>
        <p><strong>属性：</strong>${baguaInfo[yearNayin[0]]?.element || '土'}</p>
    `;
    
    // 八卦分析
    const gua = Object.keys(baguaInfo)[Math.floor(Math.random() * 8)];
    const guaInfo = baguaInfo[gua];
    document.getElementById('baguaResult').innerHTML = `
        <p><strong>本命卦：</strong>${gua}卦</p>
        <p><strong>五行：</strong>${guaInfo.element}</p>
        <p><strong>方位：</strong>${guaInfo.direction}</p>
        <p><strong>象曰：</strong>${guaInfo.meaning}</p>
    `;
    
    // 星座分析
    const constellation = getConstellation(month, day);
    document.getElementById('constellationResult').innerHTML = `
        <p><strong>星座：</strong>${constellation.name}</p>
        <p><strong>元素：</strong>${constellation.element}</p>
        <p><strong>特质：</strong>${constellation.trait}</p>
    `;
}

// 显示名字列表
function displayNames(surname, names, length) {
    const grid = document.getElementById('namesGrid');
    grid.innerHTML = '';
    
    names.forEach(nameData => {
        const card = document.createElement('div');
        card.className = 'name-card';
        
        const fullName = surname + nameData.name;
        
        // 性别标识
        let genderBadge = '';
        if (nameData.gender === 'male') {
            genderBadge = '<span class="gender-badge male">男孩</span>';
        } else if (nameData.gender === 'female') {
            genderBadge = '<span class="gender-badge female">女孩</span>';
        } else {
            genderBadge = '<span class="gender-badge both">通用</span>';
        }
        
        // 收藏按钮
        const favorited = isFavorited(fullName);
        const favoriteBtn = `<button class="favorite-btn ${favorited ? 'active' : ''}" 
                                   data-name="${nameData.name}" 
                                   onclick="toggleFavoriteByName('${nameData.name}', '${surname}')">
                                ${favorited ? '⭐' : '☆'}
                             </button>`;
        
        // 获取详细解析（有则用，无则生成默认）
        const detailed = nameData.detailed || generateDefaultDetailed(nameData);
        
        // 生成详细备注 HTML
        const detailedHtml = `
            <div class="detailed-info" id="detail-${fullName}">
                <div class="detailed-section">
                    <h4>📖 易经解释</h4>
                    <p>${detailed.yiJing}</p>
                </div>
                <div class="detailed-section">
                    <h4>☯️ 八卦分析</h4>
                    <p>${detailed.baGua}</p>
                </div>
                <div class="detailed-section">
                    <h4>🔮 紫微斗数</h4>
                    <p>${detailed.ziWei}</p>
                </div>
                <div class="detailed-section">
                    <h4>🎵 纳音五行</h4>
                    <p>${detailed.naYin}</p>
                </div>
                <div class="detailed-section">
                    <h4>⚛️ 五行分析</h4>
                    <p>${detailed.wuXing}</p>
                </div>
                <div class="detailed-section">
                    <h4>🔮 未来命运</h4>
                    <p>${detailed.destiny}</p>
                </div>
                <div class="detailed-section">
                    <h4>💼 前程事业</h4>
                    <p>${detailed.career}</p>
                </div>
                <div class="detailed-section">
                    <h4>💕 婚姻感情</h4>
                    <p>${detailed.marriage}</p>
                </div>
                <div class="detailed-section">
                    <h4>🎓 学历学业</h4>
                    <p>${detailed.education}</p>
                </div>
            </div>
        `;
        
        card.innerHTML = `
            <div class="name-header">
                <div class="name">${fullName}</div>
                ${genderBadge}
            </div>
            ${favoriteBtn}
            <div class="pinyin">${surname.toUpperCase()} ${nameData.pinyin}</div>
            
            <div class="name-details">
                <div class="detail-row">
                    <span class="detail-label">📚 出处：</span>
                    <span class="detail-content">${nameData.source}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">💡 寓意：</span>
                    <span class="detail-content">${nameData.meaning}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">☯️ 五行：</span>
                    <span class="detail-content">${nameData.wuxing}</span>
                </div>
                ${nameData.personality ? `
                <div class="detail-row">
                    <span class="detail-label">🔮 性格：</span>
                    <span class="detail-content">${nameData.personality}</span>
                </div>
                ` : ''}
                <button class="toggle-details-btn" onclick="toggleDetails('${fullName}')">
                    📝 查看详细解析 ▼
                </button>
            </div>
            ${detailedHtml}
        `;
        
        grid.appendChild(card);
    });
}

// 切换详细备注显示
function toggleDetails(fullName) {
    const detailEl = document.getElementById(`detail-${fullName}`);
    const btn = event.target;
    
    if (detailEl.classList.contains('show')) {
        detailEl.classList.remove('show');
        btn.textContent = '📝 查看详细解析 ▼';
    } else {
        detailEl.classList.add('show');
        btn.textContent = '📁 收起解析 ▲';
    }
}

// 通过名字切换收藏（供 onclick 调用）
function toggleFavoriteByName(name, surname) {
    const nameData = Object.values(ancientBooks).flatMap(book => book).find(n => n.name === name);
    if (nameData) {
        toggleFavorite(nameData, surname);
    }
}

// ==================== 八字命盘图绘制 ====================

// 五行颜色
const wuxingColors = {
    '金': '#FFD700',
    '木': '#22C55E',
    '水': '#3B82F6',
    '火': '#EF4444',
    '土': '#A87B51'
};

// 绘制八字命盘图
function drawBaziChart(bazi, wuxingCount) {
    const canvas = document.getElementById('baziChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // 清空画布
    ctx.clearRect(0, 0, width, height);
    
    // 背景
    ctx.fillStyle = '#faf8f5';
    ctx.fillRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    // 绘制标题
    ctx.fillStyle = '#1e3a5f';
    ctx.font = 'bold 24px Microsoft YaHei';
    ctx.textAlign = 'center';
    ctx.fillText('八字命盘', centerX, 40);
    
    // 绘制八卦外圈（装饰）
    drawBaguaCircle(ctx, centerX, centerY, 220);
    
    // 绘制四柱
    drawFourPillars(ctx, bazi, centerX, centerY);
    
    // 绘制五行强弱图
    drawWuxingChart(ctx, wuxingCount, 80, height - 100);
    
    // 绘制日主信息
    drawDayMaster(ctx, bazi.stems[2], width - 120, 80);
}

// 绘制八卦外圈
function drawBaguaCircle(ctx, centerX, centerY, radius) {
    const baguaSymbols = ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'];
    const baguaNames = ['乾', '兑', '离', '震', '巽', '坎', '艮', '坤'];
    
    // 外圈圆环
    ctx.strokeStyle = '#2d4a6f';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    
    // 内圈圆环
    ctx.strokeStyle = '#4a6f8f';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 30, 0, Math.PI * 2);
    ctx.stroke();
    
    // 绘制八卦符号
    for (let i = 0; i < 8; i++) {
        const angle = (i * 45 - 90) * Math.PI / 180;
        const symbolX = centerX + Math.cos(angle) * (radius - 15);
        const symbolY = centerY + Math.sin(angle) * (radius - 15);
        
        ctx.fillStyle = '#1e3a5f';
        ctx.font = '28px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(baguaSymbols[i], symbolX, symbolY);
    }
}

// 绘制四柱
function drawFourPillars(ctx, bazi, centerX, centerY) {
    const pillars = [
        { label: '年柱', stem: bazi.stems[0], branch: bazi.branches[0], full: bazi.year },
        { label: '月柱', stem: bazi.stems[1], branch: bazi.branches[1], full: bazi.month },
        { label: '日柱', stem: bazi.stems[2], branch: bazi.branches[2], full: bazi.day },
        { label: '时柱', stem: bazi.stems[3], branch: bazi.branches[3], full: bazi.hour }
    ];
    
    const pillarWidth = 100;
    const pillarHeight = 180;
    const gap = 20;
    const totalWidth = pillarWidth * 4 + gap * 3;
    const startX = centerX - totalWidth / 2 + pillarWidth / 2;
    
    pillars.forEach((pillar, index) => {
        const x = startX + index * (pillarWidth + gap);
        const y = centerY - pillarHeight / 2;
        
        // 柱体背景
        const gradient = ctx.createLinearGradient(x - pillarWidth/2, y, x + pillarWidth/2, y + pillarHeight);
        gradient.addColorStop(0, '#f0f4ff');
        gradient.addColorStop(1, '#e0e8f8');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - pillarWidth/2, y, pillarWidth, pillarHeight);
        
        // 柱体边框
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 2;
        ctx.strokeRect(x - pillarWidth/2, y, pillarWidth, pillarHeight);
        
        // 标签
        ctx.fillStyle = '#667eea';
        ctx.font = 'bold 16px Microsoft YaHei';
        ctx.textAlign = 'center';
        ctx.fillText(pillar.label, x, y + 25);
        
        // 天干
        const stemWuxing = getStemWuxing(pillar.stem);
        ctx.fillStyle = wuxingColors[stemWuxing];
        ctx.font = 'bold 36px Microsoft YaHei';
        ctx.fillText(pillar.stem, x - 25, y + 90);
        
        // 地支
        const branchWuxing = getBranchWuxing(pillar.branch);
        ctx.fillStyle = wuxingColors[branchWuxing];
        ctx.font = 'bold 36px Microsoft YaHei';
        ctx.fillText(pillar.branch, x + 25, y + 90);
        
        // 五行标注
        ctx.fillStyle = '#555';
        ctx.font = '12px Microsoft YaHei';
        ctx.fillText(stemWuxing, x - 25, y + 120);
        ctx.fillText(branchWuxing, x + 25, y + 120);
        
        // 柱名
        ctx.fillStyle = '#1e3a5f';
        ctx.font = 'bold 14px Microsoft YaHei';
        ctx.fillText(pillar.full, x, y + 155);
    });
}

// 绘制五行强弱图
function drawWuxingChart(ctx, wuxingCount, x, y) {
    const elements = ['金', '木', '水', '火', '土'];
    const barWidth = 50;
    const maxHeight = 100;
    const maxCount = Math.max(...Object.values(wuxingCount), 1);
    
    ctx.fillStyle = '#1e3a5f';
    ctx.font = 'bold 16px Microsoft YaHei';
    ctx.textAlign = 'center';
    ctx.fillText('五行强弱', x + barWidth * 2.5, y - 60);
    
    elements.forEach((element, index) => {
        const count = wuxingCount[element];
        const barHeight = (count / maxCount) * maxHeight;
        const bx = x + index * (barWidth + 10);
        const by = y - barHeight;
        
        // 柱状图
        const gradient = ctx.createLinearGradient(bx, by, bx, y);
        gradient.addColorStop(0, wuxingColors[element]);
        gradient.addColorStop(1, adjustColor(wuxingColors[element], -50));
        
        ctx.fillStyle = gradient;
        ctx.fillRect(bx, by, barWidth, barHeight);
        
        // 边框
        ctx.strokeStyle = wuxingColors[element];
        ctx.lineWidth = 2;
        ctx.strokeRect(bx, by, barWidth, barHeight);
        
        // 元素名称
        ctx.fillStyle = '#1e3a5f';
        ctx.font = 'bold 14px Microsoft YaHei';
        ctx.fillText(element, bx + barWidth / 2, y + 20);
        
        // 数量
        ctx.fillStyle = '#333';
        ctx.font = 'bold 12px Microsoft YaHei';
        ctx.fillText(count.toString(), bx + barWidth / 2, by - 5);
    });
}

// 绘制日主信息
function drawDayMaster(ctx, dayStem, x, y) {
    const wuxing = getStemWuxing(dayStem);
    
    // 背景框
    ctx.fillStyle = '#fff9e6';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    const boxWidth = 180;
    const boxHeight = 100;
    ctx.fillRect(x - boxWidth/2, y - boxHeight/2, boxWidth, boxHeight);
    ctx.strokeRect(x - boxWidth/2, y - boxHeight/2, boxWidth, boxHeight);
    
    // 标题
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 16px Microsoft YaHei';
    ctx.textAlign = 'center';
    ctx.fillText('日主（日元）', x, y - 35);
    
    // 日干
    ctx.fillStyle = wuxingColors[wuxing];
    ctx.font = 'bold 48px Microsoft YaHei';
    ctx.fillText(dayStem, x, y + 15);
    
    // 五行
    ctx.fillStyle = '#555';
    ctx.font = '14px Microsoft YaHei';
    ctx.fillText(`属${wuxing}`, x, y + 45);
}

// 获取天干五行
function getStemWuxing(stem) {
    const wuxingMap = {
        '甲': '木', '乙': '木',
        '丙': '火', '丁': '火',
        '戊': '土', '己': '土',
        '庚': '金', '辛': '金',
        '壬': '水', '癸': '水'
    };
    return wuxingMap[stem] || '土';
}

// 获取地支五行
function getBranchWuxing(branch) {
    const wuxingMap = {
        '子': '水', '丑': '土', '寅': '木', '卯': '木',
        '辰': '土', '巳': '火', '午': '火', '未': '土',
        '申': '金', '酉': '金', '戌': '土', '亥': '水'
    };
    return wuxingMap[branch] || '土';
}

// 调整颜色亮度
function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// ==================== 完整报告生成函数 ====================

function generateFullReportContent() {
    const r = currentNamingResult;
    const wuxingCount = r.wuxingCount || { '金': 0, '木': 0, '水': 0, '火': 0, '土': 0 };
    const maxCount = Math.max(...Object.values(wuxingCount), 1);
    
    // 八字排盘
    const baziHtml = `
        <div class="bazi-grid">
            <div class="bazi-pillar">
                <div class="label">年柱</div>
                <div class="ganzi">${r.bazi?.year || '--'}</div>
                <div class="wuxing">${getStemWuxing(r.bazi?.stems?.[0] || '')} ${getBranchWuxing(r.bazi?.branches?.[0] || '')}</div>
            </div>
            <div class="bazi-pillar">
                <div class="label">月柱</div>
                <div class="ganzi">${r.bazi?.month || '--'}</div>
                <div class="wuxing">${getStemWuxing(r.bazi?.stems?.[1] || '')} ${getBranchWuxing(r.bazi?.branches?.[1] || '')}</div>
            </div>
            <div class="bazi-pillar">
                <div class="label">日柱</div>
                <div class="ganzi">${r.bazi?.day || '--'}</div>
                <div class="wuxing">${getStemWuxing(r.bazi?.stems?.[2] || '')} ${getBranchWuxing(r.bazi?.branches?.[2] || '')}</div>
            </div>
            <div class="bazi-pillar">
                <div class="label">时柱</div>
                <div class="ganzi">${r.bazi?.hour || '--'}</div>
                <div class="wuxing">${getStemWuxing(r.bazi?.stems?.[3] || '')} ${getBranchWuxing(r.bazi?.branches?.[3] || '')}</div>
            </div>
        </div>
    `;
    
    // 五行分析条
    const wuxingColors = { '金': '#FFD700', '木': '#22C55E', '水': '#3B82F6', '火': '#EF4444', '土': '#A87B51' };
    const wuxingBarsHtml = Object.entries(wuxingCount).map(([element, count]) => {
        const height = (count / maxCount) * 100;
        const missing = count === 0 ? '<span style="color:red;font-size:0.8em;">（缺）</span>' : '';
        return `
            <div class="wuxing-bar">
                <div class="count">${count}${missing}</div>
                <div class="bar" style="height:${Math.max(height, 10)}%;background:linear-gradient(to top, ${wuxingColors[element]}, ${adjustColor(wuxingColors[element], -50)});"></div>
                <div class="label">${element}</div>
            </div>
        `;
    }).join('');
    
    // 八卦分析
    const guaIndex = ((r.birthYear || 0) + (r.birthMonth || 0) + (r.birthDay || 0)) % 8;
    const guaData = yiJingGua[guaIndex] || yiJingGua[0];
    const baguaHtml = `
        <div class="bagua-info">
            <div class="info-row"><span class="info-label">本命卦</span><span class="info-value">${guaData.name} (${guaData.symbol})</span></div>
            <div class="info-row"><span class="info-label">卦象含义</span><span class="info-value">${guaData.meaning}</span></div>
            <div class="info-row"><span class="info-label">特质</span><span class="info-value">${guaData.trait}</span></div>
            <div class="info-row"><span class="info-label">五行属性</span><span class="info-value">${getGuaWuxing(guaData.name)}</span></div>
        </div>
    `;
    
    // 纳音五行
    const nayinKey = (r.bazi?.year || '').substring(0, 2);
    const nayin = nayinTable[nayinKey] || '未知';
    const nayinHtml = `
        <div class="nayin-info">
            <div class="info-row"><span class="info-label">年命纳音</span><span class="info-value">${nayin}</span></div>
            <div class="info-row"><span class="info-label">纳音解析</span><span class="info-value">${getNayinMeaning(nayin)}</span></div>
        </div>
    `;
    
    // 星座分析
    const constellation = getConstellation(r.birthMonth || 1, r.birthDay || 1);
    const constellationHtml = `
        <div class="constellation-info">
            <div class="info-row"><span class="info-label">星座</span><span class="info-value">${constellation.name}</span></div>
            <div class="info-row"><span class="info-label">元素</span><span class="info-value">${constellation.element}</span></div>
            <div class="info-row"><span class="info-label">性格特质</span><span class="info-value">${constellation.trait}</span></div>
            <div class="info-row"><span class="info-label">幸运色</span><span class="info-value">${getConstellationLuckyColor(constellation.name)}</span></div>
        </div>
    `;
    
    // 生肖分析
    const zodiac = getZodiac(r.birthYear || 2024);
    const zodiacInfo_data = analyzeZodiac(r.birthYear || 2024);
    const zodiacHtml = zodiacInfo_data ? `
        <div class="constellation-info">
            <div class="info-row"><span class="info-label">生肖</span><span class="info-value">${zodiac}</span></div>
            <div class="info-row"><span class="info-label">性格特质</span><span class="info-value">${zodiacInfo_data.trait}</span></div>
            <div class="info-row"><span class="info-label">幸运五行</span><span class="info-value">${zodiacInfo_data.lucky}</span></div>
            <div class="info-row"><span class="info-label">幸运颜色</span><span class="info-value">${zodiacInfo_data.color}</span></div>
        </div>
    ` : '';
    
    // 名字列表
    const namesHtml = r.names.map((n, index) => {
        const detailed = n.detailed || generateDefaultDetailed(n);
        return `
            <div class="name-card">
                <div class="name">${n.fullName}</div>
                <p style="color:#888;margin-bottom:15px;">📯 ${n.pinyin}</p>
                <div class="detail-grid">
                    <div class="detail-item"><strong>📚 出处</strong><p>${n.source}</p></div>
                    <div class="detail-item"><strong>💡 寓意</strong><p>${n.meaning}</p></div>
                    <div class="detail-item"><strong>☯️ 五行</strong><p>${n.wuxing}</p></div>
                    <div class="detail-item"><strong>🔮 性格</strong><p>${n.personality || '待分析'}</p></div>
                </div>
                <div class="detail-grid" style="margin-top:15px;">
                    <div class="detail-item"><strong>📖 易经</strong><p>${detailed.yiJing}</p></div>
                    <div class="detail-item"><strong>☯️ 八卦</strong><p>${detailed.baGua}</p></div>
                    <div class="detail-item"><strong>🔮 紫微</strong><p>${detailed.ziWei}</p></div>
                    <div class="detail-item"><strong>🎵 纳音</strong><p>${detailed.naYin}</p></div>
                </div>
                <div class="detail-grid" style="margin-top:15px;">
                    <div class="detail-item"><strong>🔮 命运</strong><p>${detailed.destiny}</p></div>
                    <div class="detail-item"><strong>💼 事业</strong><p>${detailed.career}</p></div>
                    <div class="detail-item"><strong>💕 婚姻</strong><p>${detailed.marriage}</p></div>
                    <div class="detail-item"><strong>🎓 学业</strong><p>${detailed.education}</p></div>
                </div>
            </div>
        `;
    }).join('');
    
    return `
        <!-- 封面 -->
        <div class="cover">
            <h1>👶 新生儿起名报告</h1>
            <div class="subtitle">传承经典 · 五行平衡 · 寓意美好</div>
            <div class="info">
                <div>姓氏：<strong>${r.surname}</strong></div>
                <div>性别：<strong>${r.gender === 'male' ? '男孩' : '女孩'}</strong></div>
                <div>出生年份：<strong>${r.birthYear}年</strong></div>
                <div>名字来源：<strong>${getSourceName(r.source)}</strong></div>
                <div style="margin-top:30px;font-size:0.95em;">生成时间：${new Date().toLocaleString('zh-CN')}</div>
            </div>
        </div>
        
        <!-- 目录 -->
        <div class="section" style="page-break-after:always;">
            <h2 class="section-title">📑 报告目录</h2>
            <div style="line-height:2.5;font-size:1.1em;">
                <div>一、基本信息 &nbsp;&nbsp;&nbsp;························ 第 2 页</div>
                <div>二、八字排盘分析 &nbsp;&nbsp;&nbsp;··················· 第 2 页</div>
                <div>三、五行强弱分析 &nbsp;&nbsp;&nbsp;··················· 第 3 页</div>
                <div>四、八卦命理分析 &nbsp;&nbsp;&nbsp;··················· 第 3 页</div>
                <div>五、纳音五行分析 &nbsp;&nbsp;&nbsp;··················· 第 4 页</div>
                <div>六、星座生肖分析 &nbsp;&nbsp;&nbsp;··················· 第 4 页</div>
                <div>七、推荐名字详解 &nbsp;&nbsp;&nbsp;··················· 第 5 页起</div>
            </div>
        </div>
        
        <!-- 基本信息和八字 -->
        <div class="section">
            <h2 class="section-title">📋 一、基本信息与八字排盘</h2>
            <div class="subsection">
                <div class="subsection-title">📊 基本信息</div>
                <div class="info-row"><span class="info-label">姓氏</span><span class="info-value">${r.surname}</span></div>
                <div class="info-row"><span class="info-label">性别</span><span class="info-value">${r.gender === 'male' ? '男' : '女'}</span></div>
                <div class="info-row"><span class="info-label">出生年份</span><span class="info-value">${r.birthYear}年</span></div>
                <div class="info-row"><span class="info-label">名字来源</span><span class="info-value">${getSourceName(r.source)}</span></div>
            </div>
            
            <div class="subsection">
                <div class="subsection-title">📅 八字排盘</div>
                ${baziHtml}
                <p style="margin-top:15px;color:#666;line-height:1.8;">
                    <strong>八字解析：</strong>八字即生辰八字，是一个人出生时的干支历日期。年柱代表祖上和早年运势，月柱代表父母和青年运势，日柱代表自己和中年运势，时柱代表子女和晚年运势。
                </p>
            </div>
        </div>
        
        <!-- 五行分析 -->
        <div class="section">
            <h2 class="section-title">⚛️ 二、五行强弱分析</h2>
            <div class="subsection">
                <div class="wuxing-bars">
                    ${wuxingBarsHtml}
                </div>
                <p style="margin-top:15px;color:#666;line-height:1.8;">
                    <strong>五行统计：</strong>
                    金 ${wuxingCount['金']} 个，
                    木 ${wuxingCount['木']} 个，
                    水 ${wuxingCount['水']} 个，
                    火 ${wuxingCount['火']} 个，
                    土 ${wuxingCount['土']} 个。
                </p>
                ${getMissingWuxingAdvice(wuxingCount)}
                <p style="margin-top:15px;color:#666;line-height:1.8;">
                    <strong>五行相生：</strong>金生水，水生木，木生火，火生土，土生金。<br>
                    <strong>五行相克：</strong>金克木，木克土，土克水，水克火，火克金。
                </p>
            </div>
        </div>
        
        <!-- 八卦和纳音 -->
        <div class="section">
            <h2 class="section-title">☯️ 三、八卦与纳音分析</h2>
            <div class="subsection">
                <div class="subsection-title">☰ 八卦命理</div>
                ${baguaHtml}
            </div>
            
            <div class="subsection">
                <div class="subsection-title">🎵 纳音五行</div>
                ${nayinHtml}
            </div>
        </div>
        
        <!-- 星座生肖 -->
        <div class="section">
            <h2 class="section-title">⭐ 四、星座与生肖分析</h2>
            <div class="subsection">
                <div class="subsection-title">⭐ 星座分析</div>
                ${constellationHtml}
            </div>
            
            ${zodiacHtml ? `<div class="subsection"><div class="subsection-title">🐾 生肖分析</div>${zodiacHtml}</div>` : ''}
        </div>
        
        <!-- 推荐名字 -->
        <div class="section" style="page-break-after:always;">
            <h2 class="section-title">✨ 五、推荐名字详解</h2>
            <p style="color:#666;margin-bottom:20px;">
                以下名字均根据宝宝的生辰八字、五行喜忌、古籍经典精心挑选，每个名字都包含详细的命理解析。
            </p>
            ${namesHtml}
        </div>
        
        <!-- 结语 -->
        <div class="section" style="text-align:center;padding:40px 20px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;border-radius:15px;">
            <h2 style="font-size:2em;margin-bottom:20px;">🙏 结语</h2>
            <p style="font-size:1.1em;line-height:2;">
                起名是一门深奥的学问，融合了传统文化、命理学和美学。<br>
                本报告提供的名字仅供参考，最终选择还需结合家族传统、个人喜好等因素。<br>
                祝愿宝宝健康成长，前程似锦！
            </p>
            <p style="margin-top:30px;font-size:0.95em;opacity:0.9;">
                报告生成时间：${new Date().toLocaleString('zh-CN')}
            </p>
        </div>
    `;
}

// 获取卦象五行
function getGuaWuxing(guaName) {
    const wuxingMap = {
        '乾卦': '金', '兑卦': '金', '离卦': '火', '震卦': '木',
        '巽卦': '木', '坎卦': '水', '艮卦': '土', '坤卦': '土'
    };
    return wuxingMap[guaName] || '土';
}

// 获取纳音含义
function getNayinMeaning(nayin) {
    const meanings = {
        '海中金': '如海中之金，深藏不露，需经磨砺方显价值',
        '炉中火': '如炉中之火，热情洋溢，但需防过旺',
        '大林木': '如森林之木，生机勃勃，有成长潜力',
        '路旁土': '如路边之土，平凡踏实，默默奉献',
        '剑锋金': '如剑锋之金，锐利无比，有决断力',
        '山头火': '如山头之火，明亮耀眼，引人注目',
        '涧下水': '如山涧之水，清澈纯净，灵活变通',
        '城头土': '如城墙之土，坚固稳重，有保护力',
        '白蜡金': '如白蜡之金，纯净珍贵，品质优良',
        '杨柳木': '如杨柳之木，柔韧适应，生命力强',
        '泉中水': '如泉水之源，源源不断，充满活力',
        '屋上土': '如屋顶之土，遮风挡雨，有责任感',
        '霹雳火': '如霹雳之火，迅猛激烈，变革力强',
        '松柏木': '如松柏之木，坚韧不拔，四季常青',
        '长流水': '如长河之水，奔流不息，志向远大',
        '沙中金': '如沙中之金，需经筛选，终显价值',
        '山下火': '如山脚之火，温暖持久，照亮他人',
        '平地木': '如平原之木，平稳成长，根基扎实',
        '壁上土': '如墙壁之土，支撑保护，坚定不移',
        '金箔金': '如金箔之金，薄而珍贵，光彩照人',
        '覆灯火': '如灯烛之火，温暖光明，指引方向',
        '天河水': '如天上银河，浩瀚无垠，胸怀广阔',
        '大驿土': '如驿站之土，四通八达，人脉广泛',
        '钗钏金': '如首饰之金，精美贵重，品味高雅',
        '桑柘木': '如桑柘之木，实用价值高，造福他人',
        '大溪水': '如大江之水，气势磅礴，势不可挡',
        '沙中土': '如沙洲之土，聚散无常，适应力强',
        '天上火': '如太阳之火，光明普照，能量无限',
        '石榴木': '如石榴之木，多子多福，繁荣昌盛',
        '大海水': '如海洋之水，包容万物，智慧深邃'
    };
    return meanings[nayin] || '纳音五行反映了一个人的深层性格和命运特质';
}

// 获取星座幸运色
function getConstellationLuckyColor(name) {
    const colors = {
        '白羊座': '红色、金色', '金牛座': '绿色、粉色', '双子座': '黄色、银色',
        '巨蟹座': '白色、银色', '狮子座': '橙色、金色', '处女座': '灰色、米色',
        '天秤座': '蓝色、粉色', '天蝎座': '紫色、黑色', '射手座': '蓝色、紫色',
        '摩羯座': '棕色、黑色', '水瓶座': '蓝色、银色', '双鱼座': '绿色、紫色'
    };
    return colors[name] || '待定';
}

// 获取五行缺失建议
function getMissingWuxingAdvice(wuxingCount) {
    const missing = [];
    for (let [element, count] of Object.entries(wuxingCount)) {
        if (count === 0) missing.push(element);
    }
    
    if (missing.length === 0) return '<p style="margin-top:15px;color:#22C55E;"><strong>✅ 五行齐全：</strong>五行平衡，运势稳定，无需特别补救。</p>';
    
    const advice = {
        '金': '宜用金属性的字，如带"金、钅、刂"偏旁的字，颜色宜白、金、银',
        '木': '宜用木属性的字，如带"木、艹、竹"偏旁的字，颜色宜绿、青',
        '水': '宜用水属性的字，如带"水、氵、雨"偏旁的字，颜色宜黑、蓝',
        '火': '宜用火属性的字，如带"火、灬、日"偏旁的字，颜色宜红、紫',
        '土': '宜用土属性的字，如带"土、山、石"偏旁的字，颜色宜黄、棕'
    };
    
    return `
        <p style="margin-top:15px;color:#EF4444;">
            <strong>⚠️ 五行缺失：</strong>缺少${missing.join('、')}，建议在名字中补足。
        </p>
        <p style="margin-top:10px;color:#666;line-height:1.8;">
            <strong>补救建议：</strong>${missing.map(m => advice[m]).join('；')}
        </p>
    `;
}

// 简化版报告函数调用完整版
function generateReportContent() {
    return generateFullReportContent();
}
