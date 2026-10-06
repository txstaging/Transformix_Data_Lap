import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "بصفتي مدربة أسرية معتمدة، كنت أسعى لتعزيز علامتي التجارية الشخصية والتواصل مع المزيد من العائلات التي تحتاج إلى التوجيه. كان العمل مع شركة FUEX Solutions بمثابة نقطة تحول بالنسبة لي. فقد أدى نهجهم الاستراتيجي في التسويق عبر وسائل التواصل الاجتماعي إلى نمو ملحوظ بنسبة ⁦134.5%⁩ في عدد متابعي خلال ثلاثة أسابيع فقط",
    name: "د/ ريم بخيت",
    role: "مستشارة اجتماعية",
    avatar: "/assets/testimonial-reem.png",
  },
  {
    quote:
      "يسعنا إلا أن نتقدم بجزيل الشكر لوكالتكم التسويقية على خدماتها المتميزة. لقد ساهمت أفكار فريقكم الإبداعية ونهجهم القائم على البيانات في تحقيق نتائج باهرة في فترة وجيزة. ارتفع تفاعل متابعينا على وسائل التواصل الاجتماعي بشكل ملحوظ، واكتسبت علامتنا التجارية قاعدة جماهيرية وفية.",
    name: "يسرى بوغوس",
    role: "",
    avatar: "/assets/testimonial-yusra.png",
  },
  {
    quote:
      "لقد فاقت وكالة Fuex توقعاتي بخدماتها المتميزة فريقهم محترف، سريع الاستجابة، ويفهم تماما احتياجات عملائهم. لقد قدموا نتائج عالية الجودة في الوقت المحدد، وكان لإبداعهم وخبرتهم أثر بالغ. أوصي بشدة بوكالة Fuex لكل من يبحث عن حلول تسويقية من الطراز الأول.",
    name: "د/روزانا البخاري",
    role: "عبر بيكسفورت.",
    avatar: "/assets/testimonial-rozana.png",
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
                    <Image src={item.avatar} alt="" width={43} height={43} />
                  </span>
                  <span className={styles.meta}>
                    <span className={styles.name}>{item.name}</span>
                    {item.role && (
                      <>
                        <br />
                        <span className={styles.role}>{item.role}</span>
                      </>
                    )}
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
