export const navData = [
  {
    id: 1,
    title: '海外租车',
    sub: [],
    isRecommend: false,
    linkUrl: '/'
  },
  {
    id: 2,
    title: '海外专车',
    sub: [],
    isRecommend: false,
    linkUrl: '/zhuanche'
  },
  {
    id: 3,
    title: '驾照翻译',
    sub: [{ id: 1, subTitle: '驾照全球通', subLinkUrl: '' }, { id: 2, subTitle: '驾照翻译件', subLinkUrl: '' }],
    isRecommend: false,
    linkUrl: '/'
  },
  {
    id: 4,
    title: '保险和服务',
    sub: [
      { id: 1, subTitle: '惠驾天下补充全险', subLinkUrl: '' },
      { id: 2, subTitle: '优驾全球乘驾险', subLinkUrl: '' },
      { id: 3, subTitle: '优驾全球乘驾险', subLinkUrl: '' },
      { id: 4, subTitle: '优驾全球乘驾险', subLinkUrl: '' },
      { id: 5, subTitle: '优驾全球乘驾险', subLinkUrl: '' }
    ],
    isRecommend: false,
    linkUrl: '/'
  },
  {
    id: 5,
    title: '自驾攻略',
    sub: [],
    isRecommend: true,
    linkUrl: '/DriveStrategy'
  },
  {
    id: 6,
    title: '特价专区',
    sub: [],
    isRecommend: false,
    linkUrl: '/huodong'
  }
];

export const carouselData = [
  {
    title: '机票酒店尽情领',
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/car3/pclunbo.jpg',
    linkUrl: 'https://www.baidu.com/'
  },
  {
    title: '年终狂欢四重礼',
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/PC%20nzda12.18.jpg',
    linkUrl: 'https://www.baidu.com/'
  },
  {
    title: '北美85折',
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/AVIS&Budget12.13PC.jpg',
    linkUrl: 'https://www.baidu.com/'
  },
  {
    title: '自驾省钱攻略',
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/sibuzhou/banner-181229.jpg',
    linkUrl: 'https://www.baidu.com/'
  },
  {
    title: '每周特惠租车',
    imgUrl: 'https://cdn-qiniu-activity1.huizuche.com/PClbweek.jpg',
    linkUrl: 'https://www.baidu.com/'
  }
];

export const recommendcarType = [
  {
    id: 1,
    imgUrl: 'https://cdn-aliyun-carimg.huizuche.com//car/TOYOTA_RAV4_L.JPG',
    carName: '丰田 RAV4',
    carLabel: ['后备箱大', '动力十足'],
    carCity: '洛杉矶',
    carPrice: 230
  },
  {
    id: 2,
    imgUrl: 'https://cdn-aliyun-carimg.huizuche.com//car/LDV_G10_L.JPG',
    carName: '大通 G1',
    carLabel: [],
    carCity: '洛杉矶',
    carPrice: 321
  },
  {
    id: 3,
    imgUrl: 'https://cdn-aliyun-carimg.huizuche.com//car/MITSUBISHI_MIRAGE_L.JPG',
    carName: '三菱 Mirage',
    carLabel: [],
    carCity: '洛杉矶',
    carPrice: 131
  },
  {
    id: 4,
    imgUrl: 'https://cdn-aliyun-carimg.huizuche.com//car/HYUNDAI_SONATA_L.JPG',
    carName: '现代 Sonata',
    carLabel: ['代步首选', '纵情驾驭'],
    carCity: '旧金山',
    carPrice: 210
  },
  {
    id: 5,
    imgUrl: 'https://cdn-aliyun-carimg.huizuche.com//car/TOYOTA_CAMRY_L.JPG',
    carName: '丰田 Camry',
    carLabel: [],
    carCity: '温哥华',
    carPrice: 227
  },
  {
    id: 6,
    imgUrl: 'https://cdn-aliyun-carimg.huizuche.com//car/NISSAN_QASHQAI_L.JPG',
    carName: '日产 Qashqai',
    carLabel: [],
    carCity: '墨尔本',
    carPrice: 230
  }
];

export const fsList = [
  {
    id: 1,
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/idl/idl-small-yl3.png',
    adImgUrl: 'https://cdn-aliyun-pccss.huizuche.com/Content/Images/index/indexnew/idl-big.png',
    title: '驾照服务',
    desc: '',
    isDrive: true,
    label: '银联支付一元包邮',
    driveData: [
      {
        subTitle: '驾照全球通',
        subDesc: '国际驾照翻译认证件'
      },
      {
        subTitle: '驾照翻译件',
        subDesc: '多种免费认证翻译服务'
      }
    ]
  },
  {
    id: 2,
    imgUrl: 'https://www.huizuche.com/Content/Images/index/indexnew/fsImg-02.png',
    adImgUrl: 'https://www.huizuche.com/Content/Images/index/indexnew/fsInfoImg-02.png',
    title: '华人取车向导',
    desc: '一站式取车服务',
    isDrive: false
  },
  {
    id: 3,
    imgUrl: 'https://www.huizuche.com/Content/Images/index/indexnew/fsImg-03.png',
    adImgUrl: 'https://www.huizuche.com/Content/Images/index/indexnew/fsInfoImg-03.png',
    title: '贴心租',
    desc: '当地中文租车',
    isDrive: false
  },
  {
    id: 4,
    imgUrl: 'https://www.huizuche.com/Content/Images/index/indexnew/fsImg-04.png',
    adImgUrl: 'https://www.huizuche.com/Content/Images/index/indexnew/fsInfoImg-04-new.png',
    title: '国人定制保险',
    desc: '1对1专人理赔',
    isDrive: false
  }
];

export const vendorList = [
  {
    id: 1,
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/hertz2.png',
    hoverImgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/hertz2_hover.png'
  },
  {
    id: 2,
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/avis.png',
    hoverImgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/avis_hover.png'
  },
  {
    id: 3,
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/alamo.png',
    hoverImgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/alamo_hover.png'
  },
  {
    id: 4,
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/sixt.png',
    hoverImgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/sixt_hover.png'
  },
  {
    id: 5,
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/enterprise2.png',
    hoverImgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/enterprise2_hover.png'
  },
  {
    id: 6,
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/europcar.png',
    hoverImgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/europcar_hover.png'
  },
  {
    id: 7,
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/budget.png',
    hoverImgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/budget_hover.png'
  },
  {
    id: 8,
    imgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/thrifty.png',
    hoverImgUrl: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/thrifty_hover.png'
  }
];

export const userShareList = [
  {
    id: 1,
    imgUrl: 'https://cdn-qiniu-activity1.huizuche.com/13673_pc.jpg',
    nationalFlag: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/Germany36.png',
    desc: '很满意',
    name: '- 陆**',
    city: '法兰克福',
    carType: '轿车',
    time: '2016.12.12'
  },
  {
    id: 2,
    imgUrl: 'https://cdn-qiniu-activity1.huizuche.com/13709_pc.jpg',
    nationalFlag: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/Australia36.png',
    desc: '要小心澳洲FWY上的坑提前减速',
    name: '- 钱**',
    city: '墨尔本',
    carType: '轿车',
    time: '2018.10.12'
  },
  {
    id: 3,
    imgUrl: 'https://cdn-qiniu-activity1.huizuche.com/13419_pc.jpg',
    nationalFlag: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/Germany36.png',
    desc: '1.取车还车都拍好照片存档，包括车身和仪表2.还车前记住先...',
    name: '- 程**',
    city: '慕尼黑',
    carType: '轿车',
    time: '2018.08.12'
  },
  {
    id: 4,
    imgUrl: 'https://cdn-qiniu-activity1.huizuche.com/13673_pc.jpg',
    nationalFlag: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/Germany36.png',
    desc: '4很满意',
    name: '- 陆**',
    city: '法兰克福',
    carType: '轿车',
    time: '2016.12.12'
  },
  {
    id: 5,
    imgUrl: 'https://cdn-qiniu-activity1.huizuche.com/13709_pc.jpg',
    nationalFlag: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/Australia36.png',
    desc: '5要小心澳洲FWY上的坑提前减速',
    name: '- 钱**',
    city: '墨尔本',
    carType: '轿车',
    time: '2018.10.12'
  },
  {
    id: 6,
    imgUrl: 'https://cdn-qiniu-activity1.huizuche.com/13419_pc.jpg',
    nationalFlag: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/Germany36.png',
    desc: '61.取车还车都拍好照片存档，包括车身和仪表2.还车前记住先...',
    name: '- 程**',
    city: '慕尼黑',
    carType: '轿车',
    time: '2018.08.12'
  },
  {
    id: 7,
    imgUrl: 'https://cdn-qiniu-activity1.huizuche.com/13673_pc.jpg',
    nationalFlag: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/Germany36.png',
    desc: '7很满意',
    name: '- 陆**',
    city: '法兰克福',
    carType: '轿车',
    time: '2016.12.12'
  },
  {
    id: 8,
    imgUrl: 'https://cdn-qiniu-activity1.huizuche.com/13709_pc.jpg',
    nationalFlag: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/Australia36.png',
    desc: '8要小心澳洲FWY上的坑提前减速',
    name: '- 钱**',
    city: '墨尔本',
    carType: '轿车',
    time: '2018.10.12'
  },
  {
    id: 9,
    imgUrl: 'https://cdn-qiniu-activity1.huizuche.com/13419_pc.jpg',
    nationalFlag: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/Germany36.png',
    desc: '91.取车还车都拍好照片存档，包括车身和仪表2.还车前记住先...',
    name: '- 程**',
    city: '慕尼黑',
    carType: '轿车',
    time: '2018.08.12'
  },
  {
    id: 10,
    imgUrl: 'https://cdn-qiniu-activity1.huizuche.com/13709_pc.jpg',
    nationalFlag: 'https://cdn-aliyun-hzccontent.huizuche.com/huizuche/Australia36.png',
    desc: '10要小心澳洲FWY上的坑提前减速',
    name: '- 钱**',
    city: '墨尔本',
    carType: '轿车',
    time: '2018.10.12'
  }
];
