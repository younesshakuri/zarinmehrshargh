
/* ==============================
   تنظیمات اطلاعات تماس
============================== */

// ایمیل کامل شرکت را بعداً اینجا قرار بده
const EMAIL_ADDRESS = "zarinmehrshargh.support";

// شماره واتساپ با کد کشور، فقط عدد و بدون +
// مثال: 989121234567
const WHATSAPP_PHONE = "";


/* ==============================
   نمایش سال جاری
============================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ==============================
   تنظیم لینک ایمیل
============================== */

const emailLink = document.getElementById("emailLink");

if (emailLink) {

    if (
        EMAIL_ADDRESS.includes("@") &&
        EMAIL_ADDRESS.includes(".")
    ) {

        emailLink.href = `mailto:${EMAIL_ADDRESS}`;

    } else {

        emailLink.addEventListener("click", function(event) {

            event.preventDefault();

            alert(
                "برای ارسال ایمیل، لطفاً آدرس کامل ایمیل شرکت را وارد کنید."
            );

        });

    }

}


/* ==============================
   تنظیم لینک واتساپ
============================== */

const whatsappLink = document.getElementById("whatsappLink");

if (whatsappLink) {

    if (WHATSAPP_PHONE.trim() !== "") {

        const cleanPhone = WHATSAPP_PHONE.replace(/\D/g, "");

        whatsappLink.href = `https://wa.me/${cleanPhone}`;

        whatsappLink.target = "_blank";

        whatsappLink.rel = "noopener noreferrer";

    } else {

        whatsappLink.addEventListener("click", function(event) {

            event.preventDefault();

            alert(
                "برای ارتباط مستقیم واتساپ، شماره تلفن همراه با کد کشور لازم است."
            );

        });

    }

}

// Website Coming Soon Modal

const websiteLink = document.getElementById("websiteLink");
const comingModal = document.getElementById("comingModal");
const modalClose = document.getElementById("modalClose");

// Open modal
websiteLink.addEventListener("click", function (event) {
  event.preventDefault();

  comingModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close modal
function closeComingModal() {
  comingModal.classList.remove("active");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeComingModal);

// Close by clicking outside
comingModal.addEventListener("click", function (event) {
  if (event.target === comingModal) {
    closeComingModal();
  }
});

// Close with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && comingModal.classList.contains("active")) {
    closeComingModal();
  }
});