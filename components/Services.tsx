import Image from "next/image";
import styles from "./Services.module.css";

// DOM order is visual order: in RTL the first card sits top-right.
const services = [
  {
    title: "تطوير الذكاء الاصطناعي التوليدي",
    text: "نطوّر أدوات ذكية قادرة على إنشاء المحتوى، الإجابة عن الأسئلة، والتفاعل مع المستخدمين.",
    icon: "/assets/svc-icon-3.png",
  },
  {
    title: "تقنيات الرؤية الحاسوبية",
    text: "نساعد الأنظمة على فهم الصور والفيديوهات واكتشاف العناصر والأنماط بداخلها.",
    icon: "/assets/svc-icon-1.png",
  },
  {
    title: "أتمتة العمليات بالذكاء الاصطناعي",
    text: "نحوّل المهام المتكررة إلى عمليات ذكية أسرع وأكثر دقة وأقل اعتمادًا على التدخل اليدوي.",
    icon: "/assets/svc-icon-4.png",
  },
  {
    title: "تطوير نماذج تعلُّم الآلة",
    text: "نبني نماذج تتعلم من البيانات لتوقع النتائج وتحسين القرارات بشكل مستمر.",
    icon: "/assets/svc-icon-2.png",
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>نحوّل التقنية إلى قيمة لأعمالك</h2>
          <p className={styles.subtitle}>
            نجمع بين علوم البيانات والذكاء الاصطناعي لتحسين الأداء، أتمتة العمليات، وتحويل التحديات
            إلى فرص نمو حقيقية.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <a href="#" className={styles.card} key={service.title}>
              <div className={styles.cardTop}>
                <div className={styles.icon}>
                  <Image src={service.icon} alt="" width={102} height={102} />
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
