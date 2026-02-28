import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

type SystemCard = {
  title: any;
  body: any;
  bullets?: any[];
  footer?: any;
};

const SystemSection = () => {
  const locale = useLanguage();

  const steps = translations.system.steps as SystemCard[];
  const pool = translations.system.pool as SystemCard;

  // 01–03 (steps) + 04 (pool)
  const cards: SystemCard[] = [...steps, pool];

  return (
    <section id="system" className="content-max py-24">
      <div className="text-center">
        <div className="text-xs tracking-[0.1em] uppercase text-muted-foreground">
          {t(translations.system.label, locale)}
        </div>

        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          {t(translations.system.title, locale)}
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((s, i) => (
          <div
            key={i}
            className={[
              "relative",
              "xl:pl-10",
              i > 0 ? "xl:border-l xl:border-border/40" : "",
            ].join(" ")}
          >
            <div className="text-xs tracking-[0.12em] uppercase text-muted-foreground">
              {(i + 1).toString().padStart(2, "0")}
            </div>

            <div className="mt-3 text-lg font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
              {t(s.title, locale)}
            </div>

            <div className="mt-4 text-sm leading-6 text-muted-foreground">
              {t(s.body, locale)}
            </div>

            {Array.isArray(s.bullets) && s.bullets.length > 0 && (
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {s.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-muted-foreground/70 shrink-0" />
                    <span>{t(b, locale)}</span>
                  </li>
                ))}
              </ul>
            )}

            {s.footer && (
              <div className="mt-5 text-sm leading-6 text-muted-foreground">
                {t(s.footer, locale)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SystemSection;