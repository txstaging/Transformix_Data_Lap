import styles from "./LogoMarquee.module.css";

/**
 * Client logos. `frame` is the box size Figma laid out, `crop` reproduces the
 * image-fill transform applied to each source PNG so the logos sit exactly as
 * they do on the canvas.
 */
const logos = [
  { src: "/assets/brand-barq.png", alt: "Barq", frame: { w: 66, h: 66 }, crop: { top: "0", left: "0", w: "100%", h: "100%" } },
  { src: "/assets/brand-image46.png", alt: "", frame: { w: 59, h: 59 }, crop: { top: "0", left: "0", w: "100%", h: "100%" } },
  { src: "/assets/brand-homraa.png", alt: "Homraa", frame: { w: 70, h: 74 }, crop: { top: "-9.2%", left: "-13.84%", w: "125.58%", h: "119.73%" } },
  { src: "/assets/brand-diomedea.png", alt: "Diomedea", frame: { w: 243, h: 60 }, crop: { top: "-158.11%", left: "0", w: "100%", h: "407.55%" } },
  { src: "/assets/brand-ta3awenya.png", alt: "تعاونية المرشدين السياحيين", frame: { w: 170, h: 66 }, crop: { top: "-77.09%", left: "0", w: "100%", h: "257.76%" } },
  { src: "/assets/brand-da3m.png", alt: "دعم وتمكين", frame: { w: 230, h: 58 }, crop: { top: "-179.96%", left: "-9.22%", w: "116.96%", h: "463.79%" } },
  { src: "/assets/brand-mahmal.png", alt: "محمل", frame: { w: 202, h: 64 }, crop: { top: "-116.96%", left: "0", w: "100%", h: "315.79%" } },
  { src: "/assets/brand-ibdl.png", alt: "IBDL", frame: { w: 201, h: 76 }, crop: { top: "-85.57%", left: "0", w: "100%", h: "264.06%" } },
];

export default function LogoMarquee() {
  // Rendered twice so the -50% translate loops seamlessly
  const loop = [...logos, ...logos];

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {loop.map((logo, i) => (
          <div className={styles.cell} key={`${logo.src}-${i}`}>
            <div
              className={styles.frame}
              style={{ width: logo.frame.w, height: logo.frame.h }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={i < logos.length ? logo.alt : ""}
                aria-hidden={i >= logos.length}
                style={{
                  top: logo.crop.top,
                  left: logo.crop.left,
                  width: logo.crop.w,
                  height: logo.crop.h,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
