var slogans = document.querySelectorAll(".slogen-p");

setTimeout(function() {
    slogans.forEach(function(slogan, index) {
        setTimeout(function() {
            slogan.style.opacity = "1"; 
        }, index * 800); 
    });
}, 1000); 



let btn_show_work_imges = document.querySelector(".show_work");

function show_more_work() {
    let container_work_imges = document.querySelector(".container_work_imges");
    container_work_imges.style.display = "block";
}

btn_show_work_imges.addEventListener("click", show_more_work);
let read_more_btn = document.querySelector(".read_more_btn");
let article_place = document.querySelector(".text-box");

  document.querySelector('.work').addEventListener('click', function() {
    document.getElementById('workers-section').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.articles').addEventListener('click', function() {
    document.getElementById('#article-section').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.clients').addEventListener('click', function() {
    document.getElementById('#client-section').scrollIntoView({ behavior: 'smooth' });
  });
  function toggleLanguage() {
    const elements = document.querySelectorAll("[data-lang-en]");
    elements.forEach(element => {
        const textEn = element.getAttribute("data-lang-en");
        const textAr = element.getAttribute("data-lang-ar");
        if (element.innerText === textEn) {
            element.innerText = textAr;
        } else {
            element.innerText = textEn;
        }
    });
}

let TOP_Btn = document.querySelector(".top_btn");

function TOtop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

TOP_Btn.addEventListener('click', TOtop);

function toggleReadMore() {
    const moreContent = document.querySelector('.more-content');
    const readMoreBtn = document.querySelector('.read-more-btn');
  
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
      moreContent.style.display = 'inline';
      readMoreBtn.textContent = 'Read Less';
    } else {
      moreContent.style.display = 'none';
      readMoreBtn.textContent = 'Read More';
    }
  }
   let currentLang ;

        function Change_web_lang() {
            if (currentLang === 'en') {
               
                document.querySelector(".heading_container").innerHTML = "من نحن" ;
                document.querySelector(".p_heading_container").innerHTML = "جزء من عملنا" ;
                document.querySelector(".h2_heading_container").innerHTML = "أعمال";
                document.querySelector(".p1_heading_container").innerHTML = "شركة ENSERV هي شركة تعمل في المقاولات العامة. نقدم خدماتنا للعديد من الجهات مثل الوكالات الحكومية والمستشفيات وغيرها، ونسعى لأن لا تقل تكلفة المشاريع عن 20 مليون جنيه مصري.";
                document.querySelector(".h2_articles").innerHTML = "مقالاتنا";
                document.querySelector(".Articles_p").innerHTML = "بعض من مقالاتنا. نأمل أن تستمتع بالقراءة";
                document.querySelector(".h2_safqa").innerHTML = "صفقة جيدة جداً للمنزل";
                document.querySelector(".p_safqa").innerHTML = "نساعدك على الوصول إلى أفضل الصفقات باستخدام أفضل الوسائل المتاحة";
                document.querySelector(".why_chosse_h2").innerHTML = "لماذا تختارنا";
                document.querySelector(".Tax_number").innerHTML = "الرقم الضريبي";
                document.querySelector(".years_work").innerHTML = "سنوات العمل";
                document.querySelector(".client_talks").innerHTML = "ما يقوله عملاؤنا";
                document.querySelector(".stay_tuned").innerHTML = "ابقى على تواصل";
                currentLang = 'ar';
                
                alert('تم تغيير اللغة بنجاح');

            } else {
                document.querySelector(".heading_container").innerHTML = "About Us";
                document.querySelector(".p_heading_container").innerHTML = "Part of our work";
                document.querySelector(".h2_heading_container").innerHTML = "Works";
                document.querySelector(".p1_heading_container").innerHTML = "ENSERV Company is a company working in general contracting. We provide our services to many entities such as government agencies, hospitals, etc., and we strive for the cost of projects to be no less than 20 million Egyptian pounds.";
                document.querySelector(".h2_articles").innerHTML = "Our Articles";
                document.querySelector(".Articles_p").innerHTML = "Some of our articles. We hope you enjoy reading";
                document.querySelector(".h2_safqa").innerHTML = "Very good deal for the house";
                document.querySelector(".p_safqa").innerHTML = "We help you reach the best deals using the best available means";
                document.querySelector(".why_chosse_h2").innerHTML = "Why choose us";
                document.querySelector(".Tax_number").innerHTML = "Tax number";
                document.querySelector(".years_work").innerHTML = "Work years";
                document.querySelector(".client_talks").innerHTML = "What our customers say";
                document.querySelector(".stay_tuned").innerHTML = "Keep in touch";
                currentLang = 'en';
                alert('تم تغيير اللغة بنجاح');

            }
        }     
 

  document.addEventListener("DOMContentLoaded", function() {
    // تحديد جميع عناصر القائمة
    const navLinks = document.querySelectorAll(".nav-link");

    // إضافة حدث النقر على كل عنصر من عناصر القائمة
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        // إغلاق القائمة عند النقر
        document.getElementById("navbarNavDropdown").classList.remove("show");
      });
    });
  });


  


  function close_mnu() {
    let close_btn = document.querySelector(".close_menu");
    let nav_items = document.querySelectorAll(".nav-item");
  
    nav_items.forEach(item => {
      item.classList.add("hide");
    });
  
    setTimeout(() => {
      location.reload();
    }, 500); 
  }
  window.onload = function() {
    var btn = document.querySelector('.show_work');
    btn.style.backgroundColor = 'black';
  }
  