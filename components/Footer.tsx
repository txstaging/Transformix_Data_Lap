import Image from "next/image";
import styles from "./Footer.module.css";

const quickLinks = ["الرئسية", "الخدمات", "اعمالنا", "تواصل معنا"];

const socials = [
  { src: "/assets/ic-twitter.svg", label: "Twitter" },
  { src: "/assets/ic-linkedin.svg", label: "LinkedIn" },
  { src: "/assets/ic-facebook.svg", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image src="/assets/footer-logo.svg" alt="Transformix" width={133} height={85} />
            </div>
            <p className={styles.tagline}>دليلك الذكي لنمو شركتك</p>
          </div>

          <div className={styles.cols}>
            <div>
              <h3 className={styles.colTitle}>الروابط سريعة</h3>
              <nav className={styles.links}>
                {quickLinks.map((link) => (
                  <a href="#" key={link}>
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className={styles.colTitle}>تواصل معنا</h3>
              <div className={styles.contact}>
                <div className={styles.contactRow}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Image src="/assets/ic-mail.svg" alt="" width={20} height={20} />
                  </span>
                  <span>xxxxxxxxx</span>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Image src="/assets/ic-phone.svg" alt="" width={20} height={20} />
                  </span>
                  <span>xxxxxxxxx</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className={styles.colTitle}>تابعنا على</h3>
              <div className={styles.socials}>
                {socials.map((social) => (
                  <a href="#" key={social.label} aria-label={social.label}>
                    <Image src={social.src} alt="" width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider} />
        <p className={styles.copyright}>جمع الحقوق محفوظة Transformix</p>
      </div>
    </footer>
  );
}
