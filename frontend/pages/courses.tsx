import Footer from "../components/footer"
import Header from "../components/header"
import Image from "next/image"
import FooterBrand from "../components/footerBrand"

interface Feature {
  img: string,
  link: string,
  name: string,
  career: string,
}

export default function Courses() {
  const features: Feature[] = [
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/hDwO723fRluyELoUEVT7__V2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณฐากร ปิยะพันธ์",
      career: "Employee Survival Guide"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/IpuwFDA2SaCvTK2PTENL__V2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณมณีรัตน์ อนุโลมสมบัติ",
      career: "Scale People, Scale Company"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/195AwCRCR3uvRhd5USc3_file.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณบรรยง พงษ์พานิช",
      career: "The Art of Decision Making"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/FI7e8TMJQsGRBJ9WQ1zp_SeaTalk_IMG_1618167619_Cropped_2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณสาธิต กาลวันตวานิช",
      career: "The Power of Creative and Critical Thinking"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/hDwO723fRluyELoUEVT7__V2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณฐากร ปิยะพันธ์",
      career: "Employee Survival Guide"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/IpuwFDA2SaCvTK2PTENL__V2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณมณีรัตน์ อนุโลมสมบัติ",
      career: "Scale People, Scale Company"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/195AwCRCR3uvRhd5USc3_file.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณบรรยง พงษ์พานิช",
      career: "The Art of Decision Making"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/FI7e8TMJQsGRBJ9WQ1zp_SeaTalk_IMG_1618167619_Cropped_2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณสาธิต กาลวันตวานิช",
      career: "The Power of Creative and Critical Thinking"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/hDwO723fRluyELoUEVT7__V2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณฐากร ปิยะพันธ์",
      career: "Employee Survival Guide"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/IpuwFDA2SaCvTK2PTENL__V2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณมณีรัตน์ อนุโลมสมบัติ",
      career: "Scale People, Scale Company"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/195AwCRCR3uvRhd5USc3_file.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณบรรยง พงษ์พานิช",
      career: "The Art of Decision Making"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/FI7e8TMJQsGRBJ9WQ1zp_SeaTalk_IMG_1618167619_Cropped_2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณสาธิต กาลวันตวานิช",
      career: "The Power of Creative and Critical Thinking"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/hDwO723fRluyELoUEVT7__V2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณฐากร ปิยะพันธ์",
      career: "Employee Survival Guide"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/IpuwFDA2SaCvTK2PTENL__V2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณมณีรัตน์ อนุโลมสมบัติ",
      career: "Scale People, Scale Company"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/195AwCRCR3uvRhd5USc3_file.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณบรรยง พงษ์พานิช",
      career: "The Art of Decision Making"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/FI7e8TMJQsGRBJ9WQ1zp_SeaTalk_IMG_1618167619_Cropped_2.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณสาธิต กาลวันตวานิช",
      career: "The Power of Creative and Critical Thinking"
    },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/195AwCRCR3uvRhd5USc3_file.jpg",
      link: "https://www.cariber.co/maneerut-anulomsombut",
      name: "คุณบรรยง พงษ์พานิช",
      career: "The Art of Decision Making"
    },
  ]

  return (
    <div className="bg-courses">
      <Header />
      <div className="sizer">
        <div className="container">
          <div className="row align-items-center">
            <div className="block-type-image text-col-12" style={{ marginBottom: 0 }}>
              <div className="block box-shadow-none background-unrecognized aos-init aos-animate">
                <div className="image">
                  <a href="https://checkout.cariber.co/?add-to-cart=685&amp;cfp=bGFyZ2ViYW5uZXJfY291cnNlcw==">
                    <Image className="image-image"
                      src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/WwCSkYs4TKWw0zpTBGtQ_file.jpg"
                      alt=""
                      width={1260}
                      height={282.017} />
                  </a>
                </div>
              </div>
            </div>
            <div className="block-type-text text-left col-12">
              <div className="block box-shadow-none background-unrecognized aos-init aos-animate">
                <h2 style={{ textAlign: 'center' }}>
                  <span style={{ color: '#e74e25' }}>
                    คอร์สทั้งหมด
                  </span>
                </h2>
              </div>
            </div>
            <div className="block-break"></div>
            {features.map((value, index) => {
              return (
                <div key={index} className="block-type-feature text-center col-3">
                  <div className="block box-shadow-large background-light aos-init aos-animate"
                    style={{ backgroundColor: "#ffffff", borderRadius: "4px" }}>
                    <div style={{ padding: "15px" }}>
                      <div className="feature">
                        <a href={value.link}>
                          <Image className="feature-image"
                            src={value.img}
                            alt=""
                            width={262.5}
                            height={147.65} />
                        </a>
                        <div className="feature-text">
                          <h5 style={{ textAlign: 'center' }}>
                            <a href="/thakorn-piyapan">
                              <span style={{ color: '#223f99' }}>
                                <strong>
                                  {value.name}
                                </strong>
                              </span>
                            </a>
                          </h5>
                          <h6 style={{ textAlign: 'center' }}>
                            <a href="/thakorn-piyapan">
                              <strong>
                                {value.career}
                              </strong>
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <FooterBrand />
      <Footer />
    </div>
  )
}