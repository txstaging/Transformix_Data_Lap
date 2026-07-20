import Button from "./Button";
import styles from "./GrowthCta.module.css";

export default function GrowthCta() {
  return (
    <section className={styles.section}>
      <div className={styles.noise} />
      <div className={styles.noiseOverlay} />

      <div className={styles.cubes} aria-hidden="true">
        <span className={`${styles.cube} ${styles.cubeLg}`} />
        <span className={`${styles.cube} ${styles.cubeSm}`} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.inner}>
          <h2 className={styles.title}>حوّل تحديات أعمالك إلى فرص للنمو</h2>
          <p className={styles.text}>
            اكتشف كيف يمكن للبيانات والذكاء الاصطناعي أن يساعدا مؤسستك على العمل بكفاءة أكبر واتخاذ
            قرارات أذكى.
          </p>
          <Button size="md" href="#contact">
            تواصل معنا
          </Button>
        </div>
      </div>
    </section>
  );
}
