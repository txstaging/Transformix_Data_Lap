import Button from "./Button";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>فكرتك تستحق أن تظهر بأفضل صورة</h2>
        <p className={styles.text}>
          من أول فكرة إلى الإطلاق، نصنع معك هوية وتجربة ومحتوى يعبر عن علامتك ويصنع أثرًا حقيقيًا.
        </p>
        <Button variant="primary" size="lg" className={styles.cta} href="#contact">
          ابدء الان
        </Button>
      </div>

      <div className={styles.mark} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/cta-logo.png" alt="" />
      </div>
    </section>
  );
}
