import Image from "next/image";
import Button from "./Button";
import styles from "./GrowthCta.module.css";

/**
 * "جاهز تحوّل بياناتك…" + the four-step path — Figma "Desktop - 66" (1626:4999).
 *
 * The path is one 1235-wide stroke with the arrow head baked in; the icons and
 * labels sit on top of it. Everything is a percentage of the 1251.567 × 332
 * artboard so the diagram scales as a single piece.
 */
const icons = [
  { src: "/assets/step-1.png", alt: "", left: 8.629, top: 42.319, w: 8.869, h: 33.434, round: true },
  { src: "/assets/step-2.png", alt: "", left: 57.928, top: 42.169, w: 8.949, h: 33.735 },
  { src: "/assets/step-3.png", alt: "", left: 32.759, top: 0, w: 9.189, h: 35.542 },
  { src: "/assets/step-4.png", alt: "", left: 84.253, top: 5.12, w: 8.469, h: 25.301 },
];

// Anchored by the badge edge, exactly where the artboard puts each number
const steps = [
  { n: 1, label: "نفهم احتياجات وتحديات عملك.", right: 0.365, top: 50.904 },
  { n: 2, label: "نفهم احتياجات وتحديات عملك.", right: 26.09, top: 87.349 },
  { n: 3, label: "نصمم حل مخصص لاحتياجاتك.", right: 51.58, top: 50.904 },
  { n: 4, label: "نراقب جودة الأداء", right: 77.87, top: 87.349 },
];

export default function GrowthCta() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>جاهز تحوّل بياناتك إلى خطوة حقيقية للنمو؟</h2>
          <p className={styles.text}>
            نساعدك على بناء تجربة ذكية تناسب احتياجات أعمالك، من تحليل البيانات وأتمتة العمليات إلى
            تطوير أنظمة ذكاء اصطناعي قابلة للتوسع.
          </p>
          <Button variant="primary" size="lg" className={styles.cta} href="#contact">
            ابدء الان
          </Button>
        </div>

        <div className={styles.stage}>
          <span className={styles.path} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/process-path.svg" alt="" />
          </span>
          <span className={styles.tip} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/process-tip.svg" alt="" />
          </span>
          <span className={styles.head} aria-hidden="true">
            <Image src="/assets/process-head.svg" alt="" fill sizes="51px" />
          </span>

          {icons.map((icon) => (
            <span
              className={`${styles.icon} ${icon.round ? styles.iconRound : ""}`}
              key={icon.src}
              style={{
                left: `${icon.left}%`,
                top: `${icon.top}%`,
                width: `${icon.w}%`,
                height: `${icon.h}%`,
              }}
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={icon.src} alt="" />
            </span>
          ))}

          {steps.map((step) => (
            <div
              className={styles.step}
              key={step.n}
              style={{ right: `${step.right}%`, top: `${step.top}%` }}
            >
              <span className={styles.badge}>{step.n}</span>
              <span className={styles.label}>{step.label}</span>
            </div>
          ))}
        </div>

        {/* Same four steps, stacked, once the path stops fitting */}
        <ol className={styles.stack}>
          {steps.map((step, i) => (
            <li className={styles.stackItem} key={step.n}>
              <span className={styles.stackIcon}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={icons[3 - i].src} alt="" />
              </span>
              <span className={styles.badge}>{step.n}</span>
              <span className={styles.label}>{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
