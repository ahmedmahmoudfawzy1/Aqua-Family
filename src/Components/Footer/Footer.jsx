import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.scss'
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="about_company">
          <p>
            "اكوا فاميلي" العلامة التجارية الرائدة الأولى في مجال تنقية المياه
            المخصصة للاستخدام المنزلي في مصر. بمنتجاتها التي تتجاوز 25 حلاً
            مبتكرًا ومتنوعًا يتناسب كل منها مع احتياجات كل أسرة للاستمتاع بمياه
            شرب نقية وصحية وسهلة، قدمت اكوافاميلي خدماتها للمئات منذ تأسيسها عام
            2019. كما تفخر اكوا فاميلي بالتوسع في حجم أعمالها وذلك بتصدير
            منتجاتها التي حازت على ثقة المستخدمين على مستوى الدول العربيه.
          </p>
        </div>
        <div className="middelSection">
          <div className="aqsam">
            <h1>الاقسام</h1>
            <ul>
                <li>فلاتر منزلية</li>
                <li>محطات تحلية المياه</li>
                <li> منتجات (G)</li>
                <li>عروض الشمعات</li>
                <li>قطع غيار الفلاتر والمحطات</li>
            </ul>
          </div>
          <div className="phones">
            <h1> التواصل</h1>
            <ul>
                <li>01112204836</li>
                <li>01099796489</li>
                <li>aquafamily@gmail.com</li>
            </ul>
          </div>
          <div>
            <h1>الصفحات</h1>
            <ul>
                <li>الرئيسيه</li>
                <li>المتجر</li>
                <li>التواصل</li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="lastSection">
          <div className="socialmediaIcons"> 
            <ul>
              <p> &hearts;  AquaFamily Compony</p>
              <span className="liSocialMedia">
              <li>
                <FaLinkedinIn /> 
              </li>
              <li>
                <FaInstagram /> 
              </li>
              <li>
                <FaFacebookF /> 
              </li>
              <li>
                <FaWhatsapp /> 
              </li>
              </span>
              <p>copyright2023,AquaFamily&copy;</p>
            </ul>
            
          </div>
        </div>
      </div>
    </>
  );
}
