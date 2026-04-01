// ==================== 古籍数据库 ====================

// 性别标识：male=男孩，female=女孩，both=通用
// personality: 未来性格特点分析
// detailed: 详细解析（包含易经、八卦、紫微斗数、事业、婚姻、学业等）
// modern: 现代风格指数 (1-5 星，5 星最现代)
// flowScore: 与"邸"姓搭配的读音流畅度 (1-10 分)

// 邸姓拼音：dǐ (第三声)，起名时注意：
// - 避免连续三个第三声（会很拗口）
// - 优先选择第一、二、四声的字搭配
// - 避免韵母 i 开头的字，防止连读困难

const ancientBooks = {
    // 【邸姓推荐名字】优先推荐列表
    recommended_for_di: [
        // 男孩名 - 读音流畅，寓意好，现代感强
        { name: "明哲", pinyin: "míng zhé", source: "《诗经·大雅》", meaning: "明智哲理，聪明睿智", wuxing: "火火", gender: "male", 
          personality: "聪明睿智，判断力强，做事有计划", modern: 5, flowScore: 9,
          detailed: { yiJing: "对应易经离卦，光明睿智。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "智慧超群。", career: "适合学术。", marriage: "理解深刻。", education: "博学。" }},
        { name: "浩然", pinyin: "hào rán", source: "《孟子·公孙丑上》", meaning: "浩然正气，刚直不阿", wuxing: "水金", gender: "male", 
          personality: "正直勇敢，有正义感", modern: 5, flowScore: 9,
          detailed: { yiJing: "对应易经乾卦。", baGua: "属乾卦。", ziWei: "对应七杀星。", naYin: "纳音水金。", wuXing: "金水相生。", destiny: "正气凛然。", career: "适合法律。", marriage: "专一。", education: "法学优。" }},
        { name: "子轩", pinyin: "zǐ xuān", source: "《宋词》", meaning: "气宇轩昂，风度翩翩", wuxing: "水木", gender: "male", 
          personality: "气度不凡，才华横溢", modern: 5, flowScore: 8,
          detailed: { yiJing: "对应易经乾卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "前程远大。", career: "适合政治。", marriage: "优秀。", education: "博学。" }},
        { name: "博文", pinyin: "bó wén", source: "《论语·雍也》", meaning: "博学多才，文采斐然", wuxing: "水水", gender: "male", 
          personality: "学识渊博，文采飞扬", modern: 5, flowScore: 9,
          detailed: { yiJing: "对应易经大有卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音大海水。", wuXing: "水水比和。", destiny: "文名远播。", career: "适合写作。", marriage: "知音。", education: "文学。" }},
        { name: "俊驰", pinyin: "jùn chí", source: "《唐诗》", meaning: "英俊杰出，驰骋千里", wuxing: "火火", gender: "male", 
          personality: "才华出众，志向远大", modern: 5, flowScore: 8,
          detailed: { yiJing: "对应易经乾卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "前程似锦。", career: "适合创业。", marriage: "激情。", education: "全面。" }},
        
        // 女孩名 - 读音优美，寓意好，现代感强
        { name: "雨桐", pinyin: "yǔ tóng", source: "《唐诗》", meaning: "梧桐细雨，诗意盎然", wuxing: "水木", gender: "female", 
          personality: "温柔细腻，富有诗意", modern: 5, flowScore: 9,
          detailed: { yiJing: "对应易经坎卦。", baGua: "属坎卦。", ziWei: "对应太阴星。", naYin: "纳音泉中水。", wuXing: "水木相生。", destiny: "福泽深厚。", career: "适合文学。", marriage: "温柔。", education: "文科优。" }},
        { name: "诗涵", pinyin: "shī hán", source: "《唐诗》", meaning: "富有诗意，内涵丰富", wuxing: "金水", gender: "female", 
          personality: "文采斐然，内涵深厚", modern: 5, flowScore: 8,
          detailed: { yiJing: "对应易经鼎卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音钗钏金。", wuXing: "金水相生。", destiny: "文名远扬。", career: "适合写作。", marriage: "知音。", education: "文学才。" }},
        { name: "欣怡", pinyin: "xīn yí", source: "《宋词》", meaning: "欣喜愉悦，心情舒畅", wuxing: "木土", gender: "female", 
          personality: "乐观开朗，心情愉悦", modern: 5, flowScore: 9,
          detailed: { yiJing: "对应易经泰卦。", baGua: "属兑卦。", ziWei: "对应天同星。", naYin: "纳音松柏木。", wuXing: "木土相克。", destiny: "快乐一生。", career: "适合公关。", marriage: "甜蜜。", education: "乐观。" }},
        { name: "婉婷", pinyin: "wǎn tíng", source: "《宋词》", meaning: "温婉婷婷，优雅动人", wuxing: "土火", gender: "female", 
          personality: "温柔优雅，举止端庄", modern: 5, flowScore: 8,
          detailed: { yiJing: "对应易经离卦。", baGua: "属离卦。", ziWei: "对应太阴星。", naYin: "纳音城头土。", wuXing: "火土相生。", destiny: "优雅一生。", career: "适合礼仪。", marriage: "美满。", education: "气质佳。" }},
        { name: "梦琪", pinyin: "mèng qí", source: "《唐诗》", meaning: "如梦似幻，珍贵美好", wuxing: "木木", gender: "female", 
          personality: "梦幻美好，珍贵如玉", modern: 5, flowScore: 8,
          detailed: { yiJing: "对应易经复卦。", baGua: "属震卦。", ziWei: "对应太阴星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "美好如梦。", career: "适合艺术。", marriage: "浪漫。", education: "想象力丰富。" }}
    ],
    
    shijing: [
        // 双字名 - 国风
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
        // 新增国风名字
        { name: "关雎", pinyin: "guān jū", source: "《诗经·周南·关雎》", meaning: "雎鸠和鸣，象征美好爱情", wuxing: "木木", gender: "female",
          personality: "感情丰富，向往美好爱情，性格温和" },
        { name: "窈窕", pinyin: "yǎo tiǎo", source: "《诗经·周南·关雎》", meaning: "文静美好，形容女子优美", wuxing: "火火", gender: "female",
          personality: "举止优雅，气质出众，温婉动人" },
        { name: "淑女", pinyin: "shū nǚ", source: "《诗经·周南·关雎》", meaning: "贤良淑德的女子", wuxing: "水火", gender: "female",
          personality: "品德高尚，温柔贤惠，善解人意" },
        { name: "蒹葭", pinyin: "jiān jiā", source: "《诗经·秦风·蒹葭》", meaning: "芦苇茂盛，意境优美", wuxing: "木木", gender: "both",
          personality: "气质清雅，思想深刻，有艺术气质" },
        { name: "白露", pinyin: "bái lù", source: "《诗经·秦风·蒹葭》", meaning: "清晨露水，纯净透明", wuxing: "金水", gender: "female",
          personality: "纯洁善良，心思细腻，气质清冷" },
        { name: "伊人", pinyin: "yī rén", source: "《诗经·秦风·蒹葭》", meaning: "意中人，心中思念的人", wuxing: "土金", gender: "female",
          personality: "温柔多情，重感情，有魅力" },
        { name: "桃夭", pinyin: "táo yāo", source: "《诗经·周南·桃夭》", meaning: "桃花盛开，美丽娇艳", wuxing: "木火", gender: "female",
          personality: "活泼开朗，美丽动人，充满活力" },
        { name: "蓁蓁", pinyin: "zhēn zhēn", source: "《诗经·周南·桃夭》", meaning: "草木茂盛，生机勃勃", wuxing: "木木", gender: "female",
          personality: "生命力旺盛，乐观向上，积极进取" },
        { name: "灼华", pinyin: "zhuó huá", source: "《诗经·周南·桃夭》", meaning: "桃花灿烂，光彩夺目", wuxing: "火水", gender: "female",
          personality: "外表出众，才华横溢，光彩照人" },
        { name: "宜室", pinyin: "yí shì", source: "《诗经·周南·桃夭》", meaning: "适宜家庭，贤惠持家", wuxing: "木金", gender: "female",
          personality: "家庭观念强，善于持家，温和贤惠" },
        { name: "芣苢", pinyin: "fú yǐ", source: "《诗经·周南·芣苢》", meaning: "车前草，生命力顽强", wuxing: "木土", gender: "female",
          personality: "坚韧不拔，适应力强，生命力旺盛" },
        { name: "汉广", pinyin: "hàn guǎng", source: "《诗经·周南·汉广》", meaning: "汉水宽广，胸怀博大", wuxing: "水木", gender: "male",
          personality: "胸怀宽广，志向远大，包容力强" },
        { name: "乔松", pinyin: "qiáo sōng", source: "《诗经·周南·汉广》", meaning: "高大的松树，坚强挺拔", wuxing: "木木", gender: "male",
          personality: "意志坚定，正直不阿，坚强勇敢" },
        { name: "草虫", pinyin: "cǎo chóng", source: "《诗经·召南·草虫》", meaning: "草丛中的虫鸣，自然和谐", wuxing: "木火", gender: "both",
          personality: "热爱自然，性格温和，善于观察" },
        { name: "蕨薇", pinyin: "jué wēi", source: "《诗经·召南·草虫》", meaning: "蕨菜和薇菜，清新自然", wuxing: "木木", gender: "female",
          personality: "清新脱俗，自然纯真，善良朴实" },
        { name: "甘棠", pinyin: "gān táng", source: "《诗经·召南·甘棠》", meaning: "甜美的棠梨，美好回忆", wuxing: "木木", gender: "both",
          personality: "温和善良，令人怀念，有亲和力" },
        { name: "行露", pinyin: "xíng lù", source: "《诗经·召南·行露》", meaning: "行走在露水中，坚韧不拔", wuxing: "水水", gender: "female",
          personality: "意志坚定，不畏艰难，勇往直前" },
        { name: "羔羊", pinyin: "gāo yáng", source: "《诗经·召南·羔羊》", meaning: "小羊羔，纯洁善良", wuxing: "火土", gender: "both",
          personality: "纯洁善良，温顺可爱，待人真诚" },
        { name: "殷雷", pinyin: "yīn léi", source: "《诗经·召南·殷其雷》", meaning: "雷声隆隆，气势磅礴", wuxing: "土水", gender: "male",
          personality: "气势恢宏，有领导力，威严庄重" },
        { name: "摽梅", pinyin: "biào méi", source: "《诗经·召南·摽有梅》", meaning: "梅子落地，珍惜时光", wuxing: "木水", gender: "female",
          personality: "珍惜时间，把握机会，聪明机智" },
        { name: "小星", pinyin: "xiǎo xīng", source: "《诗经·召南·小星》", meaning: "小小的星星，虽然渺小但发光", wuxing: "金火", gender: "both",
          personality: "谦虚低调，默默奉献，有自己的光芒" },
        { name: "江沱", pinyin: "jiāng tuó", source: "《诗经·召南·江有汜》", meaning: "江水支流，源远流长", wuxing: "水水", gender: "both",
          personality: "思维灵活，适应力强，源远流长" },
        // 新增小雅名字
        { name: "鹿鸣", pinyin: "lù míng", source: "《诗经·小雅·鹿鸣》", meaning: "鹿儿鸣叫，和谐美好", wuxing: "火水", gender: "both",
          personality: "性格温和，善于交际，人缘好" },
        { name: "呦呦", pinyin: "yōu yōu", source: "《诗经·小雅·鹿鸣》", meaning: "鹿鸣声，和谐悦耳", wuxing: "土土", gender: "both",
          personality: "声音悦耳，性格温和，讨人喜欢" },
        { name: "食野", pinyin: "shí yě", source: "《诗经·小雅·鹿鸣》", meaning: "在野外觅食，自由自在", wuxing: "金土", gender: "male",
          personality: "热爱自由，无拘无束，性格豪爽" },
        { name: "鼓瑟", pinyin: "gǔ sè", source: "《诗经·小雅·鹿鸣》", meaning: "弹奏瑟琴，音乐才华", wuxing: "木金", gender: "both",
          personality: "有音乐天赋，艺术气质，情感丰富" },
        { name: "吹笙", pinyin: "chuī shēng", source: "《诗经·小雅·鹿鸣》", meaning: "吹奏笙乐，才华横溢", wuxing: "木金", gender: "male",
          personality: "音乐才华出众，气质优雅，受人喜爱" },
        { name: "筐篚", pinyin: "kuāng fěi", source: "《诗经·小雅·鹿鸣》", meaning: "竹制容器，承载礼物", wuxing: "木木", gender: "both",
          personality: "包容力强，善于收纳，有条理" },
        { name: "常棣", pinyin: "cháng dì", source: "《诗经·小雅·常棣》", meaning: "棠棣花，兄弟情谊", wuxing: "木木", gender: "male",
          personality: "重视亲情，讲义气，团结友爱" },
        { name: "鄂韡", pinyin: "è wěi", source: "《诗经·小雅·常棣》", meaning: "花朵盛开，光彩夺目", wuxing: "木土", gender: "both",
          personality: "光彩照人，才华出众，引人注目" },
        { name: "天保", pinyin: "tiān bǎo", source: "《诗经·小雅·天保》", meaning: "上天保佑，吉祥如意", wuxing: "火水", gender: "male",
          personality: "福气深厚，贵人相助，一生平安" },
        { name: "月恒", pinyin: "yuè héng", source: "《诗经·小雅·天保》", meaning: "如月亮恒久，永恒不变", wuxing: "木水", gender: "both",
          personality: "意志坚定，持之以恒，永恒不变" },
        { name: "南山", pinyin: "nán shān", source: "《诗经·小雅·南山有台》", meaning: "南方的山，高大稳固", wuxing: "火土", gender: "male",
          personality: "稳重可靠，高大威严，令人敬仰" },
        { name: "北山", pinyin: "běi shān", source: "《诗经·小雅·北山》", meaning: "北方的山，坚毅挺拔", wuxing: "水土", gender: "male",
          personality: "坚毅不拔，意志坚定，不畏艰难" },
        { name: "无羊", pinyin: "wú yáng", source: "《诗经·小雅·无羊》", meaning: "牧养众多羊群，富足安康", wuxing: "火土", gender: "male",
          personality: "善于管理，富足安康，生活幸福" },
        { name: "蓼莪", pinyin: "lù é", source: "《诗经·小雅·蓼》", meaning: "蒿茂盛，思念父母", wuxing: "木木", gender: "both",
          personality: "孝顺父母，重感情，心地善良" },
        { name: "大东", pinyin: "dà dōng", source: "《诗经·小雅·大东》", meaning: "东方的大国，繁荣昌盛", wuxing: "火木", gender: "male",
          personality: "志向远大，繁荣昌盛，有领导力" },
        { name: "小明", pinyin: "xiǎo míng", source: "《诗经·小雅·小明》", meaning: "小小的光明，希望无限", wuxing: "金水", gender: "both",
          personality: "充满希望，乐观向上，前途光明" },
        { name: "鼓钟", pinyin: "gǔ zhōng", source: "《诗经·小雅·鼓钟》", meaning: "敲击钟乐，庄严神圣", wuxing: "木金", gender: "male",
          personality: "庄严神圣，有威严，受人尊敬" },
        { name: "楚茨", pinyin: "chǔ cí", source: "《诗经·小雅·楚茨》", meaning: "荆棘丛生，坚韧不拔", wuxing: "木木", gender: "male",
          personality: "坚韧不拔，意志坚定，不畏艰难" },
        { name: "信南山", pinyin: "xìn nán shān", source: "《诗经·小雅·信南山》", meaning: "信任南山，稳重可靠", wuxing: "金火土", gender: "male",
          personality: "稳重可靠，值得信任，品格高尚" },
        // 新增大雅名字
        { name: "文王", pinyin: "wén wáng", source: "《诗经·大雅·文王》", meaning: "周文王，圣明君主", wuxing: "水木", gender: "male",
          personality: "圣明睿智，领导力强，德高望重" },
        { name: "大明", pinyin: "dà míng", source: "《诗经·大雅·大明》", meaning: "伟大的光明，前途无量", wuxing: "火水", gender: "male",
          personality: "前途光明，志向远大，成就非凡" },
        { name: "绵蛮", pinyin: "mián mán", source: "《诗经·大雅·绵》", meaning: "绵延不绝，繁荣昌盛", wuxing: "木水", gender: "both",
          personality: "生命力旺盛，繁荣昌盛，代代相传" },
        { name: "皇矣", pinyin: "huáng yǐ", source: "《诗经·大雅·皇矣》", meaning: "辉煌伟大，气势磅礴", wuxing: "火土", gender: "male",
          personality: "气势恢宏，成就伟大，令人敬仰" },
        { name: "灵台", pinyin: "líng tái", source: "《诗经·大雅·灵台》", meaning: "灵性的台观，智慧高远", wuxing: "火火", gender: "both",
          personality: "智慧高远，灵性超凡，有洞察力" },
        { name: "下武", pinyin: "xià wǔ", source: "《诗经·大雅·下武》", meaning: "继承武德，勇往直前", wuxing: "水水", gender: "male",
          personality: "勇敢无畏，继承传统，发扬光大" },
        { name: "生民", pinyin: "shēng mín", source: "《诗经·大雅·生民》", meaning: "生育万民，仁慈博爱", wuxing: "金水", gender: "male",
          personality: "仁慈博爱，关心百姓，德高望重" },
        { name: "行苇", pinyin: "xíng wěi", source: "《诗经·大雅·行苇》", meaning: "行走于芦苇中，自然和谐", wuxing: "水木", gender: "both",
          personality: "热爱自然，性格温和，与人和谐" },
        { name: "既醉", pinyin: "jì zuì", source: "《诗经·大雅·既醉》", meaning: "已经陶醉，享受美好", wuxing: "木水", gender: "both",
          personality: "懂得享受，乐观豁达，生活美满" },
        { name: "凫鹥", pinyin: "fú yī", source: "《诗经·大雅·凫鹥》", meaning: "水鸟自由飞翔，自在逍遥", wuxing: "水水", gender: "both",
          personality: "自由自在，无拘无束，性格洒脱" },
        { name: "假乐", pinyin: "jiǎ lè", source: "《诗经·大雅·假乐》", meaning: "假借快乐，分享喜悦", wuxing: "木火", gender: "both",
          personality: "乐观开朗，善于分享，人缘好" },
        { name: "公刘", pinyin: "gōng liú", source: "《诗经·大雅·公刘》", meaning: "公刘迁徙，开创基业", wuxing: "木金", gender: "male",
          personality: "开创精神，领导力强，成就基业" },
        { name: "泂酌", pinyin: "jiǒng zhuó", source: "《诗经·大雅·泂酌》", meaning: "从远处取水，眼光长远", wuxing: "水水", gender: "both",
          personality: "眼光长远，深谋远虑，智慧过人" },
        { name: "卷阿", pinyin: "juàn ā", source: "《诗经·大雅·卷阿》", meaning: "山势蜿蜒，气势磅礴", wuxing: "木土", gender: "male",
          personality: "气势恢宏，志向远大，成就非凡" },
        { name: "民劳", pinyin: "mín láo", source: "《诗经·大雅·民劳》", meaning: "体恤民劳，关心百姓", wuxing: "水火", gender: "male",
          personality: "关心百姓，仁慈博爱，受人爱戴" },
        { name: "板荡", pinyin: "bǎn dàng", source: "《诗经·大雅·板》", meaning: "动荡不安，经历磨难", wuxing: "水水", gender: "male",
          personality: "经历磨难，意志更坚，终成大器" },
        { name: "抑戒", pinyin: "yì jiè", source: "《诗经·大雅·抑》", meaning: "抑制警戒，谨慎行事", wuxing: "金木", gender: "both",
          personality: "谨慎小心，自律严谨，品德高尚" },
        { name: "桑柔", pinyin: "sāng róu", source: "《诗经·大雅·桑柔》", meaning: "桑叶柔软，温和柔顺", wuxing: "木金", gender: "female",
          personality: "温和柔顺，善良体贴，善解人意" },
        { name: "云汉", pinyin: "yún hàn", source: "《诗经·大雅·云汉》", meaning: "银河高远，志向远大", wuxing: "水水", gender: "male",
          personality: "志向高远，胸怀博大，成就非凡" },
        { name: "崧高", pinyin: "sōng gāo", source: "《诗经·大雅·崧高》", meaning: "山势高峻，品格高尚", wuxing: "土木", gender: "male",
          personality: "品格高尚，志向高远，受人敬仰" },
        { name: "烝民", pinyin: "zhēng mín", source: "《诗经·大雅·烝民》", meaning: "众多百姓，仁慈博爱", wuxing: "火水", gender: "male",
          personality: "仁慈博爱，关心他人，德高望重" },
        { name: "韩奕", pinyin: "hán yì", source: "《诗经·大雅·韩奕》", meaning: "韩国盛大，繁荣昌盛", wuxing: "水木", gender: "male",
          personality: "繁荣昌盛，成就非凡，光宗耀祖" },
        { name: "江汉", pinyin: "jiāng hàn", source: "《诗经·大雅·江汉》", meaning: "长江汉水，源远流长", wuxing: "水水", gender: "male",
          personality: "源远流长，成就卓越，名垂青史" },
        { name: "常武", pinyin: "cháng wǔ", source: "《诗经·大雅·常武》", meaning: "常备武力，保卫国家", wuxing: "金水", gender: "male",
          personality: "勇敢无畏，保家卫国，英雄气概" },
        // 新增周颂名字
        { name: "清庙", pinyin: "qīng miào", source: "《诗经·周颂·清庙》", meaning: "清静的宗庙，庄严肃穆", wuxing: "水木", gender: "both",
          personality: "庄严肃穆，品格高尚，受人尊敬" },
        { name: "维天之命", pinyin: "wéi tiān zhī mìng", source: "《诗经·周颂·维天之命》", meaning: "遵循天命，顺应自然", wuxing: "土水火", gender: "male",
          personality: "顺应天命，智慧过人，成就非凡" },
        { name: "维清", pinyin: "wéi qīng", source: "《诗经·周颂·维清》", meaning: "保持清明，政治清廉", wuxing: "土水", gender: "male",
          personality: "清廉正直，政治清明，受人爱戴" },
        { name: "烈文", pinyin: "liè wén", source: "《诗经·周颂·烈文》", meaning: "显赫文德，功绩卓著", wuxing: "火水", gender: "male",
          personality: "功绩卓著，文德显赫，名垂青史" },
        { name: "天作", pinyin: "tiān zuò", source: "《诗经·周颂·天作》", meaning: "上天所作，天赐良机", wuxing: "火金", gender: "both",
          personality: "天赐良机，福气深厚，成就非凡" },
        { name: "昊天", pinyin: "hào tiān", source: "《诗经·周颂·昊天有成命》", meaning: "浩大的天空，胸怀博大", wuxing: "水火", gender: "male",
          personality: "胸怀博大，志向高远，成就伟大" },
        { name: "我将", pinyin: "wǒ jiāng", source: "《诗经·周颂·我将》", meaning: "我将奉献，勇于承担", wuxing: "金火", gender: "male",
          personality: "勇于承担，奉献精神，领导力强" },
        { name: "时迈", pinyin: "shí mài", source: "《诗经·周颂·时迈》", meaning: "时机已到，迈向成功", wuxing: "火水", gender: "male",
          personality: "把握时机，迈向成功，成就非凡" },
        { name: "执竞", pinyin: "zhí jìng", source: "《诗经·周颂·执竞》", meaning: "坚持竞争，永不放弃", wuxing: "金木", gender: "male",
          personality: "竞争意识强，永不放弃，终获成功" },
        { name: "臣工", pinyin: "chén gōng", source: "《诗经·周颂·臣工》", meaning: "臣子工作，忠于职守", wuxing: "金木", gender: "male",
          personality: "忠于职守，工作认真，受人信任" },
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
          personality: "天资聪颖，悟性高，善解人意" },
        { name: "文", pinyin: "wén", source: "《诗经·大雅·文王》", meaning: "文化、文采、文明", wuxing: "水", gender: "both",
          personality: "文采斐然，学识渊博，文明有礼" },
        { name: "武", pinyin: "wǔ", source: "《诗经·大雅·常武》", meaning: "武勇、武力、勇敢", wuxing: "水", gender: "male",
          personality: "勇敢无畏，武艺高强，英雄气概" },
        { name: "德", pinyin: "dé", source: "《诗经·大雅·骏德》", meaning: "品德、道德、德行", wuxing: "火", gender: "male",
          personality: "品德高尚，道德修养，受人尊敬" },
        { name: "明", pinyin: "míng", source: "《诗经·大雅·大明》", meaning: "光明、明亮、聪明", wuxing: "水", gender: "both",
          personality: "聪明睿智，前途光明，明辨是非" },
        { name: "华", pinyin: "huá", source: "《诗经·郑风·有女同车》", meaning: "华丽、华美、才华", wuxing: "水", gender: "female",
          personality: "才华横溢，外表华美，光彩照人" }
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
        { name: "芳若", pinyin: "fāng ruò", source: "《楚辞·九章》", meaning: "芬芳如若，气质优雅", wuxing: "木木", gender: "female" },
        { name: "灵均", pinyin: "líng jūn", source: "《楚辞·离骚》", meaning: "灵秀均衡，才华出众", wuxing: "火土", gender: "male" },
        { name: "正则", pinyin: "zhèng zé", source: "《楚辞·离骚》", meaning: "正直有法则，品行端正", wuxing: "金水", gender: "male" },
        { name: "路曼", pinyin: "lù màn", source: "《楚辞·离骚》", meaning: "道路漫长，志向远大", wuxing: "火水", gender: "both" },
        { name: "依斐", pinyin: "yī fěi", source: "《楚辞·九章》", meaning: "依循文采，才华斐然", wuxing: "土水", gender: "female" },
        { name: "淑离", pinyin: "shū lí", source: "《楚辞·九章》", meaning: "善良美丽，品格高洁", wuxing: "水火", gender: "female" },
        { name: "伯庸", pinyin: "bó yōng", source: "《楚辞·离骚》", meaning: "伯仲之中显平庸", wuxing: "水土", gender: "male" },
        { name: "正则", pinyin: "zhèng zé", source: "《楚辞·离骚》", meaning: "公正的法则", wuxing: "金水", gender: "male" },
        { name: "灵修", pinyin: "líng xiū", source: "《楚辞·离骚》", meaning: "灵性修养，智慧超凡", wuxing: "火金", gender: "both" },
        { name: "浩倡", pinyin: "hào chàng", source: "《楚辞·九歌》", meaning: "浩然倡导，正气凛然", wuxing: "水金", gender: "male" },
        { name: "宜修", pinyin: "yí xiū", source: "《楚辞·九歌》", meaning: "适宜修养，品德高尚", wuxing: "木金", gender: "both" },
        { name: "美要", pinyin: "měi yào", source: "《楚辞·九歌》", meaning: "美好重要，珍贵非凡", wuxing: "水土", gender: "female" },
        { name: "眇眇", pinyin: "miǎo miǎo", source: "《楚辞·九歌》", meaning: "渺远高远，志向不凡", wuxing: "水水", gender: "both" },
        { name: "袅袅", pinyin: "niǎo niǎo", source: "《楚辞·九歌》", meaning: "轻柔美好，姿态优美", wuxing: "火火", gender: "female" },
        { name: "辛夷", pinyin: "xīn yí", source: "《楚辞·九歌》", meaning: "辛夷花般高洁", wuxing: "金木", gender: "female" },
        { name: "药房", pinyin: "yào fáng", source: "《楚辞·九歌》", meaning: "香草之屋，品格芬芳", wuxing: "木木", gender: "both" },
        { name: "容与", pinyin: "róng yǔ", source: "《楚辞·九歌》", meaning: "从容自在，悠闲雅致", wuxing: "土土", gender: "both" },
        { name: "翼远", pinyin: "yì yuǎn", source: "《楚辞·九章》", meaning: "展翅远飞，志向高远", wuxing: "金土", gender: "male" },
        { name: "凌恒", pinyin: "líng héng", source: "《楚辞·七谏》", meaning: "凌云恒心，意志坚定", wuxing: "火火", gender: "male" },
        { name: "耀灵", pinyin: "yào líng", source: "《楚辞·远游》", meaning: "闪耀的灵性，光彩夺目", wuxing: "火火", gender: "both" },
        { name: "博衍", pinyin: "bó yǎn", source: "《楚辞·远游》", meaning: "博大衍伸，学识渊博", wuxing: "水水", gender: "male" },
        { name: "婉娩", pinyin: "wǎn miǎn", source: "《楚辞·九章》", meaning: "温婉柔顺，品德美好", wuxing: "土水", gender: "female" },
        { name: "曼路", pinyin: "màn lù", source: "《楚辞·离骚》", meaning: "漫长的道路，坚持不懈", wuxing: "水火", gender: "both" },
        { name: "琼枝", pinyin: "qióng zhī", source: "《楚辞·离骚》", meaning: "美玉般的树枝，珍贵美好", wuxing: "木木", gender: "female" },
        { name: "相道", pinyin: "xiàng dào", source: "《楚辞·离骚》", meaning: "相互引导，共同进步", wuxing: "木火", gender: "both" },
        { name: "回车", pinyin: "huí chē", source: "《楚辞·离骚》", meaning: "回归正道，知错能改", wuxing: "水金", gender: "male" },
        { name: "皋兰", pinyin: "gāo lán", source: "《楚辞·离骚》", meaning: "高处的兰花，品格高洁", wuxing: "木木", gender: "female" },
        { name: "峻极", pinyin: "jùn jí", source: "《楚辞·离骚》", meaning: "高大至极，成就非凡", wuxing: "土木", gender: "male" },
        { name: "览民", pinyin: "lǎn mín", source: "《楚辞·离骚》", meaning: "体察民情，关心百姓", wuxing: "火水", gender: "male" },
        { name: "相观", pinyin: "xiāng guān", source: "《楚辞·离骚》", meaning: "相互观察，明辨是非", wuxing: "木木", gender: "both" },
        { name: "计行", pinyin: "jì xíng", source: "《楚辞·离骚》", meaning: "计划行动，谋定后动", wuxing: "金水", gender: "male" },
        { name: "谣诼", pinyin: "yáo zhuó", source: "《楚辞·离骚》", meaning: "明辨谣言，保持本心", wuxing: "木木", gender: "both" },
        { name: "固时", pinyin: "gù shí", source: "《楚辞·离骚》", meaning: "把握时机，顺应时势", wuxing: "木金", gender: "male" },
        { name: "流亡", pinyin: "liú wáng", source: "《楚辞·九章》", meaning: "历经磨难，意志更坚", wuxing: "水土", gender: "both" },
        { name: "发梦", pinyin: "fā mèng", source: "《楚辞·九章》", meaning: "心怀梦想，追求理想", wuxing: "水木", gender: "both" },
        { name: "丹丘", pinyin: "dān qiū", source: "《楚辞·远游》", meaning: "红色山丘，热情似火", wuxing: "火土", gender: "male" },
        { name: "羽人", pinyin: "yǔ rén", source: "《楚辞·远游》", meaning: "长羽毛的仙人，超凡脱俗", wuxing: "金金", gender: "both" },
        { name: "餐霞", pinyin: "cān xiá", source: "《楚辞·远游》", meaning: "饮食霞光，仙风道骨", wuxing: "火火", gender: "both" },
        { name: "漱泉", pinyin: "shù quán", source: "《楚辞·远游》", meaning: "漱饮清泉，品格纯净", wuxing: "水水", gender: "both" }
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
        { name: "雅正", pinyin: "yǎ zhèng", source: "《论语·述而》", meaning: "典雅正直，品格高尚", wuxing: "木金", gender: "female" },
        // 新增论语名字
        { name: "学而", pinyin: "xué ér", source: "《论语·学而》", meaning: "学习而快乐，求知若渴", wuxing: "水金", gender: "both" },
        { name: "时习", pinyin: "shí xí", source: "《论语·学而》", meaning: "时常温习，巩固知识", wuxing: "金水", gender: "male" },
        { name: "不亦", pinyin: "bú yì", source: "《论语·学而》", meaning: "不也是很快乐吗", wuxing: "水水", gender: "both" },
        { name: "乐乎", pinyin: "lè hū", source: "《论语·学而》", meaning: "快乐啊，学习的乐趣", wuxing: "火水", gender: "both" },
        { name: "有朋", pinyin: "yǒu péng", source: "《论语·学而》", meaning: "有志同道合的朋友", wuxing: "土水", gender: "male" },
        { name: "远方", pinyin: "yuǎn fāng", source: "《论语·学而》", meaning: "从远方来，友谊长存", wuxing: "土水", gender: "both" },
        { name: "为人", pinyin: "wéi rén", source: "《论语·学而》", meaning: "为人处世，品德第一", wuxing: "土金", gender: "male" },
        { name: "谋忠", pinyin: "móu zhōng", source: "《论语·学而》", meaning: "为人谋事要忠诚", wuxing: "水火", gender: "male" },
        { name: "信友", pinyin: "xìn yǒu", source: "《论语·学而》", meaning: "与朋友交要有信", wuxing: "金水", gender: "male" },
        { name: "传习", pinyin: "chuán xí", source: "《论语·学而》", meaning: "老师传授的要温习", wuxing: "火金", gender: "male" },
        { name: "温故", pinyin: "wēn gù", source: "《论语·为政》", meaning: "温习旧知识", wuxing: "水金", gender: "both" },
        { name: "知新", pinyin: "zhī xīn", source: "《论语·为政》", meaning: "获得新理解", wuxing: "火金", gender: "both" },
        { name: "思温", pinyin: "sī wēn", source: "《论语·为政》", meaning: "思考且温和", wuxing: "金水", gender: "both" },
        { name: "君子", pinyin: "jùn zǐ", source: "《论语·为政》", meaning: "有德行之人", wuxing: "木水", gender: "male" },
        { name: "不器", pinyin: "bú qì", source: "《论语·为政》", meaning: "君子不像器具那样只有一种用途", wuxing: "水木", gender: "male" },
        { name: "周比", pinyin: "zhōu bǐ", source: "《论语·为政》", meaning: "君子周而不比", wuxing: "金水", gender: "male" },
        { name: "知知", pinyin: "zhì zhī", source: "《论语·为政》", meaning: "知道就是知道", wuxing: "火水", gender: "both" },
        { name: "不知", pinyin: "bù zhī", source: "《论语·为政》", meaning: "不知道就是不知道", wuxing: "水水", gender: "both" },
        { name: "是知", pinyin: "shì zhì", source: "《论语·为政》", meaning: "这才是智慧", wuxing: "金火", gender: "both" },
        { name: "举直", pinyin: "jǔ zhí", source: "《论语·为政》", meaning: "提拔正直的人", wuxing: "木火", gender: "male" },
        { name: "错枉", pinyin: "cuò wǎng", source: "《论语·为政》", meaning: "罢免不正直的人", wuxing: "金木", gender: "male" },
        { name: "人信", pinyin: "rén xìn", source: "《论语·为政》", meaning: "人没有信用就不能立足", wuxing: "金金", gender: "male" },
        { name: "大车", pinyin: "dà chē", source: "《论语·为政》", meaning: "大车没有輗就不能行驶", wuxing: "火金", gender: "male" },
        { name: "小车", pinyin: "xiǎo chē", source: "《论语·为政》", meaning: "小车没有軏就不能行驶", wuxing: "金金", gender: "male" },
        { name: "可见", pinyin: "kě jiàn", source: "《论语·为政》", meaning: "可以预见未来", wuxing: "木火", gender: "both" },
        { name: "预知", pinyin: "yù zhī", source: "《论语·为政》", meaning: "预知百世之后的事", wuxing: "水火", gender: "both" },
        { name: "百世", pinyin: "bǎi shì", source: "《论语·为政》", meaning: "百代以后的事", wuxing: "水金", gender: "male" },
        { name: "可知", pinyin: "kě zhī", source: "《论语·为政》", meaning: "可以知道的道理", wuxing: "木火", gender: "both" },
        { name: "非鬼", pinyin: "fēi guǐ", source: "《论语·为政》", meaning: "不是自己的祖先却去祭祀", wuxing: "水木", gender: "male" },
        { name: "谄也", pinyin: "chǎn yě", source: "《论语·为政》", meaning: "这是谄媚", wuxing: "火金", gender: "male" },
        { name: "见义", pinyin: "jiàn yì", source: "《论语·为政》", meaning: "见到应该做的事", wuxing: "木木", gender: "male" },
        { name: "不为", pinyin: "bù wéi", source: "《论语·为政》", meaning: "不去做就是没有勇气", wuxing: "水土", gender: "male" },
        { name: "无勇", pinyin: "wú yǒng", source: "《论语·为政》", meaning: "没有勇气的表现", wuxing: "水木", gender: "male" },
        { name: "孰谓", pinyin: "shú wèi", source: "《论语·八佾》", meaning: "谁说", wuxing: "金木", gender: "both" },
        { name: "鄹人", pinyin: "zōu rén", source: "《论语·八佾》", meaning: "鄹地的人", wuxing: "木金", gender: "male" },
        { name: "知礼", pinyin: "zhì lǐ", source: "《论语·八佾》", meaning: "懂得礼仪", wuxing: "火火", gender: "male" },
        { name: "入庙", pinyin: "rù miào", source: "《论语·八佾》", meaning: "进入太庙", wuxing: "水木", gender: "male" },
        { name: "每问", pinyin: "měi wèn", source: "《论语·八佾》", meaning: "每件事都要问", wuxing: "水水", gender: "both" },
        { name: "是礼", pinyin: "shì lǐ", source: "《论语·八佾》", meaning: "这就是礼", wuxing: "金火", gender: "both" },
        { name: "射礼", pinyin: "shè lǐ", source: "《论语·八佾》", meaning: "射箭的礼仪", wuxing: "金火", gender: "male" },
        { name: "不主", pinyin: "bù zhǔ", source: "《论语·八佾》", meaning: "不射中靶子", wuxing: "水金", gender: "male" },
        { name: "为皮", pinyin: "wéi pí", source: "《论语·八佾》", meaning: "因为皮靶子", wuxing: "土金", gender: "male" },
        { name: "力不同", pinyin: "lì bù tóng", source: "《论语·八佾》", meaning: "力气不同", wuxing: "火水土", gender: "male" },
        { name: "科也", pinyin: "kē yě", source: "《论语·八佾》", meaning: "这是等级", wuxing: "木金", gender: "male" },
        { name: "富哉", pinyin: "fù zāi", source: "《论语·八佾》", meaning: "多么丰富啊", wuxing: "水金", gender: "both" },
        { name: "言礼", pinyin: "yán lǐ", source: "《论语·八佾》", meaning: "说到礼", wuxing: "木火", gender: "male" },
        { name: "绘事", pinyin: "huì shì", source: "《论语·八佾》", meaning: "绘画的事", wuxing: "水金", gender: "both" },
        { name: "后素", pinyin: "hòu sù", source: "《论语·八佾》", meaning: "后于白色", wuxing: "火金", gender: "both" },
        { name: "礼后", pinyin: "lǐ hòu", source: "《论语·八佾》", meaning: "礼在后", wuxing: "火水", gender: "male" },
        { name: "起予", pinyin: "qǐ yǔ", source: "《论语·八佾》", meaning: "启发我", wuxing: "木木", gender: "both" },
        { name: "商也", pinyin: "shāng yě", source: "《论语·八佾》", meaning: "商这个人", wuxing: "金金", gender: "male" },
        { name: "始可", pinyin: "shǐ kě", source: "《论语·八佾》", meaning: "才可以", wuxing: "金木", gender: "both" },
        { name: "言诗", pinyin: "yán shī", source: "《论语·八佾》", meaning: "和他谈论诗", wuxing: "木金", gender: "male" },
        { name: "告往", pinyin: "gào wǎng", source: "《论语·学而》", meaning: "告诉他过去的事", wuxing: "木水", gender: "male" },
        { name: "知来", pinyin: "zhī lái", source: "《论语·学而》", meaning: "知道未来的事", wuxing: "火水", gender: "both" }
    ],
    daodejing: [
        // 道经部分 - 25 个名字
        { name: "若水", pinyin: "ruò shuǐ", source: "《道德经·第八章》", meaning: "上善若水，利万物而不争", wuxing: "木水", gender: "both",
          personality: "品性柔和，善于利他，不争而胜", detailed: { yiJing: "对应易经第 29 卦坎卦，象征水德。", baGua: "属坎卦，主智慧与灵活。", ziWei: "对应天同星，主福泽深厚。", naYin: "纳音属长流水。", wuXing: "木水相生，仁慈智慧。", destiny: "一生得人相助，运势平顺。", career: "适合教育、医疗、服务业。", marriage: "婚姻和谐，家庭幸福。", education: "学业顺利，文科见长。" }},
        { name: "致虚", pinyin: "zhì xū", source: "《道德经·第十六章》", meaning: "致虚极，守静笃", wuxing: "火水", gender: "both",
          personality: "心境空明，善于思考，洞察力强", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属坤卦，主包容。", ziWei: "对应太阴星。", naYin: "纳音属山下火。", wuXing: "火水相济，聪明睿智。", destiny: "中年后运势渐佳。", career: "适合研究、哲学、心理学。", marriage: "配偶知心，感情深厚。", education: "深造潜力大。" }},
        { name: "守静", pinyin: "shǒu jìng", source: "《道德经·第十六章》", meaning: "保持内心的宁静", wuxing: "金金", gender: "female",
          personality: "沉稳安静，内敛含蓄", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音属剑锋金。", wuXing: "金金比和，坚毅果断。", destiny: "一生平稳。", career: "适合财务、行政。", marriage: "婚姻稳定。", education: "学习踏实。" }},
        { name: "知常", pinyin: "zhī cháng", source: "《道德经·第十六章》", meaning: "知晓常道，明理通达", wuxing: "火金", gender: "both",
          personality: "通情达理，明智豁达", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属乾卦。", ziWei: "对应天机星。", naYin: "纳音属霹雳火。", wuXing: "火金相克，需平衡。", destiny: "贵人运强。", career: "适合咨询、法律。", marriage: "和睦。", education: "理解力强。" }},
        { name: "玄德", pinyin: "xuán dé", source: "《道德经·第十章》", meaning: "深奥的德行，品德崇高", wuxing: "水火", gender: "male",
          personality: "德行深厚，为人低调", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应紫微星。", naYin: "纳音属天河水。", wuXing: "水火既济。", destiny: "德高望重。", career: "适合公益、教育。", marriage: "美满。", education: "品德优异。" }},
        { name: "希言", pinyin: "xī yán", source: "《道德经·第二十三章》", meaning: "少言寡语，行胜于言", wuxing: "水木", gender: "male",
          personality: "沉默寡言，实干型", detailed: { yiJing: "对应易经第 7 卦师卦。", baGua: "属坎卦。", ziWei: "对应武曲星。", naYin: "纳音属泉中水。", wuXing: "水木相生。", destiny: "实干成功。", career: "适合技术、工程。", marriage: "实在可靠。", education: "实践能力强。" }},
        { name: "自然", pinyin: "zì rán", source: "《道德经·第二十五章》", meaning: "道法自然，顺应天性", wuxing: "火火", gender: "both",
          personality: "随性洒脱，不拘束", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音属炉中火。", wuXing: "火火比和。", destiny: "自在安乐。", career: "适合艺术、创作。", marriage: "自由平等。", education: "创意丰富。" }},
        { name: "无为", pinyin: "wú wéi", source: "《道德经·第三十七章》", meaning: "无为而治，顺势而为", wuxing: "水土", gender: "male",
          personality: "顺其自然，不强行", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天梁星。", naYin: "纳音属屋上土。", wuXing: "水土相克。", destiny: "顺势成功。", career: "适合管理、策划。", marriage: "和谐。", education: "理解深刻。" }},
        { name: "抱朴", pinyin: "bào pǔ", source: "《道德经·第十九章》", meaning: "保持朴实本真", wuxing: "水木", gender: "both",
          personality: "纯真朴实，不虚伪", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应天同星。", naYin: "纳音属松柏木。", wuXing: "水木相生。", destiny: "平安是福。", career: "适合农业、生态。", marriage: "真诚相待。", education: "基础扎实。" }},
        { name: "含章", pinyin: "hán zhāng", source: "《道德经·第四十一章》", meaning: "内含美德，不事张扬", wuxing: "水火", gender: "female",
          personality: "内敛有才华", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应太阴星。", naYin: "纳音属涧下水。", wuXing: "水火相济。", destiny: "才华得展。", career: "适合文学、艺术。", marriage: "贤惠。", education: "文采好。" }},
        { name: "知止", pinyin: "zhī zhǐ", source: "《道德经·第三十二章》", meaning: "知足知止，明哲保身", wuxing: "火火", gender: "both",
          personality: "懂得适可而止", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应天相星。", naYin: "纳音属山头火。", wuXing: "火火比和。", destiny: "平安长寿。", career: "适合稳定工作。", marriage: "长久。", education: "自律。" }},
        { name: "柔顺", pinyin: "róu shùn", source: "《道德经·第七十八章》", meaning: "柔弱胜刚强", wuxing: "金金", gender: "female",
          personality: "温柔顺从", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应太阴星。", naYin: "纳音属海中金。", wuXing: "金金比和。", destiny: "以柔克刚。", career: "适合服务行业。", marriage: "温顺。", education: "文科好。" }},
        { name: "长生", pinyin: "cháng shēng", source: "《道德经·第七章》", meaning: "天长地久，生生不息", wuxing: "火金", gender: "male",
          personality: "生命力旺盛", detailed: { yiJing: "对应易经第 11 卦泰卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音属长流水。", wuXing: "火金相克。", destiny: "健康长寿。", career: "适合医疗、养生。", marriage: "长久。", education: "持续学习。" }},
        { name: "清静", pinyin: "qīng jìng", source: "《道德经·第四十五章》", meaning: "清静无为，心境澄明", wuxing: "水金", gender: "female",
          personality: "清净无欲", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音属钗钏金。", wuXing: "水金相生。", destiny: "清净安乐。", career: "适合修行、学术。", marriage: "平淡是真。", education: "专注。" }},
        // 新增道经名字
        { name: "道可", pinyin: "dào kě", source: "《道德经·第一章》", meaning: "道可道，非常道", wuxing: "火木", gender: "both",
          personality: "悟性高，善于思辨", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应天机星。", naYin: "纳音属洞下水。", wuXing: "火木相生。", destiny: "智慧超群。", career: "适合哲学、研究。", marriage: "精神契合。", education: "深造佳。" }},
        { name: "无名", pinyin: "wú míng", source: "《道德经·第一章》", meaning: "无名天地之始", wuxing: "水木", gender: "both",
          personality: "低调不张扬", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音属杨柳木。", wuXing: "水木相生。", destiny: "大器晚成。", career: "适合幕后工作。", marriage: "默默付出。", education: "厚积薄发。" }},
        { name: "处下", pinyin: "chǔ xià", source: "《道德经·第六十六章》", meaning: "江海所以能为百谷王者，以其善下之", wuxing: "水水", gender: "male",
          personality: "谦虚低调", detailed: { yiJing: "对应易经第 15 卦谦卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音属大海水。", wuXing: "水水比和。", destiny: "得人尊敬。", career: "适合管理。", marriage: "互相尊重。", education: "虚心学习。" }},
        { name: "不争", pinyin: "bù zhēng", source: "《道德经·第八章》", meaning: "夫唯不争，故无尤", wuxing: "水金", gender: "both",
          personality: "与世无争", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音属砂中金。", wuXing: "水金相生。", destiny: "平安无忧。", career: "适合稳定职业。", marriage: "和睦。", education: "心态好。" }},
        { name: "居善", pinyin: "jū shàn", source: "《道德经·第八章》", meaning: "居善地，心善渊", wuxing: "木金", gender: "both",
          personality: "善良正直", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应天府星。", naYin: "纳音属砂中金。", wuXing: "木金相克。", destiny: "善有善报。", career: "适合公益。", marriage: "善良持家。", education: "品行好。" }},
        { name: "心渊", pinyin: "xīn yuān", source: "《道德经·第八章》", meaning: "心善渊，深沉如渊", wuxing: "金水", gender: "both",
          personality: "思想深刻", detailed: { yiJing: "对应易经第 29 卦坎卦。", baGua: "属坎卦。", ziWei: "对应太阴星。", naYin: "纳音属大溪水。", wuXing: "金水相生。", destiny: "智慧深远。", career: "适合研究。", marriage: "情深。", education: "钻研精神。" }},
        { name: "与善", pinyin: "yǔ shàn", source: "《道德经·第八章》", meaning: "与善仁，言善信", wuxing: "土金", gender: "both",
          personality: "待人友善", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属乾卦。", ziWei: "对应天相星。", naYin: "纳音属路旁土。", wuXing: "土金相生。", destiny: "人缘好。", career: "适合公关。", marriage: "互信。", education: "合作学习。" }},
        { name: "言信", pinyin: "yán xìn", source: "《道德经·第八章》", meaning: "言善信，说话诚信", wuxing: "木金", gender: "male",
          personality: "诚实守信", detailed: { yiJing: "对应易经第 11 卦泰卦。", baGua: "属乾卦。", ziWei: "对应武曲星。", naYin: "纳音属白蜡金。", wuXing: "木金相克。", destiny: "信誉好。", career: "适合商业。", marriage: "诚信相待。", education: "认真。" }},
        { name: "政善", pinyin: "zhèng shàn", source: "《道德经·第八章》", meaning: "政善治，治理有方", wuxing: "火水", gender: "male",
          personality: "善于管理", detailed: { yiJing: "对应易经第 11 卦泰卦。", baGua: "属坤卦。", ziWei: "对应紫微星。", naYin: "纳音属霹雳火。", wuXing: "水火既济。", destiny: "事业有成。", career: "适合管理。", marriage: "家庭和睦。", education: "领导才能。" }},
        { name: "事能", pinyin: "shì néng", source: "《道德经·第八章》", meaning: "事善能，做事有能力", wuxing: "金火", gender: "male",
          personality: "能干高效", detailed: { yiJing: "对应易经第 14 卦大有卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音属霹雳火。", wuXing: "金火相克。", destiny: "事业成功。", career: "适合企业。", marriage: "能力强。", education: "实践好。" }},
        { name: "动时", pinyin: "dòng shí", source: "《道德经·第八章》", meaning: "动善时，行动适时", wuxing: "火土", gender: "male",
          personality: "把握时机", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应天机星。", naYin: "纳音属城头土。", wuXing: "火土相生。", destiny: "抓住机遇。", career: "适合投资。", marriage: "适时而动。", education: "时间管理好。" }},
        { name: "功成", pinyin: "gōng chéng", source: "《道德经·第九章》", meaning: "功成名遂身退", wuxing: "木金", gender: "male",
          personality: "事业有成", detailed: { yiJing: "对应易经第 14 卦大有卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音属石榴木。", wuXing: "木金相克。", destiny: "成功后隐退。", career: "适合创业。", marriage: "共享成功。", education: "目标明确。" }},
        { name: "身退", pinyin: "shēn tuì", source: "《道德经·第九章》", meaning: "功成身退，天之道", wuxing: "金火", gender: "both",
          personality: "懂得进退", detailed: { yiJing: "对应易经第 33 卦遁卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音属山下火。", wuXing: "金火相克。", destiny: "急流勇退。", career: "适合顾问。", marriage: "相互理解。", education: "知进退。" }},
        { name: "金玉", pinyin: "jīn yù", source: "《道德经·第九章》", meaning: "金玉满堂，莫之能守", wuxing: "金木", gender: "female",
          personality: "富贵吉祥", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音属海中金。", wuXing: "金木相克。", destiny: "财富丰厚。", career: "适合金融。", marriage: "富裕。", education: "物质条件好。" }},
        { name: "富贵", pinyin: "fù guì", source: "《道德经·第九章》", meaning: "富贵而骄，自遗其咎", wuxing: "水木", gender: "both",
          personality: "富有但不骄傲", detailed: { yiJing: "对应易经第 14 卦大有卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音属桑柘木。", wuXing: "水木相生。", destiny: "富贵双全。", career: "适合经商。", marriage: "门当户对。", education: "资源多。" }},
        { name: "载营", pinyin: "zài yíng", source: "《道德经·第十章》", meaning: "载营魄抱一，能无离乎", wuxing: "金水", gender: "both",
          personality: "身心合一", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音属长流水。", wuXing: "金水相生。", destiny: "身心健康。", career: "适合健身。", marriage: "和谐。", education: "全面发展。" }},
        { name: "专气", pinyin: "zhuān qì", source: "《道德经·第十章》", meaning: "专气致柔，能如婴儿乎", wuxing: "金金", gender: "male",
          personality: "专注柔和", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音属白蜡金。", wuXing: "金金比和。", destiny: "专心成功。", career: "适合专业领域。", marriage: "专一。", education: "专注学习。" }},
        { name: "涤除", pinyin: "dí chú", source: "《道德经·第十章》", meaning: "涤除玄览，能无疵乎", wuxing: "水水", gender: "both",
          personality: "清除杂念", detailed: { yiJing: "对应易经第 23 卦剥卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音属大海水。", wuXing: "水水比和。", destiny: "净化心灵。", career: "适合心理咨询。", marriage: "纯净。", education: "心无旁骛。" }},
        { name: "爱民", pinyin: "ài mín", source: "《道德经·第十章》", meaning: "爱民治国，能无为乎", wuxing: "土水", gender: "male",
          personality: "关爱百姓", detailed: { yiJing: "对应易经第 7 卦师卦。", baGua: "属坤卦。", ziWei: "对应紫微星。", naYin: "纳音属霹雷火。", wuXing: "土水相克。", destiny: "为民服务。", career: "适合公务员。", marriage: "顾家。", education: "社会科学。" }},
        { name: "天门", pinyin: "tiān mén", source: "《道德经·第十章》", meaning: "天门开阖，能为雌乎", wuxing: "火水", gender: "male",
          personality: "胸怀天下", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音属天河水。", wuXing: "水火既济。", destiny: "大开大合。", career: "适合国际事务。", marriage: "开放。", education: "视野广。" }},
        { name: "明白", pinyin: "míng bái", source: "《道德经·第十章》", meaning: "明白四达，能无知乎", wuxing: "火水", gender: "both",
          personality: "通达事理", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属乾卦。", ziWei: "对应天机星。", naYin: "纳音属涧下水。", wuXing: "水火相济。", destiny: "聪明通达。", career: "适合教育。", marriage: "沟通好。", education: "理解力强。" }},
        { name: "三十辐", pinyin: "sān shí fú", source: "《道德经·第十一章》", meaning: "三十辐共一毂", wuxing: "金木", gender: "male",
          personality: "团结协作", detailed: { yiJing: "对应易经第 8 卦比卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音属石榴木。", wuXing: "金木相克。", destiny: "团队合作。", career: "适合团队工作。", marriage: "协作。", education: "小组学习。" }},
        { name: "当其无", pinyin: "dāng qí wú", source: "《道德经·第十一章》", meaning: "当其无，有车之用", wuxing: "火土", gender: "both",
          personality: "虚空有用", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音属城头土。", wuXing: "火土相生。", destiny: "以无用为大用。", career: "适合设计。", marriage: "包容。", education: "创新思维。" }},
        { name: "埏埴", pinyin: "shān zhí", source: "《道德经·第十一章》", meaning: "埏埴以为器", wuxing: "土土", gender: "both",
          personality: "塑造自我", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音属路旁土。", wuXing: "土土比和。", destiny: "自我完善。", career: "适合艺术创作。", marriage: "共同成长。", education: "动手能力强。" }},
        { name: "凿户", pinyin: "záo hù", source: "《道德经·第十一章》", meaning: "凿户牖以为室", wuxing: "金水", gender: "male",
          personality: "开创家园", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应武曲星。", naYin: "纳音属钗钏金。", wuXing: "金水相生。", destiny: "安居乐业。", career: "适合建筑。", marriage: "建立家庭。", education: "实用技能。" }},
        { name: "五色", pinyin: "wǔ sè", source: "《道德经·第十二章》", meaning: "五色令人目盲", wuxing: "火火", gender: "female",
          personality: "多彩多姿", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音属炉中火。", wuXing: "火火比和。", destiny: "丰富多彩。", career: "适合艺术。", marriage: "浪漫。", education: "艺术天赋。" }},
        { name: "五音", pinyin: "wǔ yīn", source: "《道德经·第十二章》", meaning: "五音令人耳聋", wuxing: "火金", gender: "female",
          personality: "音乐天赋", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应太阴星。", naYin: "纳音属霹雳火。", wuXing: "火金相克。", destiny: "艺术成就。", career: "适合音乐。", marriage: "艺术共鸣。", education: "音乐专长。" }},
        { name: "五味", pinyin: "wǔ wèi", source: "《道德经·第十二章》", meaning: "五味令人口爽", wuxing: "土土", gender: "both",
          personality: "品味生活", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音属路旁土。", wuXing: "土土比和。", destiny: "享受生活。", career: "适合餐饮。", marriage: "美食共享。", education: "生活技能。" }},
        { name: "驰骋", pinyin: "chí chěng", source: "《道德经·第十二章》", meaning: "驰骋畋猎，令人心发狂", wuxing: "火火", gender: "male",
          personality: "奔放自由", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音属炉中火。", wuXing: "火火比和。", destiny: "自由奔放。", career: "适合运动。", marriage: "激情。", education: "体育特长。" }},
        { name: "难得", pinyin: "nán dé", source: "《道德经·第十二章》", meaning: "难得之货，令人行妨", wuxing: "火火", gender: "both",
          personality: "珍惜稀有", detailed: { yiJing: "对应易经第 14 卦大有卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音属炉中火。", wuXing: "火火比和。", destiny: "珍贵稀有。", career: "适合收藏。", marriage: "珍惜彼此。", education: "珍稀知识。" }},
        { name: "圣人为腹", pinyin: "shèng rén wéi fù", source: "《道德经·第十二章》", meaning: "圣人为腹不为目", wuxing: "土土", gender: "male",
          personality: "务实不虚荣", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音属路旁土。", wuXing: "土土比和。", destiny: "务实成功。", career: "适合实业。", marriage: "实际。", education: "实用主义。" }},
        { name: "去彼取此", pinyin: "qù bǐ qǔ cǐ", source: "《道德经·第十二章》", meaning: "故去彼取此", wuxing: "木木", gender: "both",
          personality: "懂得取舍", detailed: { yiJing: "对应易经第 23 卦剥卦。", baGua: "属艮卦。", ziWei: "对应天机星。", naYin: "纳音属松柏木。", wuXing: "木木比和。", destiny: "取舍有道。", career: "适合决策。", marriage: "明智选择。", education: "选择专业。" }},
        { name: "宠辱", pinyin: "chǒng rǔ", source: "《道德经·第十三章》", meaning: "宠辱若惊，贵大患若身", wuxing: "金水", gender: "both",
          personality: "淡泊名利", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音属钗钏金。", wuXing: "金水相生。", destiny: "超然物外。", career: "适合学术。", marriage: "平淡。", education: "心态平和。" }}
    ],
    tangshi: [
        // 李白诗篇 - 12 个名字
        { name: "明月", pinyin: "míng yuè", source: "唐·李白《静夜思》", meaning: "如明月般皎洁明亮", wuxing: "火木", gender: "both",
          personality: "光明磊落，气质清雅", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "光明前程。", career: "适合艺术。", marriage: "浪漫。", education: "文科好。" }},
        { name: "清风", pinyin: "qīng fēng", source: "唐·李白《清平调》", meaning: "清爽怡人，气质不凡", wuxing: "水木", gender: "male",
          personality: "清新脱俗，风度翩翩", detailed: { yiJing: "对应易经第 57 卦巽卦。", baGua: "属巽卦。", ziWei: "对应天机星。", naYin: "纳音泉中水。", wuXing: "水木相生。", destiny: "顺风顺水。", career: "适合文学。", marriage: "和谐。", education: "才华横溢。" }},
        { name: "星河", pinyin: "xīng hé", source: "唐·李白《望庐山瀑布》", meaning: "如星河般璀璨", wuxing: "金水", gender: "male",
          personality: "光芒四射，胸怀博大", detailed: { yiJing: "对应易经第 14 卦大有卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音钗钏金。", wuXing: "金水相生。", destiny: "星光灿烂。", career: "适合科技。", marriage: "璀璨。", education: "理科优。" }},
        { name: "云帆", pinyin: "yún fān", source: "唐·李白《行路难》", meaning: "直挂云帆济沧海", wuxing: "水水", gender: "male",
          personality: "志向远大，勇往直前", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应破军星。", naYin: "纳音长流水。", wuXing: "水水比和。", destiny: "乘风破浪。", career: "适合航海。", marriage: "共同奋斗。", education: "开拓精神。" }},
        { name: "天翊", pinyin: "tiān yì", source: "唐·李白《大鹏赋》", meaning: "翱翔天际，展翅高飞", wuxing: "火木", gender: "male",
          personality: "抱负不凡，腾飞九天", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "一飞冲天。", career: "适合航空。", marriage: "高远。", education: "深造佳。" }},
        { name: "浩然", pinyin: "hào rán", source: "唐·李白《赠孟浩然》", meaning: "浩然正气，胸襟开阔", wuxing: "水金", gender: "male",
          personality: "正直豪迈，气度不凡", detailed: { yiJing: "对应易经第 11 卦泰卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音大海水。", wuXing: "水金相生。", destiny: "正气凛然。", career: "适合法律。", marriage: "坦荡。", education: "博学。" }},
        { name: "逸飞", pinyin: "yì fēi", source: "唐·李白《宣州谢朓楼饯别校书叔云》", meaning: "超凡脱俗，自由飞翔", wuxing: "土水", gender: "male",
          personality: "飘逸洒脱，不拘一格", detailed: { yiJing: "对应易经第 57 卦巽卦。", baGua: "属巽卦。", ziWei: "对应天同星。", naYin: "纳音城头土。", wuXing: "土水相克。", destiny: "自由自在。", career: "适合创作。", marriage: "自由恋爱。", education: "创意丰富。" }},
        { name: "翰林", pinyin: "hàn lín", source: "唐·李白《翰林读书言怀》", meaning: "文采风流，学识渊博", wuxing: "水木", gender: "male",
          personality: "才华横溢，学识渊博", detailed: { yiJing: "对应易经第 50 卦鼎卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "文名远播。", career: "适合学术。", marriage: "知音。", education: "博士才。" }},
        { name: "鹏飞", pinyin: "péng fēi", source: "唐·李白《上李邕》", meaning: "大鹏展翅，志向远大", wuxing: "水水", gender: "male",
          personality: "志在千里，气势磅礴", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应破军星。", naYin: "纳音大海水。", wuXing: "水水比和。", destiny: "大展宏图。", career: "适合创业。", marriage: "志同道合。", education: "远大抱负。" }},
        { name: "青莲", pinyin: "qīng lián", source: "唐·李白《青莲居士谪仙人》", meaning: "出淤泥而不染", wuxing: "木木", gender: "female",
          personality: "高洁纯净，超凡脱俗", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应太阴星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "纯洁高尚。", career: "适合艺术。", marriage: "纯净。", education: "天赋异禀。" }},
        { name: "长安", pinyin: "cháng ān", source: "唐·李白《长相思》", meaning: "长治久安，平安吉祥", wuxing: "火土", gender: "both",
          personality: "稳重安康，福寿绵长", detailed: { yiJing: "对应易经第 11 卦泰卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音炉中火。", wuXing: "火土相生。", destiny: "一生平安。", career: "适合公务员。", marriage: "长久。", education: "稳定。" }},
        { name: "蜀道", pinyin: "shǔ dào", source: "唐·李白《蜀道难》", meaning: "不畏艰难，勇攀高峰", wuxing: "金火", gender: "male",
          personality: "坚韧不拔，挑战自我", detailed: { yiJing: "对应易经第 39 卦蹇卦。", baGua: "属艮卦。", ziWei: "对应武曲星。", naYin: "纳音白蜡金。", wuXing: "金火相克。", destiny: "克难成功。", career: "适合探险。", marriage: "共渡难关。", education: "刻苦。" }},
        // 杜甫诗篇 - 12 个名字
        { name: "雨桐", pinyin: "yǔ tóng", source: "唐·杜甫《春夜喜雨》", meaning: "梧桐细雨，诗意盎然", wuxing: "水木", gender: "female",
          personality: "温柔细腻，富有诗意", detailed: { yiJing: "对应易经第 29 卦坎卦。", baGua: "属坎卦。", ziWei: "对应太阴星。", naYin: "纳音泉中水。", wuXing: "水木相生。", destiny: "福泽深厚。", career: "适合文学。", marriage: "温柔。", education: "文科优。" }},
        { name: "雪梅", pinyin: "xuě méi", source: "唐·杜甫《对雪》", meaning: "雪中梅花，坚韧高洁", wuxing: "水木", gender: "female",
          personality: "坚强不屈，品格高尚", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应天府星。", naYin: "纳音大海水。", wuXing: "水木相生。", destiny: "苦尽甘来。", career: "适合医疗。", marriage: "坚贞。", education: "毅力强。" }},
        { name: "诗涵", pinyin: "shī hán", source: "唐·杜甫《登高》", meaning: "富有诗意，内涵丰富", wuxing: "金水", gender: "female",
          personality: "文采斐然，内涵深厚", detailed: { yiJing: "对应易经第 50 卦鼎卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音钗钏金。", wuXing: "金水相生。", destiny: "文名远扬。", career: "适合写作。", marriage: "知音。", education: "文学才。" }},
        { name: "晓月", pinyin: "xiǎo yuè", source: "唐·杜甫《月夜忆舍弟》", meaning: "拂晓之月，清新明亮", wuxing: "火木", gender: "female",
          personality: "清新脱俗，温柔贤淑", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应太阴星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "光明美好。", career: "适合教育。", marriage: "温馨。", education: "聪慧。" }},
        { name: "春望", pinyin: "chūn wàng", source: "唐·杜甫《春望》", meaning: "春天展望，充满希望", wuxing: "木水", gender: "both",
          personality: "乐观向上，充满希望", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应太阳星。", naYin: "纳音松柏木。", wuXing: "水木相生。", destiny: "欣欣向荣。", career: "适合农业。", marriage: "美满。", education: "进步快。" }},
        { name: "茅屋", pinyin: "máo wū", source: "唐·杜甫《茅屋为秋风所破歌》", meaning: "简朴生活，心系天下", wuxing: "木土", gender: "male",
          personality: "朴实无华，心怀苍生", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天梁星。", naYin: "纳音松柏木。", wuXing: "木土相克。", destiny: "先苦后甜。", career: "适合公益。", marriage: "朴实。", education: "关心社会。" }},
        { name: "锦江", pinyin: "jǐn jiāng", source: "唐·杜甫《登楼》", meaning: "锦绣江山，美好前程", wuxing: "金水", gender: "both",
          personality: "前程似锦，才华出众", detailed: { yiJing: "对应易经第 14 卦大有卦。", baGua: "属乾卦。", ziWei: "对应天府星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "前程远大。", career: "适合金融。", marriage: "美好。", education: "优秀。" }},
        { name: "玉垒", pinyin: "yù lěi", source: "唐·杜甫《登楼》", meaning: "如玉坚固，担当重任", wuxing: "金土", gender: "male",
          personality: "坚定不移，可当大任", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应武曲星。", naYin: "纳音海中金。", wuXing: "金土相生。", destiny: "稳固发展。", career: "适合建筑。", marriage: "稳固。", education: "扎实。" }},
        { name: "北辰", pinyin: "běi chén", source: "唐·杜甫《阁夜》", meaning: "北极星，指引方向", wuxing: "水土", gender: "male",
          personality: "领导力强，指引方向", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音霹雷火。", wuXing: "土水相克。", destiny: "领袖群伦。", career: "适合领导。", marriage: "主导。", education: "领导才能。" }},
        { name: "野老", pinyin: "yě lǎo", source: "唐·杜甫《野老歌》", meaning: "田园老者，智慧深远", wuxing: "土火", gender: "male",
          personality: "淡泊名利，智慧超群", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音路旁土。", wuXing: "火土相生。", destiny: "晚年幸福。", career: "适合顾问。", marriage: "平淡。", education: "经验丰富。" }},
        { name: "秋兴", pinyin: "qiū xīng", source: "唐·杜甫《秋兴八首》", meaning: "秋日感兴，文采飞扬", wuxing: "金水", gender: "both",
          personality: "多愁善感，文采斐然", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属兑卦。", ziWei: "对应天机星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "文名远播。", career: "适合文学。", marriage: "感性。", education: "文学天赋。" }},
        { name: "闻官", pinyin: "wén guān", source: "唐·杜甫《闻官军收河南河北》", meaning: "喜闻捷报，爱国情怀", wuxing: "水木", gender: "male",
          personality: "爱国爱民，正义感强", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "为国争光。", career: "适合军警。", marriage: "忠诚。", education: "爱国。" }},
        // 白居易诗篇 - 10 个名字
        { name: "钱塘", pinyin: "qián táng", source: "唐·白居易《钱塘湖春行》", meaning: "钱塘江畔，繁华富庶", wuxing: "金土", gender: "both",
          personality: "富贵繁荣，事业有成", detailed: { yiJing: "对应易经第 14 卦大有卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音白蜡金。", wuXing: "金土相生。", destiny: "财富丰厚。", career: "适合商业。", marriage: "富裕。", education: "商科优。" }},
        { name: "琵琶", pinyin: "pí pá", source: "唐·白居易《琵琶行》", meaning: "琵琶声声，音乐天赋", wuxing: "木木", gender: "female",
          personality: "音乐才华，情感丰富", detailed: { yiJing: "对应易经第 51 卦震卦。", baGua: "属震卦。", ziWei: "对应太阴星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "艺术成就。", career: "适合音乐。", marriage: "艺术共鸣。", education: "音乐专长。" }},
        { name: "长恨", pinyin: "cháng hèn", source: "唐·白居易《长恨歌》", meaning: "深情不渝，至死不渝", wuxing: "火金", gender: "female",
          personality: "情深义重，忠贞不渝", detailed: { yiJing: "对应易经第 31 卦咸卦。", baGua: "属兑卦。", ziWei: "对应太阴星。", naYin: "纳音炉中火。", wuXing: "火金相克。", destiny: "感情深刻。", career: "适合艺术。", marriage: "深情。", education: "感性。" }},
        { name: "芙蓉", pinyin: "fú róng", source: "唐·白居易《长恨歌》", meaning: "出水芙蓉，天然美丽", wuxing: "木木", gender: "female",
          personality: "天生丽质，清纯可人", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应太阴星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "美丽动人。", career: "适合美容。", marriage: "甜蜜。", education: "艺术。" }},
        { name: "连理", pinyin: "lián lǐ", source: "唐·白居易《长恨歌》", meaning: "在天愿作比翼鸟，在地愿为连理枝", wuxing: "木木", gender: "both",
          personality: "恩爱夫妻，永不分离", detailed: { yiJing: "对应易经第 31 卦咸卦。", baGua: "属震卦。", ziWei: "对应天同星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "百年好合。", career: "适合合作。", marriage: "恩爱。", education: "共同进步。" }},
        { name: "比翼", pinyin: "bǐ yì", source: "唐·白居易《长恨歌》", meaning: "比翼双飞，恩爱不离", wuxing: "水水", gender: "both",
          personality: "形影不离，情深意重", detailed: { yiJing: "对应易经第 31 卦咸卦。", baGua: "属坎卦。", ziWei: "对应天同星。", naYin: "纳音大海水。", wuXing: "水水比和。", destiny: "白头偕老。", career: "适合夫妻店。", marriage: "恩爱如初。", education: "一起学习。" }},
        { name: "江南", pinyin: "jiāng nán", source: "唐·白居易《忆江南》", meaning: "江南水乡，风景如画", wuxing: "水火", gender: "both",
          personality: "温婉柔美，诗情画意", detailed: { yiJing: "对应易经第 29 卦坎卦。", baGua: "属离卦。", ziWei: "对应太阴星。", naYin: "纳音天河水。", wuXing: "水火既济。", destiny: "福泽绵长。", career: "适合旅游。", marriage: "浪漫。", education: "艺术。" }},
        { name: "暮江", pinyin: "mù jiāng", source: "唐·白居易《暮江吟》", meaning: "傍晚江景，宁静致远", wuxing: "水水", gender: "both",
          personality: "沉静内敛，意境深远", detailed: { yiJing: "对应易经第 29 卦坎卦。", baGua: "属坎卦。", ziWei: "对应天梁星。", naYin: "纳音大海水。", wuXing: "水水比和。", destiny: "平静安乐。", career: "适合研究。", marriage: "平静。", education: "深思。" }},
        { name: "绿蚁", pinyin: "lǜ yǐ", source: "唐·白居易《问刘十九》", meaning: "绿蚁新醅酒，待客之道", wuxing: "木水", gender: "male",
          personality: "热情好客，善于交际", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属震卦。", ziWei: "对应天同星。", naYin: "纳音松柏木。", wuXing: "水木相生。", destiny: "人缘极佳。", career: "适合公关。", marriage: "和睦。", education: "社交能力强。" }},
        { name: "红泥", pinyin: "hóng ní", source: "唐·白居易《问刘十九》", meaning: "红泥小火炉，温暖如家", wuxing: "火土", gender: "female",
          personality: "温暖体贴，顾家有方", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属离卦。", ziWei: "对应天府星。", naYin: "纳音炉中火。", wuXing: "火土相生。", destiny: "家庭幸福。", career: "适合家政。", marriage: "温馨。", education: "生活技能。" }},
        // 其他唐代诗人 - 16 个名字
        { name: "玲珑", pinyin: "líng lóng", source: "唐·王维《相思》", meaning: "精巧细致，聪明伶俐", wuxing: "火火", gender: "female",
          personality: "心灵手巧，聪慧过人", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "聪明伶俐。", career: "适合手工。", marriage: "灵巧。", education: "手脑并用。" }},
        { name: "俊杰", pinyin: "jùn jié", source: "唐·杜牧《赤壁》", meaning: "英俊杰出，人才出众", wuxing: "火木", gender: "male",
          personality: "才华出众，仪表堂堂", detailed: { yiJing: "对应易经第 14 卦大有卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "功成名就。", career: "适合政治。", marriage: "优秀。", education: "全面发展。" }},
        { name: "梦琪", pinyin: "mèng qí", source: "唐·李商隐《锦瑟》", meaning: "如梦似幻，珍贵美好", wuxing: "木木", gender: "female",
          personality: "梦幻美好，珍贵如玉", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应太阴星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "美好如梦。", career: "适合艺术。", marriage: "浪漫。", education: "想象力丰富。" }},
        { name: "锦瑟", pinyin: "jǐn sè", source: "唐·李商隐《锦瑟》", meaning: "锦瑟无端五十弦，音乐才华", wuxing: "金木", gender: "female",
          personality: "音乐天赋，情感丰富", detailed: { yiJing: "对应易经第 51 卦震卦。", baGua: "属震卦。", ziWei: "对应天机星。", naYin: "纳音剑锋金。", wuXing: "金木相克。", destiny: "艺术成就。", career: "适合音乐。", marriage: "艺术共鸣。", education: "音乐专长。" }},
        { name: "无题", pinyin: "wú tí", source: "唐·李商隐《无题》", meaning: "无题胜有题，意境深远", wuxing: "木木", gender: "both",
          personality: "含蓄内敛，意境深远", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "深藏不露。", career: "适合研究。", marriage: "默契。", education: "深思熟虑。" }},
        { name: "春蚕", pinyin: "chūn cán", source: "唐·李商隐《无题》", meaning: "春蚕到死丝方尽，奉献精神", wuxing: "木火", gender: "both",
          personality: "无私奉献，执着追求", detailed: { yiJing: "对应易经第 50 卦鼎卦。", baGua: "属离卦。", ziWei: "对应天同星。", naYin: "纳音炉中火。", wuXing: "木火相生。", destiny: "奉献一生。", career: "适合教育。", marriage: "付出。", education: "刻苦钻研。" }},
        { name: "蜡烛", pinyin: "là zhú", source: "唐·李商隐《无题》", meaning: "蜡炬成灰泪始干，燃烧自己", wuxing: "火火", gender: "both",
          personality: "牺牲奉献，照亮他人", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "光明磊落。", career: "适合教师。", marriage: "奉献。", education: "照亮他人。" }},
        { name: "巴山", pinyin: "bā shān", source: "唐·李商隐《夜雨寄北》", meaning: "巴山夜雨涨秋池，思念之情", wuxing: "土水", gender: "male",
          personality: "深情厚谊，思念故乡", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音霹雷火。", wuXing: "土水相克。", destiny: "思乡情切。", career: "适合文学。", marriage: "思念。", education: "文科好。" }},
        { name: "夜雨", pinyin: "yè yǔ", source: "唐·李商隐《夜雨寄北》", meaning: "夜雨寄相思，情深意重", wuxing: "水水", gender: "female",
          personality: "多愁善感，情深义重", detailed: { yiJing: "对应易经第 29 卦坎卦。", baGua: "属坎卦。", ziWei: "对应太阴星。", naYin: "纳音大海水。", wuXing: "水水比和。", destiny: "感情丰富。", career: "适合艺术。", marriage: "深情。", education: "感性。" }},
        { name: "黄鹤", pinyin: "huáng hè", source: "唐·崔颢《黄鹤楼》", meaning: "昔人已乘黄鹤去，仙风道骨", wuxing: "金水", gender: "male",
          personality: "超凡脱俗，仙风道骨", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应天梁星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "超然物外。", career: "适合修行。", marriage: "超脱。", education: "哲学。" }},
        { name: "白云", pinyin: "bái yún", source: "唐·崔颢《黄鹤楼》", meaning: "白云千载空悠悠，悠然自得", wuxing: "金水", gender: "both",
          personality: "悠闲自在，淡泊名利", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音白蜡金。", wuXing: "金水相生。", destiny: "悠闲安乐。", career: "适合自由职业。", marriage: "自在。", education: "自学。" }},
        { name: "汉阳", pinyin: "hàn yáng", source: "唐·崔颢《黄鹤楼》", meaning: "汉阳树芳草萋萋，生机勃勃", wuxing: "水木", gender: "male",
          personality: "朝气蓬勃，生机盎然", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应太阳星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "兴旺发达。", career: "适合农业。", marriage: "美满。", education: "进步快。" }},
        { name: "烟波", pinyin: "yān bō", source: "唐·崔颢《黄鹤楼》", meaning: "烟波江上使人愁，意境优美", wuxing: "水水", gender: "both",
          personality: "诗意盎然，意境深远", detailed: { yiJing: "对应易经第 29 卦坎卦。", baGua: "属坎卦。", ziWei: "对应天机星。", naYin: "纳音大海水。", wuXing: "水水比和。", destiny: "漂泊不定。", career: "适合航海。", marriage: "流浪。", education: "游学。" }},
        { name: "枫桥", pinyin: "fēng qiáo", source: "唐·张继《枫桥夜泊》", meaning: "枫桥夜泊客船，静谧优美", wuxing: "木木", gender: "both",
          personality: "安静祥和，诗意盎然", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "平静安乐。", career: "适合文学。", marriage: "平静。", education: "文科好。" }},
        { name: "姑苏", pinyin: "gū sū", source: "唐·张继《枫桥夜泊》", meaning: "姑苏城外寒山寺，古色古香", wuxing: "木木", gender: "female",
          personality: "古典优雅，气质非凡", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应太阴星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "古典美。", career: "适合艺术。", marriage: "典雅。", education: "艺术。" }},
        { name: "寒山", pinyin: "hán shān", source: "唐·张继《枫桥夜泊》", meaning: "寒山寺钟声，禅意深远", wuxing: "水木", gender: "male",
          personality: "清静无为，禅意深远", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音泉中水。", wuXing: "水木相生。", destiny: "修行成功。", career: "适合修行。", marriage: "清净。", education: "哲学。" }},
        { name: "渔歌", pinyin: "yú gē", source: "唐·张志和《渔歌子》", meaning: "渔歌唱晚，悠闲自得", wuxing: "水木", gender: "both",
          personality: "悠闲自在，热爱生活", detailed: { yiJing: "对应易经第 57 卦巽卦。", baGua: "属巽卦。", ziWei: "对应天同星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "逍遥自在。", career: "适合渔业。", marriage: "自在。", education: "生活技能。" }}
    ],
    songci: [
        // 苏轼词作 - 12 个名字
        { name: "雨荷", pinyin: "yǔ hé", source: "宋·苏轼《阮郎归·初夏》", meaning: "雨后荷花，清新脱俗", wuxing: "水木", gender: "female",
          personality: "清新高洁，出尘不染", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应太阴星。", naYin: "纳音泉中水。", wuXing: "水木相生。", destiny: "福泽深厚。", career: "适合艺术。", marriage: "纯洁。", education: "文科优。" }},
        { name: "婉婷", pinyin: "wǎn tíng", source: "宋·苏轼《江城子》", meaning: "温婉婷婷，优雅动人", wuxing: "土火", gender: "female",
          personality: "温柔优雅，举止端庄", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应太阴星。", naYin: "纳音城头土。", wuXing: "火土相生。", destiny: "优雅一生。", career: "适合礼仪。", marriage: "美满。", education: "气质佳。" }},
        { name: "子轩", pinyin: "zǐ xuān", source: "宋·苏轼《水调歌头》", meaning: "气宇轩昂，风度翩翩", wuxing: "水木", gender: "male",
          personality: "气度不凡，才华横溢", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "前程远大。", career: "适合政治。", marriage: "优秀。", education: "博学。" }},
        { name: "浩然", pinyin: "hào rán", source: "宋·苏轼《潮州韩文公庙碑》", meaning: "浩然正气，胸怀坦荡", wuxing: "水金", gender: "male",
          personality: "正直豪迈，光明磊落", detailed: { yiJing: "对应易经第 11 卦泰卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音大海水。", wuXing: "水金相生。", destiny: "正气凛然。", career: "适合法律。", marriage: "坦荡。", education: "博学。" }},
        { name: "明月", pinyin: "míng yuè", source: "宋·苏轼《水调歌头》", meaning: "明月几时有，千里共婵娟", wuxing: "火木", gender: "both",
          personality: "光明磊落，思念情深", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "光明前程。", career: "适合艺术。", marriage: "团圆。", education: "文科好。" }},
        { name: "清风", pinyin: "qīng fēng", source: "宋·苏轼《前赤壁赋》", meaning: "清风徐来，水波不兴", wuxing: "水木", gender: "male",
          personality: "清新脱俗，从容不迫", detailed: { yiJing: "对应易经第 57 卦巽卦。", baGua: "属巽卦。", ziWei: "对应天机星。", naYin: "纳音泉中水。", wuXing: "水木相生。", destiny: "顺风顺水。", career: "适合文学。", marriage: "和谐。", education: "才华横溢。" }},
        { name: "水调", pinyin: "shuǐ diào", source: "宋·苏轼《水调歌头》", meaning: "水调歌头，词牌名", wuxing: "水火", gender: "female",
          personality: "音乐天赋，文采斐然", detailed: { yiJing: "对应易经第 29 卦坎卦。", baGua: "属离卦。", ziWei: "对应太阴星。", naYin: "纳音天河水。", wuXing: "水火既济。", destiny: "艺术成就。", career: "适合音乐。", marriage: "艺术共鸣。", education: "音乐专长。" }},
        { name: "琼楼", pinyin: "qióng lóu", source: "宋·苏轼《水调歌头》", meaning: "琼楼玉宇，高处不胜寒", wuxing: "木木", gender: "female",
          personality: "高贵典雅，超凡脱俗", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应天府星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "高贵不凡。", career: "适合艺术。", marriage: "高雅。", education: "天赋异禀。" }},
        { name: "玉宇", pinyin: "yù yǔ", source: "宋·苏轼《水调歌头》", meaning: "玉宇琼楼，仙境般美好", wuxing: "金土", gender: "male",
          personality: "高贵典雅，志向高远", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音海中金。", wuXing: "金土相生。", destiny: "前程似锦。", career: "适合学术。", marriage: "美好。", education: "深造佳。" }},
        { name: "婵娟", pinyin: "chán juān", source: "宋·苏轼《水调歌头》", meaning: "但愿人长久，千里共婵娟", wuxing: "金金", gender: "female",
          personality: "美丽动人，情深义重", detailed: { yiJing: "对应易经第 31 卦咸卦。", baGua: "属兑卦。", ziWei: "对应太阴星。", naYin: "纳音剑锋金。", wuXing: "金金比和。", destiny: "美好姻缘。", career: "适合艺术。", marriage: "恩爱。", education: "感性。" }},
        { name: "赤壁", pinyin: "chì bì", source: "宋·苏轼《念奴娇·赤壁怀古》", meaning: "大江东去，浪淘尽", wuxing: "火土", gender: "male",
          personality: "豪迈奔放，气势磅礴", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属离卦。", ziWei: "对应破军星。", naYin: "纳音炉中火。", wuXing: "火土相生。", destiny: "波澜壮阔。", career: "适合军事。", marriage: "激情。", education: "历史。" }},
        { name: "大江", pinyin: "dà jiāng", source: "宋·苏轼《念奴娇·赤壁怀古》", meaning: "大江东去，千古风流", wuxing: "水水", gender: "male",
          personality: "胸怀博大，气势恢宏", detailed: { yiJing: "对应易经第 29 卦坎卦。", baGua: "属坎卦。", ziWei: "对应破军星。", naYin: "纳音大海水。", wuXing: "水水比和。", destiny: "成就大业。", career: "适合领导。", marriage: "博大。", education: "博学。" }},
        // 李清照词作 - 12 个名字
        { name: "梦蝶", pinyin: "mèng dié", source: "宋·李清照《如梦令》", meaning: "庄周梦蝶，意境优美", wuxing: "木火", gender: "female",
          personality: "梦幻美好，诗意盎然", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应太阴星。", naYin: "纳音炉中火。", wuXing: "木火相生。", destiny: "如梦如幻。", career: "适合艺术。", marriage: "浪漫。", education: "想象力丰富。" }},
        { name: "锦书", pinyin: "jǐn shū", source: "宋·李清照《一剪梅》", meaning: "云中谁寄锦书来", wuxing: "金金", gender: "both",
          personality: "文采斐然，情深意重", detailed: { yiJing: "对应易经第 50 卦鼎卦。", baGua: "属兑卦。", ziWei: "对应天机星。", naYin: "纳音剑锋金。", wuXing: "金金比和。", destiny: "文名远播。", career: "适合写作。", marriage: "知音。", education: "文学才。" }},
        { name: "疏影", pinyin: "shū yǐng", source: "宋·李清照《如梦令》", meaning: "疏影横斜水清浅", wuxing: "木土", gender: "female",
          personality: "清雅脱俗，气质非凡", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应太阴星。", naYin: "纳音城头土。", wuXing: "木土相克。", destiny: "清雅一生。", career: "适合艺术。", marriage: "淡雅。", education: "艺术。" }},
        { name: "暗香", pinyin: "àn xiāng", source: "宋·李清照《如梦令》", meaning: "暗香浮动月黄昏", wuxing: "水水", gender: "female",
          personality: "含蓄内敛，香气袭人", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属坎卦。", ziWei: "对应太阴星。", naYin: "纳音大海水。", wuXing: "水水比和。", destiny: "香气远播。", career: "适合香料。", marriage: "含蓄。", education: "感性。" }},
        { name: "知否", pinyin: "zhī fǒu", source: "宋·李清照《如梦令》", meaning: "知否知否，应是绿肥红瘦", wuxing: "火水", gender: "female",
          personality: "聪慧敏感，悟性极高", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音涧下水。", wuXing: "水火既济。", destiny: "聪明伶俐。", career: "适合文学。", marriage: "理解深刻。", education: "悟性好。" }},
        { name: "绿肥", pinyin: "lǜ féi", source: "宋·李清照《如梦令》", meaning: "绿肥红瘦，春意盎然", wuxing: "木土", gender: "female",
          personality: "生机勃勃，充满活力", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应天府星。", naYin: "纳音松柏木。", wuXing: "木土相克。", destiny: "兴旺发达。", career: "适合农业。", marriage: "美满。", education: "进步快。" }},
        { name: "红瘦", pinyin: "hóng shòu", source: "宋·李清照《如梦令》", meaning: "绿肥红瘦，惜春之情", wuxing: "火金", gender: "female",
          personality: "多愁善感，惜春悲秋", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属兑卦。", ziWei: "对应太阴星。", naYin: "纳音炉中火。", wuXing: "火金相克。", destiny: "感情丰富。", career: "适合艺术。", marriage: "感性。", education: "文科好。" }},
        { name: "海棠", pinyin: "hǎi táng", source: "宋·李清照《如梦令》", meaning: "试问卷帘人，却道海棠依旧", wuxing: "水木", gender: "female",
          personality: "美丽动人，情怀依旧", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应太阴星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "美丽一生。", career: "适合美容。", marriage: "甜蜜。", education: "艺术。" }},
        { name: "藕花", pinyin: "ǒu huā", source: "宋·李清照《如梦令》", meaning: "兴尽晚回舟，误入藕花深处", wuxing: "木木", gender: "female",
          personality: "纯净美好，深入探索", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应天府星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "纯净高尚。", career: "适合研究。", marriage: "纯洁。", education: "钻研。" }},
        { name: "兰舟", pinyin: "lán zhōu", source: "宋·李清照《一剪梅》", meaning: "红藕香残玉簟秋，轻解罗裳独上兰舟", wuxing: "木水", gender: "female",
          personality: "高雅脱俗，独立自主", detailed: { yiJing: "对应易经第 57 卦巽卦。", baGua: "属巽卦。", ziWei: "对应太阴星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "高雅一生。", career: "适合艺术。", marriage: "独立。", education: "自学。" }},
        { name: "雁字", pinyin: "yàn zì", source: "宋·李清照《一剪梅》", meaning: "云中谁寄锦书来，雁字回时月满西楼", wuxing: "火火", gender: "both",
          personality: "思念情深，信守承诺", detailed: { yiJing: "对应易经第 31 卦咸卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "信守诺言。", career: "适合通信。", marriage: "思念。", education: "文科好。" }},
        { name: "月满", pinyin: "yuè mǎn", source: "宋·李清照《一剪梅》", meaning: "月满西楼，团圆美好", wuxing: "火水", gender: "both",
          personality: "圆满美好，家庭和睦", detailed: { yiJing: "对应易经第 11 卦泰卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "水火既济。", destiny: "团圆美满。", career: "适合公务员。", marriage: "团圆。", education: "稳定。" }},
        // 辛弃疾词作 - 10 个名字
        { name: "青玉", pinyin: "qīng yù", source: "宋·辛弃疾《青玉案·元夕》", meaning: "青玉案上，元宵佳节", wuxing: "木木", gender: "female",
          personality: "高贵典雅，品味独特", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应天府星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "高贵一生。", career: "适合艺术。", marriage: "高雅。", education: "艺术。" }},
        { name: "元夕", pinyin: "yuán xī", source: "宋·辛弃疾《青玉案·元夕》", meaning: "元宵佳节，灯火辉煌", wuxing: "木火", gender: "both",
          personality: "喜庆祥和，光明灿烂", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "木火相生。", destiny: "光明前程。", career: "适合庆典。", marriage: "喜庆。", education: "开朗。" }},
        { name: "灯火", pinyin: "dēng huǒ", source: "宋·辛弃疾《青玉案·元夕》", meaning: "蓦然回首，那人却在灯火阑珊处", wuxing: "火火", gender: "both",
          personality: "光明磊落，引人注目", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "光明一生。", career: "适合电力。", marriage: "热烈。", education: "出众。" }},
        { name: "阑珊", pinyin: "lán shān", source: "宋·辛弃疾《青玉案·元夕》", meaning: "灯火阑珊，意境深远", wuxing: "木火", gender: "female",
          personality: "含蓄内敛，意境深远", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属离卦。", ziWei: "对应太阴星。", naYin: "纳音炉中火。", wuXing: "木火相生。", destiny: "深藏不露。", career: "适合研究。", marriage: "默契。", education: "深思。" }},
        { name: "众里", pinyin: "zhòng lǐ", source: "宋·辛弃疾《青玉案·元夕》", meaning: "众里寻他千百度", wuxing: "火火", gender: "both",
          personality: "执着追求，不放弃", detailed: { yiJing: "对应易经第 31 卦咸卦。", baGua: "属离卦。", ziWei: "对应武曲星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "执着成功。", career: "适合销售。", marriage: "执着。", education: "坚持。" }},
        { name: "千百度", pinyin: "qiān bǎi dù", source: "宋·辛弃疾《青玉案·元夕》", meaning: "众里寻他千百度，终得所愿", wuxing: "火水", gender: "both",
          personality: "坚持不懈，终获成功", detailed: { yiJing: "对应易经第 63 卦既济卦。", baGua: "属离卦。", ziWei: "对应武曲星。", naYin: "纳音涧下水。", wuXing: "水火既济。", destiny: "功夫不负有心人。", career: "适合研究。", marriage: "终成眷属。", education: "刻苦。" }},
        { name: "破阵", pinyin: "pò zhèn", source: "宋·辛弃疾《破阵子》", meaning: "醉里挑灯看剑，梦回吹角连营", wuxing: "火金", gender: "male",
          personality: "英勇无畏，战场英雄", detailed: { yiJing: "对应易经第 7 卦师卦。", baGua: "属离卦。", ziWei: "对应破军星。", naYin: "纳音霹雳火。", wuXing: "火金相克。", destiny: "战功赫赫。", career: "适合军警。", marriage: "激情。", education: "体育。" }},
        { name: "吹角", pinyin: "chuī jiǎo", source: "宋·辛弃疾《破阵子》", meaning: "梦回吹角连营，军营生活", wuxing: "火木", gender: "male",
          personality: "纪律严明，团队精神", detailed: { yiJing: "对应易经第 7 卦师卦。", baGua: "属离卦。", ziWei: "对应武曲星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "军旅生涯。", career: "适合军警。", marriage: "忠诚。", education: "纪律。" }},
        { name: "沙场", pinyin: "shā chǎng", source: "宋·辛弃疾《破阵子》", meaning: "沙场秋点兵，英姿飒爽", wuxing: "水土", gender: "male",
          personality: "英勇善战，指挥若定", detailed: { yiJing: "对应易经第 7 卦师卦。", baGua: "属坤卦。", ziWei: "对应破军星。", naYin: "纳音霹雷火。", wuXing: "土水相克。", destiny: "战场立功。", career: "适合军警。", marriage: "刚毅。", education: "军事。" }},
        { name: "的卢", pinyin: "dí lú", source: "宋·辛弃疾《破阵子》", meaning: "马作的卢飞快，弓如霹雳弦惊", wuxing: "火火", gender: "male",
          personality: "迅捷如风，行动力强", detailed: { yiJing: "对应易经第 51 卦震卦。", baGua: "属震卦。", ziWei: "对应破军星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "快速成功。", career: "适合交通。", marriage: "快速。", education: "反应快。" }},
        // 其他宋代词人 - 16 个名字
        { name: "念真", pinyin: "niàn zhēn", source: "宋·晏几道《临江仙》", meaning: "念念不忘，真诚待人", wuxing: "火金", gender: "both",
          personality: "真诚专一，情深义重", detailed: { yiJing: "对应易经第 31 卦咸卦。", baGua: "属离卦。", ziWei: "对应天同星。", naYin: "纳音霹雳火。", wuXing: "火金相克。", destiny: "真情永恒。", career: "适合教育。", marriage: "专一。", education: "专注。" }},
        { name: "依晨", pinyin: "yī chén", source: "宋·柳永《雨霖铃》", meaning: "依靠晨光，充满希望", wuxing: "土金", gender: "female",
          personality: "积极向上，充满希望", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音路旁土。", wuXing: "土金相生。", destiny: "希望无限。", career: "适合教育。", marriage: "温馨。", education: "乐观。" }},
        { name: "芷若", pinyin: "zhǐ ruò", source: "宋·范仲淹《苏幕遮》", meaning: "香草名，气质高雅", wuxing: "木木", gender: "female",
          personality: "高雅脱俗，气质非凡", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应太阴星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "高雅一生。", career: "适合艺术。", marriage: "淡雅。", education: "艺术。" }},
        { name: "语堂", pinyin: "yǔ táng", source: "宋·欧阳修《蝶恋花》", meaning: "谈笑风生，学识渊博", wuxing: "木土", gender: "male",
          personality: "幽默风趣，博学多才", detailed: { yiJing: "对应易经第 50 卦鼎卦。", baGua: "属兑卦。", ziWei: "对应天机星。", naYin: "纳音城头土。", wuXing: "木土相克。", destiny: "文名远播。", career: "适合教育。", marriage: "风趣。", education: "博学。" }},
        { name: "欣怡", pinyin: "xīn yí", source: "宋·秦观《鹊桥仙》", meaning: "欣喜愉悦，心情舒畅", wuxing: "木土", gender: "female",
          personality: "乐观开朗，心情愉悦", detailed: { yiJing: "对应易经第 11 卦泰卦。", baGua: "属兑卦。", ziWei: "对应天同星。", naYin: "纳音松柏木。", wuXing: "木土相克。", destiny: "快乐一生。", career: "适合公关。", marriage: "甜蜜。", education: "乐观。" }},
        { name: "可馨", pinyin: "kě xīn", source: "宋·周邦彦《苏幕遮》", meaning: "可爱温馨，令人喜爱", wuxing: "木金", gender: "female",
          personality: "可爱动人，温馨可人", detailed: { yiJing: "对应易经第 31 卦咸卦。", baGua: "属兑卦。", ziWei: "对应太阴星。", naYin: "纳音石榴木。", wuXing: "木金相克。", destiny: "人见人爱。", career: "适合服务。", marriage: "甜蜜。", education: "人缘好。" }},
        { name: "铭哲", pinyin: "míng zhé", source: "宋·陆游《钗头凤》", meaning: "铭记哲理，智慧超群", wuxing: "金火", gender: "male",
          personality: "聪明睿智，记忆力强", detailed: { yiJing: "对应易经第 50 卦鼎卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音白蜡金。", wuXing: "金火相克。", destiny: "智慧超群。", career: "适合学术。", marriage: "理解深刻。", education: "博学。" }},
        { name: "雅芙", pinyin: "yǎ fú", source: "宋·王安石《元日》", meaning: "高雅如芙蓉", wuxing: "木木", gender: "female",
          personality: "高雅脱俗，美丽动人", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应太阴星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "高雅美丽。", career: "适合艺术。", marriage: "高雅。", education: "艺术。" }},
        { name: "鹊桥", pinyin: "què qiáo", source: "宋·秦观《鹊桥仙》", meaning: "纤云弄巧，飞星传恨，银汉迢迢暗度", wuxing: "火木", gender: "both",
          personality: "搭桥牵线，成人之美", detailed: { yiJing: "对应易经第 31 卦咸卦。", baGua: "属离卦。", ziWei: "对应天同星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "成全他人。", career: "适合中介。", marriage: "美满。", education: "助人。" }},
        { name: "纤云", pinyin: "xiān yún", source: "宋·秦观《鹊桥仙》", meaning: "纤云弄巧，云彩变幻", wuxing: "金水", gender: "female",
          personality: "变化多端，心灵手巧", detailed: { yiJing: "对应易经第 57 卦巽卦。", baGua: "属巽卦。", ziWei: "对应天机星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "变化无穷。", career: "适合设计。", marriage: "多变。", education: "创意。" }},
        { name: "飞星", pinyin: "fēi xīng", source: "宋·秦观《鹊桥仙》", meaning: "飞星传恨，流星传递", wuxing: "水火", gender: "male",
          personality: "迅速敏捷，才华横溢", detailed: { yiJing: "对应易经第 30 卦离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音天河水。", wuXing: "水火既济。", destiny: "一闪而过。", career: "适合航空。", marriage: "短暂。", education: "反应快。" }},
        { name: "银汉", pinyin: "yín hàn", source: "宋·秦观《鹊桥仙》", meaning: "银汉迢迢，银河遥远", wuxing: "金水", gender: "male",
          personality: "远大理想，志在四方", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "远大前程。", career: "适合航天。", marriage: "遥远。", education: "深造。" }},
        { name: "金风", pinyin: "jīn fēng", source: "宋·秦观《鹊桥仙》", meaning: "金风玉露一相逢", wuxing: "金水", gender: "both",
          personality: "清爽宜人，相逢恨晚", detailed: { yiJing: "对应易经第 57 卦巽卦。", baGua: "属兑卦。", ziWei: "对应天机星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "相逢是缘。", career: "适合公关。", marriage: "相逢。", education: "交流。" }},
        { name: "玉露", pinyin: "yù lù", source: "宋·秦观《鹊桥仙》", meaning: "金风玉露一相逢，便胜却人间无数", wuxing: "金水", gender: "female",
          personality: "珍贵稀有，纯洁无瑕", detailed: { yiJing: "对应易经第 31 卦咸卦。", baGua: "属兑卦。", ziWei: "对应太阴星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "珍贵一生。", career: "适合珠宝。", marriage: "珍贵。", education: "优秀。" }},
        { name: "胜却", pinyin: "shèng què", source: "宋·秦观《鹊桥仙》", meaning: "便胜却人间无数，超越平凡", wuxing: "金金", gender: "both",
          personality: "超越自我，追求卓越", detailed: { yiJing: "对应易经第 14 卦大有卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音剑锋金。", wuXing: "金金比和。", destiny: "超越常人。", career: "适合竞争。", marriage: "优秀。", education: "卓越。" }},
        { name: "人间", pinyin: "rén jiān", source: "宋·秦观《鹊桥仙》", meaning: "便胜却人间无数，珍惜当下", wuxing: "金土", gender: "both",
          personality: "珍惜眼前，脚踏实地", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音剑锋金。", wuXing: "金土相生。", destiny: "珍惜拥有。", career: "适合实业。", marriage: "实在。", education: "务实。" }}
    ],
    // 周易 - 64 卦 expanded to 52 names
    zhouyi: [
        // 上经 - 30 卦
        { name: "元亨", pinyin: "yuán hēng", source: "《周易·乾卦》", meaning: "大吉大利，亨通顺利", wuxing: "木水", gender: "male",
          personality: "胸怀宽广，处事圆融，有领导才能",
          detailed: { yiJing: "对应易经第 1 卦乾卦，元亨利贞。", baGua: "属乾卦，代表天、父、刚健。", ziWei: "紫微斗数中对应紫微星。", naYin: "纳音需要根据具体出生年份确定。", wuXing: "木水组合，水生木。", destiny: "一生运势强盛。", career: "适合领导型职业。", marriage: "婚姻稳定。", education: "学业优异。" }},
        { name: "利贞", pinyin: "lì zhēn", source: "《周易·乾卦》", meaning: "有利且正固，坚守正道", wuxing: "火金", gender: "male",
          personality: "正直坚定，原则性强",
          detailed: { yiJing: "对应易经乾卦四德之一。", baGua: "属乾卦。", ziWei: "对应天府星。", naYin: "纳音火金。", wuXing: "火金组合。", destiny: "财运稳定。", career: "适合法律、金融。", marriage: "感情专一。", education: "学习踏实。" }},
        { name: "飞龙", pinyin: "fēi lóng", source: "《周易·乾卦》", meaning: "飞龙在天，大展宏图", wuxing: "水火", gender: "male",
          personality: "志向远大，气势磅礴",
          detailed: { yiJing: "对应乾卦九五爻。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音水火。", wuXing: "水火既济。", destiny: "事业腾飞。", career: "适合创业。", marriage: "配偶优秀。", education: "深造佳。" }},
        { name: "潜龙", pinyin: "qián lóng", source: "《周易·乾卦》", meaning: "潜龙勿用，待时而动", wuxing: "水水", gender: "male",
          personality: "沉稳内敛，蓄势待发",
          detailed: { yiJing: "对应乾卦初九爻。", baGua: "属乾卦。", ziWei: "对应太阴星。", naYin: "纳音水水。", wuXing: "水水比和。", destiny: "大器晚成。", career: "适合积累期。", marriage: "晚婚佳。", education: "厚积薄发。" }},
        { name: "坤元", pinyin: "kūn yuán", source: "《周易·坤卦》", meaning: "至哉坤元，万物资生", wuxing: "土木", gender: "female",
          personality: "包容万物，厚德载物",
          detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音土木。", wuXing: "土木相克。", destiny: "德行深厚。", career: "适合教育。", marriage: "贤妻良母。", education: "文科好。" }},
        { name: "含弘", pinyin: "hán hóng", source: "《周易·坤卦》", meaning: "含弘光大，品物咸亨", wuxing: "水木", gender: "both",
          personality: "胸怀博大，包容力强",
          detailed: { yiJing: "对应坤卦彖传。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音水木。", wuXing: "水木相生。", destiny: "福禄双全。", career: "适合公益。", marriage: "家庭和睦。", education: "品德优。" }},
        { name: "直方", pinyin: "zhí fāng", source: "《周易·坤卦》", meaning: "直方大，不习无不利", wuxing: "火土", gender: "both",
          personality: "正直大方，自然天成",
          detailed: { yiJing: "对应坤卦六二爻。", baGua: "属坤卦。", ziWei: "对应天相星。", naYin: "纳音火土。", wuXing: "火土相生。", destiny: "顺其自然。", career: "适合稳定工作。", marriage: "简单幸福。", education: "天赋好。" }},
        { name: "云从", pinyin: "yún cóng", source: "《周易·乾卦》", meaning: "云从龙，风从虎", wuxing: "水水", gender: "male",
          personality: "顺势而为，得道多助",
          detailed: { yiJing: "对应乾卦文言。", baGua: "属乾卦。", ziWei: "对应天机星。", naYin: "纳音水水。", wuXing: "水水比和。", destiny: "贵人相助。", career: "适合团队。", marriage: "志同道合。", education: "合作学习。" }},
        { name: "风虎", pinyin: "fēng hǔ", source: "《周易·乾卦》", meaning: "风从虎，威风凛凛", wuxing: "木水", gender: "male",
          personality: "威严有力， leadership",
          detailed: { yiJing: "对应乾卦文言。", baGua: "属乾卦。", ziWei: "对应武曲星。", naYin: "纳音木水。", wuXing: "水木相生。", destiny: "威震四方。", career: "适合军警。", marriage: "强势。", education: "体育好。" }},
        { name: "屯难", pinyin: "zhūn nàn", source: "《周易·屯卦》", meaning: "屯者难也，物始生而难", wuxing: "木水", gender: "male",
          personality: "坚韧不拔，克服困难",
          detailed: { yiJing: "对应易经第 3 卦屯卦。", baGua: "属坎卦。", ziWei: "对应破军星。", naYin: "纳音木水。", wuXing: "水木相生。", destiny: "先难后易。", career: "适合开拓。", marriage: "患难与共。", education: "刻苦钻研。" }},
        { name: "经纶", pinyin: "jīng lún", source: "《周易·屯卦》", meaning: "君子以经纶", wuxing: "木火", gender: "male",
          personality: "治理才能，组织能力",
          detailed: { yiJing: "对应屯卦象传。", baGua: "属震卦。", ziWei: "对应紫微星。", naYin: "纳音木火。", wuXing: "木火相生。", destiny: "事业有成。", career: "适合管理。", marriage: "持家有道。", education: "组织能力强。" }},
        { name: "蒙泉", pinyin: "méng quán", source: "《周易·蒙卦》", meaning: "山下出泉，蒙", wuxing: "土水", gender: "both",
          personality: "启蒙开智，清澈纯净",
          detailed: { yiJing: "对应易经第 4 卦蒙卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音土水。", wuXing: "土水相克。", destiny: "智慧开启。", career: "适合教育。", marriage: "纯真。", education: "学习能力强。" }},
        { name: "果行", pinyin: "guǒ xíng", source: "《周易·蒙卦》", meaning: "君子以果行育德", wuxing: "木水", gender: "male",
          personality: "果断行动，培养品德",
          detailed: { yiJing: "对应蒙卦象传。", baGua: "属艮卦。", ziWei: "对应武曲星。", naYin: "纳音木水。", wuXing: "水木相生。", destiny: "行动成功。", career: "适合执行。", marriage: "实干。", education: "实践好。" }},
        { name: "需时", pinyin: "xū shí", source: "《周易·需卦》", meaning: "需，须也，险在前也", wuxing: "水金", gender: "both",
          personality: "耐心等待，把握时机",
          detailed: { yiJing: "对应易经第 5 卦需卦。", baGua: "属坎卦。", ziWei: "对应天相星。", naYin: "纳音水金。", wuXing: "水金相生。", destiny: "等待机遇。", career: "适合稳定。", marriage: "耐心经营。", education: "循序渐进。" }},
        { name: "饮食", pinyin: "yǐn shí", source: "《周易·需卦》", meaning: "需于酒食，贞吉", wuxing: "水金", gender: "both",
          personality: "享受生活，知足常乐",
          detailed: { yiJing: "对应需卦爻辞。", baGua: "属坎卦。", ziWei: "对应天同星。", naYin: "纳音水金。", wuXing: "水金相生。", destiny: "衣食无忧。", career: "适合餐饮。", marriage: "美满。", education: "生活技能。" }},
        { name: "讼慎", pinyin: "sòng shèn", source: "《周易·讼卦》", meaning: "讼，上刚下险", wuxing: "金水", gender: "male",
          personality: "谨慎处事，避免争端",
          detailed: { yiJing: "对应易经第 6 卦讼卦。", baGua: "属乾卦。", ziWei: "对应天梁星。", naYin: "纳音金水。", wuXing: "金水相生。", destiny: "以和为贵。", career: "适合调解。", marriage: "和睦。", education: "法律意识。" }},
        { name: "师中", pinyin: "shī zhōng", source: "《周易·师卦》", meaning: "师，众也", wuxing: "金火", gender: "male",
          personality: "领导众人，中正平和",
          detailed: { yiJing: "对应易经第 7 卦师卦。", baGua: "属坎卦。", ziWei: "对应紫微星。", naYin: "纳音金火。", wuXing: "金火相克。", destiny: "统领全局。", career: "适合管理。", marriage: "主导。", education: "领导才能。" }},
        { name: "丈人", pinyin: "zhàng rén", source: "《周易·师卦》", meaning: "丈人吉，无咎", wuxing: "火金", gender: "male",
          personality: "德高望重，受人尊敬",
          detailed: { yiJing: "对应师卦卦辞。", baGua: "属坎卦。", ziWei: "对应太阳星。", naYin: "纳音火金。", wuXing: "火金相克。", destiny: "晚年德高。", career: "适合顾问。", marriage: "尊重。", education: "经验丰富。" }},
        { name: "比辅", pinyin: "bǐ fǔ", source: "《周易·比卦》", meaning: "比，辅也", wuxing: "水水", gender: "both",
          personality: "互助合作，团结友爱",
          detailed: { yiJing: "对应易经第 8 卦比卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音水水。", wuXing: "水水比和。", destiny: "得人相助。", career: "适合团队。", marriage: "互助。", education: "小组学习。" }},
        { name: "原筮", pinyin: "yuán shì", source: "《周易·比卦》", meaning: "原筮，元永贞", wuxing: "木金", gender: "both",
          personality: "探究本源，预测未来",
          detailed: { yiJing: "对应比卦卦辞。", baGua: "属坤卦。", ziWei: "对应天机星。", naYin: "纳音木金。", wuXing: "木金相克。", destiny: "先知先觉。", career: "适合研究。", marriage: "理解深刻。", education: "研究能力。" }},
        { name: "小畜", pinyin: "xiǎo chù", source: "《周易·小畜卦》", meaning: "小畜，以小养大", wuxing: "木土", gender: "both",
          personality: "积少成多，循序渐进",
          detailed: { yiJing: "对应易经第 9 卦小畜卦。", baGua: "属巽卦。", ziWei: "对应天同星。", naYin: "纳音木土。", wuXing: "木土相克。", destiny: "积累成功。", career: "适合储蓄。", marriage: "积累感情。", education: "日积月累。" }},
        { name: "密云", pinyin: "mì yún", source: "《周易·小畜卦》", meaning: "密云不雨，自我西郊", wuxing: "水水", gender: "female",
          personality: "蓄势待发，期待甘霖",
          detailed: { yiJing: "对应小畜卦卦辞。", baGua: "属巽卦。", ziWei: "对应太阴星。", naYin: "纳音水水。", wuXing: "水水比和。", destiny: "即将成功。", career: "适合等待时机。", marriage: "期待美好。", education: "准备充分。" }},
        { name: "履虎", pinyin: "lǚ hǔ", source: "《周易·履卦》", meaning: "履虎尾，不咥人", wuxing: "火水", gender: "male",
          personality: "勇敢面对危险",
          detailed: { yiJing: "对应易经第 10 卦履卦。", baGua: "属兑卦。", ziWei: "对应武曲星。", naYin: "纳音火水。", wuXing: "水火相克。", destiny: "化险为夷。", career: "适合冒险。", marriage: "勇敢追求。", education: "挑战自我。" }},
        { name: "素履", pinyin: "sù lǚ", source: "《周易·履卦》", meaning: "素履往，无咎", wuxing: "金水", gender: "both",
          personality: "朴实无华，稳步前行",
          detailed: { yiJing: "对应履卦初九爻。", baGua: "属兑卦。", ziWei: "对应天梁星。", naYin: "纳音金水。", wuXing: "金水相生。", destiny: "平安是福。", career: "适合稳定。", marriage: "平淡是真。", education: "踏实学习。" }},
        { name: "泰平", pinyin: "tài píng", source: "《周易·泰卦》", meaning: "天地泰，君子道长", wuxing: "火水", gender: "both",
          personality: "太平盛世，安居乐业",
          detailed: { yiJing: "对应易经第 11 卦泰卦。", baGua: "属坤卦。", ziWei: "对应太阳星。", naYin: "纳音火水。", wuXing: "水火既济。", destiny: "国泰民安。", career: "适合公务员。", marriage: "家庭和睦。", education: "环境良好。" }},
        { name: "包荒", pinyin: "bāo huāng", source: "《周易·泰卦》", meaning: "包荒，用冯河", wuxing: "水水", gender: "male",
          personality: "胸怀广阔，勇往直前",
          detailed: { yiJing: "对应泰卦九二爻。", baGua: "属坤卦。", ziWei: "对应破军星。", naYin: "纳音水水。", wuXing: "水水比和。", destiny: "开拓成功。", career: "适合开拓。", marriage: "包容。", education: "视野广。" }},
        { name: "朋亡", pinyin: "péng wáng", source: "《周易·泰卦》", meaning: "朋亡，得尚于中行", wuxing: "水水", gender: "both",
          personality: "不结党营私，中庸之道",
          detailed: { yiJing: "对应泰卦九三爻。", baGua: "属坤卦。", ziWei: "对应天相星。", naYin: "纳音水水。", wuXing: "水水比和。", destiny: "中正平和。", career: "适合独立工作。", marriage: "平等。", education: "独立思考。" }},
        { name: "拔茅", pinyin: "bá máo", source: "《周易·泰卦》", meaning: "拔茅茹，以其汇", wuxing: "木木", gender: "both",
          personality: "团结协作，共同进步",
          detailed: { yiJing: "对应泰卦初九爻。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音木木。", wuXing: "木木比和。", destiny: "团队成功。", career: "适合合作。", marriage: "共同成长。", education: "团队合作。" }},
        { name: "否极", pinyin: "pǐ jí", source: "《周易·否卦》", meaning: "否之匪人，不利君子贞", wuxing: "水土", gender: "both",
          personality: "逆境中坚持",
          detailed: { yiJing: "对应易经第 12 卦否卦。", baGua: "属乾卦。", ziWei: "对应天梁星。", naYin: "纳音水土。", wuXing: "土水相克。", destiny: "否极泰来。", career: "坚持到底。", marriage: "共渡难关。", education: "逆境成长。" }},
        { name: "倾否", pinyin: "qīng pǐ", source: "《周易·否卦》", meaning: "倾否，先否后喜", wuxing: "水水", gender: "both",
          personality: "扭转乾坤，转危为安",
          detailed: { yiJing: "对应否卦上九爻。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音水水。", wuXing: "水水比和。", destiny: "先苦后甜。", career: " turnaround。", marriage: "和好如初。", education: "后来居上。" }}
    ],
    // 尚书
    // 尚书 - 52 个名字
    shangshu: [
        // 虞书·尧典 - 12 个名字
        { name: "禹辰", pinyin: "yǔ chén", source: "《尚书·虞书·尧典》", meaning: "如大禹般伟大，时辰吉祥", wuxing: "水土", gender: "male",
          personality: "有担当精神，做事认真负责", detailed: { yiJing: "对应易经治水之功。", baGua: "属坎卦。", ziWei: "对应破军星。", naYin: "纳音水土。", wuXing: "土水相克。", destiny: "成就大业。", career: "适合工程。", marriage: "稳定。", education: "理工优。" }},
        { name: "舜华", pinyin: "shùn huá", source: "《尚书·虞书·舜典》", meaning: "如舜帝般德才兼备", wuxing: "金水", gender: "female",
          personality: "品德高尚，才华出众", detailed: { yiJing: "对应易经顺德。", baGua: "属坤卦。", ziWei: "对应太阴星。", naYin: "纳音金水。", wuXing: "金水相生。", destiny: "德才兼备。", career: "适合管理。", marriage: "美满。", education: "全面。" }},
        { name: "钦明", pinyin: "qīn míng", source: "《尚书·虞书·尧典》", meaning: "钦明文思安安，恭敬明智", wuxing: "金火", gender: "male",
          personality: "恭敬明智，才华横溢", detailed: { yiJing: "对应易经离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音白蜡金。", wuXing: "金火相克。", destiny: "聪明睿智。", career: "适合学术。", marriage: "理解。", education: "博学。" }},
        { name: "文思", pinyin: "wén sī", source: "《尚书·虞书·尧典》", meaning: "文思安安，文采斐然", wuxing: "水金", gender: "both",
          personality: "文采飞扬，思维敏捷", detailed: { yiJing: "对应易经鼎卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音大海水。", wuXing: "水金相生。", destiny: "文名远播。", career: "适合写作。", marriage: "知音。", education: "文学。" }},
        { name: "安安", pinyin: "ān ān", source: "《尚书·虞书·尧典》", meaning: "安安而能迁，平安吉祥", wuxing: "土土", gender: "both",
          personality: "平安喜乐，随遇而安", detailed: { yiJing: "对应易经泰卦。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音路旁土。", wuXing: "土土比和。", destiny: "一生平安。", career: "适合稳定。", marriage: "和睦。", education: "平稳。" }},
        { name: "允恭", pinyin: "yǔn gōng", source: "《尚书·虞书·尧典》", meaning: "允恭克让，诚信恭敬", wuxing: "土木", gender: "male",
          personality: "诚信恭敬，谦虚礼让", detailed: { yiJing: "对应易经谦卦。", baGua: "属艮卦。", ziWei: "对应天相星。", naYin: "纳音松柏木。", wuXing: "木土相克。", destiny: "受人尊敬。", career: "适合礼仪。", marriage: "相敬。", education: "礼仪。" }},
        { name: "克让", pinyin: "kè ràng", source: "《尚书·虞书·尧典》", meaning: "允恭克让，克服私欲", wuxing: "木火", gender: "male",
          personality: "自律克己，谦虚礼让", detailed: { yiJing: "对应易经谦卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音松柏木。", wuXing: "木火相生。", destiny: "自律成功。", career: "适合自律职业。", marriage: "互让。", education: "自律。" }},
        { name: "光被", pinyin: "guāng bèi", source: "《尚书·虞书·尧典》", meaning: "光被四表，德泽四方", wuxing: "火水", gender: "male",
          personality: "德行广布，恩泽四方", detailed: { yiJing: "对应易经离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "水火既济。", destiny: "名扬四海。", career: "适合公益。", marriage: "广泛。", education: "博学。" }},
        { name: "四表", pinyin: "sì biǎo", source: "《尚书·虞书·尧典》", meaning: "光被四表，影响深远", wuxing: "金水", gender: "both",
          personality: "影响广泛，声名远播", detailed: { yiJing: "对应易经乾卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "声名远播。", career: "适合传媒。", marriage: "广泛。", education: "交流。" }},
        { name: "格物", pinyin: "gé wù", source: "《尚书·虞书·尧典》", meaning: "格物致知，探究真理", wuxing: "木木", gender: "male",
          personality: "探究原理，求真务实", detailed: { yiJing: "对应易经鼎卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "学术有成。", career: "适合研究。", marriage: "求真。", education: "科研。" }},
        { name: "致知", pinyin: "zhì zhī", source: "《尚书·虞书·尧典》", meaning: "致知在格物，获得知识", wuxing: "火金", gender: "both",
          personality: "求知若渴，学识渊博", detailed: { yiJing: "对应易经鼎卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音炉中火。", wuXing: "火金相克。", destiny: "知识丰富。", career: "适合教育。", marriage: "知音。", education: "博学。" }},
        { name: "协和", pinyin: "xié hé", source: "《尚书·虞书·尧典》", meaning: "协和万邦，和睦共处", wuxing: "金水", gender: "both",
          personality: "善于协调，团结各方", detailed: { yiJing: "对应易经同人卦。", baGua: "属离卦。", ziWei: "对应天相星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "人和事兴。", career: "适合外交。", marriage: "和谐。", education: "社交。" }},
        // 虞书·舜典 - 12 个名字
        { name: "玄德", pinyin: "xuán dé", source: "《尚书·虞书·舜典》", meaning: "玄德升闻，深奥德行", wuxing: "水火", gender: "male",
          personality: "德行深厚，内敛不露", detailed: { yiJing: "对应易经坤卦。", baGua: "属坤卦。", ziWei: "对应紫微星。", naYin: "纳音天河水。", wuXing: "水火既济。", destiny: "德高望重。", career: "适合学术。", marriage: "深厚。", education: "品德。" }},
        { name: "升闻", pinyin: "shēng wén", source: "《尚书·虞书·舜典》", meaning: "玄德升闻，名声上升", wuxing: "金水", gender: "male",
          personality: "名声渐起，才华显露", detailed: { yiJing: "对应易经升卦。", baGua: "属巽卦。", ziWei: "对应太阳星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "名声鹊起。", career: "适合传媒。", marriage: "和谐。", education: "进步。" }},
        { name: "浚哲", pinyin: "jùn zhé", source: "《尚书·虞书·舜典》", meaning: "浚哲文明，深邃智慧", wuxing: "水火", gender: "male",
          personality: "智慧深邃，文明有礼", detailed: { yiJing: "对应易经坎卦。", baGua: "属坎卦。", ziWei: "对应天机星。", naYin: "纳音天河水。", wuXing: "水火既济。", destiny: "智慧超群。", career: "适合研究。", marriage: "深刻。", education: "深造。" }},
        { name: "文明", pinyin: "wén míng", source: "《尚书·虞书·舜典》", meaning: "浚哲文明，文化昌盛", wuxing: "水火", gender: "both",
          personality: "文化修养高，明理通达", detailed: { yiJing: "对应易经离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "水火既济。", destiny: "文化成就。", career: "适合文化。", marriage: "明理。", education: "文科。" }},
        { name: "温恭", pinyin: "wēn gōng", source: "《尚书·虞书·舜典》", meaning: "温恭允塞，温和恭敬", wuxing: "土木", gender: "both",
          personality: "温和恭敬，待人诚恳", detailed: { yiJing: "对应易经谦卦。", baGua: "属艮卦。", ziWei: "对应天相星。", naYin: "纳音松柏木。", wuXing: "木土相克。", destiny: "受人喜爱。", career: "适合服务。", marriage: "和睦。", education: "礼仪。" }},
        { name: "允塞", pinyin: "yǔn sāi", source: "《尚书·虞书·舜典》", meaning: "温恭允塞，诚信充实", wuxing: "土土", gender: "both",
          personality: "诚信充实，内心富足", detailed: { yiJing: "对应易经大畜卦。", baGua: "属艮卦。", ziWei: "对应天府星。", naYin: "纳音路旁土。", wuXing: "土土比和。", destiny: "充实一生。", career: "适合储蓄。", marriage: "充实。", education: "积累。" }},
        { name: "慎徽", pinyin: "shèn huī", source: "《尚书·虞书·舜典》", meaning: "慎徽五典，谨慎美好", wuxing: "金火", gender: "female",
          personality: "谨慎细致，追求完美", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音白蜡金。", wuXing: "金火相克。", destiny: "谨慎成功。", career: "适合财务。", marriage: "谨慎。", education: "细心。" }},
        { name: "五典", pinyin: "wǔ diǎn", source: "《尚书·虞书·舜典》", meaning: "慎徽五典，五常之教", wuxing: "土火", gender: "both",
          personality: "遵循传统，品德端正", detailed: { yiJing: "对应易经同人卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音霹雷火。", wuXing: "火土相生。", destiny: "传承文化。", career: "适合教育。", marriage: "传统。", education: "人文。" }},
        { name: "纳麓", pinyin: "nà lù", source: "《尚书·虞书·舜典》", meaning: "纳于大麓，接受考验", wuxing: "火木", gender: "male",
          personality: "经受磨砺，成长迅速", detailed: { yiJing: "对应易经蹇卦。", baGua: "属艮卦。", ziWei: "对应武曲星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "磨砺成才。", career: "适合挑战。", marriage: "考验。", education: "实践。" }},
        { name: "辑瑞", pinyin: "jí ruì", source: "《尚书·虞书·舜典》", meaning: "辑五瑞，吉祥汇聚", wuxing: "木金", gender: "both",
          personality: "聚集祥瑞，福气满满", detailed: { yiJing: "对应易经大有卦。", baGua: "属离卦。", ziWei: "对应天府星。", naYin: "纳音杨柳木。", wuXing: "木金相克。", destiny: "福泽深厚。", career: "适合收藏。", marriage: "吉祥。", education: "幸运。" }},
        { name: "班瑞", pinyin: "bān ruì", source: "《尚书·虞书·舜典》", meaning: "班瑞于群后，分发祥瑞", wuxing: "水金", gender: "male",
          personality: "分享福泽，领导有方", detailed: { yiJing: "对应易经大有卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音剑锋金。", wuXing: "水金相生。", destiny: "领导有福。", career: "适合管理。", marriage: "分享。", education: "领导。" }},
        // 夏书·禹贡 - 10 个名字
        { name: "禹功", pinyin: "yǔ gōng", source: "《尚书·夏书·禹贡》", meaning: "大禹治水之功", wuxing: "土木", gender: "male",
          personality: "建功立业，功勋卓著", detailed: { yiJing: "对应易经师卦。", baGua: "属坎卦。", ziWei: "对应破军星。", naYin: "纳音松柏木。", wuXing: "木土相克。", destiny: "功勋卓越。", career: "适合公共事业。", marriage: "责任。", education: "工程。" }},
        { name: "九州", pinyin: "jiǔ zhōu", source: "《尚书·夏书·禹贡》", meaning: "禹别九州，天下归一", wuxing: "金金", gender: "male",
          personality: "胸怀天下，统揽全局", detailed: { yiJing: "对应易经大有卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音剑锋金。", wuXing: "金金比和。", destiny: "统领全局。", career: "适合政治。", marriage: "大局。", education: "地理。" }},
        { name: "冀州", pinyin: "jì zhōu", source: "《尚书·夏书·禹贡》", meaning: "冀州之地，中原核心", wuxing: "水金", gender: "both",
          personality: "核心地位，重要角色", detailed: { yiJing: "对应易经坤卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音剑锋金。", wuXing: "水金相生。", destiny: "地位重要。", career: "适合核心岗位。", marriage: "核心。", education: "重点。" }},
        { name: "兖州", pinyin: "yǎn zhōu", source: "《尚书·夏书·禹贡》", meaning: "兖州沃土，富饶之地", wuxing: "土金", gender: "both",
          personality: "富饶繁荣，生活优渥", detailed: { yiJing: "对应易经坤卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音路旁土。", wuXing: "土金相生。", destiny: "富裕安康。", career: "适合农业。", marriage: "富足。", education: "资源。" }},
        { name: "青州", pinyin: "qīng zhōu", source: "《尚书·夏书·禹贡》", meaning: "青州东方，生机勃勃", wuxing: "金木", gender: "both",
          personality: "朝气蓬勃，生机盎然", detailed: { yiJing: "对应易经震卦。", baGua: "属震卦。", ziWei: "对应太阳星。", naYin: "纳音剑锋金。", wuXing: "金木相克。", destiny: "兴旺发达。", career: "适合东方发展。", marriage: "活力。", education: "进步。" }},
        { name: "徐州", pinyin: "xú zhōu", source: "《尚书·夏书·禹贡》", meaning: "徐州之地，礼仪之邦", wuxing: "金金", gender: "both",
          personality: "注重礼仪，文明有序", detailed: { yiJing: "对应易经家人卦。", baGua: "属巽卦。", ziWei: "对应天相星。", naYin: "纳音剑锋金。", wuXing: "金金比和。", destiny: "文明有序。", career: "适合礼仪。", marriage: "礼貌。", education: "人文。" }},
        { name: "扬州", pinyin: "yáng zhōu", source: "《尚书·夏书·禹贡》", meaning: "扬州江南，鱼米之乡", wuxing: "火木", gender: "female",
          personality: "温柔富饶，才情出众", detailed: { yiJing: "对应易经巽卦。", baGua: "属巽卦。", ziWei: "对应太阴星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "富饶多才。", career: "适合艺术。", marriage: "温柔。", education: "才艺。" }},
        { name: "荆州", pinyin: "jīng zhōu", source: "《尚书·夏书·禹贡》", meaning: "荆州楚地，人杰地灵", wuxing: "木金", gender: "both",
          personality: "人才辈出，地灵人杰", detailed: { yiJing: "对应易经井卦。", baGua: "属坎卦。", ziWei: "对应天机星。", naYin: "纳音杨柳木。", wuXing: "木金相克。", destiny: "人才济济。", career: "适合教育。", marriage: "优秀。", education: "人才。" }},
        { name: "豫州", pinyin: "yù zhōu", source: "《尚书·夏书·禹贡》", meaning: "豫州中原，安居乐业", wuxing: "土土", gender: "both",
          personality: "安稳祥和，生活美满", detailed: { yiJing: "对应易经豫卦。", baGua: "属震卦。", ziWei: "对应天同星。", naYin: "纳音路旁土。", wuXing: "土土比和。", destiny: "安乐祥和。", career: "适合稳定。", marriage: "安乐。", education: "平稳。" }},
        { name: "梁州", pinyin: "liáng zhōu", source: "《尚书·夏书·禹贡》", meaning: "梁州山川，雄伟壮丽", wuxing: "火金", gender: "male",
          personality: "气势磅礴，志向高远", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应破军星。", naYin: "纳音霹雷火。", wuXing: "火金相克。", destiny: "气势恢宏。", career: "适合建筑。", marriage: "雄伟。", education: "地理。" }},
        // 商书·汤誓 - 10 个名字
        { name: "汤武", pinyin: "tāng wǔ", source: "《尚书·商书·汤誓》", meaning: "商汤武王，开国君主", wuxing: "水金", gender: "male",
          personality: "领导才能，开创基业", detailed: { yiJing: "对应易经革卦。", baGua: "属兑卦。", ziWei: "对应紫微星。", naYin: "纳音大海水。", wuXing: "水金相生。", destiny: "开创大业。", career: "适合创业。", marriage: "主导。", education: "领导。" }},
        { name: "天命", pinyin: "tiān mìng", source: "《尚书·商书·汤誓》", meaning: "天命有常，唯德是辅", wuxing: "火水", gender: "both",
          personality: "顺应天命，德行高尚", detailed: { yiJing: "对应易经乾卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音炉中火。", wuXing: "水火既济。", destiny: "天命所归。", career: "适合公职。", marriage: "缘分。", education: "哲学。" }},
        { name: "有常", pinyin: "yǒu cháng", source: "《尚书·商书·汤誓》", meaning: "天命有常，规律永恒", wuxing: "土金", gender: "both",
          personality: "遵循规律，持之以恒", detailed: { yiJing: "对应易经恒卦。", baGua: "属震卦。", ziWei: "对应天梁星。", naYin: "纳音路旁土。", wuXing: "土金相生。", destiny: "恒久稳定。", career: "适合研究。", marriage: "长久。", education: "坚持。" }},
        { name: "唯德", pinyin: "wéi dé", source: "《尚书·商书·汤誓》", meaning: "唯德是辅，以德为本", wuxing: "土火", gender: "both",
          personality: "品德为先，德高望重", detailed: { yiJing: "对应易经益卦。", baGua: "属巽卦。", ziWei: "对应天府星。", naYin: "纳音路旁土。", wuXing: "火土相生。", destiny: "德行深厚。", career: "适合教育。", marriage: "品德。", education: "德育。" }},
        { name: "是辅", pinyin: "shì fǔ", source: "《尚书·商书·汤誓》", meaning: "唯德是辅，辅助贤能", wuxing: "火金", gender: "male",
          personality: "辅助他人，成人之美", detailed: { yiJing: "对应易经比卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音炉中火。", wuXing: "火金相克。", destiny: "得人相助。", career: "适合辅助岗位。", marriage: "互助。", education: "合作。" }},
        { name: "伐桀", pinyin: "fá jié", source: "《尚书·商书·汤誓》", meaning: "讨伐夏桀，正义之师", wuxing: "水木", gender: "male",
          personality: "正义凛然，勇于斗争", detailed: { yiJing: "对应易经师卦。", baGua: "属坎卦。", ziWei: "对应七杀星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "正义必胜。", career: "适合军警。", marriage: "正义。", education: "历史。" }},
        { name: "夏桀", pinyin: "xià jié", source: "《尚书·商书·汤誓》", meaning: "夏朝末代君主，反面教材", wuxing: "火木", gender: "male",
          personality: "引以为戒，警钟长鸣", detailed: { yiJing: "对应易经剥卦。", baGua: "属艮卦。", ziWei: "对应贪狼星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "引以为戒。", career: "适合警示。", marriage: "教训。", education: "历史。" }},
        { name: "台小子", pinyin: "tái xiǎo zǐ", source: "《尚书·商书·汤誓》", meaning: "商汤自称，谦逊之词", wuxing: "火水", gender: "male",
          personality: "谦虚谨慎，不自自大", detailed: { yiJing: "对应易经谦卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音炉中火。", wuXing: "水火既济。", destiny: "谦虚受益。", career: "适合基层。", marriage: "谦逊。", education: "虚心。" }},
        { name: "尔尚", pinyin: "ěr shàng", source: "《尚书·商书·汤誓》", meaning: "尔尚辅乃一人，尊重他人", wuxing: "火金", gender: "both",
          personality: "尊重他人，善于合作", detailed: { yiJing: "对应易经同人卦。", baGua: "属离卦。", ziWei: "对应天相星。", naYin: "纳音炉中火。", wuXing: "火金相克。", destiny: "得人尊重。", career: "适合合作。", marriage: "尊重。", education: "社交。" }},
        { name: "辅乃", pinyin: "fǔ nǎi", source: "《尚书·商书·汤誓》", meaning: "辅乃一人，忠心辅佐", wuxing: "水火", gender: "male",
          personality: "忠诚可靠，得力助手", detailed: { yiJing: "对应易经比卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音天河水。", wuXing: "水火既济。", destiny: "忠诚有功。", career: "适合助理。", marriage: "忠诚。", education: "辅助。" }},
        // 周书·牧誓 - 8 个名字
        { name: "牧野", pinyin: "mù yě", source: "《尚书·周书·牧誓》", meaning: "牧野之战，决定胜负", wuxing: "水木", gender: "both",
          personality: "决战决胜，果断勇敢", detailed: { yiJing: "对应易经师卦。", baGua: "属坤卦。", ziWei: "对应破军星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "决战成功。", career: "适合竞争。", marriage: " decisive。", education: "决断。" }},
        { name: "武王", pinyin: "wǔ wáng", source: "《尚书·周书·牧誓》", meaning: "周武王，开国明君", wuxing: "水木", gender: "male",
          personality: "英勇善战，领导有方", detailed: { yiJing: "对应易经革卦。", baGua: "属兑卦。", ziWei: "对应紫微星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "成就王业。", career: "适合领导。", marriage: "尊贵。", education: "领导。" }},
        { name: "纣王", pinyin: "zhòu wáng", source: "《尚书·周书·牧誓》", meaning: "商纣王，暴君典型", wuxing: "火火", gender: "male",
          personality: "引以为戒，勿走极端", detailed: { yiJing: "对应易经剥卦。", baGua: "属离卦。", ziWei: "对应贪狼星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "引以为戒。", career: "适合警示。", marriage: "教训。", education: "历史。" }},
        { name: "牝鸡", pinyin: "pìn jī", source: "《尚书·周书·牧誓》", meaning: "牝鸡无晨，比喻女性干政", wuxing: "火金", gender: "female",
          personality: "独立思考，不随波逐流", detailed: { yiJing: "对应易经姤卦。", baGua: "属巽卦。", ziWei: "对应太阴星。", naYin: "纳音炉中火。", wuXing: "火金相克。", destiny: "独立自主。", career: "适合独立工作。", marriage: "独立。", education: "自主。" }},
        { name: "司晨", pinyin: "sī chén", source: "《尚书·周书·牧誓》", meaning: "牝鸡司晨，掌管早晨", wuxing: "金金", gender: "female",
          personality: "勤奋早起，时间管理强", detailed: { yiJing: "对应易经震卦。", baGua: "属震卦。", ziWei: "对应太阳星。", naYin: "纳音剑锋金。", wuXing: "金金比和。", destiny: "勤奋成功。", career: "适合管理。", marriage: "勤劳。", education: "自律。" }},
        { name: "惟家", pinyin: "wéi jiā", source: "《尚书·周书·牧誓》", meaning: "惟家之索，家族纽带", wuxing: "土木", gender: "both",
          personality: "重视家庭，亲情深厚", detailed: { yiJing: "对应易经家人卦。", baGua: "属巽卦。", ziWei: "对应天府星。", naYin: "纳音松柏木。", wuXing: "木土相克。", destiny: "家庭和睦。", career: "适合家政。", marriage: "顾家。", education: "家庭。" }},
        { name: "之索", pinyin: "zhī suǒ", source: "《尚书·周书·牧誓》", meaning: "惟家之索，探索追求", wuxing: "火金", gender: "both",
          personality: "探索未知，追求真理", detailed: { yiJing: "对应易经蒙卦。", baGua: "属艮卦。", ziWei: "对应天机星。", naYin: "纳音炉中火。", wuXing: "火金相克。", destiny: "探索成功。", career: "适合研究。", marriage: "追求。", education: "探索。" }},
        { name: "多士", pinyin: "duō shì", source: "《尚书·周书·牧誓》", meaning: "多士盈朝，人才济济", wuxing: "火金", gender: "male",
          personality: "人才众多，群英荟萃", detailed: { yiJing: "对应易经大有卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音炉中火。", wuXing: "火金相克。", destiny: "人才辈出。", career: "适合团队。", marriage: "众多。", education: "博学。" }}
    ],
    // 礼记 - 52 个名字
    liji: [
        // 大学 - 12 个名字
        { name: "明德", pinyin: "míng dé", source: "《礼记·大学》", meaning: "光明的德行，明明德于天下", wuxing: "火火", gender: "male",
          personality: "品德高尚，光明磊落，受人尊敬", detailed: { yiJing: "对应易经离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "名声远播。", career: "适合教育。", marriage: "稳定。", education: "优异。" }},
        { name: "至善", pinyin: "zhì shàn", source: "《礼记·大学》", meaning: "达到最完善的境界", wuxing: "火金", gender: "both",
          personality: "追求完美，善良正直", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音炉中火。", wuXing: "火金相克。", destiny: "追求卓越。", career: "适合学术。", marriage: "认真。", education: "深造。" }},
        { name: "明明", pinyin: "míng míng", source: "《礼记·大学》", meaning: "明明德，光明的德行", wuxing: "火火", gender: "both",
          personality: "光明磊落，德行高尚", detailed: { yiJing: "对应易经离卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "光明一生。", career: "适合公益。", marriage: "光明。", education: "德育。" }},
        { name: "新民", pinyin: "xīn mín", source: "《礼记·大学》", meaning: "在新民，使民更新", wuxing: "金水", gender: "both",
          personality: "改革创新，与时俱进", detailed: { yiJing: "对应易经革卦。", baGua: "属兑卦。", ziWei: "对应破军星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "改革创新。", career: "适合改革。", marriage: "更新。", education: "进步。" }},
        { name: "止至", pinyin: "zhǐ zhì", source: "《礼记·大学》", meaning: "止于至善，达到最高境界", wuxing: "火金", gender: "both",
          personality: "追求极致，永不满足", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音炉中火。", wuXing: "火金相克。", destiny: "追求完美。", career: "适合研究。", marriage: "极致。", education: "钻研。" }},
        { name: "知止", pinyin: "zhī zhǐ", source: "《礼记·大学》", meaning: "知止而后有定", wuxing: "火火", gender: "both",
          personality: "懂得适可而止，明智", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应天相星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "明智一生。", career: "适合咨询。", marriage: "适度。", education: "明智。" }},
        { name: "有定", pinyin: "yǒu dìng", source: "《礼记·大学》", meaning: "知止而后有定", wuxing: "土火", gender: "both",
          personality: "意志坚定，目标明确", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应天府星。", naYin: "纳音霹雷火。", wuXing: "火土相生。", destiny: "坚定不移。", career: "适合稳定。", marriage: "坚定。", education: "专注。" }},
        { name: "能静", pinyin: "néng jìng", source: "《礼记·大学》", meaning: "定而后能静", wuxing: "火金", gender: "female",
          personality: "内心平静，沉着冷静", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应太阴星。", naYin: "纳音炉中火。", wuXing: "火金相克。", destiny: "平静安乐。", career: "适合研究。", marriage: "平静。", education: "静心。" }},
        { name: "能安", pinyin: "néng ān", source: "《礼记·大学》", meaning: "静而后能安", wuxing: "土土", gender: "both",
          personality: "安居乐业，心态平和", detailed: { yiJing: "对应易经泰卦。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音路旁土。", wuXing: "土土比和。", destiny: "平安一生。", career: "适合稳定。", marriage: "安乐。", education: "平稳。" }},
        { name: "能虑", pinyin: "néng lǜ", source: "《礼记·大学》", meaning: "安而后能虑", wuxing: "火火", gender: "both",
          personality: "深思熟虑，谋定后动", detailed: { yiJing: "对应易经巽卦。", baGua: "属巽卦。", ziWei: "对应天机星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "谋略成功。", career: "适合策划。", marriage: "深思。", education: "思考。" }},
        { name: "能得", pinyin: "néng dé", source: "《礼记·大学》", meaning: "虑而后能得", wuxing: "火火", gender: "both",
          personality: "思虑周全，终有所得", detailed: { yiJing: "对应易经大有卦。", baGua: "属离卦。", ziWei: "对应天府星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "收获满满。", career: "适合投资。", marriage: "获得。", education: "收获。" }},
        { name: "本末", pinyin: "běn mò", source: "《礼记·大学》", meaning: "物有本末，事有终始", wuxing: "木水", gender: "both",
          personality: "分清主次，条理清晰", detailed: { yiJing: "对应易经既济卦。", baGua: "属坎卦。", ziWei: "对应天机星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "条理分明。", career: "适合管理。", marriage: "有序。", education: "逻辑。" }},
        // 中庸 - 12 个名字
        { name: "中和", pinyin: "zhōng hé", source: "《礼记·中庸》", meaning: "中正和平，不偏不倚", wuxing: "火土", gender: "both",
          personality: "中庸之道，平和公正", detailed: { yiJing: "对应易经泰卦。", baGua: "属坤卦。", ziWei: "对应天相星。", naYin: "纳音炉中火。", wuXing: "火土相生。", destiny: "平和一生。", career: "适合调解。", marriage: "和睦。", education: "平衡。" }},
        { name: "中庸", pinyin: "zhōng yōng", source: "《礼记·中庸》", meaning: "中庸之道，恰到好处", wuxing: "火土", gender: "both",
          personality: "不偏不倚，适中为宜", detailed: { yiJing: "对应易经泰卦。", baGua: "属坤卦。", ziWei: "对应天梁星。", naYin: "纳音炉中火。", wuXing: "火土相生。", destiny: "适中安康。", career: "适合稳定。", marriage: "适中。", education: "平衡。" }},
        { name: "天命", pinyin: "tiān mìng", source: "《礼记·中庸》", meaning: "天命之谓性", wuxing: "火水", gender: "both",
          personality: "顺应天命，认识自我", detailed: { yiJing: "对应易经乾卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音炉中火。", wuXing: "水火既济。", destiny: "天命所归。", career: "适合公职。", marriage: "缘分。", education: "哲学。" }},
        { name: "率性", pinyin: "shuài xìng", source: "《礼记·中庸》", meaning: "率性之谓道", wuxing: "金金", gender: "both",
          personality: "遵循本性，自然而为", detailed: { yiJing: "对应易经震卦。", baGua: "属震卦。", ziWei: "对应天同星。", naYin: "纳音剑锋金。", wuXing: "金金比和。", destiny: "自然安乐。", career: "适合自由职业。", marriage: "自然。", education: "自主。" }},
        { name: "修道", pinyin: "xiū dào", source: "《礼记·中庸》", meaning: "修道之谓教", wuxing: "金火", gender: "male",
          personality: "修养身心，追求大道", detailed: { yiJing: "对应易经益卦。", baGua: "属巽卦。", ziWei: "对应天梁星。", naYin: "纳音白蜡金。", wuXing: "金火相克。", destiny: "修行成功。", career: "适合修行。", marriage: "修养。", education: "修身。" }},
        { name: "慎独", pinyin: "shèn dú", source: "《礼记·中庸》", meaning: "君子慎其独", wuxing: "金火", gender: "both",
          personality: "独处谨慎，自律自强", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音白蜡金。", wuXing: "金火相克。", destiny: "自律成功。", career: "适合独立工作。", marriage: "自律。", education: "自学。" }},
        { name: "未发", pinyin: "wèi fā", source: "《礼记·中庸》", meaning: "喜怒哀乐之未发", wuxing: "水木", gender: "both",
          personality: "内敛含蓄，不露锋芒", detailed: { yiJing: "对应易经复卦。", baGua: "属震卦。", ziWei: "对应太阴星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "内敛成功。", career: "适合幕后。", marriage: "含蓄。", education: "内秀。" }},
        { name: "中节", pinyin: "zhōng jié", source: "《礼记·中庸》", meaning: "发而皆中节", wuxing: "火木", gender: "both",
          personality: "表达适度，恰到好处", detailed: { yiJing: "对应易经节卦。", baGua: "属坎卦。", ziWei: "对应天相星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "适度安康。", career: "适合公关。", marriage: "适度。", education: "表达。" }},
        { name: "天和", pinyin: "tiān hé", source: "《礼记·中庸》", meaning: "中也者，天下之大本", wuxing: "火水", gender: "both",
          personality: "与天地和谐，胸怀博大", detailed: { yiJing: "对应易经泰卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音炉中火。", wuXing: "水火既济。", destiny: "天人合一。", career: "适合环保。", marriage: "和谐。", education: "哲学。" }},
        { name: "达道", pinyin: "dá dào", source: "《礼记·中庸》", meaning: "和也者，天下之达道", wuxing: "火火", gender: "male",
          personality: "通达大道，智慧超群", detailed: { yiJing: "对应易经泰卦。", baGua: "属离卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "通达一生。", career: "适合交通。", marriage: "通达。", education: "博学。" }},
        { name: "致中", pinyin: "zhì zhōng", source: "《礼记·中庸》", meaning: "致中和，天地位焉", wuxing: "火火", gender: "both",
          personality: "追求中正，平衡发展", detailed: { yiJing: "对应易经泰卦。", baGua: "属离卦。", ziWei: "对应天相星。", naYin: "纳音炉中火。", wuXing: "火火比和。", destiny: "平衡发展。", career: "适合调解。", marriage: "中和。", education: "平衡。" }},
        { name: "位育", pinyin: "wèi yù", source: "《礼记·中庸》", meaning: "天地位焉，万物育焉", wuxing: "土木", gender: "both",
          personality: "各安其位，茁壮成长", detailed: { yiJing: "对应易经颐卦。", baGua: "属震卦。", ziWei: "对应天府星。", naYin: "纳音城头土。", wuXing: "木土相克。", destiny: "茁壮成长。", career: "适合教育。", marriage: "成长。", education: "发育。" }},
        // 曲礼 - 10 个名字
        { name: "曲礼", pinyin: "qū lǐ", source: "《礼记·曲礼上》", meaning: "曲礼三百，威仪三千", wuxing: "木火", gender: "both",
          personality: "注重礼仪，举止优雅", detailed: { yiJing: "对应易经履卦。", baGua: "属兑卦。", ziWei: "对应天相星。", naYin: "纳音松柏木。", wuXing: "木火相生。", destiny: "礼仪之邦。", career: "适合礼仪。", marriage: "礼貌。", education: "礼仪。" }},
        { name: "毋不敬", pinyin: "wú bù jìng", source: "《礼记·曲礼上》", meaning: "毋不敬，俨若思", wuxing: "水木", gender: "both",
          personality: "恭敬谨慎，严肃认真", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "恭敬受益。", career: "适合服务。", marriage: "恭敬。", education: "认真。" }},
        { name: "俨若", pinyin: "yǎn ruò", source: "《礼记·曲礼上》", meaning: "俨若思，安定辞", wuxing: "木木", gender: "female",
          personality: "庄重严肃，若有所思", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应太阴星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "庄重一生。", career: "适合学术。", marriage: "庄重。", education: "思考。" }},
        { name: "安定", pinyin: "ān dìng", source: "《礼记·曲礼上》", meaning: "安定辞，言辞稳重", wuxing: "土火", gender: "both",
          personality: "沉稳稳重，言辞得体", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应天府星。", naYin: "纳音霹雷火。", wuXing: "火土相生。", destiny: "安稳一生。", career: "适合稳定。", marriage: "安定。", education: "稳重。" }},
        { name: "民行", pinyin: "mín xíng", source: "《礼记·曲礼上》", meaning: "民之行也，百姓日常", wuxing: "水水", gender: "both",
          personality: "贴近民生，了解民情", detailed: { yiJing: "对应易经观卦。", baGua: "属巽卦。", ziWei: "对应天府星。", naYin: "纳音大海水。", wuXing: "水水比和。", destiny: "为民服务。", career: "适合公务员。", marriage: "平民。", education: "社科。" }},
        { name: "修礼", pinyin: "xiū lǐ", source: "《礼记·曲礼上》", meaning: "修礼以耕之", wuxing: "金火", gender: "male",
          personality: "修养礼仪，耕耘人生", detailed: { yiJing: "对应易经益卦。", baGua: "属巽卦。", ziWei: "对应天相星。", naYin: "纳音白蜡金。", wuXing: "金火相克。", destiny: "修养成功。", career: "适合教育。", marriage: "修养。", education: "礼仪。" }},
        { name: "陈义", pinyin: "chén yì", source: "《礼记·曲礼上》", meaning: "陈义以种之", wuxing: "火木", gender: "male",
          personality: "陈述正义，播种善良", detailed: { yiJing: "对应易经益卦。", baGua: "属震卦。", ziWei: "对应太阳星。", naYin: "纳音炉中火。", wuXing: "火木相生。", destiny: "正义成功。", career: "适合法律。", marriage: "正义。", education: "法学。" }},
        { name: "讲学", pinyin: "jiǎng xué", source: "《礼记·曲礼上》", meaning: "讲学以耨之", wuxing: "木水", gender: "both",
          personality: "讲授学问，培育人才", detailed: { yiJing: "对应易经蒙卦。", baGua: "属艮卦。", ziWei: "对应天机星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "教学相长。", career: "适合教育。", marriage: "教学。", education: "师范。" }},
        { name: "存仁", pinyin: "cún rén", source: "《礼记·曲礼上》", meaning: "本仁以聚之", wuxing: "金金", gender: "both",
          personality: "心存仁爱，聚集福德", detailed: { yiJing: "对应易经同人卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音剑锋金。", wuXing: "金金比和。", destiny: "仁爱一生。", career: "适合公益。", marriage: "仁爱。", education: "德育。" }},
        { name: "播乐", pinyin: "bō lè", source: "《礼记·曲礼上》", meaning: "播乐以安之", wuxing: "水火", gender: "both",
          personality: "传播快乐，安抚人心", detailed: { yiJing: "对应易经豫卦。", baGua: "属震卦。", ziWei: "对应天同星。", naYin: "纳音天河水。", wuXing: "水火既济。", destiny: "快乐一生。", career: "适合艺术。", marriage: "快乐。", education: "艺术。" }},
        // 檀弓 - 8 个名字
        { name: "檀弓", pinyin: "tán gōng", source: "《礼记·檀弓上》", meaning: "檀弓篇，记载丧礼", wuxing: "木木", gender: "male",
          personality: "重视传统，尊重礼仪", detailed: { yiJing: "对应易经萃卦。", baGua: "属兑卦。", ziWei: "对应天梁星。", naYin: "纳音松柏木。", wuXing: "木木比和。", destiny: "传承文化。", career: "适合礼仪。", marriage: "传统。", education: "历史。" }},
        { name: "事君", pinyin: "shì jūn", source: "《礼记·檀弓上》", meaning: "事君有方，侍奉君主", wuxing: "金木", gender: "male",
          personality: "忠诚可靠，善于辅佐", detailed: { yiJing: "对应易经比卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音剑锋金。", wuXing: "金木相克。", destiny: "忠诚有功。", career: "适合助理。", marriage: "忠诚。", education: "辅佐。" }},
        { name: "进退", pinyin: "jìn tuì", source: "《礼记·檀弓上》", meaning: "进退有度，举止得体", wuxing: "火水", gender: "both",
          personality: "知进知退，把握分寸", detailed: { yiJing: "对应易经遁卦。", baGua: "属艮卦。", ziWei: "对应天相星。", naYin: "纳音炉中火。", wuXing: "水火既济。", destiny: "进退自如。", career: "适合外交。", marriage: "适度。", education: "社交。" }},
        { name: "揖让", pinyin: "yī ràng", source: "《礼记·檀弓上》", meaning: "揖让而升，谦恭有礼", wuxing: "木火", gender: "both",
          personality: "谦虚礼让，品德高尚", detailed: { yiJing: "对应易经谦卦。", baGua: "属艮卦。", ziWei: "对应天相星。", naYin: "纳音松柏木。", wuXing: "木火相生。", destiny: "谦受益。", career: "适合礼仪。", marriage: "互让。", education: "礼仪。" }},
        { name: "升堂", pinyin: "shēng táng", source: "《礼记·檀弓上》", meaning: "升堂入室，学业有成", wuxing: "金火", gender: "male",
          personality: "步步高升，成就卓越", detailed: { yiJing: "对应易经升卦。", baGua: "属巽卦。", ziWei: "对应太阳星。", naYin: "纳音白蜡金。", wuXing: "金火相克。", destiny: "步步高升。", career: "适合晋升。", marriage: "上升。", education: "深造。" }},
        { name: "室家", pinyin: "shì jiā", source: "《礼记·檀弓上》", meaning: "室家之和，家庭和睦", wuxing: "金木", gender: "both",
          personality: "重视家庭，和睦相处", detailed: { yiJing: "对应易经家人卦。", baGua: "属巽卦。", ziWei: "对应天府星。", naYin: "纳音剑锋金。", wuXing: "金木相克。", destiny: "家庭幸福。", career: "适合家政。", marriage: "和睦。", education: "家庭。" }},
        { name: "哀戚", pinyin: "āi qī", source: "《礼记·檀弓上》", meaning: "哀戚之心，悲痛之情", wuxing: "水金", gender: "both",
          personality: "情感丰富，同情心强", detailed: { yiJing: "对应易经咸卦。", baGua: "属兑卦。", ziWei: "对应太阴星。", naYin: "纳音剑锋金。", wuXing: "水金相生。", destiny: "情感深刻。", career: "适合艺术。", marriage: "深情。", education: "感性。" }},
        { name: "辟踊", pinyin: "pì yǒng", source: "《礼记·檀弓上》", meaning: "辟踊哭泣，哀痛至极", wuxing: "水水", gender: "both",
          personality: "情感真挚，expressive", detailed: { yiJing: "对应易经咸卦。", baGua: "属兑卦。", ziWei: "对应太阴星。", naYin: "纳音大海水。", wuXing: "水水比和。", destiny: "情感丰富。", career: "适合表演。", marriage: "真挚。", education: "艺术。" }}
    ],
    // 孟子 - 52 个名字
    mengzi: [
        { name: "浩然", pinyin: "hào rán", source: "《孟子·公孙丑上》", meaning: "浩然正气，刚直不阿", wuxing: "水金", gender: "male",
          personality: "正直勇敢，有正义感，不畏强权", detailed: { yiJing: "对应易经乾卦。", baGua: "属乾卦。", ziWei: "对应七杀星。", naYin: "纳音水金。", wuXing: "金水相生。", destiny: "正气凛然。", career: "适合法律。", marriage: "专一。", education: "法学优。" }},
        { name: "思孟", pinyin: "sī mèng", source: "《孟子》", meaning: "思考如孟子，智慧深远", wuxing: "金水", gender: "both",
          personality: "善于思考，有哲学思维", detailed: { yiJing: "对应易经艮卦。", baGua: "属艮卦。", ziWei: "对应天机星。", naYin: "纳音金水。", wuXing: "金水相生。", destiny: "学术有成。", career: "适合研究。", marriage: "和谐。", education: "深造佳。" }},
        // 梁惠王上 - 10 个名字
        { name: "仁义", pinyin: "rén yì", source: "《孟子·梁惠王上》", meaning: "仁者爱人，义者宜也", wuxing: "木金", gender: "both",
          personality: "仁爱正义，品德高尚", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音杨柳木。", wuXing: "木金相克。", destiny: "德高望重。", career: "适合公益。", marriage: "和睦。", education: "品德优。" }},
        { name: "王道", pinyin: "wáng dào", source: "《孟子·梁惠王上》", meaning: "以德行仁，王者之道", wuxing: "土火", gender: "male",
          personality: "领导才能，德行天下", detailed: { yiJing: "对应易经第 1 卦乾卦。", baGua: "属乾卦。", ziWei: "对应紫微星。", naYin: "纳音路旁土。", wuXing: "火土相生。", destiny: "成就大业。", career: "适合管理。", marriage: "主导。", education: "领导才能。" }},
        { name: "保民", pinyin: "bǎo mín", source: "《孟子·梁惠王上》", meaning: "保护百姓，爱民如子", wuxing: "水水", gender: "male",
          personality: "关爱百姓，为民服务", detailed: { yiJing: "对应易经第 7 卦师卦。", baGua: "属坤卦。", ziWei: "对应紫微星。", naYin: "纳音大海水。", wuXing: "水水比和。", destiny: "为民造福。", career: "适合公务员。", marriage: "顾家。", education: "社会科学。" }},
        { name: "养生", pinyin: "yǎng shēng", source: "《孟子·梁惠王上》", meaning: "养生丧死无憾", wuxing: "土金", gender: "both",
          personality: "注重健康，生活规律", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应天同星。", naYin: "纳音路旁土。", wuXing: "土金相生。", destiny: "健康长寿。", career: "适合医疗。", marriage: "和谐。", education: "医学。" }},
        { name: "丧死", pinyin: "sāng sǐ", source: "《孟子·梁惠王上》", meaning: "养生丧死无憾，王道之始", wuxing: "金水", gender: "both",
          personality: "慎终追远，孝敬祖先", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属坤卦。", ziWei: "对应天梁星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "孝感动天。", career: "适合礼仪。", marriage: "传统。", education: "历史。" }},
        { name: "不违", pinyin: "bù wéi", source: "《孟子·梁惠王上》", meaning: "不违农时，谷不可胜食", wuxing: "水木", gender: "both",
          personality: "顺应自然，遵循规律", detailed: { yiJing: "对应易经第 2 卦坤卦。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "顺其自然。", career: "适合农业。", marriage: "和谐。", education: "农业。" }},
        { name: "数罟", pinyin: "shù gǔ", source: "《孟子·梁惠王上》", meaning: "数罟不入洿池，鱼鳖不可胜食", wuxing: "金水", gender: "male",
          personality: "懂得节制，可持续发展", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音剑锋金。", wuXing: "金水相生。", destiny: "持续发展。", career: "适合环保。", marriage: "节制。", education: "生态。" }},
        { name: "斧斤", pinyin: "fǔ jīn", source: "《孟子·梁惠王上》", meaning: "斧斤以时入山林，材木不可胜用", wuxing: "金木", gender: "male",
          personality: "合理利用资源", detailed: { yiJing: "对应易经第 52 卦艮卦。", baGua: "属艮卦。", ziWei: "对应武曲星。", naYin: "纳音白蜡金。", wuXing: "金木相克。", destiny: "资源丰富。", career: "适合林业。", marriage: "适度。", education: "资源管理。" }},
        { name: "穀鱼", pinyin: "gǔ yú", source: "《孟子·梁惠王上》", meaning: "穀与鱼鳖不可胜食", wuxing: "木水", gender: "both",
          personality: "富足安康，生活无忧", detailed: { yiJing: "对应易经第 11 卦泰卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音松柏木。", wuXing: "水木相生。", destiny: "衣食无忧。", career: "适合农业。", marriage: "富足。", education: "农业。" }},
        // 公孙丑上 - 10 个名字
        { name: "尊贤", pinyin: "zūn xián", source: "《孟子·公孙丑上》", meaning: "尊贤使能，俊杰在位", wuxing: "金木", gender: "male",
          personality: "尊重人才，善于用人", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属乾卦。", ziWei: "对应天府星。", naYin: "纳音白蜡金。", wuXing: "金木相克。", destiny: "得人相助。", career: "适合管理。", marriage: "尊重。", education: "识人。" }},
        { name: "使能", pinyin: "shǐ néng", source: "《孟子·公孙丑上》", meaning: "使能者在职", wuxing: "金火", gender: "male",
          personality: "知人善任，用人所长", detailed: { yiJing: "对应易经第 14 卦大有卦。", baGua: "属乾卦。", ziWei: "对应太阳星。", naYin: "纳音白蜡金。", wuXing: "金火相克。", destiny: "事业成功。", career: "适合 HR。", marriage: "合作。", education: "管理。" }},
        { name: "信士", pinyin: "xìn shì", source: "《孟子·公孙丑上》", meaning: "信则人任焉", wuxing: "金金", gender: "male",
          personality: "诚实守信，受人信任", detailed: { yiJing: "对应易经第 11 卦泰卦。", baGua: "属乾卦。", ziWei: "对应武曲星。", naYin: "纳音白蜡金。", wuXing: "金金比和。", destiny: "信誉良好。", career: "适合金融。", marriage: "诚信。", education: "商科。" }},
        { name: "恭礼", pinyin: "gōng lǐ", source: "《孟子·公孙丑上》", meaning: "恭则不侮", wuxing: "木火", gender: "both",
          personality: "恭敬有礼，受人尊敬", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属离卦。", ziWei: "对应天相星。", naYin: "纳音松柏木。", wuXing: "木火相生。", destiny: "受人尊敬。", career: "适合礼仪。", marriage: "相敬如宾。", education: "礼仪。" }},
        { name: "宽众", pinyin: "kuān zhòng", source: "《孟子·公孙丑上》", meaning: "宽则得众", wuxing: "木火", gender: "both",
          personality: "宽容大度，得人心", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音松柏木。", wuXing: "木火相生。", destiny: "人缘极佳。", career: "适合公关。", marriage: "宽容。", education: "社交。" }},
        { name: "敏功", pinyin: "mǐn gōng", source: "《孟子·公孙丑上》", meaning: "敏则有功", wuxing: "水木", gender: "male",
          personality: "勤勉敏捷，事半功倍", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属震卦。", ziWei: "对应武曲星。", naYin: "纳音杨柳木。", wuXing: "水木相生。", destiny: "事业有成。", career: "适合执行。", marriage: "勤奋。", education: "实践。" }},
        { name: "惠利", pinyin: "huì lì", source: "《孟子·公孙丑上》", meaning: "惠则足以使人", wuxing: "水金", gender: "both",
          personality: "恩惠他人，善于用人", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属坤卦。", ziWei: "对应天府星。", naYin: "纳音大海水。", wuXing: "水金相生。", destiny: "得人效力。", career: "适合管理。", marriage: "互惠。", education: "管理。" }},
        { name: "不忍", pinyin: "bù rěn", source: "《孟子·公孙丑上》", meaning: "人皆有不忍人之心", wuxing: "水金", gender: "both",
          personality: "慈悲心肠，同情弱者", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音大海水。", wuXing: "水金相生。", destiny: "福泽深厚。", career: "适合公益。", marriage: "善良。", education: "社科。" }},
        { name: "恻隐", pinyin: "cè yǐn", source: "《孟子·公孙丑上》", meaning: "恻隐之心，仁之端也", wuxing: "金金", gender: "both",
          personality: "同情心强，善良仁慈", detailed: { yiJing: "对应易经第 24 卦复卦。", baGua: "属坤卦。", ziWei: "对应天同星。", naYin: "纳音剑锋金。", wuXing: "金金比和。", destiny: "善良一生。", career: "适合医疗。", marriage: "善良。", education: "医学。" }},
        { name: "羞恶", pinyin: "xiū wù", source: "《孟子·公孙丑上》", meaning: "羞恶之心，义之端也", wuxing: "金木", gender: "both",
          personality: "知耻后勇，明辨是非", detailed: { yiJing: "对应易经第 23 卦剥卦。", baGua: "属艮卦。", ziWei: "对应天梁星。", naYin: "纳音剑锋金。", wuXing: "金木相克。", destiny: "明辨是非。", career: "适合法律。", marriage: "正直。", education: "法学。" }},
        { name: "辞让", pinyin: "cí ràng", source: "《孟子·公孙丑上》", meaning: "辞让之心，礼之端也", wuxing: "金火", gender: "both",
          personality: "谦虚礼让，品德高尚", detailed: { yiJing: "对应易经第 15 卦谦卦。", baGua: "属艮卦。", ziWei: "对应天相星。", naYin: "纳音剑锋金。", wuXing: "金火相克。", destiny: "受人尊敬。", career: "适合礼仪。", marriage: "互让。", education: "礼仪。" }},
        { name: "是非", pinyin: "shì fēi", source: "《孟子·公孙丑上》", meaning: "是非之心，智之端也", wuxing: "金火", gender: "both",
          personality: "明辨是非，智慧过人", detailed: { yiJing: "对应易经第 13 卦同人卦。", baGua: "属离卦。", ziWei: "对应天机星。", naYin: "纳音剑锋金。", wuXing: "金火相克。", destiny: "智慧超群。", career: "适合法律。", marriage: "明理。", education: "法学。" }}
    ],
    // 庄子
    zhuangzi: [
        { name: "逍遥", pinyin: "xiāo yáo", source: "《庄子·逍遥游》", meaning: "自由自在，无拘无束", wuxing: "水木", gender: "both",
          personality: "性格洒脱，追求自由，不受世俗束缚",
          detailed: {
            yiJing: "对应易经涣卦，风行水上，自由自在。",
            baGua: "属涣卦，代表 dispersal、自由、超脱。",
            ziWei: "紫微斗数中对应贪狼星，主欲望与追求。",
            naYin: "纳音水木，相生之象。",
            wuXing: "水木组合，水生木，智慧生长。",
            destiny: "一生追求精神自由，超然物外。",
            career: "适合艺术、哲学、旅行、自由职业。",
            marriage: "感情洒脱，婚姻需要理解与包容。",
            education: "思维活跃，适合人文艺术类专业。"
          }
        },
        { name: "齐物", pinyin: "qí wù", source: "《庄子·齐物论》", meaning: "万物平等，无分贵贱", wuxing: "金木", gender: "both",
          personality: "思想开放，平等对待万物，有包容心",
          detailed: {
            yiJing: "对应易经同人卦，天下大同。",
            baGua: "属同人卦，代表和谐、平等。",
            ziWei: "紫微斗数中对应天相星，主公正与平衡。",
            naYin: "纳音金木，需平衡发展。",
            wuXing: "金木组合，刚柔并济。",
            destiny: "思想深刻，能以平等心待人。",
            career: "适合法律、哲学、社会工作。",
            marriage: "婚姻平等，相互尊重。",
            education: "思辨能力强，适合哲学、法学。"
          }
        },
        { name: "梦蝶", pinyin: "mèng dié", source: "《庄子·齐物论》", meaning: "庄周梦蝶，物我两忘", wuxing: "木火", gender: "female",
          personality: "富有想象力，思维跳跃，艺术气质浓厚",
          detailed: {
            yiJing: "对应易经离卦，梦幻光明。",
            baGua: "属离卦，代表火、光明、想象。",
            ziWei: "紫微斗数中对应文昌星，主文学艺术。",
            naYin: "纳音木火，文采斐然。",
            wuXing: "木火组合，木火通明，才华横溢。",
            destiny: "艺术天赋高，精神世界丰富。",
            career: "适合文学、艺术、设计、心理学。",
            marriage: "感情浪漫，婚姻充满诗意。",
            education: "艺术天赋强，适合创意类专业。"
          }
        },
        { name: "坐忘", pinyin: "zuò wàng", source: "《庄子·大宗师》", meaning: "静坐忘我，与道合一", wuxing: "金水", gender: "both",
          personality: "内心宁静，善于冥想，精神境界高",
          detailed: {
            yiJing: "对应易经艮卦，静坐思过。",
            baGua: "属艮卦，代表山、静止、内省。",
            ziWei: "紫微斗数中对应天梁星，主清修与长寿。",
            naYin: "纳音金水，清净无为。",
            wuXing: "金水组合，金白水清，心境澄明。",
            destiny: "精神修养高，晚年福寿双全。",
            career: "适合宗教、哲学、心理咨询。",
            marriage: "感情淡泊，追求精神契合。",
            education: "悟性极高，适合深造研究。"
          }
        },
        { name: "天乐", pinyin: "tiān lè", source: "《庄子·天道》", meaning: "与天同乐，顺应自然", wuxing: "火火", gender: "both",
          personality: "乐观开朗，顺应自然，知足常乐",
          detailed: {
            yiJing: "对应易经豫卦，雷出地奋，欢乐之象。",
            baGua: "属豫卦，代表快乐、和谐。",
            ziWei: "紫微斗数中对应天喜星，主喜庆与欢乐。",
            naYin: "纳音火火，热情洋溢。",
            wuXing: "火火组合，热情开朗，充满活力。",
            destiny: "一生快乐，少烦恼。",
            career: "适合娱乐、教育、服务业。",
            marriage: "婚姻欢乐，家庭和睦。",
            education: "学习轻松愉快，成绩良好。"
          }
        }
    ],
    // 荀子
    xunzi: [
        { name: "劝学", pinyin: "quàn xué", source: "《荀子·劝学》", meaning: "勤勉学习，不断进步", wuxing: "木水", gender: "male",
          personality: "勤奋好学，上进心强，永不满足",
          detailed: {
            yiJing: "对应易经渐卦，循序渐进。",
            baGua: "属渐卦，代表进步、成长。",
            ziWei: "紫微斗数中对应文曲星，主学问与才华。",
            naYin: "纳音木水，智慧流动。",
            wuXing: "木水组合，水生木，学业进步。",
            destiny: "学业有成，知识改变命运。",
            career: "适合教育、研究、学术领域。",
            marriage: "配偶知书达理，婚姻稳定。",
            education: "学习能力极强，适合深造。"
          }
        },
        { name: "修身", pinyin: "xiū shēn", source: "《荀子·修身》", meaning: "修养身心，完善自我", wuxing: "金金", gender: "both",
          personality: "自律严谨，追求完美，品德高尚",
          detailed: {
            yiJing: "对应易经益卦，修身养性。",
            baGua: "属益卦，代表增益、进步。",
            ziWei: "紫微斗数中对应天魁星，主贵人与品德。",
            naYin: "纳音金金，刚毅坚定。",
            wuXing: "金金组合，意志坚定，品格高尚。",
            destiny: "因德行而受人尊敬，一生平安。",
            career: "适合教育、公务员、管理层。",
            marriage: "婚姻稳定，家庭和睦。",
            education: "学习态度认真，成绩优异。"
          }
        },
        { name: "不苟", pinyin: "bù gǒu", source: "《荀子·不苟》", meaning: "不随便，严谨认真", wuxing: "水土", gender: "male",
          personality: "做事认真，原则性强，不随波逐流",
          detailed: {
            yiJing: "对应易经恒卦，持之以恒。",
            baGua: "属恒卦，代表恒心、坚持。",
            ziWei: "紫微斗数中对应左辅星，主辅助与坚持。",
            naYin: "纳音水土，稳重踏实。",
            wuXing: "水土组合，稳重务实。",
            destiny: "因坚持原则而成功。",
            career: "适合法律、审计、质量管理。",
            marriage: "感情专一，婚姻长久。",
            education: "学习踏实，基础扎实。"
          }
        },
        { name: "知明", pinyin: "zhì míng", source: "《荀子·劝学》", meaning: "智慧明达，见识广博", wuxing: "火水", gender: "both",
          personality: "聪明睿智，见识独到，明辨是非",
          detailed: {
            yiJing: "对应易经离卦，光明智慧。",
            baGua: "属离卦，代表火、光明、智慧。",
            ziWei: "紫微斗数中对应天机星，主智慧与谋略。",
            naYin: "纳音火水，智慧灵动。",
            wuXing: "火水组合，水火既济，智慧平衡。",
            destiny: "以智慧立身，成就非凡。",
            career: "适合咨询、研究、战略规划。",
            marriage: "配偶聪明，婚姻和谐。",
            education: "悟性极高，学业优秀。"
          }
        }
    ],
    // 孝经
    xiaojing: [
        { name: "孝德", pinyin: "xiào dé", source: "《孝经》", meaning: "孝顺有德，品德高尚", wuxing: "水火", gender: "male",
          personality: "孝顺父母，品德优良，受人尊敬",
          detailed: {
            yiJing: "对应易经家人卦，家庭和睦。",
            baGua: "属家人卦，代表家庭、孝道。",
            ziWei: "紫微斗数中对应天贵星，主尊贵与孝道。",
            naYin: "纳音水火，需平衡发展。",
            wuXing: "水火组合，热情且有礼貌。",
            destiny: "因孝德而得福报，一生平安。",
            career: "适合教育、医疗、公共服务。",
            marriage: "家庭观念强，婚姻幸福。",
            education: "品德教育好，学习认真。"
          }
        },
        { name: "敬亲", pinyin: "jìng qīn", source: "《孝经》", meaning: "尊敬亲人，孝敬长辈", wuxing: "木木", gender: "both",
          personality: "尊敬长辈，家庭观念强，有爱心",
          detailed: {
            yiJing: "对应易经咸卦，感应亲情。",
            baGua: "属咸卦，代表感应、亲情。",
            ziWei: "紫微斗数中对应天福星，主福气与家庭。",
            naYin: "纳音木木，仁慈善良。",
            wuXing: "木木组合，仁慈博爱，家庭和睦。",
            destiny: "因孝道而得福报，家庭幸福。",
            career: "适合教育、护理、社会工作。",
            marriage: "家庭观念强，婚姻美满。",
            education: "品德优良，学习认真。"
          }
        },
        { name: "立身", pinyin: "lì shēn", source: "《孝经》", meaning: "立身处世，行道扬名", wuxing: "火金", gender: "male",
          personality: "有理想抱负，立志高远，积极向上",
          detailed: {
            yiJing: "对应易经升卦，步步高升。",
            baGua: "属升卦，代表上升、进步。",
            ziWei: "紫微斗数中对应将星，主成就与地位。",
            naYin: "纳音火金，锻炼成器。",
            wuXing: "火金组合，经过磨砺成就大器。",
            destiny: "年少立志，中年成就，晚年名扬。",
            career: "适合创业、管理、公众事业。",
            marriage: "配偶支持事业，婚姻稳定。",
            education: "目标明确，学习动力强。"
          }
        }
    ],
    // 大学
    daxue: [
        { name: "明明", pinyin: "míng míng", source: "《大学》", meaning: "明明德，光明的德行", wuxing: "火火", gender: "both",
          personality: "光明磊落，品德高尚，受人尊敬",
          detailed: {
            yiJing: "对应易经离卦，光明普照。",
            baGua: "属离卦，代表光明、文明。",
            ziWei: "紫微斗数中对应太阳星，主名声与地位。",
            naYin: "纳音火火，热情洋溢。",
            wuXing: "火火组合，光明正大，热情积极。",
            destiny: "德行远播，受人敬仰。",
            career: "适合教育、传媒、公共服务。",
            marriage: "婚姻光明，家庭和睦。",
            education: "品德学习并重，成绩优异。"
          }
        },
        { name: "格物", pinyin: "gé wù", source: "《大学》", meaning: "格物致知，探究事物原理", wuxing: "木木", gender: "male",
          personality: "好奇心强，善于研究，追求真理",
          detailed: {
            yiJing: "对应易经贲卦，文饰光明。",
            baGua: "属艮卦，代表探究、研究。",
            ziWei: "紫微斗数中对应文昌星，主学问与研究。",
            naYin: "纳音木木，求知欲强。",
            wuXing: "木木组合，仁慈好学。",
            destiny: "以知识立身，学术有成。",
            career: "适合科研、教育、技术领域。",
            marriage: "配偶知书达理，婚姻和谐。",
            education: "研究能力强，适合深造。"
          }
        },
        { name: "致知", pinyin: "zhì zhī", source: "《大学》", meaning: "获得知识，智慧通达", wuxing: "火水", gender: "both",
          personality: "聪明好学，求知欲强，智慧通达",
          detailed: {
            yiJing: "对应易经既济卦，水火既济。",
            baGua: "属离卦，代表智慧、光明。",
            ziWei: "紫微斗数中对应天机星，主智慧。",
            naYin: "纳音火水，智慧灵动。",
            wuXing: "火水组合，水火既济，智慧平衡。",
            destiny: "以智慧成就人生。",
            career: "适合研究、咨询、教育。",
            marriage: "配偶聪明，婚姻和谐。",
            education: "学习能力极强，成绩优秀。"
          }
        },
        { name: "诚意", pinyin: "chéng yì", source: "《大学》", meaning: "心意真诚，不自欺", wuxing: "金土", gender: "both",
          personality: "真诚待人，言行一致，值得信赖",
          detailed: {
            yiJing: "对应易经中孚卦，诚信之道。",
            baGua: "属兑卦，代表诚信、喜悦。",
            ziWei: "紫微斗数中对应天魁星，主诚信与贵人。",
            naYin: "纳音金土，诚实稳重。",
            wuXing: "金土组合，诚信稳重。",
            destiny: "因诚信而得人相助。",
            career: "适合商业、法律、咨询。",
            marriage: "感情真诚，婚姻稳定。",
            education: "学习态度端正，成绩良好。"
          }
        },
        { name: "正心", pinyin: "zhèng xīn", source: "《大学》", meaning: "端正心思，去除杂念", wuxing: "金金", gender: "both",
          personality: "心地正直，思想纯正，意志坚定",
          detailed: {
            yiJing: "对应易经履卦，正道而行。",
            baGua: "属乾卦，代表正直、刚健。",
            ziWei: "紫微斗数中对应天梁星，主正直与清贵。",
            naYin: "纳音金金，刚毅正直。",
            wuXing: "金金组合，意志坚定，品格高尚。",
            destiny: "一生正直，受人尊敬。",
            career: "适合法律、教育、公务员。",
            marriage: "婚姻正直，家庭和睦。",
            education: "学习态度认真，成绩优异。"
          }
        }
    ],
    // 中庸
    zhongyong: [
        { name: "中和", pinyin: "zhōng hé", source: "《中庸》", meaning: "中正和平，不偏不倚", wuxing: "火土", gender: "both",
          personality: "性格平和，处事公正，不偏激",
          detailed: {
            yiJing: "对应易经泰卦，天地交泰。",
            baGua: "属坤卦，代表中和、包容。",
            ziWei: "紫微斗数中对应天同星，主和平与福气。",
            naYin: "纳音火土，温和稳重。",
            wuXing: "火土组合，热情且稳重。",
            destiny: "一生平和，少灾少难。",
            career: "适合外交、调解、人力资源。",
            marriage: "婚姻和谐，家庭美满。",
            education: "学习态度平和，成绩稳定。"
          }
        },
        { name: "至诚", pinyin: "zhì chéng", source: "《中庸》", meaning: "极其真诚，感天动地", wuxing: "火金", gender: "male",
          personality: "极度真诚，感人力强，有感染力",
          detailed: {
            yiJing: "对应易经咸卦，感应真诚。",
            baGua: "属兑卦，代表真诚、喜悦。",
            ziWei: "紫微斗数中对应天贵星，主尊贵与真诚。",
            naYin: "纳音火金，真诚热烈。",
            wuXing: "火金组合，真诚且坚定。",
            destiny: "因真诚而感动天地，得贵人相助。",
            career: "适合销售、公关、教育。",
            marriage: "感情真挚，婚姻幸福。",
            education: "学习态度真诚，成绩优秀。"
          }
        },
        { name: "慎独", pinyin: "shèn dú", source: "《中庸》", meaning: "独处时也谨慎自律", wuxing: "金土", gender: "both",
          personality: "自律严谨，慎独修身，品德高尚",
          detailed: {
            yiJing: "对应易经艮卦，静止自律。",
            baGua: "属艮卦，代表自律、谨慎。",
            ziWei: "紫微斗数中对应天刑星，主自律与规范。",
            naYin: "纳音金土，严谨稳重。",
            wuXing: "金土组合，自律稳重。",
            destiny: "因自律而成就非凡。",
            career: "适合研究、审计、质量管理。",
            marriage: "婚姻稳定，相互尊重。",
            education: "学习自律，成绩优异。"
          }
        },
        { name: "庸德", pinyin: "yōng dé", source: "《中庸》", meaning: "平常之德，持之以恒", wuxing: "土火", gender: "both",
          personality: "品德平常但持久，脚踏实地",
          detailed: {
            yiJing: "对应易经恒卦，持之以恒。",
            baGua: "属坤卦，代表平常、持久。",
            ziWei: "紫微斗数中对应天寿星，主长寿与持久。",
            naYin: "纳音土火，稳重热情。",
            wuXing: "土火组合，稳重且热情。",
            destiny: "一生平稳，福寿绵长。",
            career: "适合稳定性工作，如公务员。",
            marriage: "婚姻长久，家庭和睦。",
            education: "学习踏实，成绩稳定。"
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
function recommendNamesByWuxing(missing, gender, length, source, excludeNames = [], surname = '') {
    let candidates = [];
    
    // 如果是邸姓，优先使用推荐列表
    if (surname.trim() === '邸' && ancientBooks.recommended_for_di) {
        const diRecommended = ancientBooks.recommended_for_di.filter(name => {
            if (gender === 'male') {
                return name.gender === 'male' || name.gender === 'both';
            } else if (gender === 'female') {
                return name.gender === 'female' || name.gender === 'both';
            }
            return true;
        });
        
        // 邸姓直接使用推荐列表，按流畅度排序
        diRecommended.sort((a, b) => (b.flowScore || 0) - (a.flowScore || 0));
        
        // 返回前 15 个推荐名字
        const targetCount = Math.floor(Math.random() * 6) + 10; // 10-15 个
        return diRecommended.slice(0, targetCount);
    }
    
    if (source === 'random') {
        Object.values(ancientBooks).forEach(book => {
            if (Array.isArray(book)) {
                candidates = candidates.concat(book);
            }
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
    
    // 第五步：根据现代风格和读音流畅度排序
    filtered.sort((a, b) => {
        // 现代风格评分（modern 字段，1-5 星）
        const aModern = a.modern || 3;
        const bModern = b.modern || 3;
        
        // 读音流畅度评分（flowScore 字段，1-10 分）
        const aFlow = a.flowScore || 5;
        const bFlow = b.flowScore || 5;
        
        // 综合评分：现代风格占 40%，流畅度占 60%
        const aScore = aModern * 0.4 + aFlow * 0.6;
        const bScore = bModern * 0.4 + bFlow * 0.6;
        
        return bScore - aScore;
    });
    
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
        'zhouyi': '周易',
        'shangshu': '尚书',
        'liji': '礼记',
        'mengzi': '孟子',
        'daxue': '大学',
        'zhongyong': '中庸',
        'xiaojing': '孝经',
        'zhuangzi': '庄子',
        'xunzi': '荀子',
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
        const recommendedNames = recommendNamesByWuxing(missingWuxing, gender, nameLength, source, [], surname);
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
            excludeNames,
            surname
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
