"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import styles from "./Packages.module.css";

const packages = [
  {
    id: "start",
    label: "ابدأ",
    icon: { idle: "/assets/ic-gauge-muted.svg", active: "/assets/ic-gauge.svg", size: 17 },
    title:
      "للشركات التي تريد أن تبدأ في تنظيم بياناتها أو فهم أين توجد الفرص داخل العمل حيث نعمل علي:",
    titleMedium: false,
    points: [
      "تحليل الوضع الحالي",
      "تحليل الوضع الحالي",
      "تحديد المشكلات و الفرص",
      "اقتراح خارطة طريق واضحة",
    ],
    art: "/assets/pkg-illustration.png",
    centered: false,
  },
  {
    id: "grow",
    label: "طوّر",
    icon: { idle: "/assets/ic-sparkles.svg", active: "/assets/ic-sparkles-white.svg", size: 17 },
    title: "للشركات التي لديها بيانات أو عمليات قائمة، وتريد تحسين الكفاءة وتقليل الوقت والتكلفة.",
    titleMedium: true,
    points: [
      "أتمتة بعض العمليات",
      "بناء Dashboards وتقارير",
      "ربط البيانات بأكثر من مصدر",
      "تحسين اتخاذ القرار",
    ],
    art: "/assets/pkg-illustration-2.png",
    centered: true,
  },
  {
    id: "transform",
    label: "تحول",
    icon: { idle: "/assets/ic-rocket.svg", active: "/assets/ic-rocket-white.svg", size: 24 },
    title: "للشركات التي تريد استخدام الذكاء الاصطناعي بشكل أوسع لبناء حلول مؤثرة ومتكاملة.",
    titleMedium: true,
    points: [
      "تكاملات مع الأنظمة الحالية",
      "أتمتة ذكية للعمليات",
      "تقارير وتحليلات متقدمة",
      "حلول تنبؤية",
    ],
    art: "/assets/pkg-illustration-3.png",
    centered: true,
  },
];

export default function Packages() {
  const [activeId, setActiveId] = useState(packages[0].id);
  const active = packages.find((pkg) => pkg.id === activeId) ?? packages[0];

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
            {packages.map((pkg) => {
              const selected = pkg.id === active.id;
              const { size } = pkg.icon;
              return (
                <button
                  type="button"
                  role="tab"
                  key={pkg.id}
                  id={`pkg-tab-${pkg.id}`}
                  aria-selected={selected}
                  aria-controls="pkg-panel"
                  className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
                  onClick={() => setActiveId(pkg.id)}
                >
                  <span className={styles.tabIcon} style={{ width: size, height: size }}>
                    <Image
                      src={selected ? pkg.icon.active : pkg.icon.idle}
                      alt=""
                      width={size}
                      height={size}
                    />
                  </span>
                  {pkg.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={`${styles.panel} ${active.centered ? styles.panelCentered : ""}`}
          id="pkg-panel"
          role="tabpanel"
          aria-labelledby={`pkg-tab-${active.id}`}
        >
          <div className={styles.copy}>
            <h3 className={`${styles.panelTitle} ${active.titleMedium ? styles.panelTitleMedium : ""}`}>
              {active.title}
            </h3>

            <ul className={styles.points}>
              {active.points.map((point, i) => (
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
              key={active.art}
              src={active.art}
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
