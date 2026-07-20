import Image from "next/image";
import Button from "./Button";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section} id="contact">
      {/* Decorative artwork — each piece stretches to its positioned box, so
          `fill` rather than intrinsic width/height. */}
      <div className={styles.art} aria-hidden="true">
        <span className={styles.art4}>
          <Image src="/assets/cta-art-4.svg" alt="" fill sizes="537px" />
        </span>
        <span className={styles.art1}>
          <Image src="/assets/cta-art-1.svg" alt="" fill sizes="40px" />
        </span>
        <span className={styles.art2}>
          <Image src="/assets/cta-art-2.svg" alt="" fill sizes="40px" />
        </span>
        <span className={styles.art3}>
          <Image src="/assets/cta-art-3.svg" alt="" fill sizes="40px" />
        </span>
      </div>

      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>جاهز تحوّل بياناتك إلى خطوة حقيقية للنمو؟</h2>
        <p className={styles.text}>
          نساعدك على بناء تجربة ذكية تناسب احتياجات أعمالك، من تحليل البيانات وأتمتة العمليات إلى
          تطوير أنظمة ذكاء اصطناعي قابلة للتوسع.
        </p>
        <Button size="lg" className={styles.cta} href="#contact">
          ابدء مشروعك
        </Button>
      </div>
    </section>
  );
}
