import type { RequestHandler } from './$types';

interface ClassEvent {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  date: string;
  time: string;
  duration: string;
  ageGroup: string;
  maxParticipants: number;
  location: string;
  instructor: string;
  titoUrl: string;
  benefits: string[];
  schedule: string[];
  requirements: string[];
}

const classesData: ClassEvent[] = [
  {
    id: "1",
    title: "Kreatywne Warsztaty Plastyczne",
    description: "Odkrywajcie świat sztuki! Dzieci będą malować, kleić i tworzyć własne dzieła sztuki.",
    longDescription: "Nasze warsztaty plastyczne to wyjątkowa okazja dla dzieci do odkrycia swojej kreatywności i artystycznych talentów. Podczas zajęć dzieci poznają różne techniki plastyczne, od malarstwa temperą, przez collage, po prace z gliną. Każde dziecko stworzy własne unikalne dzieło, które zabierze do domu. Warsztaty prowadzone są przez doświadczoną instruktorkę sztuki, która zadba o to, aby każde dziecko czuło się komfortowo i mogło rozwijać swoją wyobraźnię.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    date: "15 listopada 2025",
    time: "10:00",
    duration: "2 godziny",
    ageGroup: "4-7 lat",
    maxParticipants: 12,
    location: "Sala Artystyczna, Wybawialnia",
    instructor: "Anna Kowalska - absolwentka ASP",
    titoUrl: "https://ti.to/your-event/warsztaty-plastyczne",
    benefits: [
      "Rozwój kreatywności i wyobraźni",
      "Nauka różnych technik plastycznych",
      "Poprawa koordynacji ręka-oko",
      "Budowanie pewności siebie poprzez twórczość",
      "Zabawa w przyjaznej atmosferze"
    ],
    schedule: [
      "10:00-10:15 - Powitanie i zapoznanie z materiałami",
      "10:15-11:00 - Malarstwo temperą - kolorowe obrazy",
      "11:00-11:15 - Przerwa na sok i ciastka",
      "11:15-11:45 - Collage z kolorowych papierów",
      "11:45-12:00 - Prezentacja prac i pożegnanie"
    ],
    requirements: [
      "Wygodne ubranie (możliwe zabrudzenie farbami)",
      "Zamknięte buty",
      "Pozytywne nastawienie i chęć do zabawy!"
    ]
  },
  {
    id: "2",
    title: "Zabawy Sensoryczne dla Maluchów",
    description: "Stymulujące zajęcia sensoryczne dla najmłodszych. Eksperymentujemy z różnymi fakturami, kolorami i dźwiękami.",
    longDescription: "Zabawy sensoryczne to fantastyczna forma wspierania rozwoju najmłodszych dzieci. Podczas zajęć maluchy będą eksplorować różne tekstury, kolory, zapachy i dźwięki w bezpiecznym i kontrolowanym środowisku. Przygotowaliśmy specjalne strefy sensoryczne z materiałami takimi jak piasek kinetyczny, wodne perełki, kolorowe makarony czy pianki. Wszystkie aktywności są dostosowane do wieku dzieci i prowadzone pod czujnym okiem wykwalifikowanej terapeutki.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    date: "18 listopada 2025",
    time: "11:00",
    duration: "1.5 godziny",
    ageGroup: "1-3 lata",
    maxParticipants: 8,
    location: "Strefa Sensoryczna, Wybawialnia",
    instructor: "Magdalena Wiśniewska - pedagog specjalny",
    titoUrl: "https://ti.to/your-event/zabawy-sensoryczne",
    benefits: [
      "Stymulacja rozwoju zmysłów",
      "Poprawa koordynacji i motoryki",
      "Wspieranie rozwoju poznawczego",
      "Nauka poprzez zabawę",
      "Spokojna, przyjazna atmosfera dla maluchów"
    ],
    schedule: [
      "11:00-11:15 - Powitanie i oswojenie z przestrzenią",
      "11:15-11:45 - Zabawa z różnymi teksturami",
      "11:45-12:00 - Przerwa na przekąski",
      "12:00-12:30 - Strefa wodna i kolorowe eksperymenty"
    ],
    requirements: [
      "Zapasowe ubranie dla dziecka",
      "Pampersopieluszki (jeśli potrzebne)",
      "Ulubiona zabawka/kocyk dla bezpieczeństwa",
      "Obecność rodzica/opiekuna wymagana"
    ]
  },
  {
    id: "3",
    title: "Teatrzyk dla Dzieci",
    description: "Wprowadzenie do świata teatru! Dzieci wcielą się w różne role i poznają podstawy aktorstwa.",
    longDescription: "Teatrzyk dla dzieci to magiczna podróż do świata wyobraźni i wcielania się w różne postaci. Dzieci nauczą się podstaw aktorstwa, dykcji i ruchu scenicznego. Podczas warsztatów stworzymy wspólnie małe przedstawienie, w którym każde dziecko będzie miało swoją rolę. Zajęcia rozwijają pewność siebie, umiejętności komunikacyjne i kreatywność. Prowadzone są przez profesjonalną aktorkę z wieloletnim doświadczeniem w pracy z dziećmi.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    date: "22 listopada 2025",
    time: "15:00",
    duration: "2 godziny",
    ageGroup: "5-10 lat",
    maxParticipants: 15,
    location: "Sala Teatralna, Wybawialnia",
    instructor: "Katarzyna Nowak - aktorka teatralna",
    titoUrl: "https://ti.to/your-event/teatrzyk",
    benefits: [
      "Rozwój pewności siebie",
      "Poprawa umiejętności komunikacyjnych",
      "Nauka pracy w grupie",
      "Rozwijanie wyobraźni i kreatywności",
      "Podstawy sztuki teatralnej"
    ],
    schedule: [
      "15:00-15:20 - Zabawy integracyjne i rozgrzewka",
      "15:20-16:00 - Nauka scen i ról",
      "16:00-16:15 - Przerwa",
      "16:15-16:45 - Próby przedstawienia",
      "16:45-17:00 - Pokaz dla rodziców"
    ],
    requirements: [
      "Wygodne ubranie umożliwiające swobodny ruch",
      "Otwartość na zabawę i wcielanie się w role",
      "Rodzice zapraszani na finałowy pokaz"
    ]
  },
  {
    id: "4",
    title: "Zabawy Ruchowe i Gimnastyka",
    description: "Aktywne zajęcia pełne ruchu! Gry zespołowe, tory przeszkód i ćwiczenia rozwijające sprawność.",
    longDescription: "Zajęcia gimnastyczne to idealna forma aktywności dla pełnych energii maluchów! Podczas zajęć dzieci będą uczestniczyć w zabawach ruchowych, pokonywać tory przeszkód i ćwiczyć podstawowe elementy gimnastyki. Wszystko odbywa się w formie zabawy, co sprawia, że dzieci świetnie się bawią, jednocześnie rozwijając swoją sprawność fizyczną. Zajęcia prowadzone są przez wykwalifikowanego trenera z certyfikatem instruktora gimnastyki dla dzieci.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    date: "25 listopada 2025",
    time: "10:30",
    duration: "1.5 godziny",
    ageGroup: "3-6 lat",
    maxParticipants: 10,
    location: "Sala Sportowa, Wybawialnia",
    instructor: "Tomasz Lewandowski - instruktor gimnastyki",
    titoUrl: "https://ti.to/your-event/gimnastyka",
    benefits: [
      "Rozwój sprawności fizycznej",
      "Poprawa koordynacji i równowagi",
      "Nauka pracy w zespole",
      "Rozładowanie energii",
      "Budowanie zdrowych nawyków"
    ],
    schedule: [
      "10:30-10:45 - Rozgrzewka i zabawy integracyjne",
      "10:45-11:15 - Tory przeszkód",
      "11:15-11:30 - Przerwa na wodę",
      "11:30-12:00 - Gry zespołowe i zabawy ruchowe"
    ],
    requirements: [
      "Strój sportowy",
      "Obuwie sportowe na zmianę",
      "Butelka wody",
      "Ręcznik"
    ]
  },
  {
    id: "5",
    title: "Warsztaty Kulinarne dla Dzieci",
    description: "Przygotowujemy proste i zdrowe przekąski! Dzieci nauczą się podstaw gotowania.",
    longDescription: "Warsztaty kulinarne to świetna zabawa połączona z nauką! Dzieci poznają podstawy gotowania, zasady higieny w kuchni oraz dowiedzą się skąd pochodzą produkty żywnościowe. Razem przygotujemy proste, zdrowe i kolorowe przekąski, które dzieci będą mogły zjeść lub zabrać do domu. Wszystkie przepisy są dostosowane do wieku uczestników i przygotowane z bezpiecznych, naturalnych składników.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    date: "29 listopada 2025",
    time: "14:00",
    duration: "2.5 godziny",
    ageGroup: "6-12 lat",
    maxParticipants: 10,
    location: "Kuchnia Edukacyjna, Wybawialnia",
    instructor: "Chef Paweł Zieliński - kucharz i edukator",
    titoUrl: "https://ti.to/your-event/warsztaty-kulinarne",
    benefits: [
      "Nauka podstaw gotowania",
      "Poznanie zdrowych produktów",
      "Rozwój samodzielności",
      "Praca w czystości i higienie",
      "Własnoręcznie przygotowane przekąski"
    ],
    schedule: [
      "14:00-14:20 - Powitanie i zasady bezpieczeństwa",
      "14:20-15:00 - Przygotowanie kolorowych kanapek",
      "15:00-15:45 - Robienie zdrowych muffinek",
      "15:45-16:00 - Przerwa i degustacja",
      "16:00-16:30 - Dekorowanie i pakowanie"
    ],
    requirements: [
      "Fartuch lub ubranie, które można zabrudzić",
      "Opakowania na wynos (zapewniamy)",
      "Informacja o alergiach pokarmowych"
    ]
  },
  {
    id: "6",
    title: "Zajęcia Muzyczne i Rytmika",
    description: "Muzyka, taniec i zabawa! Dzieci poznają instrumenty i śpiewają piosenki.",
    longDescription: "Zajęcia muzyczne to radosna przygoda w świecie dźwięków i rytmów! Dzieci poznają różne instrumenty muzyczne, nauczą się prostych piosenek i będą tańczyć przy rytmicznych zabawach. Zajęcia rozwijają słuch muzyczny, poczucie rytmu i koordynację ruchową. Wszystko odbywa się w atmosferze zabawy i radości. Prowadzone przez doświadczoną pedagog muzyki z pasją do pracy z najmłodszymi.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    date: "2 grudnia 2025",
    time: "11:30",
    duration: "1.5 godziny",
    ageGroup: "2-5 lat",
    maxParticipants: 12,
    location: "Sala Muzyczna, Wybawialnia",
    instructor: "Julia Kowalczyk - pedagog muzyki",
    titoUrl: "https://ti.to/your-event/rytmika",
    benefits: [
      "Rozwój słuchu muzycznego",
      "Nauka poczucia rytmu",
      "Poznanie instrumentów",
      "Radość z muzyki i tańca",
      "Integracja w grupie"
    ],
    schedule: [
      "11:30-11:45 - Powitanie muzyczne",
      "11:45-12:15 - Zabawy z instrumentami",
      "12:15-12:30 - Przerwa",
      "12:30-13:00 - Taniec i piosenki"
    ],
    requirements: [
      "Wygodne ubranie",
      "Skarpetki antypoślizgowe",
      "Dobry humor i chęć do śpiewania!"
    ]
  }
];

export const GET: RequestHandler = async ({ url }) => {
    
    if(!url.searchParams.has('activity')) {

        return new Response(JSON.stringify({ classesData }));
    }

    const activityId = url.searchParams.get('activity');

    const activity = activityId ? classesData.find(c => c.id === activityId) : undefined;

    if (!activity) {
        return new Response(JSON.stringify({ error: 'Activity not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ activity }));
};