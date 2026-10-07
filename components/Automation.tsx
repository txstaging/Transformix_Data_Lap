import Image from "next/image";
import Button from "./Button";
import styles from "./Automation.module.css";

const automated = [
  { label: "متابعة تلقائية ومستمرة", icon: "/assets/auto-ic-b1.svg" },
  { label: "تقرير ٍالي جاهز", icon: "/assets/auto-ic-b2.svg" },
  { label: "تحليل اسرع لبيانات", icon: "/assets/auto-ic-b3.svg" },
  { label: "استجابة فورية العملاء", icon: "/assets/auto-ic-b4.svg" },
];

const manual = [
  { label: "متابعة يدوية للعملاء", icon: "/assets/auto-ic-g1.svg" },
  { label: "اعداد التقارير يدويا", icon: "/assets/auto-ic-g2.svg" },
  { label: "تجميع البيانات يدويا", icon: "/assets/auto-ic-g3.svg" },
  { label: "تأخر في الرد علي العملاء", icon: "/assets/auto-ic-g4.svg" },
];

type Line = {
  src: string;
  box: [number, number, number, number]; // left, top, width, height (%)
  img: [number, number, number, number]; // left, top, width, height (%)
  flip?: boolean;
};

const lines: Line[] = [
  { src: "/assets/auto-line-b1.svg", box: [27.273, 7.426, 14.182, 31.571], img: [-5.13, -6.24, 105.13, 107.42] },
  { src: "/assets/auto-line-b2.svg", box: [27.273, 37.129, 9.545, 9.158], img: [-7.62, -19.84, 107.8, 123.86] },
  { src: "/assets/auto-line-b3.svg", box: [27.273, 58.911, 7.909, 7.011], img: [-9.2, -5.2, 109.52, 128.76] },
  { src: "/assets/auto-line-b4.svg", box: [28.182, 67.327, 12.909, 26.238], img: [-5.63, -1.38, 105.86, 108.31] },
  { src: "/assets/auto-line-g1.svg", box: [54.273, 7.426, 17.727, 31.683], img: [-4.1, -6.22, 104.1, 107.39], flip: true },
  { src: "/assets/auto-line-g2.svg", box: [60.091, 37.129, 11.909, 9.158], img: [-6.11, -19.84, 106.22, 123.87], flip: true },
  { src: "/assets/auto-line-g3.svg", box: [62.091, 58.911, 9.909, 6.931], img: [-7.34, -5.3, 107.54, 129.19], flip: true },
  { src: "/assets/auto-line-g4.svg", box: [54.727, 67.327, 16.091, 26.238], img: [-4.52, -1.39, 104.67, 108.32], flip: true },
];

const pillTop = [0, 28.713, 57.426, 86.139];

function Pill({ label, icon, tone }: { label: string; icon: string; tone: "blue" | "gray" }) {
  return (
    <div className={`${styles.pill} ${tone === "blue" ? styles.pillBlue : styles.pillGray}`}>
      <span className={styles.pillIcon}>
        <Image src={icon} alt="" width={36} height={36} />
      </span>
      <span className={styles.pillLabel}>{label}</span>
    </div>
  );
}

export default function Automation() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>اتمتة تساعد علي الاستجابة بشكل اسرع</h2>
          <p className={styles.subtitle}>
            نحدد أين يضيع الوقت والمال داخل عملياتك، ثم نبني الحل الذي يجعل العمل أسرع، أوضح وأكثر
            كفاءة.
          </p>
          <Button variant="primary" size="lg" className={styles.cta} href="#services">
            عرض المزيد
          </Button>
        </div>

        <div className={styles.stage}>
          {lines.map((line) => (
            <span
              key={line.src}
              className={`${styles.line} ${line.flip ? styles.lineFlip : ""}`}
              style={{
                left: `${line.box[0]}%`,
                top: `${line.box[1]}%`,
                width: `${line.box[2]}%`,
                height: `${line.box[3]}%`,
              }}
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={line.src}
                alt=""
                style={{
                  left: `${line.img[0]}%`,
                  top: `${line.img[1]}%`,
                  width: `${line.img[2]}%`,
                  height: `${line.img[3]}%`,
                }}
              />
            </span>
          ))}

          <span className={`${styles.brain} ${styles.brainBlue}`} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/brain-blue.png" alt="" />
          </span>
          <span className={`${styles.brain} ${styles.brainGray}`} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/brain-gray.png" alt="" />
          </span>

          {automated.map((item, i) => (
            <div
              className={`${styles.slot} ${styles.slotStart}`}
              style={{ top: `${pillTop[i]}%` }}
              key={item.label}
            >
              <Pill {...item} tone="blue" />
            </div>
          ))}

          {manual.map((item, i) => (
            <div
              className={`${styles.slot} ${styles.slotEnd}`}
              style={{ top: `${pillTop[i]}%` }}
              key={item.label}
            >
              <Pill {...item} tone="gray" />
            </div>
          ))}
        </div>

        <div className={styles.stack}>
          <div className={styles.stackBrain}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/brain-blue.png" alt="" />
          </div>
          <div className={styles.stackCols}>
            <div className={styles.stackCol}>
              {automated.map((item) => (
                <Pill key={item.label} {...item} tone="blue" />
              ))}
            </div>
            <div className={styles.stackCol}>
              {manual.map((item) => (
                <Pill key={item.label} {...item} tone="gray" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
