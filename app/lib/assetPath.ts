// basePath (/inquiry) を画像パスに自動付与するユーティリティ
// next/image の unoptimized モードでは basePath が適用されないため使用
const BASE = "/inquiry";

export function assetPath(path: string): string {
  return `${BASE}${path}`;
}
