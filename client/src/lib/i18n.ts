import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        book: "Book Appointment",
        blog: "Horoscope",
        testimonials: "Testimonials",
        contact: "Contact"
      },
      site: {
        name: "Kavach Jyotish Kendra",
        tagline: "Spiritual Guidance & Astrological Wisdom"
      },
      hero: {
        title: "Welcome to Kavach Jyotish Kendra",
        subtitle: "Discover Your Destiny Through Ancient Wisdom & Modern Insights",
        description: "Experience personalized astrological guidance, Kundli analysis, Vastu consultation, and spiritual healing from our certified Jyotish experts.",
        cta1: "Book a Consultation",
        cta2: "Know Your Horoscope"
      },
      about: {
        title: "About Kavach Jyotish Kendra",
        subtitle: "Bridging ancient wisdom with modern understanding for over two decades"
      },
      services: {
        title: "Our Sacred Services",
        subtitle: "Comprehensive spiritual and astrological guidance tailored to your unique journey",
        kundli: {
          title: "Kundli Analysis",
          description: "Complete birth chart analysis with detailed predictions and remedies for life's challenges.",
          price: "₹1,500"
        },
        gemstone: {
          title: "Gemstone Consultation",
          description: "Personalized gemstone recommendations based on your planetary positions and needs.",
          price: "₹1,200"
        },
        vastu: {
          title: "Vastu Shastra",
          description: "Harmonize your living and working spaces with ancient architectural wisdom.",
          price: "₹2,000"
        },
        kavach: {
          title: "Kavach & Protection",
          description: "Sacred protective amulets and mantras for spiritual protection and prosperity.",
          price: "₹800"
        },
        horoscope: {
          title: "Daily Horoscope",
          description: "Personalized daily, weekly, and monthly horoscope readings and guidance.",
          price: "₹500"
        },
        matchmaking: {
          title: "Marriage Matching",
          description: "Comprehensive compatibility analysis for harmonious relationships and marriages.",
          price: "₹1,800"
        }
      },
      booking: {
        title: "Book Your Consultation",
        subtitle: "Take the first step towards spiritual clarity and guidance"
      },
      form: {
        nameLabel: "Full Name *",
        namePlaceholder: "Enter your full name",
        whatsappLabel: "WhatsApp Number *",
        whatsappPlaceholder: "+91 XXXXX XXXXX",
        emailLabel: "Email Address",
        emailPlaceholder: "your.email@example.com",
        dobLabel: "Date of Birth *",
        timeLabel: "Time of Birth",
        placeLabel: "Place of Birth",
        placePlaceholder: "City, State, Country",
        serviceLabel: "Service Type *",
        selectService: "Select a service",
        messageLabel: "Additional Message",
        messagePlaceholder: "Any specific questions or concerns...",
        submit: "Submit Booking Request",
        note: "We'll contact you within 24 hours to confirm your appointment."
      },
      blog: {
        title: "Daily Horoscope & Articles",
        subtitle: "Stay connected with cosmic energies and spiritual wisdom",
        viewAll: "View All Articles"
      },
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Real experiences from people whose lives have been transformed through our guidance"
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Ready to begin your spiritual journey? We're here to guide you every step of the way.",
        info: {
          title: "Contact Information"
        },
        address: {
          label: "Address",
          value: "123 Spiritual Lane, Ganesh Nagar\nPune, Maharashtra 411014\nIndia"
        },
        phone: {
          label: "Phone",
          value: "+91 98765 43210",
          value2: "+91 87654 32109"
        },
        email: {
          label: "Email",
          value: "info@kavachjyotish.com",
          value2: "consultation@kavachjyotish.com"
        },
        whatsapp: {
          label: "WhatsApp",
          value: "+91 98765 43210",
          chat: "Chat Now"
        },
        hours: {
          label: "Consultation Hours",
          weekdays: "Monday - Friday: 9:00 AM - 7:00 PM",
          saturday: "Saturday: 9:00 AM - 5:00 PM",
          sunday: "Sunday: 10:00 AM - 4:00 PM"
        },
        form: {
          title: "Send us a Message",
          nameLabel: "Your Name *",
          namePlaceholder: "Enter your name",
          emailLabel: "Email Address *",
          emailPlaceholder: "your.email@example.com",
          subjectLabel: "Subject",
          subjectPlaceholder: "What can we help you with?",
          messageLabel: "Message *",
          messagePlaceholder: "Tell us about your needs or questions...",
          submit: "Send Message"
        },
        map: {
          title: "Find Us",
          placeholder: "Google Map will be embedded here",
          address: "123 Spiritual Lane, Pune, Maharashtra"
        }
      },
      footer: {
        siteName: "Kavach Jyotish Kendra",
        tagline: "Your Spiritual Journey Begins Here",
        description: "Guiding souls towards enlightenment and prosperity through ancient Vedic wisdom and modern understanding.",
        quickLinks: {
          title: "Quick Links",
          about: "About Us",
          services: "Our Services",
          book: "Book Consultation",
          blog: "Daily Horoscope",
          testimonials: "Testimonials",
          contact: "Contact Us"
        },
        services: {
          title: "Services",
          kundli: "Kundli Analysis",
          gemstone: "Gemstone Consultation",
          vastu: "Vastu Shastra",
          kavach: "Kavach & Protection",
          matchmaking: "Marriage Matching"
        },
        admin: "Admin Panel",
        copyright: "© 2024 Kavach Jyotish Kendra. All rights reserved. | Privacy Policy | Terms of Service"
      },
      admin: {
        login: {
          title: "Admin Login",
          subtitle: "Access the dashboard",
          usernameLabel: "Username",
          passwordLabel: "Password",
          submit: "Login",
          cancel: "Cancel"
        },
        dashboard: {
          title: "Admin Dashboard",
          appointments: "Appointments",
          contacts: "Contact Messages",
          blog: "Blog Posts",
          testimonials: "Testimonials"
        }
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: "मुखपृष्ठ",
        about: "हमारे बारे में",
        services: "सेवाएं",
        book: "अपॉइंटमेंट बुक करें",
        blog: "राशिफल",
        testimonials: "प्रशंसापत्र",
        contact: "संपर्क"
      },
      site: {
        name: "कवच ज्योतिष केंद्र",
        tagline: "आध्यात्मिक मार्गदर्शन और ज्योतिषीय ज्ञान"
      },
      hero: {
        title: "कवच ज्योतिष केंद्र में आपका स्वागत है",
        subtitle: "प्राचीन ज्ञान और आधुनिक अंतर्दृष्टि के माध्यम से अपनी नियति खोजें",
        description: "हमारे प्रमाणित ज्योतिष विशेषज्ञों से व्यक्तिगत ज्योतिषीय मार्गदर्शन, कुंडली विश्लेषण, वास्तु परामर्श और आध्यात्मिक चिकित्सा का अनुभव करें।",
        cta1: "परामर्श बुक करें",
        cta2: "अपना राशिफल जानें"
      },
      about: {
        title: "कवच ज्योतिष केंद्र के बारे में",
        subtitle: "दो दशकों से अधिक समय से प्राचीन ज्ञान को आधुनिक समझ के साथ जोड़ना"
      },
      services: {
        title: "हमारी पवित्र सेवाएं",
        subtitle: "आपकी अनूठी यात्रा के लिए व्यापक आध्यात्मिक और ज्योतिषीय मार्गदर्शन",
        kundli: {
          title: "कुंडली विश्लेषण",
          description: "जीवन की चुनौतियों के लिए विस्तृत भविष्यवाणियों और उपायों के साथ पूर्ण जन्म कुंडली विश्लेषण।",
          price: "₹1,500"
        },
        gemstone: {
          title: "रत्न परामर्श",
          description: "आपकी ग्रहों की स्थिति और आवश्यकताओं के आधार पर व्यक्तिगत रत्न सिफारिशें।",
          price: "₹1,200"
        },
        vastu: {
          title: "वास्तु शास्त्र",
          description: "प्राचीन स्थापत्य ज्ञान के साथ अपने रहने और काम करने के स्थानों को सामंजस्यपूर्ण बनाएं।",
          price: "₹2,000"
        },
        kavach: {
          title: "कवच और सुरक्षा",
          description: "आध्यात्मिक सुरक्षा और समृद्धि के लिए पवित्र सुरक्षात्मक ताबीज और मंत्र।",
          price: "₹800"
        },
        horoscope: {
          title: "दैनिक राशिफल",
          description: "व्यक्तिगत दैनिक, साप्ताहिक और मासिक राशिफल पठन और मार्गदर्शन।",
          price: "₹500"
        },
        matchmaking: {
          title: "विवाह मिलान",
          description: "सामंजस्यपूर्ण रिश्तों और विवाह के लिए व्यापक संगतता विश्लेषण।",
          price: "₹1,800"
        }
      },
      booking: {
        title: "अपना परामर्श बुक करें",
        subtitle: "आध्यात्मिक स्पष्टता और मार्गदर्शन की दिशा में पहला कदम उठाएं"
      },
      form: {
        nameLabel: "पूरा नाम *",
        namePlaceholder: "अपना पूरा नाम दर्ज करें",
        whatsappLabel: "व्हाट्सऐप नंबर *",
        whatsappPlaceholder: "+91 XXXXX XXXXX",
        emailLabel: "ईमेल पता",
        emailPlaceholder: "your.email@example.com",
        dobLabel: "जन्म तिथि *",
        timeLabel: "जन्म समय",
        placeLabel: "जन्म स्थान",
        placePlaceholder: "शहर, राज्य, देश",
        serviceLabel: "सेवा प्रकार *",
        selectService: "एक सेवा चुनें",
        messageLabel: "अतिरिक्त संदेश",
        messagePlaceholder: "कोई विशिष्ट प्रश्न या चिंताएं...",
        submit: "बुकिंग अनुरोध जमा करें",
        note: "हम आपकी अपॉइंटमेंट की पुष्टि करने के लिए 24 घंटों के भीतर संपर्क करेंगे।"
      },
      blog: {
        title: "दैनिक राशिफल और लेख",
        subtitle: "ब्रह्मांडीय ऊर्जाओं और आध्यात्मिक ज्ञान के साथ जुड़े रहें",
        viewAll: "सभी लेख देखें"
      },
      testimonials: {
        title: "हमारे ग्राहक क्या कहते हैं",
        subtitle: "उन लोगों के वास्तविक अनुभव जिनका जीवन हमारे मार्गदर्शन से बदल गया है"
      },
      contact: {
        title: "संपर्क में रहें",
        subtitle: "अपनी आध्यात्मिक यात्रा शुरू करने के लिए तैयार हैं? हम हर कदम पर आपका मार्गदर्शन करने के लिए यहां हैं।",
        info: {
          title: "संपर्क जानकारी"
        },
        address: {
          label: "पता",
          value: "123 स्पिरिचुअल लेन, गणेश नगर\nपुणे, महाराष्ट्र 411014\nभारत"
        },
        phone: {
          label: "फोन",
          value: "+91 98765 43210",
          value2: "+91 87654 32109"
        },
        email: {
          label: "ईमेल",
          value: "info@kavachjyotish.com",
          value2: "consultation@kavachjyotish.com"
        },
        whatsapp: {
          label: "व्हाट्सऐप",
          value: "+91 98765 43210",
          chat: "अभी चैट करें"
        },
        hours: {
          label: "परामर्श समय",
          weekdays: "सोमवार - शुक्रवार: सुबह 9:00 - शाम 7:00",
          saturday: "शनिवार: सुबह 9:00 - शाम 5:00",
          sunday: "रविवार: सुबह 10:00 - शाम 4:00"
        },
        form: {
          title: "हमें संदेश भेजें",
          nameLabel: "आपका नाम *",
          namePlaceholder: "अपना नाम दर्ज करें",
          emailLabel: "ईमेल पता *",
          emailPlaceholder: "your.email@example.com",
          subjectLabel: "विषय",
          subjectPlaceholder: "हम आपकी कैसे मदद कर सकते हैं?",
          messageLabel: "संदेश *",
          messagePlaceholder: "हमें अपनी आवश्यकताओं या प्रश्नों के बारे में बताएं...",
          submit: "संदेश भेजें"
        },
        map: {
          title: "हमें खोजें",
          placeholder: "गूगल मैप यहां एम्बेड किया जाएगा",
          address: "123 स्पिरिचुअल लेन, पुणे, महाराष्ट्र"
        }
      },
      footer: {
        siteName: "कवच ज्योतिष केंद्र",
        tagline: "आपकी आध्यात्मिक यात्रा यहां शुरू होती है",
        description: "प्राचीन वैदिक ज्ञान और आधुनिक समझ के माध्यम से आत्माओं को ज्ञान और समृद्धि की ओर मार्गदर्शन करना।",
        quickLinks: {
          title: "त्वरित लिंक",
          about: "हमारे बारे में",
          services: "हमारी सेवाएं",
          book: "परामर्श बुक करें",
          blog: "दैनिक राशिफल",
          testimonials: "प्रशंसापत्र",
          contact: "संपर्क करें"
        },
        services: {
          title: "सेवाएं",
          kundli: "कुंडली विश्लेषण",
          gemstone: "रत्न परामर्श",
          vastu: "वास्तु शास्त्र",
          kavach: "कवच और सुरक्षा",
          matchmaking: "विवाह मिलान"
        },
        admin: "एडमिन पैनल",
        copyright: "© 2024 कवच ज्योतिष केंद्र। सभी अधिकार सुरक्षित। | गोपनीयता नीति | सेवा की शर्तें"
      },
      admin: {
        login: {
          title: "एडमिन लॉगिन",
          subtitle: "डैशबोर्ड तक पहुंच",
          usernameLabel: "उपयोगकर्ता नाम",
          passwordLabel: "पासवर्ड",
          submit: "लॉगिन",
          cancel: "रद्द करें"
        },
        dashboard: {
          title: "एडमिन डैशबोर्ड",
          appointments: "अपॉइंटमेंट्स",
          contacts: "संपर्क संदेश",
          blog: "ब्लॉग पोस्ट",
          testimonials: "प्रशंसापत्र"
        }
      }
    }
  },
  mr: {
    translation: {
      nav: {
        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        services: "सेवा",
        book: "अपॉइंटमेंट बुक करा",
        blog: "राशिफळ",
        testimonials: "प्रशंसापत्रे",
        contact: "संपर्क"
      },
      site: {
        name: "कवच ज्योतिष केंद्र",
        tagline: "आध्यात्मिक मार्गदर्शन आणि ज्योतिषीय ज्ञान"
      },
      hero: {
        title: "कवच ज्योतिष केंद्रात आपले स्वागत आहे",
        subtitle: "प्राचीन ज्ञान आणि आधुनिक अंतर्दृष्टीच्या माध्यमातून आपले भाग्य शोधा",
        description: "आमच्या प्रमाणित ज्योतिष तज्ञांकडून वैयक्तिक ज्योतिषीय मार्गदर्शन, कुंडली विश्लेषण, वास्तू सल्ला आणि आध्यात्मिक उपचाराचा अनुभव घ्या।",
        cta1: "सल्लामसलत बुक करा",
        cta2: "तुमचे राशिफळ जाणून घ्या"
      },
      about: {
        title: "कवच ज्योतिष केंद्राबद्दल",
        subtitle: "दोन दशकांहून अधिक काळ प्राचीन ज्ञानाला आधुनिक समजुतीशी जोडणे"
      },
      services: {
        title: "आमच्या पवित्र सेवा",
        subtitle: "तुमच्या अनोख्या प्रवासासाठी सर्वसमावेशक आध्यात्मिक आणि ज्योतिषीय मार्गदर्शन",
        kundli: {
          title: "कुंडली विश्लेषण",
          description: "जीवनातील आव्हानांसाठी तपशीलवार भविष्यवाणी आणि उपायांसह संपूर्ण जन्म कुंडली विश्लेषण।",
          price: "₹1,500"
        },
        gemstone: {
          title: "रत्न सल्ला",
          description: "तुमच्या ग्रहांच्या स्थिती आणि गरजांवर आधारित वैयक्तिक रत्न शिफारसी।",
          price: "₹1,200"
        },
        vastu: {
          title: "वास्तु शास्त्र",
          description: "प्राचीन स्थापत्य ज्ञानाने तुमच्या राहण्या आणि कामाच्या जागांमध्ये सुसंवाद निर्माण करा।",
          price: "₹2,000"
        },
        kavach: {
          title: "कवच आणि संरक्षण",
          description: "आध्यात्मिक संरक्षण आणि समृद्धीसाठी पवित्र संरक्षणात्मक ताबीज आणि मंत्र।",
          price: "₹800"
        },
        horoscope: {
          title: "दैनिक राशिफळ",
          description: "वैयक्तिक दैनिक, साप्ताहिक आणि मासिक राशिफळ वाचन आणि मार्गदर्शन।",
          price: "₹500"
        },
        matchmaking: {
          title: "विवाह जुळणी",
          description: "सुसंवादी नातेसंबंध आणि विवाहासाठी सर्वसमावेशक सुसंगतता विश्लेषण।",
          price: "₹1,800"
        }
      },
      booking: {
        title: "तुमची सल्लामसलत बुक करा",
        subtitle: "आध्यात्मिक स्पष्टता आणि मार्गदर्शनाच्या दिशेने पहिले पाऊल टाका"
      },
      form: {
        nameLabel: "पूर्ण नाव *",
        namePlaceholder: "तुमचे पूर्ण नाव टाका",
        whatsappLabel: "व्हाट्सअॅप नंबर *",
        whatsappPlaceholder: "+91 XXXXX XXXXX",
        emailLabel: "ईमेल पत्ता",
        emailPlaceholder: "your.email@example.com",
        dobLabel: "जन्म तारीख *",
        timeLabel: "जन्म वेळ",
        placeLabel: "जन्म ठिकाण",
        placePlaceholder: "शहर, राज्य, देश",
        serviceLabel: "सेवा प्रकार *",
        selectService: "एक सेवा निवडा",
        messageLabel: "अतिरिक्त संदेश",
        messagePlaceholder: "काही विशिष्ट प्रश्न किंवा चिंता...",
        submit: "बुकिंग विनंती सादर करा",
        note: "आम्ही तुमच्या अपॉइंटमेंटची पुष्टी करण्यासाठी 24 तासांच्या आत संपर्क साधू."
      },
      blog: {
        title: "दैनिक राशिफळ आणि लेख",
        subtitle: "वैश्विक उर्जा आणि आध्यात्मिक ज्ञानाशी जुळून राहा",
        viewAll: "सर्व लेख पहा"
      },
      testimonials: {
        title: "आमचे ग्राहक काय म्हणतात",
        subtitle: "ज्यांचे आयुष्य आमच्या मार्गदर्शनाने बदलले आहे त्यांचे खरे अनुभव"
      },
      contact: {
        title: "संपर्कात रहा",
        subtitle: "तुमचा आध्यात्मिक प्रवास सुरू करण्यास तयार आहात? आम्ही प्रत्येक पावलावर तुमचे मार्गदर्शन करण्यासाठी येथे आहोत।",
        info: {
          title: "संपर्क माहिती"
        },
        address: {
          label: "पत्ता",
          value: "123 स्पिरिच्युअल लेन, गणेश नगर\nपुणे, महाराष्ट्र 411014\nभारत"
        },
        phone: {
          label: "फोन",
          value: "+91 98765 43210",
          value2: "+91 87654 32109"
        },
        email: {
          label: "ईमेल",
          value: "info@kavachjyotish.com",
          value2: "consultation@kavachjyotish.com"
        },
        whatsapp: {
          label: "व्हाट्सअॅप",
          value: "+91 98765 43210",
          chat: "आता चॅट करा"
        },
        hours: {
          label: "सल्लामसलत वेळा",
          weekdays: "सोमवार - शुक्रवार: सकाळी 9:00 - संध्याकाळी 7:00",
          saturday: "शनिवार: सकाळी 9:00 - संध्याकाळी 5:00",
          sunday: "रविवार: सकाळी 10:00 - संध्याकाळी 4:00"
        },
        form: {
          title: "आम्हाला संदेश पाठवा",
          nameLabel: "तुमचे नाव *",
          namePlaceholder: "तुमचे नाव टाका",
          emailLabel: "ईमेल पत्ता *",
          emailPlaceholder: "your.email@example.com",
          subjectLabel: "विषय",
          subjectPlaceholder: "आम्ही तुमची कशी मदत करू शकतो?",
          messageLabel: "संदेश *",
          messagePlaceholder: "तुमच्या गरजा किंवा प्रश्नांबद्दल आम्हाला सांगा...",
          submit: "संदेश पाठवा"
        },
        map: {
          title: "आम्हाला शोधा",
          placeholder: "गूगल मॅप येथे एम्बेड केला जाईल",
          address: "123 स्पिरिच्युअल लेन, पुणे, महाराष्ट्र"
        }
      },
      footer: {
        siteName: "कवच ज्योतिष केंद्र",
        tagline: "तुमचा आध्यात्मिक प्रवास येथे सुरू होतो",
        description: "प्राचीन वैदिक ज्ञान आणि आधुनिक समजुतीच्या माध्यमातून आत्म्यांना ज्ञान आणि समृद्धीच्या दिशेने मार्गदर्शन करणे।",
        quickLinks: {
          title: "द्रुत दुवे",
          about: "आमच्याबद्दल",
          services: "आमच्या सेवा",
          book: "सल्लामसलत बुक करा",
          blog: "दैनिक राशिफळ",
          testimonials: "प्रशंसापत्रे",
          contact: "संपर्क"
        },
        services: {
          title: "सेवा",
          kundli: "कुंडली विश्लेषण",
          gemstone: "रत्न सल्ला",
          vastu: "वास्तु शास्त्र",
          kavach: "कवच आणि संरक्षण",
          matchmaking: "विवाह जुळणी"
        },
        admin: "अॅडमिन पॅनेल",
        copyright: "© 2024 कवच ज्योतिष केंद्र. सर्व हक्क राखीव. | गोपनीयता धोरण | सेवा अटी"
      },
      admin: {
        login: {
          title: "अॅडमिन लॉगिन",
          subtitle: "डॅशबोर्डमध्ये प्रवेश",
          usernameLabel: "वापरकर्ता नाव",
          passwordLabel: "पासवर्ड",
          submit: "लॉगिन",
          cancel: "रद्द करा"
        },
        dashboard: {
          title: "अॅडमिन डॅशबोर्ड",
          appointments: "अपॉइंटमेंट्स",
          contacts: "संपर्क संदेश",
          blog: "ब्लॉग पोस्ट",
          testimonials: "प्रशंसापत्रे"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
