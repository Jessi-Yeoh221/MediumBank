
import { ElementType, Question, ZodiacInfo } from './types';

export const THEME_COLOR = '#ED7700';
export const BOOTH_NO = 'E3-001';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: '早上进入实验室，你第一件事通常是？',
    options: [
      { id: 'A', text: '穿上白大褂直接上手开机做实验', element: ElementType.FIRE },
      { id: 'B', text: '检查实验记录本，核对今日待办', element: ElementType.EARTH },
      { id: 'C', text: '先找隔壁工位的同学聊聊最新的实验进展', element: ElementType.AIR },
      { id: 'D', text: '给细胞换液，观察它们的状态好不好', element: ElementType.WATER },
    ]
  },
  {
    id: 2,
    title: '你最喜欢的实验环节是？',
    options: [
      { id: 'A', text: '挑战难度极高的显微操作或流式分选', element: ElementType.FIRE },
      { id: 'B', text: '重复性高、逻辑严密的qPCR或WB', element: ElementType.EARTH },
      { id: 'C', text: '在电脑前分析各种组学数据或画美图', element: ElementType.AIR },
      { id: 'D', text: '待在细胞房或屏障环境，享受安静时光', element: ElementType.WATER },
    ]
  },
  {
    id: 3,
    title: '面对一台从未接触过的新仪器，你会？',
    options: [
      { id: 'A', text: '不看说明书，直接上手按按钮试运行', element: ElementType.FIRE },
      { id: 'B', text: '严格按照SOP手册，逐字阅读后再开机', element: ElementType.EARTH },
      { id: 'C', text: '查阅最新文献，看别人是怎么优化参数的', element: ElementType.AIR },
      { id: 'D', text: '找师兄师姐求带，或者等有人用时在旁边观察', element: ElementType.WATER },
    ]
  },
  {
    id: 4,
    title: '实验中途突然停电/跳闸了，你的第一反应是？',
    options: [
      { id: 'A', text: '暴躁！想砸了这台耽误事的机器', element: ElementType.FIRE },
      { id: 'B', text: '迅速查看试剂是否受影响，记录下中断时刻', element: ElementType.EARTH },
      { id: 'C', text: '马上发朋友圈/群里吐槽，看看谁也遇到了', element: ElementType.AIR },
      { id: 'D', text: '默默祈祷：千万别毁了我养了一个月的样本', element: ElementType.WATER },
    ]
  },
  {
    id: 5,
    title: '你的实验台面通常呈现出什么状态？',
    options: [
      { id: 'A', text: '乱中有序，各种枪头盒堆成山，但能找到东西', element: ElementType.FIRE },
      { id: 'B', text: '极度整洁，标签朝向一致，每天雷打不动清理', element: ElementType.EARTH },
      { id: 'C', text: '堆满了各种文献资料和写满灵感的便利贴', element: ElementType.AIR },
      { id: 'D', text: '放着可爱的盲盒摆件或绿植，很有生活气息', element: ElementType.WATER },
    ]
  },
  {
    id: 6,
    title: '发现实验结果不符合预期（阴性结果），你会？',
    options: [
      { id: 'A', text: '马上换个思路重新做，大不了推倒重来', element: ElementType.FIRE },
      { id: 'B', text: '仔细回推每一个步骤，寻找微小的操作失误', element: ElementType.EARTH },
      { id: 'C', text: '找导师或同事讨论，分析是不是假阴性', element: ElementType.AIR },
      { id: 'D', text: '有点沮丧，觉得可能是今天运气不好，明天再试', element: ElementType.WATER },
    ]
  },
  {
    id: 7,
    title: '实验室新到了一批迈邦（MediumBank）的培养基，你觉得最吸引你的是？',
    options: [
      { id: 'A', text: '促生长效率快，大大缩短了实验时间', element: ElementType.FIRE },
      { id: 'B', text: '稳定性极高，批间差控制得非常漂亮', element: ElementType.EARTH },
      { id: 'C', text: '技术服务专业，配方优化清晰易懂', element: ElementType.AIR },
      { id: 'D', text: '品牌口碑好，感觉用起来就很放心', element: ElementType.WATER },
    ]
  },
  {
    id: 8,
    title: '假如可以拥有一种“实验超能力”，你希望是？',
    options: [
      { id: 'A', text: '实验成功率100%的“黄金右手”', element: ElementType.FIRE },
      { id: 'B', text: '永不疲倦、不出错的“精准大脑”', element: ElementType.EARTH },
      { id: 'C', text: '能够瞬间读懂海量数据背后真相的“透视眼”', element: ElementType.AIR },
      { id: 'D', text: '能与实验动物/细胞直接对话的“读心术”', element: ElementType.WATER },
    ]
  },
  {
    id: 9,
    title: '临近下班，最后一个样品还没跑完，你会？',
    options: [
      { id: 'A', text: '就在这守着，不弄完不回家', element: ElementType.FIRE },
      { id: 'B', text: '调好定时器，反复确认安全后才离开', element: ElementType.EARTH },
      { id: 'C', text: '远程连接电脑查看进度，回家继续分析', element: ElementType.AIR },
      { id: 'D', text: '纠结一会儿，最后决定留下来陪实验完成', element: ElementType.WATER },
    ]
  },
  {
    id: 10,
    title: '在组会上汇报实验结果时，你最在意？',
    options: [
      { id: 'A', text: '结论是否有冲击力，能否引起大家惊叹', element: ElementType.FIRE },
      { id: 'B', text: '原始数据是否无懈可击，统计学是否有意义', element: ElementType.EARTH },
      { id: 'C', text: 'PPT做得美不美观，逻辑框架是否高级', element: ElementType.AIR },
      { id: 'D', text: '听众的反馈，是否有老师质疑我的努力', element: ElementType.WATER },
    ]
  },
  {
    id: 11,
    title: '如果要为你的实验室选一首“战歌”，你会选？',
    options: [
      { id: 'A', text: '节奏感强、充满斗志的摇滚乐', element: ElementType.FIRE },
      { id: 'B', text: '严谨、有规律的古典交响乐', element: ElementType.EARTH },
      { id: 'C', text: '充满未来感的电子音乐', element: ElementType.AIR },
      { id: 'D', text: '舒缓、治愈的民谣或纯音乐', element: ElementType.WATER },
    ]
  },
  {
    id: 12,
    title: '这次在迈邦展台看到了可爱的12星座冰箱贴，你的第一想法是？',
    options: [
      { id: 'A', text: '全都想要！集齐一套贴在我的移液枪架上', element: ElementType.FIRE },
      { id: 'B', text: '看看哪几个星座的设计最符合其性格特征', element: ElementType.EARTH },
      { id: 'C', text: '询问工作人员有没有数字版的周边可以转发', element: ElementType.AIR },
      { id: 'D', text: '觉得这种互动很有趣，以后我也想在实验室办一个', element: ElementType.WATER },
    ]
  }
];

// Fix: Completed the ZODIACS dictionary to cover all ElementType keys
export const ZODIACS: Record<ElementType, ZodiacInfo[]> = {
  [ElementType.FIRE]: [
    { name: '白羊座', element: ElementType.FIRE, keywords: ['行动派', '热血', '直觉'], description: '细胞，我来了！没有什么实验是做不成的。', placeholderImg: 'https://images.unsplash.com/photo-1579152276502-5452d53d9e03?auto=format&fit=crop&q=80&w=800' },
    { name: '狮子座', element: ElementType.FIRE, keywords: ['自信', '领袖', '仪式感'], description: '实验不一定成功，但姿势一定要帅。', placeholderImg: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800' },
    { name: '射手座', element: ElementType.FIRE, keywords: ['探索', '自由', '乐观'], description: '实验失败了？没事，换个思路再试一个！', placeholderImg: 'https://images.unsplash.com/photo-1532187875605-1ef638237905?auto=format&fit=crop&q=80&w=800' }
  ],
  [ElementType.EARTH]: [
    { name: '金牛座', element: ElementType.EARTH, keywords: ['务实', '耐力', '稳健'], description: '慢慢来，稳扎稳打才是王道。', placeholderImg: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800' },
    { name: '处女座', element: ElementType.EARTH, keywords: ['完美主义', '严谨', '细节控'], description: '容不下一毫升的误差。', placeholderImg: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800' },
    { name: '摩羯座', element: ElementType.EARTH, keywords: ['自律', '沉稳', '责任感'], description: 'SOP就是我的生命指南。', placeholderImg: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800' }
  ],
  [ElementType.AIR]: [
    { name: '双子座', element: ElementType.AIR, keywords: ['灵活', '多面手', '好奇'], description: '同时跑三个项目，还要看两篇文献。', placeholderImg: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800' },
    { name: '天秤座', element: ElementType.AIR, keywords: ['平衡', '审美', '协调'], description: 'PPT美观和实验成功同样重要。', placeholderImg: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800' },
    { name: '水瓶座', element: ElementType.AIR, keywords: ['创新', '独立', '思考者'], description: '谁说这个必须按这个步骤来？', placeholderImg: 'https://images.unsplash.com/photo-1516533075015-a3838414c3ca?auto=format&fit=crop&q=80&w=800' }
  ],
  [ElementType.WATER]: [
    { name: '巨蟹座', element: ElementType.WATER, keywords: ['细腻', '直觉', '守护者'], description: '细胞就像我的孩子，要用心呵护。', placeholderImg: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?auto=format&fit=crop&q=80&w=800' },
    { name: '天蝎座', element: ElementType.WATER, keywords: ['执着', '敏锐', '深刻'], description: '我一定要找出那个假阴性的原因。', placeholderImg: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80&w=800' },
    { name: '双鱼座', element: ElementType.WATER, keywords: ['感性', '想象力', '温柔'], description: '万物有灵，今天细胞状态一定不错。', placeholderImg: 'https://images.unsplash.com/photo-1555543411-7a874e6a41d0?auto=format&fit=crop&q=80&w=800' }
  ]
};
