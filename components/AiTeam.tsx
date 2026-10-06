import Image from "next/image";
import Button from "./Button";
import styles from "./AiTeam.module.css";

const agents = [
  {
    title: "عارف - مساعدك الذكي لمعرفة الاخبار",
    text: "متابعة ذكية لأخبار وتطورات القطاع مع ملخصات يومية وأسبوعية وشهرية تركز على أهم المستجدات والاتجاهات،",
    image: "/assets/agent-aref.png",
  },
  {
    title: "فهيم - وكيل مبيعات ذكي",
    text: "يعمل 24/7 يرد على استفسارات العملاء، يؤهل العملاء المحتملين، ويساعد في إتمام عمليات البيع تلقائيًا.",
    image: "/assets/agent-faheem.png",
  },
  {
    title: "جودت -تحليل فجوات و الامتثال",
    text: "يقوم بتقييم الوضع الحالي وتحديد المتطلبات الناقصة للوصول إلى الاعتماد.من خلال خطة تنفيذ خطوة بخطوة تحول متطلبات المعاييرإلى مهام واضحة",
    image: "/assets/agent-jawdat.png",
  },
];

export default function AiTeam() {
  return (
    <section className={styles.section} id="platforms">
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>فريق ذكاء اصطناعي مصمم لأعمالك</h2>
          <a
            href="https://ai.thetransformix.com/ai-tools"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.more}
          >
            عرض المزيد
            <Image
              src="/assets/chevrons-left.svg"
              alt=""
              width={24}
              height={24}
            />
          </a>
        </div>

        <div className={styles.grid}>
          {agents.map((agent) => (
            <article className={styles.card} key={agent.title}>
              <div className={styles.thumb}>
                <Image
                  src={agent.image}
                  alt={agent.title}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 344px"
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{agent.title}</h3>
                <p className={styles.cardText}>{agent.text}</p>
              </div>
              <Button
                variant="primary"
                size="sm"
                className={styles.cardCta}
                href="#"
              >
                عرض الموقع
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
