import Image from "next/image";
import Button from "./Button";
import styles from "./Works.module.css";

const works = [
  { title: "مساعد ذكي لخدمة العملاء", image: "/assets/work-preview.png" },
  { title: "مساعد ذكي لخدمة العملاء", image: "/assets/work-preview.png" },
  { title: "مساعد ذكي لخدمة العملاء", image: "/assets/work-preview.png" },
  { title: "مساعد ذكي لخدمة العملاء", image: "/assets/work-preview.png" },
];

function WorkCard({ title, image }: { title: string; image: string }) {
  return (
    <a href="#" className={styles.card}>
      <div className={styles.thumb}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 900px) 100vw, 600px"
        />
      </div>
      <div className={styles.cardFooter}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span className={styles.cardIcon} aria-hidden="true">
          <Image src="/assets/arrow-out.svg" alt="" width={22} height={22} />
        </span>
      </div>
    </a>
  );
}

export default function Works() {
  return (
    <section className={styles.section} id="works">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>أعمال صُممت لتصنع تأثيرًا</h2>
          <p className={styles.subtitle}>
            نطوّر منصات وأنظمة رقمية تجمع بين البيانات، الذكاء الاصطناعي، وتجربة المستخدم لتقديم
            منتجات عملية وقابلة للتوسع.
          </p>
        </div>

        <div className={styles.headerCta}>
          <Button variant="primary" size="lg" className={styles.ctaButton} href="#contact">
            تواصل معنا
          </Button>
        </div>

        <div className={styles.columns}>
          {/* Leading (right) column — offset down on the artboard */}
          <div className={styles.col}>
            <WorkCard {...works[0]} />
            <WorkCard {...works[1]} />
          </div>
          <div className={styles.col}>
            <WorkCard {...works[2]} />
            <WorkCard {...works[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
