import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "و ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص",
    name: "Jacob Jones",
    role: "Digital Marketer",
  },
  {
    quote:
      "و ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص",
    name: "Jacob Jones",
    role: "Digital Marketer",
  },
  {
    quote:
      "و ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص",
    name: "Jacob Jones",
    role: "Digital Marketer",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>تجارب حقيقية تصنع فرقًا</h2>

        <div className={styles.showcase}>
          <div className={styles.slab} aria-hidden="true" />

          <div className={styles.grid}>
            {testimonials.map((item, i) => (
              <figure className={styles.card} key={i}>
                <Image
                  className={styles.stars}
                  src="/assets/stars.svg"
                  alt="5 من 5"
                  width={96}
                  height={16}
                />
                <blockquote className={styles.quote}>{item.quote}</blockquote>
                <figcaption className={styles.person}>
                  <span className={styles.avatar}>
                    <Image src="/assets/avatar.png" alt="" width={43} height={43} />
                  </span>
                  <span className={styles.meta}>
                    <span className={styles.name}>{item.name}</span>
                    <br />
                    <span className={styles.role}>{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className={styles.linkWrap}>
          <a href="#" className={styles.link}>
            رؤية جميع الاراء
          </a>
        </div>
      </div>
    </section>
  );
}
