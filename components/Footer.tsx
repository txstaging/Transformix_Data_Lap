import Image from "next/image";
import styles from "./Footer.module.css";

const quickLinks = ["الرئيسية", "الخدمات", "اعمالنا", "تواصل معنا"];

const socials = [
  { src: "/assets/ic-twitter.svg", label: "Twitter" },
  { src: "/assets/ic-linkedin.svg", label: "LinkedIn" },
  { src: "/assets/ic-facebook.svg", label: "Facebook" },
];

/* Mobile footer (3077:2839) carries its own icon set, left-to-right as drawn */
const mobileSocials = [
  { src: "/assets/social-facebook.svg", label: "Facebook" },
  { src: "/assets/social-instagram.svg", label: "Instagram" },
  { src: "/assets/social-linkedin.svg", label: "LinkedIn" },
  { src: "/assets/social-behance.svg", label: "Behance" },
];

const email = "Info@thetransformix.com";
const phone = "+966567623953";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image src="/assets/footer-logo.svg" alt="Transformix" width={133} height={85} />
            </div>
            {/* Mobile mark is drawn as four stacked layers on a 140 × 90 box */}
            <div className={styles.mobileLogo} role="img" aria-label="Transformix">
              <Image className={styles.mLogo1} src="/assets/footer-m-logo-1.svg" alt="" width={110} height={45} />
              <Image className={styles.mLogo2} src="/assets/footer-m-logo-2.svg" alt="" width={115} height={80} />
              <Image className={styles.mLogo3} src="/assets/footer-m-logo-3.svg" alt="" width={15} height={14} />
              <Image className={styles.mLogo4} src="/assets/footer-m-logo-4.svg" alt="" width={12} height={12} />
            </div>
            <p className={styles.tagline}>
              <span className={styles.desktopText}>دليلك الذكي لنمو شركتك</span>
              <span className={styles.mobileText}>حلول رقمية متكاملة تدعم نمو أعمالك</span>
            </p>
          </div>

          <div className={styles.cols}>
            <div>
              <h3 className={styles.colTitle}>الروابط السريعة</h3>
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
                <a className={styles.contactRow} href={`mailto:${email}`}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Image className={styles.desktopIcon} src="/assets/ic-mail.svg" alt="" width={20} height={20} />
                    <Image className={styles.mobileIcon} src="/assets/ic-m-mail.svg" alt="" width={20} height={16} />
                  </span>
                  <span dir="ltr">{email}</span>
                </a>
                <a className={styles.contactRow} href={`tel:${phone}`}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Image className={styles.desktopIcon} src="/assets/ic-phone.svg" alt="" width={20} height={20} />
                    <Image className={styles.mobileIcon} src="/assets/ic-m-phone.svg" alt="" width={20} height={20} />
                  </span>
                  <span dir="ltr">{phone}</span>
                </a>
                <div className={`${styles.contactRow} ${styles.mobileRow}`}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Image src="/assets/ic-m-location.svg" alt="" width={16} height={20} />
                  </span>
                  <span>المملكة العربية السعودية ,جدة</span>
                </div>
              </div>
            </div>

            <div className={styles.followCol}>
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

        <div className={styles.mobileSocials}>
          {mobileSocials.map((social) => (
            <a href="#" key={social.label} aria-label={social.label}>
              <Image src={social.src} alt="" width={40} height={40} />
            </a>
          ))}
        </div>

        <div className={styles.divider} />
        <p className={styles.copyright}>©جميع الحقوق محفوظة لشركة Transformix</p>
      </div>
    </footer>
  );
}
