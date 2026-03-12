import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "初回相談",
    duration: "無料 / オンライン or 対面",
    description:
      "まずはどんな建物を建てたいか、どんな暮らしを望んでいるかをざっくばらんにお話しください。費用・スケジュール・進め方など、疑問に思っていることも何でも聞いてください。この段階では費用は一切かかりません。",
  },
  {
    step: "02",
    title: "ヒアリング・条件整理",
    duration: "1〜2回 / 約2〜4週間",
    description:
      "敷地の条件や法規、ご要望・ご予算・スケジュールを整理します。設計を進めるにあたっての基本的な方向性をここで決めます。必要に応じて現地調査も行います。",
  },
  {
    step: "03",
    title: "基本設計",
    duration: "約1〜2ヶ月",
    description:
      "空間の大まかなかたちと方向性を決める段階です。平面図・断面図・外観のスケッチなどでご提案します。ここで双方が合意してから次の段階へ進みます。",
  },
  {
    step: "04",
    title: "実施設計",
    duration: "約2〜3ヶ月",
    description:
      "施工業者が工事を進めるための詳細な図面を作成します。材料・寸法・仕様をすべて決定します。この図面をもとに見積りを取ります。",
  },
  {
    step: "05",
    title: "施工者選定・契約",
    duration: "約1ヶ月",
    description:
      "複数の施工業者から見積りを取り、金額・技術・対応力などを総合的に判断してご提案します。施工業者の選定・契約のサポートを行います。",
  },
  {
    step: "06",
    title: "工事監理",
    duration: "工事期間中（住宅で約4〜6ヶ月）",
    description:
      "設計図通りに工事が進んでいるか確認する「工事監理」を行います。定期的に現場に足を運び、施工品質を確認します。",
  },
  {
    step: "07",
    title: "竣工・引渡し",
    duration: "—",
    description:
      "完成後、建物の各部位を確認する最終検査を行います。不具合があれば補修を指示します。鍵の引渡しの際には、設備の使い方なども説明します。",
  },
];

const faqs = [
  {
    q: "相談だけでも大丈夫ですか？",
    a: "もちろんです。「まだ建てるか決まっていない」「予算が合うか不安」という段階でも歓迎しています。初回相談は無料ですので、お気軽にどうぞ。",
  },
  {
    q: "設計費用の目安を教えてください。",
    a: "設計費用は建物の規模・用途・複雑さによって異なります。一般的には工事費の10〜15%程度が目安とされていますが、プロジェクトによって変わります。初回相談の際にご予算をお聞きした上で、具体的な考え方をご説明します。",
  },
  {
    q: "遠方でも依頼できますか？",
    a: "東京・香川の2拠点を構えており、全国対応しています。オンライン打ち合わせを活用しながら進められますので、遠方の方もご安心ください。",
  },
  {
    q: "工務店やハウスメーカーとの違いは何ですか？",
    a: "設計事務所は設計と工事監理のみを行い、施工は別の施工業者が担当します。設計の自由度が高く、施工業者を複数から選べるメリットがあります。また設計者が施工をチェックする「工事監理」が独立して行われるため、品質管理の面でも安心です。",
  },
  {
    q: "設計が始まってから変更はできますか？",
    a: "基本設計の段階であれば、大きな変更も対応可能です。実施設計に入ってからの変更は費用・工期に影響することがありますが、その都度ご相談しながら進めます。",
  },
];

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
                  設計依頼の流れと、費用についての考え方をご説明します。
                  不明な点はお気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Steps ────────────────────────────────────────────── */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-20">
              STEP
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
                  </div>
                </div>
              ))}
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
                    一般的な目安として、工事費の10〜15%程度とされることが多いですが、
                    小規模な案件ではこれより割合が高くなることもあります。
                  </p>
                  <p className="text-sm text-white/45 font-light leading-[2]">
                    初回相談でご予算と規模感をお聞きした上で、
                    具体的な費用の考え方をご説明します。
                    まずはお気軽にご連絡ください。
                  </p>
                </div>
              </div>

              <div>
                {[
                  { label: "初回相談", value: "無料" },
                  { label: "設計料", value: "工事費の10〜15%が目安" },
                  { label: "工事監理料", value: "設計料に含む場合が多い" },
                  { label: "その他", value: "確認申請費用など実費" },
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
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="py-32 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-20">
              FAQ
            </p>

            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-t border-zinc-100 py-10 grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-8"
                >
                  <p className="text-sm font-light leading-7 text-zinc-800">
                    {faq.q}
                  </p>
                  <p className="text-xs text-zinc-500 font-light leading-8">
                    {faq.a}
                  </p>
                </div>
              ))}
              <div className="border-t border-zinc-100" />
            </div>

            <div className="mt-12">
              <p className="text-xs text-zinc-500 font-light">
                他にご不明な点は
                <Link
                  href="/contact/"
                  className="text-zinc-700 cta-underline hover:text-zinc-900 transition-colors ml-1 mr-1"
                >
                  お問い合わせ
                </Link>
                からお気軽にどうぞ。
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
