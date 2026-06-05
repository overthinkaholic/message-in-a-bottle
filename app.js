/**
 * 무작위 텍스트 생성기 Core Logic (app.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  // === 1. DOM Elements 캐싱 ===
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tagsContainer = document.getElementById('tags-container');
  const btnResetTags = document.getElementById('btn-reset-tags');
  
  const quoteCard = document.getElementById('quote-card');
  const quoteCategory = document.getElementById('quote-category');
  const quoteCountBadge = document.getElementById('quote-count-badge');
  const quoteTextContainer = document.getElementById('quote-text-container');
  const quoteMetaText = document.getElementById('quote-meta-text');
  
  const btnCopy = document.getElementById('btn-copy');
  const btnGenerate = document.getElementById('btn-generate');
  const toast = document.getElementById('toast');

  // === 2. 애플리케이션 상태 (State) ===
  let currentCategory = 'all';
  let selectedTags = new Set();
  let currentQuote = null;
  let lastQuoteId = null; // 직전 생성된 텍스트 중복 방지용

  // === 3. 초기화 (Init) ===
  function init() {
    updatePool();
    // 첫 화면 로드 시 전체 데이터에서 무작위 하나 추출
    generateRandomQuote(true);
  }

  // === 4. 필터링 및 풀(Pool) 업데이트 ===
  
  // 현재 카테고리에 해당하는 전체 데이터
  function getCategoryData() {
    if (currentCategory === 'all') {
      return TEXT_DATA;
    }
    return TEXT_DATA.filter(item => item.category === currentCategory);
  }

  // 카테고리 필터 + 선택된 태그 필터가 반영된 최종 후보 데이터
  function getFilteredPool() {
    const categoryData = getCategoryData();
    if (selectedTags.size === 0) {
      return categoryData;
    }
    // 선택된 태그 중 하나라도 포함하는 경우 추출 대상에 포함 (OR 필터)
    return categoryData.filter(item => 
      item.tags.some(tag => selectedTags.has(tag))
    );
  }

  // 카테고리나 태그 변경 시 호출되어 태그 목록과 뱃지를 갱신
  function updatePool() {
    const categoryData = getCategoryData();
    
    // 1. 현재 카테고리 내의 모든 고유 태그 추출
    const allTags = new Set();
    categoryData.forEach(item => {
      item.tags.forEach(tag => allTags.add(tag));
    });

    // 카테고리가 변경되었을 때, 이전 카테고리의 태그가 남아있다면 제거
    const validSelectedTags = new Set();
    selectedTags.forEach(tag => {
      if (allTags.has(tag)) {
        validSelectedTags.add(tag);
      }
    });
    selectedTags = validSelectedTags;

    // 2. 태그 칩 렌더링
    renderTags(Array.from(allTags));

    // 3. 현재 필터링된 풀 개수 뱃지 갱신
    const filteredPool = getFilteredPool();
    quoteCountBadge.textContent = `POOL: ${filteredPool.length}`;
  }

  // 태그 칩 목록 그리기
  function renderTags(tags) {
    tagsContainer.innerHTML = '';
    
    if (tags.length === 0) {
      tagsContainer.innerHTML = '<span class="text-muted" style="font-size: 0.8rem; padding: 5px 0;">사용 가능한 태그가 없습니다.</span>';
      return;
    }

    // 알파벳/가나다 순 정렬
    tags.sort().forEach(tag => {
      const btn = document.createElement('button');
      btn.className = `tag-chip ${selectedTags.has(tag) ? 'active' : ''}`;
      btn.textContent = `#${tag}`;
      btn.setAttribute('aria-pressed', selectedTags.has(tag) ? 'true' : 'false');
      
      btn.addEventListener('click', () => {
        if (selectedTags.has(tag)) {
          selectedTags.delete(tag);
        } else {
          selectedTags.add(tag);
        }
        updatePool();
        // 태그 선택 시 시각적 표시 업데이트
        btn.classList.toggle('active');
        btn.setAttribute('aria-pressed', selectedTags.has(tag) ? 'true' : 'false');
      });
      
      tagsContainer.appendChild(btn);
    });
  }

  // === 5. 무작위 텍스트 생성 기능 ===
  function generateRandomQuote(isInitial = false) {
    const filteredPool = getFilteredPool();
    
    if (filteredPool.length === 0) {
      quoteTextContainer.innerHTML = `
        <div class="quote-line">
          <span class="terminal-cursor">> </span>
          <blockquote class="quote-text">조건에 맞는 텍스트가 없습니다. 필터를 다르게 설정해보세요.</blockquote>
        </div>
      `;
      quoteMetaText.textContent = "N/A";
      quoteCategory.textContent = "EMPTY";
      currentQuote = null;
      return;
    }

    let targetQuote = null;

    // 후보군이 2개 이상일 경우, 바로 직전에 나온 텍스트와 겹치지 않도록 조율
    if (filteredPool.length > 1) {
      const candidates = filteredPool.filter(item => item.id !== lastQuoteId);
      const randomIndex = Math.floor(Math.random() * candidates.length);
      targetQuote = candidates[randomIndex];
    } else {
      targetQuote = filteredPool[0];
    }

    currentQuote = targetQuote;
    lastQuoteId = targetQuote.id;

    // UI 반영 및 애니메이션
    displayQuote(targetQuote, isInitial);
  }

  // 화면에 텍스트 렌더링
  function displayQuote(quote, isInitial = false) {
    // 1. 카테고리 배지 표시 변경
    quoteCategory.textContent = quote.category.toUpperCase();
    
    // 2. 본문 텍스트 변경 & 페이드 애니메이션 적용
    quoteTextContainer.innerHTML = '';
    
    const lines = [];
    if (quote.textEn) {
      lines.push(quote.textEn);
    }
    if (quote.textKo) {
      lines.push(quote.textKo);
    }
    // 예전 단일 text 프로퍼티 지원 호환성 대비
    if (lines.length === 0 && quote.text) {
      lines.push(quote.text);
    }

    lines.forEach(lineText => {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'quote-line';
      
      const cursorSpan = document.createElement('span');
      cursorSpan.className = 'terminal-cursor';
      cursorSpan.textContent = '> ';
      
      const textBlock = document.createElement('blockquote');
      textBlock.className = 'quote-text';
      textBlock.textContent = lineText;
      
      if (!isInitial) {
        textBlock.classList.add('fade-in');
      }
      
      lineDiv.appendChild(cursorSpan);
      lineDiv.appendChild(textBlock);
      quoteTextContainer.appendChild(lineDiv);
    });

    // 3. 메타데이터 포맷팅
    let metaText = '';
    const { meta } = quote;
    
    if (quote.category === 'literature') {
      metaText = `《${meta.title}》 | ${meta.author} | ${meta.publisher}`;
    } else if (quote.category === 'music') {
      metaText = `〈${meta.title}〉 | 《${meta.album}》 (${meta.year}) | ${meta.artist}`;
    } else if (quote.category === 'game') {
      metaText = `《${meta.title}》 (${meta.year})`;
    }

    quoteMetaText.textContent = metaText;
  }

  // === 6. 이벤트 리스너 설정 ===

  // 카테고리 탭 클릭
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      currentCategory = button.getAttribute('data-category');
      
      // 카테고리 변경 시 선택된 태그 초기화
      selectedTags.clear();
      
      updatePool();
      generateRandomQuote();
    });
  });

  // 태그 리셋 버튼
  btnResetTags.addEventListener('click', () => {
    if (selectedTags.size > 0) {
      selectedTags.clear();
      updatePool();
      generateRandomQuote();
    }
  });

  // 복사하기 버튼
  btnCopy.addEventListener('click', () => {
    if (!currentQuote) return;

    let copyString = '';
    if (currentQuote.textEn && currentQuote.textKo) {
      copyString = `${currentQuote.textEn}\n${currentQuote.textKo}\n`;
    } else {
      copyString = `${currentQuote.textKo || currentQuote.textEn || currentQuote.text}\n`;
    }
    
    const { meta } = currentQuote;
    
    if (currentQuote.category === 'literature') {
      copyString += `- 《${meta.title}》 (${meta.author} 저, ${meta.publisher})`;
    } else if (currentQuote.category === 'music') {
      copyString += `- 〈${meta.title}〉 (${meta.artist}, 《${meta.album}》 中, ${meta.year})`;
    } else if (currentQuote.category === 'game') {
      copyString += `- 《${meta.title}》 (${meta.year})`;
    }

    // 클립보드에 쓰기
    navigator.clipboard.writeText(copyString)
      .then(() => {
        showToast();
      })
      .catch(err => {
        console.error('클립보드 복사 실패:', err);
        // Fallback 복사 방식
        const textArea = document.createElement('textarea');
        textArea.value = copyString;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          showToast();
        } catch (e) {
          alert('복사에 실패했습니다.');
        }
        document.body.removeChild(textArea);
      });
  });

  // 토스트 메시지 띄우기
  function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  // 생성 버튼 클릭
  btnGenerate.addEventListener('click', () => {
    generateRandomQuote();
  });

  // === 7. 실행 ===
  init();
});
