/* Shared performance listings. Add new events here; both pages update automatically. */
(function () {
  'use strict';
  const performances = [
  {
    "startDate": "2026-12-31",
    "endDate": "2026-12-31",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-12-31\" data-end-date=\"2026-12-31\"><div class=\"event-date\"><strong>DEC 31</strong><span>New Year’s Eve</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Ashkenaz · Berkeley</span><h3>New Year’s Eve with Fanfare Zambaleta</h3><div class=\"event-details\" hidden><p><strong>Thursday, December 31, 2026 · New Year’s Eve</strong><br>Ashkenaz · Berkeley</p><p><strong>Peter Bonos performs on trumpet with Fanfare Zambaleta.</strong></p><p>More information to come...</p></div></div></article>"
  },
  {
    "startDate": "2026-12-24",
    "endDate": "2026-12-24",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-12-24\" data-end-date=\"2026-12-24\"><div class=\"event-date\"><strong>DEC 24</strong><span>Thursday · Time TBA</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Ashkenaz · Berkeley</span><h3>Borscht Bay Nitl Nakht Yiddish Cabaret with Krekhts</h3><div class=\"event-details\" hidden><p><strong>Thursday, December 24, 2026 · Christmas Eve</strong><br>Ashkenaz Music &amp; Dance Community Center<br>1317 San Pablo Avenue, Berkeley</p><p><strong>Peter Bonos performs with Krekhts.</strong></p><p>Celebrate Nitl Nakht with Krekhts at Borscht Bay’s Yiddish cabaret, bringing klezmer, Yiddish song and irreverent celebration to Christmas Eve.</p><p>Performance time, full lineup and ticket information to be announced.</p><p><a class=\"read-further\" href=\"https://klezcalifornia.org/acadp_listings/krekhts/\" target=\"_blank\" rel=\"noopener\">About Krekhts ↗</a></p><p><a class=\"read-further\" href=\"https://krekhts.bandcamp.com/album/live-from-the-oblast\" target=\"_blank\" rel=\"noopener\">Listen: Live from the Oblast ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-12-06",
    "endDate": "2026-12-06",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-12-06\" data-end-date=\"2026-12-06\"><div class=\"event-date\"><strong>DEC 6</strong><span>Sunday · Set time TBA</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Peninsula Jewish Community Center · Foster City</span><h3>Latkepalooza with Orchestra Euphonos</h3><div class=\"event-details\" hidden><p><strong>Sunday, December 6, 2026</strong><br>Peninsula Jewish Community Center (PJCC)<br>800 Foster City Blvd., Foster City, CA 94404</p><p><strong>Orchestra Euphonos will perform. Set time to be announced.</strong></p><p>Celebrate Hanukkah with community, live klezmer music and family activities at PJCC’s annual Latkepalooza.</p><p><strong>Free admission · All ages welcome.</strong></p><p><a class=\"read-further\" href=\"https://www.facebook.com/events/2723593118097347/\" target=\"_blank\" rel=\"noopener\">Facebook event ↗</a></p><p><a class=\"read-further\" href=\"https://pjcc.org/latkepalooza/\" target=\"_blank\" rel=\"noopener\">More information ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-11-28",
    "endDate": "2026-11-28",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-11-28\" data-end-date=\"2026-11-28\"><div class=\"event-date\"><strong>NOV 28</strong><span>Saturday · 11 AM–2 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Bernal Cutlery · San Francisco</span><h3>Small Business Saturday Street Party with Ionela Guzic</h3><div class=\"event-details\" hidden><p><strong>11 AM–2 PM · Bernal Cutlery · 766 Valencia St, San Francisco.</strong></p><p>Ionela joins Peter Bonos and Bay Area musicians for a lively afternoon of Romanian and Eastern European music on Valencia Street.</p></div></div></article>"
  },
  {
    "startDate": "2026-11-27",
    "endDate": "2026-11-28",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-11-27\" data-end-date=\"2026-11-28\"><div class=\"event-date\"><strong>NOV 27–28</strong><span>Friday–Saturday</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Croatian American Cultural Center · San Francisco</span><h3>Kolo Festival</h3><div class=\"event-details\" hidden><p><strong>Friday–Saturday, November 27–28, 2026</strong><br>Croatian American Cultural Center<br>60 Onondaga Avenue, San Francisco</p><p><strong>Friday: Ionela Guzic performs her original dance/pop hits in the Kafana. Saturday: Ionela joins Fanfare Zambaleta as featured vocalist in the main hall, with Peter Bonos performing.</strong></p><p>The 75th Kolo Festival celebrates Balkan and beyond music and dance, with daytime dance workshops, instrumental and vocal classes, jam sessions, and evening live music dance parties in the Main Room and Kafana.</p><p>Friday and Saturday doors open at 8:30 AM. Exact performance times are still being confirmed; check the festival schedule for updates.</p><p><a class=\"read-further\" href=\"https://kolofestival.org/schedule.html\" target=\"_blank\" rel=\"noopener\">Festival schedule &amp; information ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-11-24",
    "endDate": "2026-11-24",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-11-24\" data-end-date=\"2026-11-24\"><div class=\"event-date\"><strong>NOV 24</strong><span>Tuesday · 6 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Private event · El Sobrante</span><h3>Full Moon Concert with Ionela Guzic</h3><div class=\"event-details\" hidden><p><strong>6 PM potluck · Ionela performs at 9:30 PM · El Sobrante.</strong></p><p>A special performance by Ionela Guzic, plus more bands and a potluck dinner; contact <a href=\"mailto:peterbonos@gmail.com\">Peter Bonos</a> for details.</p></div></div></article>"
  },
  {
    "startDate": "2026-11-22",
    "endDate": "2026-11-22",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-11-22\" data-end-date=\"2026-11-22\"><div class=\"event-date\"><strong>NOV 22</strong><span>Sunday · 7:30 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Ashkenaz · Berkeley</span><h3>Balkan Sundays: Bonos Balkan Jam + Shireen's Birthday Bash!</h3><div class=\"event-details\" hidden><p><strong>Sunday, November 22, 2026</strong><br>Ashkenaz Music &amp; Dance Community Center<br>1317 San Pablo Avenue, Berkeley</p><p><strong>Free admission · Doors open and Balkan dance lesson begins at 7:30 PM.</strong></p><p>Balkan Sundays is back at Ashkenaz on November 22nd, and this time we're bringing together a killer lineup for a night of Balkan, Romanian, Klezmer, and Turkish music!</p><p>The house band will be led by Peter Bonos on trumpet, joined by Sean Tergis on drums and Leo Peringer on bass. We'll be playing tunes from all over Eastern Europe and beyond, with plenty of room for guest musicians to jump in and take the music wherever it goes. We'll also be featuring vocalist Dr. Shireen Nabatian, as we celebrate both her birthday and her graduation from her PhD program in Ethnomusicology at UC Santa Cruz.</p><p>We’re also expecting Romanian singer Ionela Guzic along with some of the heaviest-hitting local brass players dropping in. Expect a big sound, lots of horns, and plenty of surprises!</p><p>Doors open at 7:30 pm, when Ivan Velev kicks things off with a pre-show Balkan dance lesson! Learn some steps, warm up the dance floor, and get ready for the jam.</p><p>As always, Balkan Sundays is an open jam, so bring your instruments and join us onstage. Brass, woodwinds, strings, percussion, singers—everyone is welcome to sit in. And if you're not playing, come dance! Contact <a href=\"mailto:peterbonos@gmail.com\">peterbonos@gmail.com</a> for the song list.</p></div></div></article>"
  },
  {
    "startDate": "2026-11-21",
    "endDate": "2026-11-21",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-11-21\" data-end-date=\"2026-11-21\"><div class=\"event-date\"><strong>NOV 21</strong><span>Saturday · 8 PM–midnight</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">The Starry Plough · Berkeley</span><h3>Berkeley Balkan Bacchanal: Ionela Guzic with Orchestra Euphonos + Lars and In Charge</h3><div class=\"event-details\" hidden><p><strong>Saturday, November 21, 2026</strong><br>Doors: 7 PM · Show: 8 PM<br>The Starry Plough Pub · 3101 Shattuck Ave, Berkeley</p><p><strong>Orchestra Euphonos</strong> — 8–10 PM<br><strong>Lars and In Charge</strong> — 10 PM–midnight</p><p>Ionela Guzic joins Peter Bonos and Orchestra Euphonos for Romanian folk favorites, original songs and Balkan dance music. Lars and In Charge follows with fiddle-driven Turkish, Greek and Romani dance music.</p><p>Orchestra Euphonos features Peter Bonos (trumpet and oud), Greg Jenkins (sax and clarinet), Aaron Kierbel (drums), and Kim Goldov (violin and mandolin), with featured Romanian vocalist Ionela Guzic.</p><p><strong>Tickets: $15–$20 · Ages 21+</strong></p><p><a class=\"read-further\" href=\"https://www.etix.com/ticket/p/41129043/berkeley-balkan-bacchanal-berkeley-the-starry-plough?partner_id=100\" target=\"_blank\" rel=\"noopener\">Buy tickets ↗</a></p><p><a class=\"read-further\" href=\"https://berkeleybalkanbacchanal.com/2026/10/30/lars-and-in-charge-orchestra-euphonos/\" target=\"_blank\" rel=\"noopener\">Event details ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-11-21",
    "endDate": "2026-11-21",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-11-21\" data-end-date=\"2026-11-21\"><div class=\"event-date\"><strong>NOV 21</strong><span>Saturday night · midnight</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">World Folk Jam · Venue TBA</span><h3>Ionela Guzic at Oshan’s World Folk Jam</h3><div class=\"event-details\" hidden><p><strong>Midnight after Saturday, November 21 (early Sunday, November 22).</strong></p><p>Ionela brings her dance hits to a late-night set at Oshan’s World Folk Jam, with Mayvn DJing; venue to be announced.</p></div></div></article>"
  },
  {
    "startDate": "2026-11-15",
    "endDate": "2026-11-15",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-11-15\" data-end-date=\"2026-11-15\"><div class=\"event-date\"><strong>NOV 15</strong><span>Sunday · 2–5 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Congregation Netivot Shalom · Berkeley</span><h3>The Joy of Jewish Music and Dance</h3><div class=\"event-details joy-november-details\" hidden><img class=\"joy-teacher-banner\" src=\"https://raw.githubusercontent.com/peterbonos-bot/klezcalifornia/main/images/email-v063/joy-header-nov-teachers.png\" alt=\"November 15 teachers, left to right: Peter Bonos, Janetta Redžić, Alex Sandrovschii, Kim Goldov and Aaron Kierbel\" loading=\"lazy\"><h4>The Romanian/Klezmer Connection</h4><p><strong>Sunday, November 15, 2026 · 2–5 pm</strong><br>Congregation Netivot Shalom<br>1316 University Avenue, Berkeley</p><p>Romanian folk music and klezmer share melodies and dance rhythms shaped by centuries of musical exchange. As Jewish communities emigrated from Romania, many of the everyday connections that sustained this musical exchange weakened. This hands-on workshop will teach guests music, singing, and folk dance and help reforge those connections and bring the traditions into conversation once again.</p><p><strong>Featured instructors:</strong> Peter Bonos (trumpet, Orchestra Euphonos), Janetta Redžić (dance leader), Alex Sandrovschii (assistant dance leader), Kim Goldov (violin and mandolin), and Aaron Kierbel (drums).</p><p><a class=\"read-further\" href=\"https://klezcalifornia.org/events/the-joy-of-jewish-music-and-dance-1126/\" target=\"_blank\" rel=\"noopener\">Register for November 15 ↗</a></p><h4>Meet Your November Teachers</h4><section class=\"joy-teacher\"><div class=\"joy-teacher-photos\"><img src=\"https://raw.githubusercontent.com/peterbonos-bot/klezcalifornia/main/images/email-v047/joy-email-photo-03.jpg\" alt=\"Peter Bonos\" loading=\"lazy\"></div><div><h5>Peter Bonos</h5><p class=\"joy-teacher-role\">Trumpet · Orchestra Euphonos</p><p>Bay Area musician and bandleader specializing in klezmer, Romanian and Balkan styles. Peter leads Orchestra Euphonos, performs with Fanfare Zambaleta and produces the Berkeley Balkan Bacchanal.</p></div></section>\n<section class=\"joy-teacher\"><div class=\"joy-teacher-photos\"><img src=\"https://raw.githubusercontent.com/peterbonos-bot/klezcalifornia/main/images/email-v066/Janetta-banner-bio.jpg\" alt=\"Janetta Redžić\" loading=\"lazy\"><img src=\"https://raw.githubusercontent.com/peterbonos-bot/klezcalifornia/main/images/email-v066/Alex-banner-bio.jpg\" alt=\"Alex Sandrovschii\" loading=\"lazy\"></div><div><h5>Janetta Redžić &amp; Alexandru “Alex” Sandrovschii</h5><p class=\"joy-teacher-role\">Dance · Čardak</p><p>Founder of the pan-Balkan ensemble Čardak, Janetta teaches through connection and shared movement. She is joined by Alexandru Sandrovschii, a Moldovan-Jewish member of Čardak, to lead the dance workshop.</p></div></section>\n<section class=\"joy-teacher\"><div class=\"joy-teacher-photos\"><img src=\"https://raw.githubusercontent.com/peterbonos-bot/klezcalifornia/main/images/email-v047/joy-email-photo-04.jpg\" alt=\"Kim Goldov\" loading=\"lazy\"></div><div><h5>Kim Goldov</h5><p class=\"joy-teacher-role\">Violin</p><p>Visiting from Seattle, a longtime klezmer and Eastern European music performer, Kim plays with the Freylakh Klezmer Band and Talne Trio, bringing decades of ensemble experience to the workshop.</p></div></section>\n<section class=\"joy-teacher\"><div class=\"joy-teacher-photos\"><img src=\"https://raw.githubusercontent.com/peterbonos-bot/klezcalifornia/main/images/email-v047/joy-email-photo-05.jpg\" alt=\"Aaron Kierbel\" loading=\"lazy\"></div><div><h5>Aaron Kierbel</h5><p class=\"joy-teacher-role\">Percussion</p><p>Aaron has played klezmer for over 20 years with bands such as the Gonifs and Kugelplex. Aaron currently plays with Orchestra Euphonos, Orchestra Gold and <a href=\"https://www.youtube.com/watch?v=iryYFfYD0Co\" target=\"_blank\" rel=\"noopener\">String, Skin and Breath</a>. An experienced educator, Aaron’s participatory workshops bring people together through rhythm, movement, and play.</p></div></section><h4>Learn. Play. Dance.</h4><p>Choose music or dance instruction, then gather to share what you’ve learned and enjoy a dance party. All instruments, singers, and dancers are welcome. Basic instrumental proficiency is recommended for musicians.</p><p><strong>$25–$54 sliding scale. Ages 18 and under attend free.</strong><br>No one turned away for lack of funds. Arrange volunteer/trade or reduced-price admission in advance via <a href=\"mailto:joy@klezcalifornia.org\">joy@klezcalifornia.org</a>.</p><p>Advance registration helps make check-in faster. Tickets may also be purchased at the door. Advance ticket sales close at noon on Friday, November 13.</p><p>There is no event parking at Netivot Shalom or The Berkeley School; nearby transit and neighborhood parking are available.</p><p>The Joy of Jewish Music and Dance is fiscally sponsored by KlezCalifornia.</p><p><a class=\"read-further\" href=\"https://klezcalifornia.org/the-joy-of-jewish-music-and-dance/\" target=\"_blank\" rel=\"noopener\">Read more about the series ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-11-14",
    "endDate": "2026-11-14",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-11-14\" data-end-date=\"2026-11-14\"><div class=\"event-date\"><strong>NOV 14</strong><span>Saturday · 8 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">The Stadium · Sunnyvale</span><h3>Back to Yugo Party! with Janetta Redžić</h3><div class=\"event-details\" hidden><p><strong>8 PM · 208 S Fair Oaks Ave, Sunnyvale.</strong></p><p>Janetta Redžić and Folk Ensemble Čardak host a retro ex-Yugoslav dance party and dinner raising funds for Čardak’s upcoming Chicago performance.</p><p><strong>$20 · 21+.</strong> Ionela Guzic’s appearance is tentative.</p><p><a class=\"read-further\" href=\"https://www.facebook.com/events/1140684455284043/\" target=\"_blank\" rel=\"noopener\">Event details ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-10-24",
    "endDate": "2026-10-24",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-24\" data-end-date=\"2026-10-24\"><div class=\"event-date\"><strong>OCT 24</strong><span>Saturday · 11–11:30 AM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Piedmont Avenue · Oakland</span><h3>Piedmont Avenue Halloween Parade with Orchestra Euphonos</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"Halloween-Save-the-Date-2026_443C7887-FE5F-A9C7-B06D6BE665A52117_446c608d-b5cc-2ba2-61e2781ea28aced5.png\" alt=\"Piedmont Avenue Halloween Parade flyer\"><p><strong>Saturday, October 24 · 11–11:30 AM</strong></p><p>Join Peter, <strong>Orchestra Euphonos</strong>, and a ragtag costumed marching band and hype crew for Piedmont Avenue’s Halloween Parade! Musicians, dancers, clowns, and anyone who loves Halloween are invited to join the parade — play with the band or come as a “ringer” to help create a ruckus.</p><p>Friends with youngsters are especially welcome; this is a neighborhood celebration geared especially toward young families. <strong>DM Peter for more info.</strong></p><p><a class=\"read-further\" href=\"https://www.facebook.com/orchestraeuphonos\" target=\"_blank\" rel=\"noopener\">Orchestra Euphonos ↗</a></p><p><a class=\"read-further\" href=\"https://www.piedmontavenue.org/happenings\" target=\"_blank\" rel=\"noopener\">Further information ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-10-17",
    "endDate": "2026-10-17",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-17\" data-end-date=\"2026-10-17\"><div class=\"event-date\"><strong>OCT 17</strong><span>Saturday · 9 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">The Starry Plough · Berkeley</span><h3>Berkeley Balkan Bacchanal: Hot Blood Orkestar + Mila Sestra</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"1000083620.jpg\" alt=\"Berkeley Balkan Bacchanal event image\"><p><strong>Doors: 8 PM · Show: 9 PM</strong><br><strong>Mila Sestra</strong> — 9 PM<br><strong>Hot Blood Orkestar</strong> — 10 PM</p><p>Ryan Feldthouse and friends reintroduce <strong>Hot Blood Orkestar</strong> to the Bay Area in the debut of the band’s new incarnation, bringing a high-energy Balkan dance party.</p><p><strong>Peter Bonos is producing the event and will also appear as a guest performer with Hot Blood Orkestar at the end of their performance.</strong></p><p>Opening the show, <strong>Mila Sestra (Dear Sister)</strong> — Michele Simon and Hilary Musaji — perform traditional folk music from the Vardar and Pirin Macedonia regions. With two traditional two-course tamburas and two voices, they bring diaphonic songs, drones, ornamentation and insistent odd-metered rhythms to life.</p><p>Tickets: $20 general / $15 students. All ages before 10 PM; 21+ after 10 PM. Food, beer and wine available from the bar until 10 PM.</p><p><a class=\"read-further\" href=\"https://berkeleybalkanbacchanal.com/2026/09/22/oct-17-hot-blood-orkestar-mila-sestra/\" target=\"_blank\" rel=\"noopener\">Event details ↗</a></p><p><a class=\"read-further\" href=\"https://www.facebook.com/events/1665574505271690\" target=\"_blank\" rel=\"noopener\">Facebook event ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-10-11",
    "endDate": "2026-10-11",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-11\" data-end-date=\"2026-10-11\"><div class=\"event-date\"><strong>OCT 11</strong><span>Sunday · 7–10 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Muddy Waters Coffee House · San Francisco</span><h3>Balkan Sundays: Duygu and Friends + Turkish Music Jam Session</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"Copy+of+Square+BS+1112.webp\" alt=\"Balkan Sundays: Duygu and Friends event image\"><p><strong>Sunday, October 11, 2026 · 7–10 PM</strong><br>Muddy Waters Coffee House · 521 Valencia Street, San Francisco</p><p>Balkan Sundays returns to Muddy Waters with <strong>Duygu and Friends</strong>, followed by a Turkish music jam led by the band. The first half features Turkish, Anatolian and broader Mediterranean folk repertoire; the second half opens up as a jam session, and musicians are welcome to join.</p><p><strong>Duygu Gün</strong> — guitar &amp; vocals<br><strong>Peter Bonos</strong> — oud &amp; trumpet<br><strong>Evin Sellin</strong> — violin<br><strong>Zina Pozen</strong> — accordion<br><strong>Aaron Goldstein</strong> — percussion</p><p>Free admission; supporting the venue by purchasing food and beverages is encouraged.</p><a class=\"read-further\" href=\"https://www.facebook.com/events/2133714330833919\" target=\"_blank\" rel=\"noopener\">Further information ↗</a></div></div></article>"
  },
  {
    "startDate": "2026-10-10",
    "endDate": "2026-10-10",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-10\" data-end-date=\"2026-10-10\"><div class=\"event-date\"><strong>OCT 10</strong><span>Saturday · 9 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Rickshaw Stop · San Francisco</span><h3>Kafana Balkan with Inspector Gadje Balkan Brass Band</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"Kafana Balkan.webp\" alt=\"Kafana Balkan event image\"><p><strong>Saturday, October 10, 2026</strong><br>Doors: 8:30 PM · Show: 9:00 PM<br>Rickshaw Stop · 155 Fell Street, San Francisco</p><p><strong>Peter Bonos performs with Inspector Gadje Balkan Brass Band.</strong></p><p>Kafana Balkan returns with the powerhouse <strong>Inspector Gadje Balkan Brass Band</strong>, special guest <strong>Kata Miletich</strong>, belly dance by <strong>Jill Parker and Mind’s Eye</strong>, and <strong>DJ Željko</strong>. Expect a packed dance floor and a big, high-energy Balkan brass sound from Inspector Gadje’s 14-piece acoustic dance machine.</p><p><a class=\"read-further\" href=\"https://youtu.be/_Mx2u-RdW5Q?list=RD_Mx2u-RdW5Q\" target=\"_blank\" rel=\"noopener\">Watch Kafana Balkan footage ↗</a></p><p><a class=\"read-further\" href=\"https://rickshawstop.com/calendar/\" target=\"_blank\" rel=\"noopener\">Event details &amp; tickets ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-10-04",
    "endDate": "2026-10-04",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-04\" data-end-date=\"2026-10-04\"><div class=\"event-date\"><strong>OCT 4</strong><span>Sunday · 2–4 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">San Francisco</span><h3>Opening Reception: Stela Mandel — <em>My American Dream</em></h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"detail-of-bungalow-kids-2.png\" alt=\"Artwork from Stela Mandel exhibition\"><p>Join us for the opening reception of <em>My American Dream</em>, a new exhibition of oil paintings by local artist Stela Mandel. Meet the artist and experience her poignant visual exploration of refugee and immigrant identities, survival, and ancestral gratitude. Light food and beverages will be served. This event is free and open to the community.</p><p><strong>Music by Duo Euphonos — Peter Bonos and Evin Sellin.</strong></p><a class=\"read-further\" href=\"https://rgplaza.jfcs.org/event/opening-reception-stela-mandel-my-american-dream/\" target=\"_blank\" rel=\"noopener\">Further information ↗</a></div></div></article>"
  },
  {
    "startDate": "2026-10-03",
    "endDate": "2026-10-03",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-03\" data-end-date=\"2026-10-03\"><div class=\"event-date\"><strong>OCT 3</strong><span>Saturday · 7–9 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Moraga</span><h3>Serbian Food Festival</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"Serbian Food Festival.avif\" alt=\"Serbian Food Festival event image\"><p><strong>October 3, 2026</strong><br>Holy Trinity Serbian Orthodox Church<br>1700 School St., Moraga, CA</p><p><strong>Peter Bonos performs with Trinity Balkan Brass.</strong></p><p><strong>Entertainment / Live Music</strong><br>12–4 PM — Balkanera Band: Balkan, international &amp; Gypsy jazz. Traditional and modern sounds from around the world.<br>5–7 PM — NG BEND (Nena Lovre II): Mix of live Serbian music.<br><strong>7–9 PM — Trinity Balkan Brass (members of Inspector Gadje and Fanfare Zambaleta).</strong></p><a class=\"read-further\" href=\"https://www.holytrinitymoraga.org/_files/ugd/f209f6_c2dc8b39b2b84bae92bdc7ed6b73f444.pdf\" target=\"_blank\" rel=\"noopener\">Further information ↗</a></div></div></article>"
  },
  {
    "startDate": "2026-10-02",
    "endDate": "2026-10-02",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-02\" data-end-date=\"2026-10-02\"><div class=\"event-date\"><strong>OCT 2</strong><span>Friday · 5–7:15 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Congregation Emanu-El · San Francisco</span><h3>Erev Simchat Torah Shabbat Celebration</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"rvpDPge4U3Tu8NF4fstCsD-1600-80.jpg.webp\" alt=\"Congregation Emanu-El building\"><p><strong>5 PM</strong> — Guests are welcome to arrive for a gathering and food in the courtyard.<br><strong>6–7:15 PM</strong> — Erev Simchat Torah Shabbat service with Peter Bonos performing during the service.</p><p>Celebrate the joy of Simchat Torah with community at a special Shabbat service filled with music, dancing, and tradition. As we mark the completion and beginning of the annual Torah reading cycle, the building comes alive with spirited hakafot and joyful singing!</p><a class=\"read-further\" href=\"https://hhd.emanuelsf.org/sukkot\" target=\"_blank\" rel=\"noopener\">Further information ↗</a></div></div></article>"
  }
];
  const pacific = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit',
    day: '2-digit', hour: '2-digit', hourCycle: 'h23'
  });
  // Before 4 AM Pacific, use yesterday's calendar date.
  // An event is past only when its final date is earlier than this cutoff.
  function cutoffDate(now) {
    const parts = Object.fromEntries(pacific.formatToParts(now).map(p => [p.type, p.value]));
    const date = new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day)));
    if (Number(parts.hour) < 4) date.setUTCDate(date.getUTCDate() - 1);
    return date.toISOString().slice(0, 10);
  }
  function performanceId(event) {
    const heading = (event.html.match(/<h3>([\s\S]*?)<\/h3>/) || [null, 'concert'])[1];
    const slug = heading.replace(/<[^>]*>/g, '').normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '').toLowerCase()
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return 'performance-' + event.startDate + '-' + slug;
  }
  const requestedId = new URLSearchParams(window.location.search).get('performance');
  const cutoff = cutoffDate(new Date());
  document.querySelectorAll('[data-performance-list]').forEach(list => {
    const past = list.dataset.performanceList === 'past';
    const requestedEvent = performances.find(event => performanceId(event) === requestedId);
    if (requestedEvent && (requestedEvent.endDate < cutoff) !== past) {
      const destination = new URL(requestedEvent.endDate < cutoff ? 'past-performances.html' : 'index.html', window.location.href);
      destination.searchParams.set('performance', requestedId);
      destination.hash = requestedId;
      window.location.replace(destination.href);
      return;
    }
    const selected = performances.filter(event => (event.endDate < cutoff) === past);
    selected.sort((a, b) => past ? b.endDate.localeCompare(a.endDate) : a.startDate.localeCompare(b.startDate));
    if (past) {
      let year = '';
      list.innerHTML = selected.map(event => {
        const eventYear = event.endDate.slice(0, 4);
        const heading = eventYear !== year ? '<div class="section-head editorial-head"><h2>' + eventYear + '</h2></div>' : '';
        year = eventYear;
        return heading + event.html;
      }).join('') || '<p>No past performances listed yet.</p>';
    } else {
      list.innerHTML = selected.map(event => event.html).join('') || '<p>New performance dates will be announced soon.</p>';
    }
    list.querySelectorAll('.calendar-event').forEach((article, index) => {
      const event = selected[index];
      article.id = performanceId(event);
      const title = article.querySelector('h3').textContent.trim();
      const url = new URL('index.html', window.location.href);
      url.searchParams.set('performance', article.id);
      url.hash = article.id;
      const actions = document.createElement('div');
      actions.className = 'event-share-actions';
      const shareButton = document.createElement('button');
      shareButton.type = 'button';
      shareButton.className = 'pill event-share-button';
      shareButton.textContent = typeof navigator.share === 'function' ? 'Share concert ↗' : 'Copy concert link';
      shareButton.setAttribute('aria-label', 'Share ' + title);
      const status = document.createElement('span');
      status.className = 'event-share-status';
      status.setAttribute('role', 'status');
      const manualLink = document.createElement('input');
      manualLink.type = 'text';
      manualLink.readOnly = true;
      manualLink.hidden = true;
      manualLink.value = url.href;
      manualLink.className = 'event-share-link';
      manualLink.setAttribute('aria-label', 'Concert link to copy');
      async function copyLink() {
        try {
          if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
          await navigator.clipboard.writeText(url.href);
          status.textContent = 'Link copied!';
        } catch (_) {
          manualLink.hidden = false;
          manualLink.focus();
          manualLink.select();
          status.textContent = 'Copy the selected link below.';
        }
      }
      shareButton.addEventListener('click', async () => {
        status.textContent = '';
        if (typeof navigator.share === 'function') {
          try {
            await navigator.share({
              title: title + ' | Peter Bonos',
              text: title + ' · ' + article.querySelector('.event-date').innerText.replace(/Read more ↓|Show less ↑/g, '').trim(),
              url: url.href
            });
          } catch (error) {
            if (error.name !== 'AbortError') await copyLink();
          }
        } else {
          await copyLink();
        }
      });
      actions.append(shareButton, status, manualLink);
      article.querySelector('.event-details').append(actions);
    });
    list.querySelectorAll('.calendar-toggle').forEach((button, index) => {
      const details = button.closest('.calendar-event').querySelector('.event-details');
      details.id = 'performance-details-' + index;
      button.setAttribute('aria-controls', details.id);
      button.addEventListener('click', () => {
        const open = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!open));
        details.hidden = open;
        button.textContent = open ? 'Read more ↓' : 'Show less ↑';
      });
    });
  });
  if (requestedId) {
    const requestedArticle = document.getElementById(requestedId);
    if (requestedArticle) {
      requestedArticle.querySelector('.calendar-toggle').click();
      window.requestAnimationFrame(() => requestedArticle.scrollIntoView({ block: 'start' }));
    }
  }
  // Refresh an open page after the cutoff changes, including overnight tabs.
  function checkCutoff() {
    if (cutoffDate(new Date()) !== cutoff) window.location.reload();
  }
  window.setInterval(checkCutoff, 30000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) checkCutoff();
  });
})();
