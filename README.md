# ai-academy

샘플 템플릿(`landing.html`)을 기반으로 만들고 있는 한국어 교육 강의 랜딩페이지.

## 미리보기

```bash
# 1) 직접 열기
start index.html

# 2) 또는 정적 서버
python -m http.server 8000
# → http://localhost:8000/index.html
```

## 진행 상태

- ✅ Phase 0: git baseline
- ✅ Phase 1: 콘텐츠 인벤토리 (`content/site.md`)
- ✅ Phase 2: 구조 분리 (CSS/JS 외부화)
- ✅ Phase 2.5: 데이터 ↔ 템플릿 매핑 (`content/mapping.md`)
- 🔄 Phase 3: 콘텐츠 치환 — 섹션 단위 진행 예정
- ⬜ Phase 4: 메타·결제·정책·호스팅

상세는 `docs/PLAN.md`. 완료된 단계 본문은 `docs/archive/`.

## 문서

- `CLAUDE.md` — Claude Code 작업 가이드 (자동 로드)
- `docs/PLAN.md` — 4-Phase 진행 계획
- `docs/STRUCTURE.md` — 원본 템플릿 구조 분석
- `docs/WORKFLOW.md` — 에이전트/모델 분리 워크플로우
