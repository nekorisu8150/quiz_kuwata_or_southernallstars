// Songs database with attribution
// 桑田佳祐 = Kuwata Keisuke (solo)
// サザンオールスターズ = Southern All Stars (band)
export interface Song {
  title: string;
  artist: "桑田佳祐" | "サザンオールスターズ";
}

export const songs: Song[] = [
  // 桑田佳祐 solo songs
  { title: "明日へのマーチ", artist: "桑田佳祐" },
  { title: "波乗りジョニー", artist: "桑田佳祐" },
  { title: "白い恋人達", artist: "桑田佳祐" },
  { title: "悲しい気持ち (Just a man in love)", artist: "桑田佳祐" },
  { title: "君への手紙", artist: "桑田佳祐" },
  { title: "東京", artist: "桑田佳祐" },
  { title: "歩いて帰ろう", artist: "桑田佳祐" },
  { title: "若い広場", artist: "桑田佳祐" },
  { title: "愛し君へ", artist: "桑田佳祐" },
  { title: "ダーリン", artist: "桑田佳祐" },
  { title: "Happiness", artist: "桑田佳祐" },
  { title: "ヨシ子さん", artist: "桑田佳祐" },
  { title: "ROCK'N'ROLL", artist: "桑田佳祐" },
  { title: "伊勢佐木町ブルース", artist: "桑田佳祐" },
  { title: "孤独の太陽", artist: "桑田佳祐" },

  // サザンオールスターズ songs
  { title: "いとしのエリー", artist: "サザンオールスターズ" },
  { title: "真夏の果実", artist: "サザンオールスターズ" },
  { title: "TSUNAMI", artist: "サザンオールスターズ" },
  { title: "勝手にシンドバッド", artist: "サザンオールスターズ" },
  { title: "LOVE AFFAIR〜秘密のデート", artist: "サザンオールスターズ" },
  { title: "夢の番人", artist: "サザンオールスターズ" },
  { title: "DIRTY OLD MAN〜さらば夏よ", artist: "サザンオールスターズ" },
  { title: "希望の轍", artist: "サザンオールスターズ" },
  { title: "栞のテーマ", artist: "サザンオールスターズ" },
  { title: "壮年JUMP", artist: "サザンオールスターズ" },
  { title: "太陽は罪な奴", artist: "サザンオールスターズ" },
  { title: "バラ色の日々", artist: "サザンオールスターズ" },
  { title: "ピースとハイライト", artist: "サザンオールスターズ" },
  { title: "闘う戦士たちへ愛を込めて", artist: "サザンオールスターズ" },
  { title: "ミス・ブランニュー・デイ", artist: "サザンオールスターズ" },
];

// Function to get random songs for the quiz
export const getRandomSongs = (count: number): Song[] => {
  const shuffled = [...songs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};