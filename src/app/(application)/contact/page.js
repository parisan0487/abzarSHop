import Breadcrumb from "@/components/ui/Breadcrumb";

export default function Contact() {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { text: "صفحه اصلی", href: "/" },
          { text: "تماس با ما", href: "/contact-us" },
        ]}
      />
     
       
    </div>
  );
}
