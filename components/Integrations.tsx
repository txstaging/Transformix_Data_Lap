import Image from "next/image";
import Button from "./Button";
import styles from "./Integrations.module.css";

const bullets = [
  "تشغيل أكثر سلاسة وكفاءة",
  "وحّد البيانات من مصادر متعددة في مكان واحد",
  "طوّر عملياتك دون الحاجة إلى تغيير أنظمتك بالكامل",
];

// Laid out left-to-right, matching the canvas arrangement
const platforms = [
  { src: "/assets/int-odoo.png", alt: "Odoo", w: 105, h: 33 },
  { src: "/assets/int-tiktok.png", alt: "TikTok", w: 123, h: 36 },
  { src: "/assets/int-instagram.png", alt: "Instagram", w: 76, h: 76 },
  { src: "/assets/int-telegram.png", alt: "Telegram", w: 101, h: 101 },
  null, // centre cell — hexagon logo
  { src: "/assets/int-whatsapp.png", alt: "WhatsApp", w: 91, h: 91 },
  { src: "/assets/int-facebook.png", alt: "Facebook", w: 95, h: 95 },
  { src: "/assets/int-salla.png", alt: "Zoho", w: 142, h: 64, cropped: true },
  { src: "/assets/int-meta.png", alt: "Meta", w: 98, h: 98 },
];

export default function Integrations() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <h2 className={styles.title}>نتكامل مع المنصات التي يعتمد عليها عملك</h2>
          <p className={styles.lead}>
            لا نطلب منك البدء من الصفر. نطوّر حلولًا ذكية تتكامل مع منصاتك الحالية لتمنحك كفاءة أعلى
            وقرارات أسرع وتجربة تشغيل أكثر سلاسة.
          </p>

          <ul className={styles.list}>
            {bullets.map((bullet, i) => (
              <li key={bullet}>
                <div className={styles.item}>
                  <span className={styles.check} aria-hidden="true">
                    <Image src="/assets/check-mark.svg" alt="" width={16} height={13} />
                  </span>
                  <span>{bullet}</span>
                </div>
                {i < bullets.length - 1 && <div className={styles.rule} />}
              </li>
            ))}
          </ul>

          <Button size="lg" className={styles.cta} href="#contact">
            تواصل معنا
          </Button>
        </div>

        <div className={styles.gridWrap}>
          <div className={styles.guides} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className={styles.lines} aria-hidden="true">
            <Image src="/assets/int-lines.svg" alt="" fill sizes="600px" />
          </div>

          <div className={styles.tiles}>
            {platforms.map((platform, i) =>
              platform === null ? (
                <div className={`${styles.tile} ${styles.hex}`} key="hex">
                  <div className={styles.hexShape}>
                    <Image src="/assets/int-polygon.svg" alt="" width={177} height={177} />
                  </div>
                  <Image
                    className={styles.hexLogo}
                    src="/assets/int-center-logo.svg"
                    alt="Transformix"
                    width={70}
                    height={70}
                  />
                </div>
              ) : (
                <div className={styles.tile} key={platform.alt + i}>
                  {platform.cropped ? (
                    <span className={styles.cropped}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={platform.src} alt={platform.alt} />
                    </span>
                  ) : (
                    <Image
                      src={platform.src}
                      alt={platform.alt}
                      width={platform.w}
                      height={platform.h}
                    />
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
