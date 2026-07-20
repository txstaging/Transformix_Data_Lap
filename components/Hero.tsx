import Image from "next/image";
import Navbar from "./Navbar";
import Button from "./Button";
import LogoMarquee from "./LogoMarquee";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/assets/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.overlay} />

      <Navbar />

      <div className={styles.content}>
        <h1 className={styles.title}>حين تتحول البيانات إلى ذكاء يقود أعمالك</h1>
        <p className={styles.subtitle}>
          نستخدم البيانات والذكاء الاصطناعي لمساعدتك على تحسين الأداء، أتمتة العمليات، واتخاذ قرارات
          أكثر دقة.
        </p>
        <Button size="lg" href="#contact">
          تواصل معنا
        </Button>
      </div>

      <LogoMarquee />
    </section>
  );
}
