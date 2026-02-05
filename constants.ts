import { Translation, Language } from './types';

export const CONTENT: Record<Language, Translation> = {
  gu: {
    title: "જન કલ્યાણ સંકુલ",
    subtitle: "વિઝન ૨૦૩૫ - એક દાયકાનો માસ્ટર પ્લાન",
    welcome: "નમસ્તે યશભાઈ",
    vision: "મધ્યમ વર્ગ માટે સ્વપ્નનું ઘર અને આર્થિક સુરક્ષા.",
    tabs: {
      roadmap: "રોડમેપ",
      management: "વ્યવસ્થા",
      action: "એક્શન પ્લાન",
      advisor: "AI સલાહકાર"
    },
    stages: [
      {
        id: 1,
        year: "વર્ષ ૧ - ૩",
        title: "પાયો નાખવો",
        entity: "ક્રેડિટ કો-ઓપરેટિવ સોસાયટી",
        description: "મૂડી અને વિશ્વાસ ભેગો કરવાનું એન્જિન.",
        steps: [
          "રજીસ્ટ્રેશન અને ૫૦૦-૧૦૦૦ સભ્યોની નોંધણી",
          "માસિક ₹૫૦૦/₹૧૦૦૦ ની ફરજિયાત બચત",
          "નાની લોન આપીને વ્યાજની આવક શરૂ કરવી",
          "૩ વર્ષ સુધી માત્ર બચત, મકાનની જાહેરાત નહીં"
        ],
        icon: "bank"
      },
      {
        id: 2,
        year: "વર્ષ ૩ - ૪",
        title: "સમાજ સેવા",
        entity: "પબ્લિક ચેરીટેબલ ટ્રસ્ટ",
        description: "દાન અને જમીન મેળવવાનું માધ્યમ.",
        steps: [
          "ચેરીટી કમિશનર અને 80G રજીસ્ટ્રેશન",
          "દાતાઓ પાસેથી જમીન મેળવવા પ્રયાસ",
          "નબળા સભ્યો માટે મદદ",
          "સામાજિક પ્રતિષ્ઠામાં વધારો"
        ],
        icon: "heart"
      },
      {
        id: 3,
        year: "વર્ષ ૪+",
        title: "સપનું સાકાર",
        entity: "હાઉસિંગ સોસાયટી",
        description: "બાંધકામ અને ઘરનું વિતરણ.",
        steps: [
          "ક્રેડિટ સોસાયટીમાંથી બુકિંગ અમાઉન્ટ ટ્રાન્સફર",
          "PMAY અને બેંક લોન સહાય",
          "ગ્રાઉન્ડ ફ્લોર પર દુકાનો અને EV સ્ટેશન",
          "ઉપરના માળ પર રહેણાંક ફ્લેટ"
        ],
        icon: "home"
      }
    ],
    management: {
      title: "૩ ગોલ્ડન રૂલ્સ",
      rules: [
        {
          title: "ઝીરો મેન્ટેનન્સ",
          description: "દુકાનોના ભાડામાંથી સોસાયટીનો ખર્ચ (ચોકીદાર, લાઈટબિલ) નીકળશે.",
          icon: "wrench"
        },
        {
          title: "વેલ્ફેર ફંડ",
          description: "સ્વૈચ્છિક ₹૫૦૦ વધુ આપનારને ઈમરજન્સીમાં ટ્રસ્ટ મદદ કરશે.",
          icon: "shield"
        },
        {
          title: "પારદર્શિતા",
          description: "દર વર્ષે ઓડિટ અને દરેક સભ્યને ડિજિટલ પાસબુક.",
          icon: "eye"
        }
      ]
    },
    actions: {
      title: "કાલથી શું કરવું?",
      items: [
        "સહકારી વકીલને મળીને રજીસ્ટ્રેશન પ્રક્રિયા સમજો.",
        "૧૫ વિશ્વાસુ લોકોની કમિટી બનાવો.",
        "એક નાની ઓફિસ (ભાડે) રાખો.",
        "સભ્યોનું લિસ્ટ બનાવવાનું શરૂ કરો."
      ]
    },
    ai: {
      title: "AI સલાહકાર",
      placeholder: "તમારો પ્રશ્ન પૂછો (દા.ત. સોસાયટી રજીસ્ટ્રેશન માટે કયા ડોક્યુમેન્ટ જોઈએ?)",
      button: "પૂછો",
      disclaimer: "AI જવાબો માત્ર માર્ગદર્શન માટે છે."
    }
  },
  en: {
    title: "Jan Kalyan Sankul",
    subtitle: "Vision 2035 - A Decade Master Plan",
    welcome: "Hello Yashbhai",
    vision: "Economic security and housing for the middle class.",
    tabs: {
      roadmap: "Roadmap",
      management: "Management",
      action: "Action Plan",
      advisor: "AI Advisor"
    },
    stages: [
      {
        id: 1,
        year: "Year 1 - 3",
        title: "Foundation",
        entity: "Credit Co-operative Society",
        description: "Engine to generate capital and trust.",
        steps: [
          "Registration and enroll 500-1000 members",
          "Mandatory monthly savings of ₹500/₹1000",
          "Start income via small interest loans",
          "Focus on savings for 3 years, no housing promises yet"
        ],
        icon: "bank"
      },
      {
        id: 2,
        year: "Year 3 - 4",
        title: "Social Service",
        entity: "Public Charitable Trust",
        description: "Medium for donations and land acquisition.",
        steps: [
          "Charity Commissioner & 80G Registration",
          "Acquire land donations from donors",
          "Help weaker members",
          "Increase social standing"
        ],
        icon: "heart"
      },
      {
        id: 3,
        year: "Year 4+",
        title: "Realization",
        entity: "Housing Society",
        description: "Construction and allocation.",
        steps: [
          "Transfer booking amount from Credit Society",
          "Assist with PMAY and Bank Loans",
          "Ground floor shops & EV Stations",
          "Residential flats on upper floors"
        ],
        icon: "home"
      }
    ],
    management: {
      title: "3 Golden Rules",
      rules: [
        {
          title: "Zero Maintenance",
          description: "Shop rent covers society costs (Guard, Electricity).",
          icon: "wrench"
        },
        {
          title: "Welfare Fund",
          description: "Optional ₹500 extra contribution ensures emergency trust aid.",
          icon: "shield"
        },
        {
          title: "Transparency",
          description: "Annual Audit and Digital Passbook for every member.",
          icon: "eye"
        }
      ]
    },
    actions: {
      title: "Action Plan",
      items: [
        "Meet a cooperative lawyer for registration.",
        "Form a committee of 15 trusted people.",
        "Rent a small office space.",
        "Start listing potential members."
      ]
    },
    ai: {
      title: "AI Advisor",
      placeholder: "Ask a question (e.g. Documents needed for registration?)",
      button: "Ask",
      disclaimer: "AI responses are for guidance only."
    }
  },
  hi: {
    title: "जन कल्याण संकुल",
    subtitle: "विज़न २०३५ - एक दशक का मास्टर प्लान",
    welcome: "नमस्ते यशभाई",
    vision: "मध्यम वर्ग के लिए घर और आर्थिक सुरक्षा।",
    tabs: {
      roadmap: "रोडमैप",
      management: "व्यवस्था",
      action: "एक्शन प्लान",
      advisor: "AI सलाहकार"
    },
    stages: [
      {
        id: 1,
        year: "वर्ष १ - ३",
        title: "नींव रखना",
        entity: "क्रेडिट को-ऑपरेटिव सोसाइटी",
        description: "पूंजी और विश्वास जुटाने का इंजन।",
        steps: [
          "पंजीकरण और ५००-१००० सदस्यों का नामांकन",
          "₹५००/₹१००० की अनिवार्य मासिक बचत",
          "छोटे ऋणों के माध्यम से आय शुरू करें",
          "३ साल तक केवल बचत पर ध्यान दें"
        ],
        icon: "bank"
      },
      {
        id: 2,
        year: "वर्ष ३ - ४",
        title: "समाज सेवा",
        entity: "पब्लिक चैरिटेबल ट्रस्ट",
        description: "दान और भूमि अधिग्रहण का माध्यम।",
        steps: [
          "चैरिटी कमिश्नर और 80G पंजीकरण",
          "दाताओं से भूमि दान प्राप्त करें",
          "कमजोर सदस्यों की मदद करें",
          "सामाजिक प्रतिष्ठा बढ़ाएं"
        ],
        icon: "heart"
      },
      {
        id: 3,
        year: "वर्ष ४+",
        title: "सपना साकार",
        entity: "हाउसिंग सोसाइटी",
        description: "निर्माण और आवंटन।",
        steps: [
          "क्रेडिट सोसाइटी से बुकिंग राशि ट्रांसफर",
          "PMAY और बैंक ऋण सहायता",
          "ग्राउंड फ्लोर पर दुकानें और EV स्टेशन",
          "ऊपरी मंजिलों पर आवासीय फ्लैट"
        ],
        icon: "home"
      }
    ],
    management: {
      title: "३ सुनहरे नियम",
      rules: [
        {
          title: "जीरो मेंटेनेंस",
          description: "दुकान के किराए से सोसाइटी का खर्च निकलेगा।",
          icon: "wrench"
        },
        {
          title: "कल्याण कोष",
          description: "स्वैच्छिक ₹५०० अतिरिक्त देने पर ट्रस्ट से मदद मिलेगी।",
          icon: "shield"
        },
        {
          title: "पारदर्शिता",
          description: "वार्षिक ऑडिट और प्रत्येक सदस्य के लिए डिजिटल पासबुक।",
          icon: "eye"
        }
      ]
    },
    actions: {
      title: "एक्शन प्लान",
      items: [
        "पंजीकरण के लिए किसी सहकारी वकील से मिलें।",
        "१५ भरोसेमंद लोगों की समिति बनाएं।",
        "एक छोटा कार्यालय किराए पर लें।",
        "संभावित सदस्यों की सूची बनाना शुरू करें।"
      ]
    },
    ai: {
      title: "AI सलाहकार",
      placeholder: "प्रश्न पूछें (उदा. पंजीकरण के लिए आवश्यक दस्तावेज?)",
      button: "पूछें",
      disclaimer: "AI प्रतिक्रियाएँ केवल मार्गदर्शन के लिए हैं।"
    }
  }
};
