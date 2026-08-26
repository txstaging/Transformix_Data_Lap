import Image from "next/image";
import styles from "./DataCards.module.css";

const cards = [
  {
    title: "هندسة البيانات",
    text: "نبني وننظم البنية التي تجمع بياناتك من مصادر مختلفة وتجهزها للتحليل والاستخدام بكفاءة.",
  },
  {
    title: "ذكاء الأعمال",
    text: "نحوّل البيانات إلى لوحات معلومات وتقارير تفاعلية تمنحك رؤية واضحة ومباشرة لأداء أعمالك.",
  },
  {
    title: "تحليلات البيانات المتقدمة",
    text: "نستخدم أساليب تحليل متقدمة لاكتشاف الأنماط، توقع النتائج، ودعم القرارات المبنية على البيانات.",
  },
];

export default function DataCards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>البيانات التي تقود القرار</h2>
          <p className={styles.subtitle}>
            نُنظّم بياناتك ونحللها لنمنحك رؤية أوضح وقرارات مبنية على معلومات دقيقة.
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((card) => (
            <a href="#" className={styles.card} key={card.title}>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
              <span className={styles.arrow} aria-hidden="true">
                <Image src="/assets/arrow-circle.svg" alt="" width={40} height={40} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
