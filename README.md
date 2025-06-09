<h1 align="center">
    <img src="https://github.com/user-attachments/assets/ec60b0c4-87ba-48f4-981a-c55ed0e8497b" height="100" width="375" alt="banner" /><br>
</h1>

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nanobrowser)
[![Twitter](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/nanobrowser_ai)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/NN3ABHggMK)
[<img src="https://deepwiki.com/badge.svg" height="28" alt="Ask DeepWiki">](https://deepwiki.com/nanobrowser/nanobrowser)

</div>

## 🌐 Searchroid

Searchroid는 브라우저에서 실행되는 오픈 소스 AI 웹 자동화 도구입니다. 유연한 LLM 옵션과 멀티 에이전트 시스템을 갖춘 OpenAI Operator의 무료 대안입니다.

⬇️ [Chrome 웹 스토어](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal)에서 Searchroid를 무료로 받아보세요

👏 [Discord](https://discord.gg/NN3ABHggMK) | [X](https://x.com/nanobrowser_ai) 커뮤니티에 참여하세요

❤️ Searchroid가 마음에 드신다면 별점 🌟을 남겨주세요!

<div align="center">
<img src="https://github.com/user-attachments/assets/112c4385-7b03-4b81-a352-4f348093351b" width="600" alt="Searchroid Demo GIF" />
<p><em>Searchroid의 멀티 에이전트 시스템이 실시간으로 HuggingFace를 분석합니다. Planner(기획자)는 장애물을 만나면 스스로 수정하며 Navigator에게 적절한 지시를 내려 모든 작업이 로컬 브라우저에서 실행됩니다.</em></p>
</div>

## 🔥 왜 Searchroid인가요?

OpenAI Operator의 월 $200 가격표 없이 강력한 AI 웹 에이전트를 찾고 계신가요? **Searchroid**는 크롬 확장 프로그램으로 고급 웹 자동화 기능을 제공하면서도 사용자가 완벽하게 제어할 수 있습니다.

- **100% 무료** - 구독료나 숨겨진 비용이 없습니다. 자신의 API 키를 사용해 필요한 만큼만 지불하면 됩니다.
- **개인 정보 중시** - 모든 작업이 로컬 브라우저에서 실행됩니다. 자격 증명은 절대 클라우드로 전송되지 않습니다.
- **유연한 LLM 옵션** - 원하는 LLM 공급자를 연결하여 각 에이전트에 다른 모델을 지정할 수 있습니다.
- **완전한 오픈 소스** - 브라우저 자동화 방식이 완전히 공개되어 있습니다. 숨겨진 프로세스나 블랙박스가 없습니다.

> **참고:** 현재 OpenAI, Anthropic, Gemini, Ollama, Groq, Cerebras 및 사용자 정의 OpenAI 호환 공급자를 지원하며, 더 많은 공급자를 추가할 예정입니다.

## 📊 주요 기능

- **멀티 에이전트 시스템**: 특화된 AI 에이전트들이 협력하여 복잡한 웹 작업을 수행합니다
- **인터랙티브 사이드 패널**: 실시간 상태 업데이트가 포함된 직관적인 채팅 인터페이스
- **작업 자동화**: 반복적인 웹 자동화 작업을 손쉽게 처리
- **후속 질문**: 완료된 작업에 대해 맥락을 고려한 추가 질문 가능
- **대화 기록**: AI 에이전트와의 상호 작용 기록을 쉽게 관리
- **다양한 LLM 지원**: 원하는 LLM 공급자를 연결해 각 에이전트에 다른 모델 배정

## 🚀 빠른 시작

1. **Chrome 웹 스토어에서 설치** (안정 버전)
   * [Searchroid Chrome 웹 스토어 페이지](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal)에 방문합니다
   * "Chrome에 추가" 버튼을 클릭합니다
   * 안내가 나오면 설치를 확인합니다

> **중요:** 최신 기능을 사용하려면 아래 ["최신 버전 수동 설치"](#-수동으로-최신-버전-설치) 절차를 통해 설치하세요. 크롬 웹 스토어 버전은 검수 과정으로 인해 업데이트가 지연될 수 있습니다.

2. **에이전트 모델 설정**
   * 툴바의 Searchroid 아이콘을 클릭해 사이드바를 엽니다
   * 우측 상단의 `Settings` 아이콘을 클릭합니다
   * LLM API 키를 추가합니다
   * Navigator, Planner, Validator 등 각 에이전트에 사용할 모델을 선택합니다

## 🔧 수동으로 최신 버전 설치

가장 최신 기능을 사용하려면 다음 단계를 따르세요:

1. **다운로드**
    * 공식 GitHub [릴리스 페이지](https://github.com/nanobrowser/nanobrowser/releases)에서 최신 `nanobrowser.zip` 파일을 다운로드합니다.

2. **설치**
    * `nanobrowser.zip` 파일의 압축을 풉니다
    * Chrome에서 `chrome://extensions/`를 엽니다
    * 우측 상단의 `개발자 모드`를 활성화합니다
    * 좌측 상단의 `압축해제된 확장 프로그램 로드`를 클릭합니다
    * 압축을 풀어 생성된 `nanobrowser` 폴더를 선택합니다

3. **에이전트 모델 설정**
    * 툴바의 Searchroid 아이콘을 클릭해 사이드바를 엽니다
    * 우측 상단의 `Settings` 아이콘을 클릭합니다
    * LLM API 키를 추가합니다
    * 각 에이전트에 사용할 모델을 선택합니다

4. **업그레이드**
    * 릴리스 페이지에서 최신 `nanobrowser.zip` 파일을 다운로드합니다
    * 압축을 풀어 기존 Searchroid 파일을 새 파일로 교체합니다
    * Chrome의 `chrome://extensions/`에서 Searchroid 카드의 새로고침 아이콘을 클릭합니다

## 🛠️ 소스에서 빌드하기

직접 Searchroid를 빌드하려면 다음 단계를 따르세요:

1. **사전 준비**
   * [Node.js](https://nodejs.org/) (v22.12.0 이상)
   * [pnpm](https://pnpm.io/installation) (v9.15.1 이상)

2. **레포지토리 클론**
   ```bash
   git clone https://github.com/nanobrowser/nanobrowser.git
   cd nanobrowser
   ```

3. **의존성 설치**
   ```bash
   pnpm install
   ```

4. **확장 프로그램 빌드**
   ```bash
   pnpm build
   ```

5. **확장 프로그램 로드**
   * 빌드된 확장 프로그램은 `dist` 디렉터리에 생성됩니다
   * 위의 수동 설치 단계에 따라 브라우저에 로드합니다

6. **개발 모드** (선택 사항)
   ```bash
   pnpm dev
   ```

## 🤖 모델 선택 가이드

Searchroid는 각 에이전트마다 다른 LLM 모델을 설정해 성능과 비용을 조절할 수 있습니다. 다음은 권장 설정입니다.

### 고성능 설정
- **Planner & Validator**: Claude 3.7 Sonnet
  - 더 뛰어난 추론 및 기획 능력
  - 안정적인 작업 검증
- **Navigator**: Claude 3.5 Haiku
  - 웹 탐색 작업에 효율적
  - 성능과 비용의 균형이 우수

### 경제적 설정
- **Planner & Validator**: Claude Haiku 또는 GPT-4o
  - 낮은 비용으로 합리적인 성능
  - 복잡한 작업은 반복 횟수가 증가할 수 있음
- **Navigator**: Gemini 2.0 Flash 또는 GPT-4o-mini
  - 가볍고 비용 효율적
  - 기본적인 탐색 작업에 적합

### 로컬 모델
- **설정 방법**
  - Ollama 등 OpenAI 호환 공급자를 사용해 로컬에서 모델 실행
  - API 비용이 없고 데이터가 외부로 나가지 않아 완전한 프라이버시 보장

- **추천 모델**
  - **Qwen3 14B**
  - **Falcon3 10B**
  - **Qwen 2.5 Coder 14B**
  - **Mistral Small 24B**
  - 그 외 로컬 모델 사용 경험을 [Discord](https://discord.gg/NN3ABHggMK)에서 공유해주세요

- **프롬프트 작성 팁**
  - 로컬 모델은 더욱 명확하고 구체적인 프롬프트가 필요합니다
  - 모호한 고수준 명령은 피하세요
  - 복잡한 작업은 단계별로 세분화해 지시하세요
  - 명확한 맥락과 제약 조건을 제공하세요

> **참고**: 경제적 설정은 출력이 불안정할 수 있으며 복잡한 작업 시 반복이 필요할 수 있습니다.

> **팁**: 자신만의 모델 조합을 실험해 보세요. 좋은 조합을 찾았다면 [Discord](https://discord.gg/NN3ABHggMK)에서 공유해 주세요.

## 💡 사용 예시

간단한 문장 하나로 실행할 수 있는 강력한 작업 예시입니다.

1. **뉴스 요약**
   > "TechCrunch에 접속해 최근 24시간 동안의 상위 10개 헤드라인을 추출해줘"

2. **GitHub 리서치**
   > "별이 가장 많은 트렌딩 Python 레포지토리를 찾아줘"

3. **쇼핑 리서치**
   > "Amazon에서 방수 디자인을 갖추고 50달러 이하인 휴대용 블루투스 스피커를 찾아줘. 배터리 수명은 최소 10시간 이상이어야 해"

## 🛠️ 로드맵

Searchroid는 활발히 개발 중이며 앞으로도 흥미로운 기능이 추가될 예정입니다. 함께해 주세요!

자세한 로드맵과 예정된 기능은 [GitHub Discussions](https://github.com/nanobrowser/nanobrowser/discussions/85)에서 확인할 수 있습니다.

## 🤝 기여하기

**Searchroid를 더 멋지게 만들기 위해 여러분의 도움이 필요합니다!** 모든 형태의 기여를 환영합니다.

*  **프롬프트 및 활용 사례 공유**
   * [Discord 서버](https://discord.gg/NN3ABHggMK)에 참여해 주세요.
   * Searchroid를 어떻게 사용하는지 공유해 주세요. 유용한 프롬프트와 실제 사용 사례 라이브러리 구축에 도움을 주세요.
*  **피드백 제공**
   * Searchroid를 사용해 보고 성능이나 개선점을 [Discord 서버](https://discord.gg/NN3ABHggMK)에 알려주세요.
* **코드 기여**
   * [CONTRIBUTING.md](CONTRIBUTING.md)를 참고해 코드 기여 방법을 확인하세요.
   * 버그 수정, 기능 추가, 문서 개선을 위한 풀 리퀘스트를 보내주세요.

오픈 소스와 커뮤니티 협업의 힘을 믿습니다. 웹 자동화의 미래를 함께 만들어 나가요!

## 🔒 보안

보안 취약점을 발견했다면, 이슈나 PR, 토론을 통해 공개적으로 알리지 마세요.

대신 [GitHub Security Advisory](https://github.com/nanobrowser/nanobrowser/security/advisories/new)를 통해 책임감 있게 보고해 주세요. 공개되기 전에 문제를 해결할 수 있습니다.

여러분의 도움으로 Searchroid와 사용자들을 안전하게 지킬 수 있습니다!

## 💬 커뮤니티

점점 커져가는 개발자 및 사용자 커뮤니티에 참여하세요.

- [Discord](https://discord.gg/NN3ABHggMK) - 팀 및 커뮤니티와 채팅
- [Twitter](https://x.com/nanobrowser_ai) - 업데이트와 공지 확인
- [GitHub Discussions](https://github.com/nanobrowser/nanobrowser/discussions) - 아이디어 공유 및 질문

## 👏 감사의 글

Searchroid는 다음과 같은 훌륭한 오픈 소스 프로젝트들 위에서 구축되었습니다.

- [Browser Use](https://github.com/browser-use/browser-use)
- [Puppeteer](https://github.com/EmergenceAI/Agent-E)
- [Chrome Extension Boilerplate](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)
- [LangChain](https://github.com/langchain-ai/langchainjs)

이 멋진 프로젝트의 제작자와 기여자 여러분께 깊이 감사드립니다!

## 📄 라이선스

이 프로젝트는 Apache License 2.0으로 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 확인하세요.

Searchroid 팀이 ❤️를 담아 만들었습니다.

Searchroid가 마음에 드신다면 별점 🌟을 남겨주시고 [Discord](https://discord.gg/NN3ABHggMK) | [X](https://x.com/nanobrowser_ai)에서 함께해주세요.
