import Image from "next/image";
import Button from "./Button";
import styles from "./Packages.module.css";

/** Tabs run right-to-left on the artboard, "ابدأ" selected. */
const tabs = [
  { label: "ابدأ", icon: "/assets/ic-gauge.svg", size: 17, active: true },
  { label: "طوّر", icon: "/assets/ic-sparkles.svg", size: 17, active: false },
  { label: "تحول", icon: "/assets/ic-rocket.svg", size: 24, active: false },
];

// Listed in visual RTL order: first item sits top-right.
const points = [
  "تحليل الوضع الحالي",
  "تحليل الوضع الحالي",
  "تحديد المشكلات و الفرص",
  "اقتراح خارطة طريق واضحة",
];

export default function Packages() {
  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>اختار الباقة الانسب لمرحلة اعمالك</h2>
          <p className={styles.subtitle}>
            سواء كنت تبدأ من الصفر، أو تريد تطوير عملياتك الحالية، أو تبحث عن حلول ذكاء اصطناعي
            متقدمة، لدينا المسار المناسب لمساعدتك على تقليل الوقت والمجهود والتكلفة.
          </p>

          <div className={styles.tabs} role="tablist" aria-label="مراحل العمل">
            {tabs.map((tab) => (
              <button
                type="button"
                role="tab"
                key={tab.label}
                aria-selected={tab.active}
                className={`${styles.tab} ${tab.active ? styles.tabActive : ""}`}
              >
                <span className={styles.tabIcon} style={{ width: tab.size, height: tab.size }}>
                  <Image src={tab.icon} alt="" width={tab.size} height={tab.size} />
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.copy}>
            <h3 className={styles.panelTitle}>
              للشركات التي تريد أن تبدأ في تنظيم بياناتها أو فهم أين توجد الفرص داخل العمل حيث نعمل
              علي:
            </h3>

            <ul className={styles.points}>
              {points.map((point, i) => (
                <li className={styles.point} key={`${point}-${i}`}>
                  <span className={styles.check} aria-hidden="true">
                    <Image src="/assets/ic-badge-check.svg" alt="" width={42} height={42} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary" size="lg" className={styles.cta} href="#contact">
              ابدء من هنا
            </Button>
          </div>

          <div className={styles.art}>
            <Image
              src="/assets/pkg-illustration.png"
              alt=""
              width={492}
              height={328}
              sizes="(max-width: 1000px) 90vw, 492px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
