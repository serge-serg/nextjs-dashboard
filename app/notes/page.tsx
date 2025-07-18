import LastLink from "@/app/ui/last-page-link";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 max-w-[56rem] mx-auto relative">
      <LastLink textColor="text-blue-600" />
      <div>
        <h1 className="mb-4">Notes</h1>
        <h3>Static and Dynamic Rendering</h3>
        <ul>
          <li>
            <b>Static Rendering</b> (или SSG, Static Site Generation) &mdash;
            HTML создаётся во время сборки и кэшируется.
          </li>
          <li>
            <b>Dynamic Rendering</b> (или SSR, Server-Side Rendering) &mdash;
            HTML создаётся каждый раз на сервере при запросе.
          </li>
          <li>
            <b>Client Rendering</b> &mdash; данные загружаются и отображаются
            уже в браузере, например, через useEffect.
          </li>
          <li>
            <b>Partial Prerendering (PPR)</b> &mdash; это новая функция в
            Next.js (начиная с v14), которая позволяет на одной и той же
            странице сочетать статический и динамический рендеринг, причём с
            поддержкой стриминга.
          </li>
        </ul>
      </div>
    </main>
  );
}
