/**
 * site-helper.js – 页面提示卡片、关键词徽章与访问说明
 * 用于 https://chinasportlotto.com 辅助展示
 */
(function () {
  'use strict';

  // 配置数据
  var CONFIG = {
    siteUrl: 'https://chinasportlotto.com',
    keywords: ['中国竞彩网', '竞彩足球', '竞彩篮球', '北京单场', '胜负彩'],
    cardTitle: '欢迎访问中国竞彩网',
    cardContent: '本页面提供竞彩资讯与数据服务，请遵守当地法律法规。'
  };

  // 创建并插入样式
  function injectStyles() {
    var style = document.createElement('style');
    style.textContent = [
      '.sc-helper-card {',
      '  background: #f0f9ff; border: 1px solid #bae6fd;',
      '  border-radius: 12px; padding: 20px; margin: 20px auto;',
      '  max-width: 720px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);',
      '}',
      '.sc-helper-card h3 {',
      '  margin: 0 0 12px; font-size: 1.3rem; color: #0369a1;',
      '}',
      '.sc-helper-card p {',
      '  margin: 0; color: #1e293b; line-height: 1.5;',
      '}',
      '.sc-badge-container {',
      '  display: flex; flex-wrap: wrap; gap: 8px;',
      '  margin-top: 16px;',
      '}',
      '.sc-badge {',
      '  display: inline-block; background: #e0f2fe;',
      '  color: #075985; font-size: 0.85rem;',
      '  padding: 4px 12px; border-radius: 20px;',
      '  font-weight: 500; border: 1px solid #bae6fd;',
      '}',
      '.sc-access-note {',
      '  margin-top: 16px; font-size: 0.9rem;',
      '  color: #475569; border-top: 1px dashed #cbd5e1;',
      '  padding-top: 12px;',
      '}',
      '.sc-access-note a {',
      '  color: #0369a1; text-decoration: none; font-weight: 500;',
      '}',
      '.sc-access-note a:hover {',
      '  text-decoration: underline;',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // 构建卡片元素
  function createCard() {
    var card = document.createElement('div');
    card.className = 'sc-helper-card';

    var title = document.createElement('h3');
    title.textContent = CONFIG.cardTitle;

    var content = document.createElement('p');
    content.textContent = CONFIG.cardContent;

    var badgeContainer = document.createElement('div');
    badgeContainer.className = 'sc-badge-container';

    CONFIG.keywords.forEach(function (kw) {
      var badge = document.createElement('span');
      badge.className = 'sc-badge';
      badge.textContent = kw;
      badgeContainer.appendChild(badge);
    });

    var note = document.createElement('div');
    note.className = 'sc-access-note';
    note.innerHTML =
      '访问说明：本站数据仅供参考，请通过官方渠道 <a href="' +
      CONFIG.siteUrl +
      '" target="_blank" rel="noopener noreferrer">' +
      CONFIG.siteUrl +
      '</a> 获取最新信息。';

    card.appendChild(title);
    card.appendChild(content);
    card.appendChild(badgeContainer);
    card.appendChild(note);

    return card;
  }

  // 将卡片插入页面合适位置（body 前部）
  function mountCard() {
    var card = createCard();
    var body = document.body;
    if (body) {
      var firstChild = body.firstChild;
      body.insertBefore(card, firstChild);
    }
  }

  // 初始化：等待 DOM 就绪
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        injectStyles();
        mountCard();
      });
    } else {
      injectStyles();
      mountCard();
    }
  }

  init();
})();