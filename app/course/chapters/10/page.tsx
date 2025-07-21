import Quize from "@/app/course/chapters/quiz";
export default function Chapter10() {
  const questions = [
    {
      question: "Что такое Partial Prerendering (PPR)?",
      options: [
        "Полная серверная отрисовка всех компонентов",
        "Клиентская загрузка без SSR",
        "Частичная предрендеризация: оболочка — сразу, динамика — позже",
        "Режим сборки в Next.js для production",
      ],
      correctIndex: 2,
    },
    {
      question: "Зачем используется Partial Prerendering?",
      options: [
        "Для замены React Suspense",
        "Чтобы избежать SSR полностью",
        "Для более быстрой отдачи оболочки и асинхронной загрузки динамики",
        "Для поддержки старых браузеров",
      ],
      correctIndex: 2,
    },
    {
      question: "Чем PPR отличается от обычного SSR?",
      options: [
        "PPR рендерит всё на клиенте",
        "PPR отправляет сначала оболочку, затем — остальное",
        "SSR быстрее, чем PPR",
        "PPR использует `getStaticProps`",
      ],
      correctIndex: 1,
    },
    {
      question: "Что отправляется первым при использовании PPR?",
      options: [
        "Все данные с сервера",
        "Оболочка страницы (layout)",
        "Только мета-теги",
        "Ничего, пока всё не будет готово",
      ],
      correctIndex: 1,
    },
    {
      question: "Какую версию Next.js нужно использовать для PPR?",
      options: ["next@12", "next@13", "next@canary", "Любую версию с React 18"],
      correctIndex: 2,
    },
    {
      question: "Как включить PPR в `next.config.js`?",
      options: [
        `experimental: { ppr: 'incremental' }`,
        `ppr: true`,
        `enablePPR: true`,
        `features.ppr = true`,
      ],
      correctIndex: 0,
    },
    {
      question: "Как включить PPR на уровне layout-файла?",
      options: [
        "Добавить `<PartialPrerender>`",
        "Добавить `export const enablePPR = true;`",
        "Добавить `export const experimental_ppr = true;`",
        "Импортировать ppr из next/head",
      ],
      correctIndex: 2,
    },
    {
      question: "Можно ли включить PPR только для части приложения?",
      options: [
        "Нет, включается глобально",
        "Да, через `experimental_ppr` в конкретных layout-ах",
        "Только через middleware",
        "Только с TypeScript",
      ],
      correctIndex: 1,
    },
    {
      question: "Какие компоненты считаются динамическими в PPR?",
      options: [
        "Те, что используют client-side state или async данные",
        "Все компоненты",
        "Только компоненты с useEffect",
        "Те, что не используют Suspense",
      ],
      correctIndex: 0,
    },
    {
      question: "Как обернуть динамические компоненты в PPR?",
      options: [
        "<AsyncWrapper>",
        "<Suspense fallback={...}>",
        "<LazyComponent>",
        "<PPR />",
      ],
      correctIndex: 1,
    },
    {
      question: "Для чего нужен `fallback` в Suspense?",
      options: [
        "Показать ошибку",
        "Отложить загрузку данных",
        "Показать временный контент пока загружается компонент",
        "Заменить SSR",
      ],
      correctIndex: 2,
    },
    {
      question: "Какой порядок рендера при PPR?",
      options: [
        "Сначала всё, потом оболочка",
        "Оболочка → асинхронные компоненты → интерактивность",
        "Клиент → сервер → мета-теги",
        "Сначала данные, потом контент",
      ],
      correctIndex: 1,
    },
    {
      question: "Как убедиться, что PPR работает?",
      options: [
        "Проверить fallback-компоненты в HTML",
        "Увидеть отложенные чанки в Network",
        "Проверить, что layout пришёл до динамики",
        "Все вышеуказанные",
      ],
      correctIndex: 3,
    },
    {
      question: "Где в DevTools видно работу PPR?",
      options: [
        "Console",
        "Sources → Static files",
        "Network → HTML response",
        "Elements → Meta info",
      ],
      correctIndex: 2,
    },
    {
      question: "Можно ли использовать PPR в production?",
      options: [
        "Да, с любыми проектами",
        "Нет, пока это экспериментальная возможность",
        "Да, начиная с Next 13",
        "Только в Vercel",
      ],
      correctIndex: 1,
    },
    {
      question: "Какие хуки **не работают** в PPR-компонентах?",
      options: [
        "useEffect",
        "useSearchParams, useRouter",
        "useState",
        "useContext",
      ],
      correctIndex: 1,
    },
    {
      question: "Что произойдёт, если PPR-компонент не обернуть в Suspense?",
      options: [
        "Проект не соберётся",
        "Компонент не будет загружен асинхронно",
        "Layout не отрендерится",
        "HTML будет пустым",
      ],
      correctIndex: 1,
    },
    {
      question: 'Что такое "streamed HTML" в PPR?',
      options: [
        "HTML рендерится на клиенте",
        "HTML передаётся частями по мере готовности",
        "Это обычный SSR",
        "Результат static export",
      ],
      correctIndex: 1,
    },
    {
      question: "Как влияет PPR на UX?",
      options: [
        "Ухудшает загрузку",
        'Пользователь видит оболочку быстрее, меньше "белого экрана"',
        "Делает всё клиентским",
        "Удаляет fallback-экран",
      ],
      correctIndex: 1,
    },
    {
      question: "Можно ли использовать PPR вместе с ISR?",
      options: [
        "Нет",
        "Да, но только с getServerSideProps",
        "Да, в пределах статической части",
        "Только через middleware",
      ],
      correctIndex: 2,
    },
    {
      question: "Можно ли использовать PPR вместе с streaming SSR?",
      options: [
        "Да, это часть его архитектуры",
        "Нет, они конфликтуют",
        "Только в API routes",
        "Только через serverless",
      ],
      correctIndex: 0,
    },
  ];
  return <Quize questions={questions} />;
}
