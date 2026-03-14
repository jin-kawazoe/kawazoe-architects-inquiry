import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "依頼の流れ・費用の考え方 | FLOW & FEE",
  description:
    "建築設計依頼の流れ（初回相談〜竣工）と費用の考え方をステップ別に解説。設計事務所への依頼が初めての方でもわかりやすく説明します。よくある質問（FAQ）も掲載。",
  openGraph: {
    title: "依頼の流れ・費用の考え方 | KAWAZOE ARCHITECTS",
    description:
      "建築設計依頼の流れと費用の考え方をわかりやすく解説。初回相談は無料。東京・香川・高松。",
  },
};

const steps = [
  {
    step: "01",
    title: "初回相談",
    duration: "無料 / オンライン or 対面",
    description:
      "まずはどんな建物を建てたいか、どんな暮らしを望んでいるかをざっくばらんにお話しください。費用・スケジュール・進め方など、疑問に思っていることも何でも聞いてください。この段階では費用は一切かかりません。",
    note: "「まだ漠然としている」「土地も決まっていない」段階でも大歓迎です。",
  },
  {
    step: "02",
    title: "ヒアリング・条件整理",
    duration: "1〜2回 / 約2〜4週間",
    description:
      "敷地の条件や法規、ご要望・ご予算・スケジュールを整理します。設計を進めるにあたっての基本的な方向性をここで決めます。必要に応じて現地調査も行います。",
    note: null,
  },
  {
    step: "03",
    title: "基本設計",
    duration: "約1〜2ヶ月",
    description:
      "空間の大まかなかたちと方向性を決める段階です。平面図・断面図・外観のスケッチなどでご提案します。ここで双方が合意してから次の段階へ進みます。",
    note: null,
  },
  {
    step: "04",
    title: "実施設計",
    duration: "約2〜3ヶ月",
    description:
      "施工業者が工事を進めるための詳細な図面を作成します。材料・寸法・仕様をすべて決定します。この図面をもとに見積りを取ります。",
    note: null,
  },
  {
    step: "05",
    title: "施工者選定・契約",
    duration: "約1ヶ月",
    description:
      "複数の施工業者から見積りを取り、金額・技術・対応力などを総合的に判断してご提案します。施工業者の選定・契約のサポートを行います。",
    note: "施工業者は複数社から選べます。建築主の利益を守る立場で選定をサポートします。",
  },
  {
    step: "06",
    title: "工事監理",
    duration: "工事期間中（住宅で約4〜6ヶ月）",
    description:
      "設計図通りに工事が進んでいるか確認する「工事監理」を行います。定期的に現場に足を運び、施工品質を確認します。",
    note: null,
  },
  {
    step: "07",
    title: "竣工・引渡し",
    duration: "—",
    description:
      "完成後、建物の各部位を確認する最終検査を行います。不具合があれば補修を指示します。鍵の引渡しの際には、設備の使い方なども説明します。",
    note: null,
  },
];

const faqs = [
  // ── 相談・最初の一歩
  {
    category: "相談・最初の一歩",
    q: "相談だけでも大丈夫ですか？",
    a: "もちろんです。「まだ建てるか決まっていない」「予算が合うか不安」という段階でも歓迎しています。初回相談は無料ですので、お気軽にどうぞ。「話してみてから考える」で構いません。",
  },
  {
    category: "相談・最初の一歩",
    q: "土地がまだ決まっていなくても相談できますか？",
    a: "はい、土地探しの段階からご相談いただけます。土地の選び方は建物の設計と密接に関わるため、早い段階でご相談いただくほど選択肢が広がります。「この土地、どう思いますか？」という相談も歓迎です。",
  },
  {
    category: "相談・最初の一歩",
    q: "複数の設計事務所に同時に相談しても良いですか？",
    a: "問題ありません。どの事務所に頼むかを決める前に、複数の建築家と話してみることをむしろお勧めします。相性・設計の方向性・費用感などを比べた上で決めていただければ。",
  },
  // ── 費用について
  {
    category: "費用について",
    q: "設計費用の目安を教えてください。",
    a: "設計費用は建物の規模・用途・複雑さによって異なります。一般的には工事費の10〜15%程度が目安とされており、たとえば工事費3,000万円の住宅なら設計料は300〜450万円程度のイメージです。ただしプロジェクトによって変わりますので、初回相談でご予算とご要望をお聞きした上で具体的にお伝えします。",
  },
  {
    category: "費用について",
    q: "設計料はいつ、どのように支払うのですか？",
    a: "一般的に設計契約時・基本設計完了時・実施設計完了時・竣工時の4〜5回に分けてお支払いいただく形を取っています。一度に大きな金額が発生しないよう段階的にお支払いいただける設計にしています。",
  },
  {
    category: "費用について",
    q: "設計の途中でキャンセルした場合、費用はどうなりますか？",
    a: "設計契約書に基づき、それまで完了した業務に対する費用をご請求します。初回相談の段階（契約前）であれば費用は発生しません。途中でのキャンセルが心配な場合は、最初にご説明しますのでお気軽にお申し付けください。",
  },
  // ── 設計について
  {
    category: "設計について",
    q: "工務店やハウスメーカーとの違いは何ですか？",
    a: "設計事務所は設計と工事監理のみを行い、施工は別の施工業者が担当します。設計の自由度が高く、施工業者を複数から選べるメリットがあります。また設計者が施工をチェックする「工事監理」が独立して行われるため、品質管理の面でも安心です。ハウスメーカーのように規格化された商品ではなく、あなたの敷地・暮らしに合わせた一品設計を行います。",
  },
  {
    category: "設計について",
    q: "設計が始まってから変更はできますか？",
    a: "基本設計の段階であれば、大きな変更も対応可能です。実施設計に入ってからの変更は費用・工期に影響することがありますが、その都度ご相談しながら進めます。「変更が怖くて言い出せない」ということがないよう、気軽に相談できる雰囲気を大切にしています。",
  },
  {
    category: "設計について",
    q: "打ち合わせは何回くらいありますか？",
    a: "プロジェクトの規模や複雑さによりますが、基本設計〜実施設計の期間で月1〜2回程度の打ち合わせが標準的です。オンラインと対面を組み合わせることで、遠方の方でもスムーズに進められます。",
  },
  // ── 遠方・拠点について
  {
    category: "遠方・拠点について",
    q: "遠方でも依頼できますか？",
    a: "東京・香川（さぬき市）・高松の3拠点を構えており、全国対応しています。オンライン打ち合わせを活用しながら進められますので、遠方の方もご安心ください。必要に応じて現地にも伺います。",
  },
  {
    category: "遠方・拠点について",
    q: "リノベーションの相談も受けていますか？",
    a: "はい、リノベーションのご相談も承っています。既存建物の状態・構造・法規の確認から、新しい空間のご提案まで対応します。「古い家をどう活かすか」という相談も歓迎です。",
  },
];

// FAQをカテゴリごとにグループ化
const faqCategories = Array.from(new Set(faqs.map((f) => f.category)));

export default function FlowPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* ── Page Hero ────────────────────────────────────────── */}
        <section className="py-28 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-end">
              <div>
                <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-6">
                  FLOW & FEE
                </p>
                <h1
                  className="font-light text-zinc-900 leading-tight tracking-tight"
                  style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
                >
                  依頼の流れ・
                  <br />
                  費用の考え方
                </h1>
              </div>
              <div className="md:pb-3 md:max-w-sm md:ml-auto">
                <p className="text-xs text-zinc-500 font-light leading-8">
                  設計事務所への依頼が初めての方でも安心していただけるよう、
                  流れと費用の考え方を正直にお伝えします。
                  わからないことはいつでもお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Steps ────────────────────────────────────────────── */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-20">
              STEP BY STEP
            </p>

            <div className="space-y-0">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[64px_1fr] md:grid-cols-[100px_1fr] gap-8 border-t border-zinc-100 py-10 last:border-b last:border-zinc-100"
                >
                  <div className="pt-1">
                    <p
                      className="text-[2.5rem] font-light text-zinc-100 leading-none"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {s.step}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                      <h2 className="text-base font-light tracking-wide">
                        {s.title}
                      </h2>
                      <span className="text-[9px] tracking-[0.2em] text-zinc-300 sm:ml-6">
                        {s.duration}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 font-light leading-8 max-w-2xl">
                      {s.description}
                    </p>
                    {s.note && (
                      <p className="mt-4 text-[10px] text-zinc-400 font-light leading-6 border-l-2 border-zinc-200 pl-4">
                        {s.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline summary */}
            <div className="mt-20 pt-14 border-t border-zinc-100">
              <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-8">
                TOTAL TIMELINE
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-zinc-100">
                {[
                  { label: "住宅（新築）", value: "約12〜18ヶ月" },
                  { label: "店舗・オフィス", value: "約8〜14ヶ月" },
                  { label: "リノベーション", value: "約6〜12ヶ月" },
                  { label: "初回相談", value: "無料・随時" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-8 border-r border-zinc-100 last:border-r-0 border-b md:border-b-0"
                  >
                    <p className="text-[9px] tracking-[0.3em] text-zinc-300 mb-3">
                      {item.label}
                    </p>
                    <p className="text-sm font-light text-zinc-700">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[9px] text-zinc-300 font-light">
                ※ 上記はあくまで目安です。敷地条件・プロジェクト規模によって異なります。
              </p>
            </div>
          </div>
        </section>

        {/* ── Fee ──────────────────────────────────────────────── */}
        <section className="py-32 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-[9px] tracking-[0.5em] text-white/25 mb-20">
              FEE
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-2xl font-light text-white tracking-wide mb-10">
                  費用の考え方
                </h2>
                <div className="space-y-6">
                  <p className="text-sm text-white/45 font-light leading-[2]">
                    設計費用は「設計料」と「工事監理料」から構成されます。
                    金額は建物の規模・用途・プロジェクトの複雑さによって異なるため、
                    一概に「いくら」とお伝えするのが難しい部分があります。
                  </p>
                  <p className="text-sm text-white/45 font-light leading-[2]">
                    一般的な目安として、工事費の10〜15%程度とされることが多いです。
                    たとえば工事費が3,000万円の住宅であれば、
                    設計料は300〜450万円程度のイメージです。
                    小規模な案件ではこの割合が高くなることもあります。
                  </p>
                  <p className="text-sm text-white/45 font-light leading-[2]">
                    費用の詳細については、初回相談でご予算と規模感をお聞きした上で
                    具体的にご説明します。「高いかも」と思って諦める前に、
                    まず一度お話しください。
                  </p>
                </div>

                <div className="mt-10 border border-white/10 p-6">
                  <p className="text-[9px] tracking-[0.4em] text-white/25 mb-5">
                    NOTE
                  </p>
                  <p className="text-xs text-white/35 font-light leading-7">
                    設計料は工事費と別にかかる費用です。ただし設計事務所を通すことで、
                    施工業者の相見積りが取れるため、工事費が抑えられるケースも多くあります。
                    「設計料分だけ高くなる」とは限りません。
                  </p>
                </div>
              </div>

              <div>
                {[
                  { label: "初回相談", value: "無料" },
                  { label: "設計料", value: "工事費の10〜15%が目安" },
                  { label: "工事監理料", value: "設計料に含む場合が多い" },
                  { label: "確認申請費", value: "別途実費（数万〜十数万円）" },
                  { label: "その他", value: "地盤調査・測量など実費" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-6 border-b border-white/8"
                  >
                    <p className="text-[9px] tracking-[0.4em] text-white/30">
                      {item.label}
                    </p>
                    <p className="text-sm font-light text-white/60">
                      {item.value}
                    </p>
                  </div>
                ))}
                <p className="text-[9px] text-white/20 font-light leading-6 pt-5">
                  ※ 上記はあくまで目安です。詳細はご相談ください。
                </p>

                <div className="mt-10">
                  <Link
                    href="/contact/"
                    className="inline-block text-[10px] tracking-[0.3em] border border-white/20 text-white/50 px-8 py-4 hover:border-white/50 hover:text-white/80 transition-all duration-300"
                  >
                    費用について相談する
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="py-32 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-4">
              FAQ
            </p>
            <h2 className="text-2xl font-light tracking-wide text-zinc-900 mb-20">
              よくある質問
            </h2>

            {faqCategories.map((category) => (
              <div key={category} className="mb-16 last:mb-0">
                <p className="text-[9px] tracking-[0.4em] text-zinc-300 mb-0 pb-5 border-b border-zinc-100">
                  {category.toUpperCase()}
                </p>
                <div className="space-y-0">
                  {faqs
                    .filter((f) => f.category === category)
                    .map((faq, i) => (
                      <div
                        key={i}
                        className="border-b border-zinc-100 py-10 grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-8"
                      >
                        <p className="text-sm font-light leading-7 text-zinc-800">
                          {faq.q}
                        </p>
                        <p className="text-xs text-zinc-500 font-light leading-8">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-zinc-100">
              <p className="text-xs text-zinc-500 font-light">
                他にご不明な点は
                <Link
                  href="/contact/"
                  className="text-zinc-700 cta-underline hover:text-zinc-900 transition-colors ml-1 mr-1"
                >
                  お問い合わせ
                </Link>
                からお気軽にどうぞ。初回相談は無料です。
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
