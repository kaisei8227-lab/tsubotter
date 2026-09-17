/* ---------- 定数・データ定義 ---------- */
const ROSTER_KEY = 'tsubotter_roster';
const USERS_KEY = 'tsubotter_users';
const SESSION_KEY = 'tsubotter_session';

const sampleRoster = [
  { id: '260001', name: '山田 太郎' },
  { id: '260002', name: '佐藤 花子' },
  { id: '260003', name: '鈴木 一郎' },
  { id: '260004', name: '田中 美咲' },
  { id: '260005', name: '高橋 健' },
  { id: '260006', name: '渡辺 翔太' },
  { id: '260007', name: '伊藤 葵' },
  { id: '260008', name: '山本 蓮' },
  { id: '260009', name: '中村 陽菜' },
  { id: '260010', name: '小林 陸' },
  { id: '260011', name: '加藤 結衣' },
  { id: '260012', name: '吉田 樹' },
  { id: '260013', name: '山田 結月' },
  { id: '260014', name: '佐々木 颯太' },
  { id: '260015', name: '山口 莉子' },
  { id: '260016', name: '松本 湊' },
  { id: '260017', name: '井上 大翔' },
  { id: '260018', name: '木村 芽依' },
  { id: '260019', name: '林 悠人' },
  { id: '260020', name: '斎藤 心春' },
  { id: '260021', name: '清水 蒼空' },
  { id: '260022', name: '山崎 詩織' },
  { id: '260023', name: '池田 陽翔' },
  { id: '260024', name: '阿部 咲良' },
  { id: '260025', name: '橋本 悠真' },
  { id: '260026', name: '山下 結菜' },
  { id: '260027', name: '森 翔平' },
  { id: '260028', name: '石川 菜月' },
  { id: '260029', name: '前田 拓海' },
  { id: '260030', name: '小川 楓' },
  { id: '260031', name: '藤田 颯' },
  { id: '260032', name: '岡田 澪' },
  { id: '260033', name: '後藤 奏太' },
  { id: '260034', name: '長谷川 杏' },
  { id: '260035', name: '村上 暖' },
  { id: '260036', name: '近藤 凪' },
  { id: '260037', name: '石井 晴琉' },
  { id: '260038', name: '坂本 柚希' },
  { id: '260039', name: '遠藤 朝陽' },
  { id: '260040', name: '青木 愛莉' },
  { id: '260041', name: '藤井 律' },
  { id: '260042', name: '西村 莉乃' },
  { id: '260043', name: '福田 絢斗' },
  { id: '260044', name: '太田 桃花' },
  { id: '260045', name: '三浦 瑛太' },
  { id: '260046', name: '藤原 凛' },
  { id: '260047', name: '岡本 洸太' },
  { id: '260048', name: '松田 優衣' },
  { id: '260049', name: '中川 駿' },
  { id: '260050', name: '中野 栞' },
  { id: '260051', name: '原田 大和' },
  { id: '260052', name: '小野 紬' },
  { id: '260053', name: '田村 啓太' },
  { id: '260054', name: '竹内 萌' },
  { id: '260055', name: '金子 頼斗' },
  { id: '260056', name: '和田 紗良' },
  { id: '260057', name: '中山 琉生' },
  { id: '260058', name: '石橋 乃々華' },
  { id: '260059', name: '上田 壱成' },
  { id: '260060', name: '原 咲空' },
  { id: '260061', name: '柴田 慧' },
  { id: '260062', name: '酒井 万智' },
  { id: '260063', name: '工藤 仁' },
  { id: '260064', name: '横山 朱莉' },
  { id: '260065', name: '宮崎 慶' },
  { id: '260066', name: '宮本 琴音' },
  { id: '260067', name: '内田 昂輝' },
  { id: '260068', name: '高木 芽衣' },
  { id: '260069', name: '谷口 航' },
  { id: '260070', name: '丸山 寧々' },
  { id: '260071', name: '高田 陽向' },
  { id: '260072', name: '新井 莉子' },
  { id: '260073', name: '杉山 蓮鳳' },
  { id: '260074', name: '大塚 ひかり' },
  { id: '260075', name: '小山 匠' },
  { id: '260076', name: '平野 結菜' },
  { id: '260077', name: '菅原 湊斗' },
  { id: '260078', name: '大久保 莉央' },
  { id: '260079', name: '千葉 泰成' },
  { id: '260080', name: '松井 心優' },
  { id: '260081', name: '岩崎 櫂' },
  { id: '260082', name: '木下 彩乃' },
  { id: '260083', name: '野口 健人' },
  { id: '260084', name: '野村 美月' },
  { id: '260085', name: '佐野 一真' },
  { id: '260086', name: '渡辺 舞' },
  { id: '260087', name: '菊地 創太' },
  { id: '260088', name: '市川 日和' },
  { id: '260089', name: '渡辺 理人' },
  { id: '260090', name: '古川 ほのか' },
  { id: '260091', name: '島田 颯真' },
  { id: '260092', name: '水野 明日香' },
  { id: '260093', name: '高橋 悠' },
  { id: '260094', name: '菅野 美羽' },
  { id: '260095', name: '桜井 拓真' },
  { id: '260096', name: '吉川 遥香' },
  { id: '260097', name: '山内 光' },
  { id: '260098', name: '西田 菜々美' },
  { id: '260099', name: '菊池 龍之介' },
  { id: '260100', name: '西川 咲希' },
  { id: '260101', name: '北村 丈' },
  { id: '260102', name: '安田 結花' },
  { id: '260103', name: '平田 輝' },
  { id: '260104', name: '川口 玲奈' },
  { id: '260105', name: '久保 颯人' },
  { id: '260106', name: '佐久間 真緒' },
  { id: '260107', name: '野田 晴斗' },
  { id: '260108', name: '田口 莉央' },
  { id: '260109', name: '関 雄大' },
  { id: '260110', name: '服部 唯' },
  { id: '260111', name: '阿部 涼介' },
  { id: '260112', name: '川上 詩織' },
  { id: '260113', name: '永井 匠' },
  { id: '260114', name: '松岡 結依' },
  { id: '260115', name: '矢野 駿太' },
  { id: '260116', name: '桜井 茜' },
  { id: '260117', name: '土屋 健斗' },
  { id: '260118', name: '川島 七海' },
  { id: '260119', name: '吉村 悠希' },
  { id: '260120', name: '星野 優奈' },
  { id: '260121', name: '大西 颯汰' },
  { id: '260122', name: '山本 乃愛' },
  { id: '260123', name: '福島 陸斗' },
  { id: '260124', name: '本田 美咲' },
  { id: '260125', name: '服部 蓮' },
  { id: '260126', name: '樋口 莉々花' },
  { id: '260127', name: '渡部 海斗' },
  { id: '260128', name: '中島 愛美' },
  { id: '260129', name: '川村 翔' },
  { id: '260130', name: '平井 沙弥' },
  { id: '260131', name: '南 太陽' },
  { id: '260132', name: '荒木 優花' },
  { id: '260133', name: '岡 慎之介' },
  { id: '260134', name: '松下 千尋' },
  { id: '260135', name: '大島 颯太' },
  { id: '260136', name: '今井 芽衣' },
  { id: '260137', name: '河野 悠太' },
  { id: '260138', name: '小出 里奈' },
  { id: '260139', name: '神谷 陸' },
  { id: '260140', name: '浅野 心寧' },
  { id: '260141', name: '田村 悠真' },
  { id: '260142', name: '長尾 早紀' },
  { id: '260143', name: '一ノ瀬 翼' },
  { id: '260144', name: '白石 莉緒' },
  { id: '260145', name: '片岡 剛' },
  { id: '260146', name: '庄司 葵' },
  { id: '260147', name: '矢島 慶吾' },
  { id: '260148', name: '高梨 美優' },
  { id: '260149', name: '堀 慎太郎' },
  { id: '260150', name: '奥村 香織' },
  { id: '260151', name: '成田 悠斗' },
  { id: '260152', name: '今野 日菜' },
  { id: '260153', name: '関口 大地' },
  { id: '260154', name: '三橋 由佳' },
  { id: '260155', name: '小野寺 涼' },
  { id: '260156', name: '荻野 杏奈' },
  { id: '260157', name: '岩田 昂平' },
  { id: '260158', name: '篠原 真由' },
  { id: '260159', name: '沼田 拓実' },
  { id: '260160', name: '西尾 綾乃' },
  { id: '260161', name: '小暮 響' },
  { id: '260162', name: '大谷 琴葉' },
  { id: '260163', name: '根本 和真' },
  { id: '260164', name: '宮田 莉央' },
  { id: '260165', name: '栗原 龍' },
  { id: '260166', name: '高田 彩香' },
  { id: '260167', name: '飯田 一輝' },
  { id: '260168', name: '村田 萌々香' },
  { id: '260169', name: '西山 太一' },
  { id: '260170', name: '金井 結衣' },
  { id: '260171', name: '今村 凌' },
  { id: '260172', name: '小沢 陽菜' },
  { id: '260173', name: '新開 悠斗' },
  { id: '260174', name: '織田 未羽' },
  { id: '260175', name: '秋山 聖也' },
  { id: '260176', name: '大森 まひろ' },
  { id: '260177', name: '千葉 龍成' },
  { id: '260178', name: '黒田 春香' },
  { id: '260179', name: '辻 健太' },
  { id: '260180', name: '嶋田 美羽' },
  { id: '260181', name: '水谷 陸' },
  { id: '260182', name: '小池 明日香' },
  { id: '260183', name: '吉野 蓮' },
  { id: '260184', name: '富田 百花' },
  { id: '260185', name: '上村 颯' },
  { id: '260186', name: '永田 柚葉' },
  { id: '260187', name: '菅 晴人' },
  { id: '260188', name: '谷 莉乃' },
  { id: '260189', name: '星 翔太' },
  { id: '260190', name: '堀内 千花' },
  { id: '260191', name: '松永 航平' },
  { id: '260192', name: '平野 結菜' },
  { id: '260193', name: '神田 拓海' },
  { id: '260194', name: '安藤 咲良' },
  { id: '260195', name: '岩本 奏太' },
  { id: '260196', name: '松浦 莉子' },
  { id: '260197', name: '内藤 大翔' },
  { id: '260198', name: '三宅 美月' },
  { id: '260199', name: '片山 悠人' },
  { id: '260200', name: '荒井 陽菜' },
  { id: '260201', name: '川崎 涼' },
  { id: '260202', name: '大野 美咲' },
  { id: '260203', name: '田代 健太' },
  { id: '260204', name: '長田 沙羅' },
  { id: '260205', name: '早川 颯人' },
  { id: '260206', name: '福島 結衣' },
  { id: '260207', name: '石原 陸' },
  { id: '260208', name: '中田 葵' },
  { id: '260209', name: '大石 太一' },
  { id: '260210', name: '平山 莉央' },
  { id: '260211', name: '小出 翔太' },
  { id: '260212', name: '藤川 愛莉' },
  { id: '260213', name: '奥野 悠真' },
  { id: '260214', name: '吉本 心春' },
  { id: '260215', name: '渡辺 陽斗' },
  { id: '260216', name: '矢部 菜月' },
  { id: '260217', name: '日高 颯' },
  { id: '260218', name: '北川 百花' },
  { id: '260219', name: '高島 大和' },
  { id: '260220', name: '野中 栞' },
  { id: '260221', name: '吉村 蓮' },
  { id: '260222', name: '服部 芽衣' },
  { id: '260223', name: '西口 航' },
  { id: '260224', name: '宮川 ゆい' },
  { id: '260225', name: '川端 陸斗' },
  { id: '260226', name: '平 菜々美' },
  { id: '260227', name: '三浦 駿' },
  { id: '260228', name: '松村 明莉' },
  { id: '260229', name: '中谷 晴琉' },
  { id: '260230', name: '大木 莉々花' },
  { id: '260231', name: '岸本 翔平' },
  { id: '260232', name: '小谷 ひまり' },
  { id: '260233', name: '竹田 拓真' },
  { id: '260234', name: '笠原 美優' },
  { id: '260235', name: '黒木 蒼空' },
  { id: '260236', name: '古賀 結衣' },
  { id: '260237', name: '長島 樹' },
  { id: '260238', name: '広瀬 栞' },
  { id: '260239', name: '土井 大地' },
  { id: '260240', name: '堀江 芽生' },
  { id: '260241', name: '町田 駿' },
  { id: '260242', name: '川合 柚月' },
  { id: '260243', name: '大場 陽翔' },
  { id: '260244', name: '関根 咲良' },
  { id: '260245', name: '庄司 悠真' },
  { id: '260246', name: '相沢 美羽' },
  { id: '260247', name: '新谷 拓海' },
  { id: '260248', name: '荻野 沙彩' },
  { id: '260249', name: '立花 瑛太' },
  { id: '260250', name: '牧野 凛' },
  { id: '260251', name: '小松 健太' },
  { id: '260252', name: '河原 結衣' },
  { id: '260253', name: '関口 陸' },
  { id: '260254', name: '高田 陽菜' },
  { id: '260255', name: '島田 颯太' },
  { id: '260256', name: '大出 莉子' },
  { id: '260257', name: '平野 悠' },
  { id: '260258', name: '長谷川 彩' },
  { id: '260259', name: '内山 大翔' },
  { id: '260260', name: '吉岡 美月' },
  { id: '260261', name: '今井 創太' },
  { id: '260262', name: '井口 栞' },
  { id: '260263', name: '桑原 陽斗' },
  { id: '260264', name: '長野 莉央' },
  { id: '260265', name: '松原 颯' },
  { id: '260266', name: '木村 結菜' },
  { id: '260267', name: '橋本 蓮' },
  { id: '260268', name: '佐々木 萌' },
  { id: '260269', name: '渡辺 匠' },
  { id: '260270', name: '山崎 芽衣' },
  { id: '260271', name: '加藤 陸' },
  { id: '260272', name: '吉田 葵' },
  { id: '260273', name: '山田 悠太' },
  { id: '260274', name: '佐々木 心春' },
  { id: '260275', name: '山口 蒼空' },
  { id: '260276', name: '松本 詩織' },
  { id: '260277', name: '井上 陽翔' },
  { id: '260278', name: '木村 咲良' },
  { id: '260279', name: '林 悠真' },
  { id: '260280', name: '斎藤 結菜' },
  { id: '260281', name: '清水 翔平' },
  { id: '260282', name: '山崎 菜月' },
  { id: '260283', name: '池田 拓海' },
  { id: '260284', name: '阿部 楓' },
  { id: '260285', name: '橋本 颯' },
  { id: '260286', name: '山下 澪' },
  { id: '260287', name: '森 奏太' },
  { id: '260288', name: '石川 杏' },
  { id: '260289', name: '前田 暖' },
  { id: '260290', name: '小川 凪' },
  { id: '260291', name: '藤田 晴琉' },
  { id: '260292', name: '岡田 柚希' },
  { id: '260293', name: '後藤 朝陽' },
  { id: '260294', name: '長谷川 愛莉' },
  { id: '260295', name: '村上 律' },
  { id: '260296', name: '近藤 莉乃' },
  { id: '260297', name: '石井 絢斗' },
  { id: '260298', name: '坂本 桃花' },
  { id: '260299', name: '遠藤 瑛太' },
  { id: '260300', name: '青木 凛' }
];

// 学科定義
const DEPARTMENTS = [
  { key: 'ビジネスAI学科', abbr: 'ビ' },
  { key: '公務員学科', abbr: '公' },
  { key: '短期公務員', abbr: '短' },
  { key: '動物学科', abbr: '動' },
  { key: '自動車整備士学科', abbr: '車' },
  { key: 'AI・IT学科', abbr: 'IT' },
  { key: 'こども総合学科', abbr: 'こ' }
];

// 学科ごとのコース候補
const COURSES_BY_DEPT = {
  'ビジネスAI学科': ['ビジネスAIコース（2年制）'],
  '公務員学科': ['公務員コース（2年制）'],
  '短期公務員': ['公務員コース（1年制）'],
  '動物学科': ['動物看護コース（2年制）'],
  '自動車整備士学科': ['2級自動車整備コース（2年制）'],
  'AI・IT学科': ['先端ITコース（4年制）', 'モバイルエンジニアコース（2年制）'],
  'こども総合学科': ['こども総合コース（2年制）']
};

function deptAbbr(deptName) {
  if (!deptName) return '？';
  const d = DEPARTMENTS.find(d => d.key === deptName || d.abbr === deptName);
  if (d) return d.abbr;
  if (deptName.includes('ビジネス') || (deptName.includes('AI') && !deptName.includes('IT'))) return 'ビ';
  if (deptName.includes('公務員') && !deptName.includes('短')) return '公';
  if (deptName.includes('短')) return '短';
  if (deptName.includes('動物')) return '動';
  if (deptName.includes('自動車') || deptName.includes('車')) return '車';
  if (deptName.includes('IT')) return 'IT';
  if (deptName.includes('こども') || deptName.includes('こ')) return 'こ';
  return deptName.charAt(0);
}

/* ---------- LocalStorage ＆ サーバー通信 API ---------- */
function loadRoster() {
  if (!localStorage.getItem(ROSTER_KEY)) {
    localStorage.setItem(ROSTER_KEY, JSON.stringify(sampleRoster));
  }
  return JSON.parse(localStorage.getItem(ROSTER_KEY));
}
function loadUsers() { return JSON.parse(localStorage.getItem(USERS_KEY) || '{}'); }
function saveUsers(users) { localStorage.setItem(USERS_KEY, JSON.stringify(users)); }

// サーバーから投稿を取得する
async function fetchPostsFromServer() {
  try {
    const response = await fetch('/api/posts');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('投稿データの取得に失敗しました:', error);
  }
  return [];
}

/* ---------- DOM参照 ---------- */
const headerUser = document.getElementById('headerUser');
const headerAvatar = document.getElementById('headerAvatar');
const headerNick = document.getElementById('headerNick');
const headerCourse = document.getElementById('headerCourse');
const logoutBtn = document.getElementById('logoutBtn');

const authSection = document.getElementById('authSection');
const appSection = document.getElementById('appSection');

const authToggle = document.getElementById('authToggle');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const authMessage = document.getElementById('authMessage');

const regId = document.getElementById('regId');
const regNickname = document.getElementById('regNickname');
const regDept = document.getElementById('regDept');
const regCourse = document.getElementById('regCourse');
const regPw = document.getElementById('regPw');

const loginId = document.getElementById('loginId');
const loginPw = document.getElementById('loginPw');

const filterRow = document.getElementById('filterRow');
const postText = document.getElementById('postText');
const charCounter = document.getElementById('charCounter');
const visibilityToggle = document.getElementById('visibilityToggle');
const privateNote = document.getElementById('privateNote');
const postBtn = document.getElementById('postBtn');
const postList = document.getElementById('postList');

let currentVisibility = 'public';
let currentFilter = 'all';
let searchQuery = '';

/* ---------- UI拡張要素の初期化 ---------- */
function initExtraUI() {
  // 1. 検索バーの生成
  if (!document.getElementById('searchContainer')) {
    const searchWrap = document.createElement('div');
    searchWrap.id = 'searchContainer';
    searchWrap.style.cssText = 'margin-bottom: 16px; width: 100%;';
    searchWrap.innerHTML = `
      <input type="text" id="searchInput" placeholder="🔍 キーワード・ユーザー名で検索..." 
        style="width: 100%; padding: 10px 16px; border: 1px solid var(--border); border-radius: 999px; font-size: 13.5px; outline: none; background: #fff;">
    `;
    const composer = document.querySelector('.composer');
    if (composer) composer.parentNode.insertBefore(searchWrap, composer);

    document.getElementById('searchInput').addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderPosts();
    });
  }

  // 2. 学科学生一覧リスト枠の生成
  if (!document.getElementById('studentListSection')) {
    const studentSection = document.createElement('div');
    studentSection.id = 'studentListSection';
    studentSection.style.cssText = 'margin-top: 30px; background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 18px; display: none;';
    studentSection.innerHTML = `
      <h3 id="studentListTitle" style="margin: 0 0 12px; font-size: 15px; font-weight: 700; color: var(--ink);">所属学生</h3>
      <div id="studentListContent" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px;"></div>
    `;
    postList.parentNode.appendChild(studentSection);
  }

  // 3. プロフィールモーダルの初期化
  if (!document.getElementById('profileModal')) {
    const modal = document.createElement('div');
    modal.id = 'profileModal';
    modal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:999; align-items:center; justify-content:center;';
    modal.innerHTML = `
      <div style="background:#fff; width:90%; max-width:360px; border-radius:20px; padding:24px; position:relative; text-align:center;">
        <button id="closeProfileBtn" style="position:absolute; top:12px; right:16px; border:none; background:none; font-size:20px; cursor:pointer;">✕</button>
        <div id="profAvatar" class="avatar" style="width:64px; height:64px; margin:0 auto 12px; font-size:24px;"></div>
        <h3 id="profNick" style="margin:0; font-size:18px;"></h3>
        <p id="profDept" style="margin:4px 0 0; font-size:13px; color:var(--blue); font-weight:700;"></p>
        <p id="profCourse" style="margin:2px 0 16px; font-size:12px; color:var(--ink-soft);"></p>
        <div style="border-top:1px solid var(--border); padding-top:12px; text-align:left;">
          <span style="font-size:12px; color:var(--ink-soft);">投稿数: <strong id="profPostCount" style="color:var(--ink);">0</strong></span>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('closeProfileBtn').addEventListener('click', () => {
      modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  headerAvatar.style.cursor = 'pointer';
  headerAvatar.onclick = () => {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) openProfile(session);
  };
}

/* ---------- 学科・コースのプルダウン初期化 ---------- */
function fillDeptSelect() {
  regDept.innerHTML = DEPARTMENTS.map(d => `<option value="${d.key}">${d.key}</option>`).join('');
}
function fillCourseSelect(deptName) {
  const courses = COURSES_BY_DEPT[deptName] || [];
  regCourse.innerHTML = courses.map(c => `<option value="${c}">${c}</option>`).join('');
}
regDept.addEventListener('change', () => fillCourseSelect(regDept.value));

/* ---------- フィルター行の描画 ---------- */
function renderFilterRow() {
  const items = [{ key: 'all', abbr: '全体', label: '全体' }]
    .concat(DEPARTMENTS.map(d => ({ key: d.key, abbr: d.abbr, label: d.abbr })));

  filterRow.innerHTML = items.map(item => `
    <div class="filter-item ${currentFilter === item.key ? 'active' : ''}" data-key="${item.key}">
      <div class="circle">${item.abbr}</div>
      <div class="label">${item.label}</div>
    </div>
  `).join('');

  filterRow.querySelectorAll('.filter-item').forEach(el => {
    el.addEventListener('click', () => {
      currentFilter = el.dataset.key;
      renderFilterRow();
      renderPosts();
      renderStudentList();
    });
  });
}

/* ---------- 学科所属の学生一覧表示 ---------- */
function renderStudentList() {
  const studentSection = document.getElementById('studentListSection');
  const studentContent = document.getElementById('studentListContent');
  const studentTitle = document.getElementById('studentListTitle');

  if (currentFilter === 'all') {
    studentSection.style.display = 'none';
    return;
  }

  const users = loadUsers();
  const filterAbbr = deptAbbr(currentFilter);
  
  const deptStudents = Object.keys(users).map(id => ({ id, ...users[id] }))
    .filter(u => deptAbbr(u.dept) === filterAbbr);

  studentTitle.textContent = `${currentFilter} の所属学生 (${deptStudents.length}名)`;
  studentSection.style.display = 'block';

  if (deptStudents.length === 0) {
    studentContent.innerHTML = '<div style="font-size:12px; color:var(--ink-soft); grid-column:1/-1;">登録されている学生がいません。</div>';
    return;
  }

  studentContent.innerHTML = deptStudents.map(s => `
    <div onclick="openProfile('${s.id}')" style="display:flex; align-items:center; gap:8px; padding:8px; border:1px solid var(--border); border-radius:10px; cursor:pointer; background:#fff;">
      <div class="avatar" style="width:32px; height:32px; font-size:12px; flex-shrink:0;">${escapeHtml(s.nickname.charAt(0))}</div>
      <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:12.5px; font-weight:700;">${escapeHtml(s.nickname)}</div>
    </div>
  `).join('');
}

/* ---------- プロフィール画面を開く ---------- */
window.openProfile = async function(userId) {
  const users = loadUsers();
  const user = users[userId];
  if (!user) return;

  const posts = await fetchPostsFromServer();
  const userPostsCount = posts.filter(p => p.authorId === userId).length;

  document.getElementById('profAvatar').textContent = user.nickname.charAt(0);
  document.getElementById('profNick').textContent = user.nickname;
  document.getElementById('profDept').textContent = user.dept;
  document.getElementById('profCourse').textContent = user.course;
  document.getElementById('profPostCount').textContent = userPostsCount;

  const modal = document.getElementById('profileModal');
  modal.style.display = 'flex';
};

/* ---------- 認証関連 ---------- */
authToggle.querySelectorAll('.seg').forEach(seg => {
  seg.addEventListener('click', () => {
    authToggle.querySelectorAll('.seg').forEach(s => s.classList.remove('active'));
    seg.classList.add('active');
    const mode = seg.dataset.mode;
    registerForm.classList.toggle('active', mode === 'register');
    loginForm.classList.toggle('active', mode === 'login');
    clearAuthMessage();
  });
});

function showAuthMessage(text, type) {
  authMessage.textContent = text;
  authMessage.className = 'message ' + type;
}
function clearAuthMessage() {
  authMessage.textContent = '';
  authMessage.className = 'message';
}

function isSixDigits(v) { return /^[0-9]{6}$/.test(v); }

/* ---------- 新規登録 ---------- */
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearAuthMessage();

  const id = regId.value.trim();
  const nickname = regNickname.value.trim();
  const dept = regDept.value;
  const course = regCourse.value;
  const pw = regPw.value;

  if (!isSixDigits(id)) {
    showAuthMessage('学籍番号は6桁の数字で入力してください。', 'error');
    return;
  }
  const roster = loadRoster();
  if (!roster.some(s => s.id === id)) {
    showAuthMessage('この学籍番号は名簿に見つかりません。', 'error');
    return;
  }
  if (!nickname) {
    showAuthMessage('ニックネームを入力してください。', 'error');
    return;
  }
  if (nickname.length > 20) {
    showAuthMessage('ニックネームは20文字以内で入力してください。', 'error');
    return;
  }
  if (pw.length < 4) {
    showAuthMessage('パスワードは4文字以上で設定してください。', 'error');
    return;
  }

  const users = loadUsers();
  if (users[id]) {
    showAuthMessage('この学籍番号はすでに登録されています。ログインしてください。', 'error');
    return;
  }

  users[id] = { password: pw, nickname, dept, course };
  saveUsers(users);

  localStorage.setItem(SESSION_KEY, id);
  enterApp(id);
});

/* ---------- ログイン ---------- */
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearAuthMessage();

  const id = loginId.value.trim();
  const pw = loginPw.value;

  if (!isSixDigits(id)) {
    showAuthMessage('学籍番号は6桁の数字で入力してください。', 'error');
    return;
  }
  const users = loadUsers();
  const account = users[id];
  if (!account) {
    showAuthMessage('登録されていない学籍番号です。新規登録してください。', 'error');
    return;
  }
  if (account.password !== pw) {
    showAuthMessage('パスワードが違います。', 'error');
    return;
  }

  localStorage.setItem(SESSION_KEY, id);
  enterApp(id);
});

/* ---------- ログイン後の処理 ---------- */
function enterApp(id) {
  const users = loadUsers();
  const account = users[id];
  if (!account) return;

  authSection.classList.add('hidden');
  appSection.classList.add('active');

  headerUser.classList.add('active');
  headerAvatar.textContent = account.nickname.charAt(0);
  headerNick.textContent = account.nickname;
  headerCourse.textContent = account.course;

  currentFilter = 'all';
  renderFilterRow();
  renderPosts();
  renderStudentList();
}

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem(SESSION_KEY);
  headerUser.classList.remove('active');
  appSection.classList.remove('active');
  authSection.classList.remove('hidden');
  registerForm.reset();
  loginForm.reset();
  clearAuthMessage();
});

/* ---------- 入力補助 ---------- */
postText.addEventListener('input', () => {
  charCounter.textContent = `${postText.value.length}/500`;
});

visibilityToggle.querySelectorAll('.seg').forEach(seg => {
  seg.addEventListener('click', () => {
    visibilityToggle.querySelectorAll('.seg').forEach(s => s.classList.remove('active'));
    seg.classList.add('active');
    currentVisibility = seg.dataset.vis;
    privateNote.classList.toggle('active', currentVisibility === 'private');
  });
});

/* ---------- 投稿する (サーバーAPI通信) ---------- */
postBtn.addEventListener('click', async () => {
  const text = postText.value.trim();
  if (!text) return;

  const sessionId = localStorage.getItem(SESSION_KEY);
  const users = loadUsers();
  const account = users[sessionId];
  if (!account) return;

  const newPost = {
    id: 'p_' + Date.now(),
    authorId: sessionId,
    nickname: account.nickname,
    dept: account.dept,
    course: account.course,
    text: text,
    visibility: currentVisibility,
    likes: {},
    createdAt: Date.now()
  };

  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    });

    if (response.ok) {
      postText.value = '';
      charCounter.textContent = '0/500';
      renderPosts();
    } else {
      alert('投稿の保存に失敗しました。');
    }
  } catch (error) {
    console.error('通信エラー:', error);
    alert('サーバーへの接続に失敗しました。');
  }
});

/* ---------- 相対時刻表示 ---------- */
function formatRelativeTime(ts) {
  const diffMs = Date.now() - ts;
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return '今';
  if (diffMin < 60) return `${diffMin}分前`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return `${diffHour}時間前`;
  const diffDay = Math.floor(diffHour / 24);
  return `${diffDay}日前`;
}

/* ---------- タイムライン描画 (サーバーAPI通信) ---------- */
async function renderPosts() {
  const sessionId = localStorage.getItem(SESSION_KEY);
  const posts = await fetchPostsFromServer();

  const visible = posts.filter(p => {
    if (p.visibility === 'private' && p.authorId !== sessionId) return false;
    
    if (currentFilter !== 'all') {
      const filterAbbr = deptAbbr(currentFilter);
      const postAbbr = deptAbbr(p.dept);
      if (filterAbbr !== postAbbr) return false;
    }

    if (searchQuery) {
      const matchText = p.text.toLowerCase().includes(searchQuery);
      const matchNick = p.nickname.toLowerCase().includes(searchQuery);
      if (!matchText && !matchNick) return false;
    }

    return true;
  });

  if (visible.length === 0) {
    postList.innerHTML = '<div class="empty-state">該当する投稿がありません。</div>';
    return;
  }

  postList.innerHTML = visible.map(p => {
    const isOwner = p.authorId === sessionId;
    const likeCount = Object.keys(p.likes || {}).length;
    const liked = !!(p.likes && p.likes[sessionId]);

    return `
      <div class="post-card" data-id="${p.id}">
        <div class="post-top">
          <div class="post-avatar" onclick="openProfile('${p.authorId}')" style="cursor:pointer;">${deptAbbr(p.dept)}</div>
          <div class="post-meta">
            <div class="post-meta-top">
              <span class="post-nick" onclick="openProfile('${p.authorId}')" style="cursor:pointer;">${escapeHtml(p.nickname)}</span>
              <span class="post-tag">${escapeHtml(p.dept)}</span>
            </div>
          </div>
          <div class="post-side">
            ${p.visibility === 'private' ? '<span class="post-private-badge">🔒 プライベート</span>' : ''}
            <span class="post-time">${formatRelativeTime(p.createdAt)}</span>
            ${isOwner ? `<button type="button" class="post-delete" data-action="delete" data-id="${p.id}">削除</button>` : ''}
          </div>
        </div>
        <div class="post-text">${escapeHtml(p.text)}</div>
        <div class="post-footer">
          <button type="button" class="like-btn ${liked ? 'liked' : ''}" data-action="like" data-id="${p.id}">
            ${liked ? '♥' : '♡'} <span>${likeCount}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- アクション処理 ---------- */
postList.addEventListener('click', async (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;

  const id = btn.dataset.id;
  const action = btn.dataset.action;

  // ※ いいね・削除をサーバー側でも同期する場合は、ここから対応するAPIを呼ぶ拡張が可能です
  renderPosts();
});

/* ---------- 初期化 ---------- */
(function init() {
  loadRoster();
  fillDeptSelect();
  fillCourseSelect(DEPARTMENTS[0].key);
  initExtraUI();

  const session = localStorage.getItem(SESSION_KEY);
  if (session) {
    const users = loadUsers();
    if (users[session]) {
      enterApp(session);
    }
  }
})();
// 10秒ごとにタイムラインを自動更新する（init関数内や末尾に追加）
setInterval(() => {
  const session = localStorage.getItem(SESSION_KEY);
  if (session) {
    renderPosts();
  }
}, 10000);