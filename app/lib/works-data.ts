export type Work = {
  id: string;
  category: string;
  title: string;
  detail: string;
  description: string;
  longDescription: string;
  image: string;
  href: string;
  specs: { label: string; value: string }[];
};

const BASE = "https://www.kawazoe-architects.com/project";

export const works: Work[] = [
  // ── 住宅 ────────────────────────────────────────────────
  {
    id: "ay-house",
    category: "住宅",
    title: "AY HOUSE",
    detail: "大阪市南森町 / 長屋",
    description: "光庭を持つ長屋。閉じたファサードとプライベートな光の空間が共存する。",
    longDescription:
      "大阪市北区南森町に建つ長屋形式の住宅。街に閉じたファサードの内側に、光と緑を湛えた光庭（ライトコート）を設けた。都市の喧騒から切り離されたプライベートな居場所をつくる建築。コンクリートと光の対比が印象的な空間。",
    image: "/images/works/ay-house.jpg",
    href: `${BASE}/house/ay-house/ay-house.html`,
    specs: [
      { label: "TYPE", value: "住宅（長屋）" },
      { label: "LOCATION", value: "大阪市北区南森町" },
      { label: "FEATURE", value: "コートハウス・光庭" },
    ],
  },
  {
    id: "iehaku-model-house",
    category: "住宅",
    title: "IEHAKU MODEL HOUSE",
    detail: "香川・高松 / かがわ家博2023",
    description: "かがわ家博2023出展モデルハウス。環境をテーマにしたファサードとパティオ。",
    longDescription:
      "香川県主催のかがわ家博2023に出展したモデルハウス。敷地環境をテーマに、木格子のファサードと中庭（パティオ）を組み合わせた設計。外部と内部が有機的につながる空間体験が特徴。",
    image: "/images/works/iehaku-model-house.jpg",
    href: `${BASE}/house/iehaku-model-house/iehaku-model-house.html`,
    specs: [
      { label: "TYPE", value: "住宅（モデルハウス）" },
      { label: "LOCATION", value: "香川県高松市" },
      { label: "FEATURE", value: "パティオ・木格子ファサード" },
    ],
  },
  {
    id: "ak-model-house",
    category: "住宅",
    title: "AK MODEL HOUSE",
    detail: "福岡・行橋市 / 平屋コートハウス",
    description: "閉じたファサードとコの字型コート。外部を遮断しながら光と緑を内側に取り込む。",
    longDescription:
      "福岡県行橋市に建つ平屋のコートハウス。コの字型の平面計画により、プライベートな中庭を囲む構成。外部に対して閉じながら、内部には豊かな光と緑の空間を持つ。白いシャープな外観と、温かみのある内部空間のコントラストが特徴。",
    image: "/images/works/ak-model-house.jpg",
    href: `${BASE}/house/ak-model-house/ak-model-house.html`,
    specs: [
      { label: "TYPE", value: "住宅（平屋）" },
      { label: "LOCATION", value: "福岡県行橋市" },
      { label: "FEATURE", value: "コートハウス・平屋" },
    ],
  },
  {
    id: "uy3-house",
    category: "住宅",
    title: "UY3 HOUSE",
    detail: "熊本市 / 江津湖沿い",
    description: "江津湖を見渡す2階リビング。湖に向かう大開口と白い外壁が印象的な住宅。",
    longDescription:
      "熊本市の江津湖に面した敷地に建つ住宅。2階にリビングを配置し、湖への眺望を最大化した大開口が特徴。白い外壁と水平に伸びるラインが、湖の風景に溶け込む。自然環境との対話を意識した設計。",
    image: "/images/works/uy3-house.jpg",
    href: `${BASE}/house/uy3-house/uy3-house.html`,
    specs: [
      { label: "TYPE", value: "住宅（2階建て）" },
      { label: "LOCATION", value: "熊本市 江津湖沿い" },
      { label: "FEATURE", value: "湖への眺望・大開口" },
    ],
  },
  {
    id: "hk-model-house",
    category: "住宅",
    title: "HK MODEL HOUSE",
    detail: "愛媛・西条市 / U字型コートハウス",
    description: "台形敷地に計画したコの字型住宅。コートとリビングが一体に繋がる。",
    longDescription:
      "愛媛県西条市の台形敷地に計画したモデルハウス。コの字型の配置によって生まれるコートは、リビングと一体的につながる屋外空間として機能する。プロポーションを整えたシンプルな外観と、豊かな空間構成が特徴。",
    image: "/images/works/hk-model-house.jpg",
    href: `${BASE}/house/hk-model-house/hk-model-house.html`,
    specs: [
      { label: "TYPE", value: "住宅（モデルハウス）" },
      { label: "LOCATION", value: "愛媛県西条市" },
      { label: "FEATURE", value: "U字型・コートハウス" },
    ],
  },
  {
    id: "sc-model-house",
    category: "住宅",
    title: "SC MODEL HOUSE",
    detail: "静岡 / コーナー敷地・回廊型コート",
    description: "コーナー敷地に計画した回廊型コートハウス。光と風を内側に引き込む中庭。",
    longDescription:
      "静岡のコーナー敷地に計画したモデルハウス。回廊型の平面構成により、中庭を囲むように各室が配置される。コーナー敷地の特性を活かした外観計画と、内側に光と風を引き込むパッシブな空間設計が特徴。",
    image: "/images/works/sc-model-house.jpg",
    href: `${BASE}/house/sc-model-house/sc-model-house.html`,
    specs: [
      { label: "TYPE", value: "住宅（モデルハウス）" },
      { label: "LOCATION", value: "静岡" },
      { label: "FEATURE", value: "回廊型・コーナー敷地" },
    ],
  },
  // ── 店舗 ────────────────────────────────────────────────
  {
    id: "bono-curry-stand",
    category: "店舗",
    title: "BONO CURRY STAND",
    detail: "香川・庵治 / 工場転用",
    description: "製鉄所のオフィスをカレースタンドへ転用。庵治石カウンターとガルバリウムの外装。",
    longDescription:
      "香川県高松市庵治町にある製鉄所の旧オフィス棟を、カレースタンドへとコンバージョンした店舗。産地の庵治石を使ったカウンターと、ガルバリウム鋼板の外装が既存の工業的な建物と呼応する。既存構造を活かしながら、新たな用途に合わせた空間を作り出した。",
    image: "/images/works/bono-curry-stand.jpg",
    href: `${BASE}/shop/bono-curry-stand/bono-curry-stand.html`,
    specs: [
      { label: "TYPE", value: "飲食店（スタンド）" },
      { label: "LOCATION", value: "香川県高松市庵治町" },
      { label: "FEATURE", value: "工場転用・庵治石" },
    ],
  },
  {
    id: "hk-shop-design",
    category: "店舗",
    title: "HK SHOP DESIGN",
    detail: "愛媛・西条市 / 店舗改修",
    description: "既存建物を活かした店舗改修。サインから内装まで一貫してデザイン。",
    longDescription:
      "愛媛県西条市の既存店舗を改修したプロジェクト。ブランドイメージから内装・サインまで一貫したデザインで、既存の躯体と新しいデザインエレメントを調和させた。店舗の個性を引き出す素材選定と空間構成が特徴。",
    image: "/images/works/hk-shop-design.jpg",
    href: `${BASE}/renovation/hk-shop-design/hk-shop-design.html`,
    specs: [
      { label: "TYPE", value: "店舗改修" },
      { label: "LOCATION", value: "愛媛県西条市" },
      { label: "FEATURE", value: "既存活用・サイン計画" },
    ],
  },
  // ── ショールーム ────────────────────────────────────────
  {
    id: "showroom",
    category: "ショールーム",
    title: "SHOWROOM RENOVATION",
    detail: "愛媛・西条市 / ショールーム改修",
    description: "既存ショールームの改修。空間構成を再編し、製品の魅力を引き出す内装計画。",
    longDescription:
      "愛媛県西条市の既存ショールームを全面改修し、製品の魅力を最大限に引き出す空間へと再編。空間の流れと視線の誘導を意識した構成で、来場者が自然とショールームを巡ることができる動線計画。素材と照明計画にこだわった高品質な仕上げ。",
    image: "/images/works/showroom.jpg",
    href: `${BASE}/renovation/showroom/showroom.html`,
    specs: [
      { label: "TYPE", value: "ショールーム改修" },
      { label: "LOCATION", value: "愛媛県西条市" },
      { label: "FEATURE", value: "内装デザイン・動線計画" },
    ],
  },
  // ── オフィス ────────────────────────────────────────────
  {
    id: "sy-headquarters",
    category: "オフィス",
    title: "SY HEADQUARTERS BUILDING",
    detail: "大阪市城東区 / 工務店本社ビル",
    description: "城東区の工務店本社ビル計画。ショールームとオフィスを一体化した複合建築。",
    longDescription:
      "大阪市城東区に建つ工務店の本社ビル。1階にショールーム、上階にオフィスを配置した複合建築。企業ブランドを体現する外観デザインと、ショールームとしての機能性・見せる建築としての演出を両立させた計画。",
    image: "/images/works/sy-headquarters.jpg",
    href: `${BASE}/office/sy-headquarters-building/sy-headquarters-building.html`,
    specs: [
      { label: "TYPE", value: "事務所ビル（複合用途）" },
      { label: "LOCATION", value: "大阪市城東区" },
      { label: "FEATURE", value: "ショールーム＋オフィス複合" },
    ],
  },
  // ── 貸別荘 ──────────────────────────────────────────────
  {
    id: "reluvilla",
    category: "貸別荘",
    title: "RELUVILLA",
    detail: "兵庫・淡路島西海岸",
    description: "淡路島西海岸の貸別荘。オーシャンビュー、大開口、吹き抜けリビング。",
    longDescription:
      "淡路島西海岸に面した敷地に建つ貸別荘。大きなサッシから海を一望するリビングと、2階まで抜ける吹き抜け空間が特徴。畳の和室と現代的なデザインが共存する。海との対話を最大化する開口計画と、プライベート感を両立させた設計。",
    image: "/images/works/reluvilla.jpg",
    href: `${BASE}/rental-villa/reluvilla/reluvilla.html`,
    specs: [
      { label: "TYPE", value: "貸別荘" },
      { label: "LOCATION", value: "兵庫県淡路島西海岸" },
      { label: "FEATURE", value: "オーシャンビュー・吹き抜け" },
    ],
  },
  // ── 看板サイン ──────────────────────────────────────────
  {
    id: "affectueux",
    category: "看板サイン",
    title: "AFFECTUEUX",
    detail: "看板・サインデザイン",
    description: "建築と調和する看板・サインデザイン。素材と文字の組み合わせを丁寧に計画。",
    longDescription:
      "店舗の建築デザインと調和する看板・サインのデザイン計画。素材・書体・サイズ・取り付け方法まで一貫してデザインし、建築の一部として機能する看板を実現。昼夜で異なる表情を見せる照明計画も含む。",
    image: "/images/works/affectueux.jpg",
    href: `${BASE}/sign/affectueux/affectueux.html`,
    specs: [
      { label: "TYPE", value: "看板・サインデザイン" },
      { label: "LOCATION", value: "香川県高松市" },
      { label: "FEATURE", value: "建築と一体のサイン計画" },
    ],
  },
  {
    id: "nail-shop",
    category: "看板サイン",
    title: "NAIL SHOP SIGN",
    detail: "看板・サインデザイン",
    description: "ネイルショップのサインデザイン。ブランドイメージを空間に落とし込む。",
    longDescription:
      "ネイルショップのための看板・サインデザイン。ブランドのイメージを空間に反映させるため、ロゴデザインから外部サイン・内部サインまで一貫してデザインを担当。素材と仕上げにこだわり、ブランドの世界観を体現するサイン計画。",
    image: "/images/works/nail-shop.jpg",
    href: `${BASE}/sign/nail-shop/nail-shop.html`,
    specs: [
      { label: "TYPE", value: "看板・サインデザイン" },
      { label: "LOCATION", value: "香川県高松市" },
      { label: "FEATURE", value: "ブランディング・サイン" },
    ],
  },
];

export const categories = [
  "すべて",
  "住宅",
  "店舗",
  "ショールーム",
  "オフィス",
  "貸別荘",
  "看板サイン",
];
