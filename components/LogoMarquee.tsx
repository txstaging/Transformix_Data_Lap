import styles from "./LogoMarquee.module.css";

/**
 * Client logos — Figma "Section" (1626:4704). `frame` is the box the canvas
 * lays each logo out in; `crop` reproduces the image-fill transform applied to
 * the source PNG so the logo sits exactly as it does on the artboard.
 */
const logos = [
  { src: "/assets/mq-barq.png", alt: "Barq", frame: { w: 66, h: 66 } },
  { src: "/assets/mq-thermo.png", alt: "Thermo Integrated", frame: { w: 70, h: 70 } },
  {
    src: "/assets/mq-tourguides.png",
    alt: "تعاونية المرشدين السياحيين",
    frame: { w: 139, h: 78 },
    crop: { top: "-16.67%", left: "-0.27%", w: "100.54%", h: "133.33%" },
  },
  { src: "/assets/mq-48.png", alt: "Client", frame: { w: 150, h: 64 } },
  { src: "/assets/mq-45.png", alt: "Client", frame: { w: 120, h: 43 } },
  { src: "/assets/mq-seal.png", alt: "Client", frame: { w: 85, h: 74 } },
  {
    src: "/assets/mq-ibdl.png",
    alt: "IBDL",
    frame: { w: 201, h: 76 },
    crop: { top: "-85.57%", left: "0", w: "100%", h: "264.06%" },
  },
];

export default function LogoMarquee() {
  return (
    <section className={styles.section}>
      <div className={styles.marquee}>
        {[0, 1].map((copy) => (
          <div
            className={styles.group}
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
          >
            {logos.map((logo) => (
              <div className={styles.cell} key={`${copy}-${logo.src}`}>
                <div
                  className={styles.frame}
                  style={{ width: logo.frame.w, height: logo.frame.h }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={copy === 0 ? logo.alt : ""}
                    style={
                      logo.crop
                        ? {
                            top: logo.crop.top,
                            left: logo.crop.left,
                            width: logo.crop.w,
                            height: logo.crop.h,
                          }
                        : { top: 0, left: 0, width: "100%", height: "100%" }
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
