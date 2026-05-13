export const resumeData = {
  hero: {
    title: "상상하는 개발자, 김현준입니다.",
    subtitle: "5년 차 Android Developer",
    description: [
      "누구보다 개발을 즐기고 진심으로 사랑합니다.",
      "최신 기술 동향에 항상 관심을 가지고, 이를 프로젝트에 적용하며 큰 흥미를 느낍니다.",
      "관심사에 몰입하여 꾸준히 파고드는 것이 제 장점입니다.",
      "원하는 결과를 얻을 때까지 노력하고 매진하는 끈기와 열정은 누구에게도 뒤지지 않습니다."
    ]
  },
  contact: {
    email: "mac-pro@kakao.com",
    github: "https://github.com/H43RO",
    portfolio: "https://haero.notion.site",
    blog: "https://velog.io/@haero_kim"
  },
  coreStrengths: [
    {
      title: "Compose 실무 적용 경험 3년+",
      description: "카카오페이 내 <strong>최초로 Compose를 도입 및 확산</strong>시켰습니다. 3년 이상의 폭넓은 마이그레이션 경험과 트러블 슈팅 노하우를 바탕으로 팀의 UI 개발 생산성을 크게 향상시킵니다."
    },
    {
      title: "UI Test 사내 최초 도입 및 기술 전파",
      description: "카카오페이 내 <strong>최초로 BDD 기반 UI Test를 도입</strong>하고 자동화 파이프라인을 구축했습니다. <strong>사내 기술 발표</strong>로 테스트 도입 효과를 전파하며 조직 내 품질 문화 확산에 깊이 기여했습니다."
    },
    {
      title: "견고한 Unit Test 커버리지 유지",
      description: "신규 서비스 개발 시 테스트 코드 작성을 습관화하여 핵심 비즈니스 로직에 대한 <strong>Unit Test 커버리지 60% 이상</strong>을 꾸준히 유지함으로써, 프로덕트의 신뢰성을 극대화합니다."
    },
    {
      title: "대규모 트래픽 안정성 경험",
      description: "MAU 1,800만 서비스의 방대한 데이터를 다루며 수많은 엣지 케이스를 경험했습니다. 이를 바탕으로 <strong>Non-Crash 99% 이상</strong>의 견고하고 안정적인 앱 환경을 꾸준하게 유지합니다."
    },
    {
      title: "오너쉽 기반의 주도적 개발",
      description: "주어진 기획서를 단순히 구현하는 것에 그치지 않고 <strong>사용자 관점</strong>에서 서비스를 치밀하게 분석합니다. 더 나은 프로덕트를 만들기 위해 <strong>능동적으로 아이디어를 제안</strong>하고 직접 구현합니다."
    },
    {
      title: "따뜻하고 명확한 커뮤니케이션",
      description: "상호 존중을 바탕으로 한 활발한 논의와 효율적인 의사결정 과정을 선호합니다. 동료들로부터 <strong>'함께 일하고 싶은 동료'</strong>라는 피드백을 자주 받을 만큼 언제나 명확하고 따뜻하게 소통합니다."
    }
  ],
  experience: [
    {
      company: "카카오페이 (kakaopay)",
      logo: "/kakaopay_bg.png",
      role: "Android Developer",
      period: "2022.01 ~ 현재",
      techStack: ["Kotlin", "Compose", "Coroutine", "Flow", "Dagger", "Hilt", "Multi-Module", "Unit Test", "UI Test"],
      projects: [
        {
          name: "머니 (송금)",
          period: "2023.01 ~ 현재",
          details: [
            "송금 관련 서비스 개발",
            "계좌송금, 친구송금 개발",
            "내 주변 송금 (블루투스 송금) 개발",
            "충전 계좌 연결 서비스 개발",
            "정산하기 서비스 개발",
            "직접 기획한 과제 다수 개발 및 출시"
          ]
        },
        {
          name: "카카오페이 홈",
          period: "2022.06 ~ 2023.01",
          details: [
            "카카오페이 공통 로직, 홈 화면 개발",
            "홈 화면 UI 개발",
            "동영상 광고 플레이어 개발"
          ]
        },
        {
          name: "자산관리",
          period: "2022.01 ~ 2022.06",
          details: [
            "마이데이터 기반 자산관리 서비스 개발",
            "UI 개편 및 유지보수 담당"
          ]
        }
      ]
    }
  ],
  education: {
    university: "순천향대학교",
    major: "사물인터넷(IoT)학과",
    period: "2018.03 ~ 2022.02",
    details: "GPA 4.32 / 4.5 (학과 수석 졸업)"
  },
  activities: [
    {
      name: "SW 마에스트로 12기 (과학기술정보통신부, IITP 주관)",
      period: "2021.04 ~ 2021.12",
      details: "<strong>우수 연수생 선정 (상위 10%)</strong> 및 과학기술정보통신부장관 표창 수상"
    }
  ],
  awards: [
    "제 9회 K-해커톤 <strong>과학기술정보통신부장관상 (대상)</strong>",
    "순천향대학교 <strong>스마트 헬스케어 경진대회 대상</strong>",
    "2021 SW 마에스트로 12기 해커톤 우수상",
    "제 11회 SK 테크엑스 앱잼 (AppJam) 장려상"
  ],
  skills: [
    "Kotlin", "Jetpack Compose", "Coroutine", "Flow", 
    "Dagger", "Hilt", "Multi-Module Architecture", 
    "Unit Test", "UI Test", "Git", "Clean Architecture",
    "CI/CD (GitHub Actions)", "MVVM / MVI"
  ]
};
