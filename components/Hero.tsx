import Navbar from "./Navbar";
import Button from "./Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Navbar />

      <div className={styles.content}>
        <h1 className={styles.title}>حين تتحول البيانات إلى ذكاء يقود أعمالك</h1>
        <p className={styles.subtitle}>
          نستخدم البيانات والذكاء الاصطناعي لمساعدتك على تحسين الأداء، أتمتة العمليات، واتخاذ قرارات
          أكثر دقة.
        </p>
        <Button variant="primary" size="lg" href="#contact">
          تواصل معنا
        </Button>
      </div>

      <div className={styles.videoWrap}>
        <video
          className={styles.video}
          src="/video/GettyImages-1349515892.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Transformix"
        />
      </div>
    </section>
  );
}
