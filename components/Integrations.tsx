import Image from "next/image";
import Button from "./Button";
import styles from "./Integrations.module.css";

const CW = 617; // cluster width on the artboard
const CH = 637; // cluster height

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

type Logo = {
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  crop?: { left: string; top: string; w: string; h: string };
};

const logos: Logo[] = [
  { src: "/assets/int2-facebook.png", alt: "Facebook", x: 46, y: 53, w: 113, h: 111 },
  { src: "/assets/int2-meta.png", alt: "Meta", x: 261, y: 51, w: 89, h: 85 },
  { src: "/assets/int2-instagram.png", alt: "Instagram", x: 463, y: 47, w: 100, h: 100 },
  {
    src: "/assets/int2-tiktok.png",
    alt: "TikTok",
    x: 59,
    y: 293,
    w: 73,
    h: 81,
    crop: { left: "-0.77%", top: "0", w: "379.51%", h: "100%" },
  },
  { src: "/assets/int2-messenger.png", alt: "Messenger", x: 252, y: 267, w: 102, h: 102 },
  { src: "/assets/int2-odoo.png", alt: "Odoo", x: 462, y: 289, w: 105, h: 33 },
  { src: "/assets/int2-telegram.png", alt: "Telegram", x: 39, y: 484, w: 114, h: 114 },
  {
    src: "/assets/int2-zoho.png",
    alt: "Zoho",
    x: 246,
    y: 494,
    w: 142,
    h: 64,
    crop: { left: "0", top: "-61.99%", w: "100%", h: "221.4%" },
  },
  { src: "/assets/int2-whatsapp.png", alt: "WhatsApp", x: 476, y: 495, w: 92, h: 92 },
];

const wells = [
  { x: 213, y: 4 },
  { x: 419, y: 4 },
  { x: 0, y: 237 },
  { x: 0, y: 444 },
  { x: 426, y: 444 },
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
          <Button variant="primary" size="lg" className={styles.cta} href="#contact">
            ابدء الان
          </Button>
        </div>

        <div className={styles.cluster}>
          <span className={`${styles.blob} ${styles.blobA}`} aria-hidden="true">
            <Image src="/assets/int-blob-a.svg" alt="" fill sizes="401px" />
          </span>
          <span className={`${styles.blob} ${styles.blobB}`} aria-hidden="true">
            <Image src="/assets/int-blob-b.svg" alt="" fill sizes="401px" />
          </span>

          {wells.map((well) => (
            <span
              className={styles.well}
              key={`${well.x}-${well.y}`}
              style={{ left: pct(well.x, CW), top: pct(well.y, CH) }}
              aria-hidden="true"
            />
          ))}

          {logos.map((logo) => (
            <span
              className={styles.logo}
              key={logo.alt}
              style={{
                left: pct(logo.x, CW),
                top: pct(logo.y, CH),
                width: pct(logo.w, CW),
                height: pct(logo.h, CH),
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={
                  logo.crop
                    ? {
                        left: logo.crop.left,
                        top: logo.crop.top,
                        width: logo.crop.w,
                        height: logo.crop.h,
                      }
                    : { left: 0, top: 0, width: "100%", height: "100%" }
                }
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
