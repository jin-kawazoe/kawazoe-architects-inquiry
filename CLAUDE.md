# KAWAZOE ARCHITECTS 集客サイト（/inquiry/）

## プロジェクト概要

川越建築設計事務所（KAWAZOE ARCHITECTS）の設計依頼受付に特化したサブディレクトリサイト。
各ブログ・事務所サイトからの流入を受け、訪問者が「相談しよう」と決断して行動できる場所。

**URL**: `https://www.kawazoe-architects.com/inquiry/`  
**目的**: 設計依頼の問い合わせ・相談予約のコンバージョン  
**対象**: 住宅・店舗・リノベーションの設計依頼を検討している人

---

## サイト構成

```
/inquiry/
  ├ /              ← トップ：用途選択＋事務所の強み
  ├ /works/        ← 実績（依頼者向けに厳選）
  ├ /about/        ← 建築家・事務所紹介（依頼者の言葉で）
  ├ /flow/         ← 依頼の流れ・費用の考え方
  ├ /contact/      ← 問い合わせフォーム＋Calendly予約
  └ /thanks/       ← 送信完了ページ
```

---

## 各ページの役割

### / トップ
- キャッチコピー（依頼者向け）
- 用途別入り口：住宅設計 / 店舗設計 / リノベーション
- 事務所の強み（3点程度）
- CTAボタン：「まず相談する」「依頼の流れを見る」

### /works/
- 実績を住宅・店舗・リノベ別にフィルタリング表示
- 各プロジェクト：写真＋用途＋規模感＋一言
- 詳細はメインサイト（portfolio/）へリンク
- ページ末尾にCTA

### /about/
- 代表プロフィール（依頼者が安心できる言葉で）
- 東京・香川・高松の拠点紹介
- 設計への姿勢・こだわり
- ページ末尾にCTA

### /flow/
- STEP別の依頼の流れ（初回相談〜竣工）
- 設計料の考え方（目安・考え方のみ、金額は出さない）
- よくある質問（FAQ）
- ページ末尾にCTA

### /contact/
- 用途選択（住宅・店舗・リノベ・その他）
- 名前・連絡先・相談内容（最小限）
- Calendly埋め込み（初回相談予約）
- 「まずメールでも可」の選択肢

### /thanks/
- 送信完了メッセージ
- 次のステップを明示
- メインサイトへのリンク

---

## 技術スタック

```
フレームワーク : Next.js（静的エクスポート / next export）
スタイリング   : Tailwind CSS
フォーム送信   : Supabase（データ保存）
メール通知     : Resend（自動返信＋管理者通知）
予約           : Calendly（埋め込み）
デプロイ       : rsync → Plesk/nginx サーバー
```

---

## デザイン方針

メインサイト（kawazoe-architects.com）のトーンに準拠。

```
カラー    : 白・黒・グレー（モノトーン）
フォント  : 英字サンセリフ＋日本語細め
余白      : 広め（建築サイトらしい空気感）
写真      : プロジェクト写真を大きく使う
トーン    : ブランド重視ではなく「依頼者の不安を解消する」言葉
```

メインサイトとの違い：
- メインサイト → 建築家として見せる（デザイン・作品性重視）
- 集客サイト → 依頼者の立場で語る（信頼・行動喚起重視）

---

## 導線設計

### 外部からの流入
```
各ブログ末尾のCTAボタン → /inquiry/
各事務所サイトのCTAボタン → /inquiry/
Google検索（直接流入） → /inquiry/
```

### サイト内の流れ
```
トップ（用途選択）
  ↓
works/ または flow/（信頼・理解）
  ↓
about/（建築家を知る）
  ↓
contact/（相談・予約）
  ↓
thanks/（完了）
```

---

## Supabase テーブル設計

```sql
-- 問い合わせテーブル
CREATE TABLE inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  type TEXT,           -- 住宅 / 店舗 / リノベ / その他
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  status TEXT DEFAULT 'new'  -- new / contacted / closed
);
```

---

## 環境変数

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
NEXT_PUBLIC_CALENDLY_URL=
```

---

## デプロイ手順

```bash
# ビルド
npm run build
next export  # → out/ ディレクトリに出力

# デプロイ
rsync -avz --delete out/ user@server:/var/www/kawazoe-architects.com/inquiry/
```

---

## 関連サイト（CTAリンク元）

- `/not-fail-housing/` 失敗しない家づくり
- `/architect-house-design/` アーキテクト・ハウス・デザイン
- `/architect-shop-design/` 建築家による店舗設計
- `/house-design/` R+house事業
- `/shopdesign/` 店舗デザイン
- `/office-tokyo/` 東京事務所
- `/office-kagawa/` 香川事務所
- `/studio-takamatsu/` 高松スタジオ
- `/howto/` 建築ハウツー

---

## 注意事項

- 設計料の具体的な金額は掲載しない（「費用の考え方」に留める）
- 問い合わせのハードルを下げる文言を意識する（「まず相談だけでもOK」）
- モバイルファースト（スマートフォンからの閲覧を優先）
- 既存WordPressサイトとはnginxのサブディレクトリで共存
