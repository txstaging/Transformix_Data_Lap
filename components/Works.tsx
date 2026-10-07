import Image from "next/image";
import Button from "./Button";
import styles from "./Works.module.css";

const works = [
  {
    title: "تحليل محادثات العملاء للكشف عن فرص النمو وتحسين المبيعات",
    text: "ساعدت نتائج التحليل على تقديم توصيات عملية لتحسين الرسائل التسويقية، تطوير العروض والخدمات، ومعالجة نقاط الاحتكاك في رحلة التسجيل، بما يدعم البراند في زيادة فرص التحويل وتحسين كفاءة المبيعات.",
    image: "/assets/work-2.png",
    ratio: "590 / 277",
    crop: { left: "-0.06%", top: "-33.21%", w: "100.11%", h: "159.93%" },
  },
  {
    title: "وكيل تعليمي ذكي يدعم المعلم ويطوّر تجربة تعلم اللغات",
    text: "قمنا بتطوير وكيل ذكاء اصطناعي مخصص لقطاع التعليم، يساعد المعلمين على أتمتة إعداد المحتوى التعليمي بما يشمل خطط الدروس، الاختبارات، والواجبات، كما يتيح للطلاب التفاعل معه يوميًا عبر محادثات نصية وصوتية.",
    image: "/assets/work-1.png",
    ratio: "590 / 277",
    crop: { left: "-3.73%", top: "-8.25%", w: "103.73%", h: "124.36%" },
  },
  {
    title: "من بيانات الموقع والمكالمات إلى قرارات تدعم نمو المبيعات",
    text: "قمنا بتحليل بيانات الموقع والمكالمات لشركة Mermates لاكتشاف الأنماط السلوكية، فهم احتياجات العملاء، وتحديد نقاط التحسين التي تساعد على رفع كفاءة المبيعات وتحسين رحلة العميل.",
    image: "/assets/work-4.png",
    ratio: "590 / 229",
    crop: { left: "-8.96%", top: "-50.14%", w: "120.91%", h: "233.06%" },
  },
  {
    title: "تحليل محادثات العملاء للكشف عن فرص النمو وتحسين المبيعات",
    text: "ساعدت نتائج التحليل على تقديم توصيات عملية لتحسين الرسائل التسويقية، تطوير العروض والخدمات، ومعالجة نقاط الاحتكاك في رحلة التسجيل، بما يدعم البراند في زيادة فرص التحويل وتحسين كفاءة المبيعات.",
    image: "/assets/work-3.png",
    ratio: "557 / 229",
    crop: null,
  },
];

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
          <Button variant="primary" size="lg" className={styles.cta} href="#contact">
            عرض المزيد
          </Button>
        </div>

        <div className={styles.grid}>
          {works.map((work, i) => (
            <article className={styles.card} key={`${work.image}-${i}`}>
              <h3 className={styles.cardTitle}>{work.title}</h3>
              <p className={styles.cardText}>{work.text}</p>
              <div className={styles.thumb} style={{ aspectRatio: work.ratio }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.image}
                  alt={work.title}
                  style={
                    work.crop
                      ? {
                          left: work.crop.left,
                          top: work.crop.top,
                          width: work.crop.w,
                          height: work.crop.h,
                        }
                      : { left: 0, top: 0, width: "100%", height: "100%" }
                  }
                />
              </div>
              <a href="#" className={styles.arrow} aria-label={work.title}>
                <Image src="/assets/circle-arrow-left.svg" alt="" width={46} height={46} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
