/* Shared performance listings. Add new events here; both pages update automatically. */
(function () {
  'use strict';
  const performances = [
  {
    "startDate": "2026-10-02",
    "endDate": "2026-10-02",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-02\" data-end-date=\"2026-10-02\"><div class=\"event-date\"><strong>OCT 2</strong><span>Friday · 5–7:15 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Congregation Emanu-El · San Francisco</span><h3>Erev Simchat Torah Shabbat Celebration</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"rvpDPge4U3Tu8NF4fstCsD-1600-80.jpg.webp\" alt=\"Congregation Emanu-El building\"><p><strong>5 PM</strong> — Guests are welcome to arrive for a gathering and food in the courtyard.<br><strong>6–7:15 PM</strong> — Erev Simchat Torah Shabbat service with Peter Bonos performing during the service.</p><p>Celebrate the joy of Simchat Torah with community at a special Shabbat service filled with music, dancing, and tradition. As we mark the completion and beginning of the annual Torah reading cycle, the building comes alive with spirited hakafot and joyful singing!</p><a class=\"read-further\" href=\"https://hhd.emanuelsf.org/sukkot\" target=\"_blank\" rel=\"noopener\">Further information ↗</a></div></div></article>"
  },
  {
    "startDate": "2026-10-03",
    "endDate": "2026-10-03",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-03\" data-end-date=\"2026-10-03\"><div class=\"event-date\"><strong>OCT 3</strong><span>Saturday · 7–9 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Moraga</span><h3>Serbian Food Festival</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"Serbian Food Festival.avif\" alt=\"Serbian Food Festival event image\"><p><strong>October 3, 2026</strong><br>Holy Trinity Serbian Orthodox Church<br>1700 School St., Moraga, CA</p><p><strong>Peter Bonos performs with Trinity Balkan Brass.</strong></p><p><strong>Entertainment / Live Music</strong><br>12–4 PM — Balkanera Band: Balkan, international &amp; Gypsy jazz. Traditional and modern sounds from around the world.<br>5–7 PM — NG BEND (Nena Lovre II): Mix of live Serbian music.<br><strong>7–9 PM — Trinity Balkan Brass (members of Inspector Gadje and Fanfare Zambaleta).</strong></p><a class=\"read-further\" href=\"https://www.holytrinitymoraga.org/_files/ugd/f209f6_c2dc8b39b2b84bae92bdc7ed6b73f444.pdf\" target=\"_blank\" rel=\"noopener\">Further information ↗</a></div></div></article>"
  },
  {
    "startDate": "2026-10-04",
    "endDate": "2026-10-04",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-04\" data-end-date=\"2026-10-04\"><div class=\"event-date\"><strong>OCT 4</strong><span>Sunday · 2–4 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">San Francisco</span><h3>Opening Reception: Stela Mandel — <em>My American Dream</em></h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"detail-of-bungalow-kids-2.png\" alt=\"Artwork from Stela Mandel exhibition\"><p>Join us for the opening reception of <em>My American Dream</em>, a new exhibition of oil paintings by local artist Stela Mandel. Meet the artist and experience her poignant visual exploration of refugee and immigrant identities, survival, and ancestral gratitude. Light food and beverages will be served. This event is free and open to the community.</p><p><strong>Music by Duo Euphonos — Peter Bonos and Evin Sellin.</strong></p><a class=\"read-further\" href=\"https://rgplaza.jfcs.org/event/opening-reception-stela-mandel-my-american-dream/\" target=\"_blank\" rel=\"noopener\">Further information ↗</a></div></div></article>"
  },
  {
    "startDate": "2026-10-10",
    "endDate": "2026-10-10",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-10\" data-end-date=\"2026-10-10\"><div class=\"event-date\"><strong>OCT 10</strong><span>Saturday · 9 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Rickshaw Stop · San Francisco</span><h3>Kafana Balkan with Inspector Gadje Balkan Brass Band</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"Kafana Balkan.webp\" alt=\"Kafana Balkan event image\"><p><strong>Saturday, October 10, 2026</strong><br>Doors: 8:30 PM · Show: 9:00 PM<br>Rickshaw Stop · 155 Fell Street, San Francisco</p><p><strong>Peter Bonos performs with Inspector Gadje Balkan Brass Band.</strong></p><p>Kafana Balkan returns with the powerhouse <strong>Inspector Gadje Balkan Brass Band</strong>, special guest <strong>Kata Miletich</strong>, belly dance by <strong>Jill Parker and Mind’s Eye</strong>, and <strong>DJ Željko</strong>. Expect a packed dance floor and a big, high-energy Balkan brass sound from Inspector Gadje’s 14-piece acoustic dance machine.</p><p><a class=\"read-further\" href=\"https://youtu.be/_Mx2u-RdW5Q?list=RD_Mx2u-RdW5Q\" target=\"_blank\" rel=\"noopener\">Watch Kafana Balkan footage ↗</a></p><p><a class=\"read-further\" href=\"https://rickshawstop.com/calendar/\" target=\"_blank\" rel=\"noopener\">Event details &amp; tickets ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-10-11",
    "endDate": "2026-10-11",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-11\" data-end-date=\"2026-10-11\"><div class=\"event-date\"><strong>OCT 11</strong><span>Sunday · 7–10 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Muddy Waters Coffee House · San Francisco</span><h3>Balkan Sundays: Duygu and Friends + Turkish Music Jam Session</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"Copy+of+Square+BS+1112.webp\" alt=\"Balkan Sundays: Duygu and Friends event image\"><p><strong>Sunday, October 11, 2026 · 7–10 PM</strong><br>Muddy Waters Coffee House · 521 Valencia Street, San Francisco</p><p>Balkan Sundays returns to Muddy Waters with <strong>Duygu and Friends</strong>, followed by a Turkish music jam led by the band. The first half features Turkish, Anatolian and broader Mediterranean folk repertoire; the second half opens up as a jam session, and musicians are welcome to join.</p><p><strong>Duygu Gün</strong> — guitar &amp; vocals<br><strong>Peter Bonos</strong> — oud &amp; trumpet<br><strong>Evin Sellin</strong> — violin<br><strong>Zina Pozen</strong> — accordion<br><strong>Aaron Goldstein</strong> — percussion</p><p>Free admission; supporting the venue by purchasing food and beverages is encouraged.</p><a class=\"read-further\" href=\"https://www.facebook.com/events/2133714330833919\" target=\"_blank\" rel=\"noopener\">Further information ↗</a></div></div></article>"
  },
  {
    "startDate": "2026-10-17",
    "endDate": "2026-10-17",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-17\" data-end-date=\"2026-10-17\"><div class=\"event-date\"><strong>OCT 17</strong><span>Saturday · 9 PM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">The Starry Plough · Berkeley</span><h3>Berkeley Balkan Bacchanal: Hot Blood Orkestar + Mila Sestra</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"1000083620.jpg\" alt=\"Berkeley Balkan Bacchanal event image\"><p><strong>Doors: 8 PM · Show: 9 PM</strong><br><strong>Mila Sestra</strong> — 9 PM<br><strong>Hot Blood Orkestar</strong> — 10 PM</p><p>Ryan Feldthouse and friends reintroduce <strong>Hot Blood Orkestar</strong> to the Bay Area in the debut of the band’s new incarnation, bringing a high-energy Balkan dance party.</p><p><strong>Peter Bonos is producing the event and will also appear as a guest performer with Hot Blood Orkestar at the end of their performance.</strong></p><p>Opening the show, <strong>Mila Sestra (Dear Sister)</strong> — Michele Simon and Hilary Musaji — perform traditional folk music from the Vardar and Pirin Macedonia regions. With two traditional two-course tamburas and two voices, they bring diaphonic songs, drones, ornamentation and insistent odd-metered rhythms to life.</p><p>Tickets: $20 general / $15 students. All ages before 10 PM; 21+ after 10 PM. Food, beer and wine available from the bar until 10 PM.</p><p><a class=\"read-further\" href=\"https://berkeleybalkanbacchanal.com/2026/09/22/oct-17-hot-blood-orkestar-mila-sestra/\" target=\"_blank\" rel=\"noopener\">Event details ↗</a></p><p><a class=\"read-further\" href=\"https://www.facebook.com/events/1665574505271690\" target=\"_blank\" rel=\"noopener\">Facebook event ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-10-24",
    "endDate": "2026-10-24",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-10-24\" data-end-date=\"2026-10-24\"><div class=\"event-date\"><strong>OCT 24</strong><span>Saturday · 11–11:30 AM</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Piedmont Avenue · Oakland</span><h3>Piedmont Avenue Halloween Parade with Orchestra Euphonos</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"Halloween-Save-the-Date-2026_443C7887-FE5F-A9C7-B06D6BE665A52117_446c608d-b5cc-2ba2-61e2781ea28aced5.png\" alt=\"Piedmont Avenue Halloween Parade flyer\"><p><strong>Saturday, October 24 · 11–11:30 AM</strong></p><p>Join Peter, <strong>Orchestra Euphonos</strong>, and a ragtag costumed marching band and hype crew for Piedmont Avenue’s Halloween Parade! Musicians, dancers, clowns, and anyone who loves Halloween are invited to join the parade — play with the band or come as a “ringer” to help create a ruckus.</p><p>Friends with youngsters are especially welcome; this is a neighborhood celebration geared especially toward young families. <strong>DM Peter for more info.</strong></p><p><a class=\"read-further\" href=\"https://www.facebook.com/orchestraeuphonos\" target=\"_blank\" rel=\"noopener\">Orchestra Euphonos ↗</a></p><p><a class=\"read-further\" href=\"https://www.piedmontavenue.org/happenings\" target=\"_blank\" rel=\"noopener\">Further information ↗</a></p></div></div></article>"
  },
  {
    "startDate": "2026-11-27",
    "endDate": "2026-11-28",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-11-27\" data-end-date=\"2026-11-28\"><div class=\"event-date\"><strong>NOV 27–28</strong><span>Friday &amp; Saturday nights</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Croatian American Cultural Center · San Francisco</span><h3>Kolo Festival with Fanfare Zambaleta</h3><div class=\"event-details\" hidden><img class=\"event-image\" src=\"26-09-19 NEW KF26.7.png\" alt=\"Kolo Festival 2026 event image\"><p><strong>Friday &amp; Saturday nights · November 27–28, 2026</strong><br>Croatian American Cultural Center<br>60 Onondaga Ave., San Francisco</p><p><strong>Peter Bonos performs on trumpet with Fanfare Zambaleta.</strong></p><p>The 75th Kolo Festival brings together Balkan and international music, dance, singing, workshops and live evening dance parties over Thanksgiving weekend. Fanfare Zambaleta is among the featured 2026 performers.</p><a class=\"read-further\" href=\"https://kolofestival.org/\" target=\"_blank\" rel=\"noopener\">Further information ↗</a></div></div></article>"
  },
  {
    "startDate": "2026-12-31",
    "endDate": "2026-12-31",
    "html": "<article class=\"calendar-event\" data-start-date=\"2026-12-31\" data-end-date=\"2026-12-31\"><div class=\"event-date\"><strong>DEC 31</strong><span>New Year’s Eve</span><button class=\"read-more calendar-toggle\" type=\"button\" aria-expanded=\"false\">Read more ↓</button></div><div class=\"event-info\"><span class=\"tag\">Ashkenaz · Berkeley</span><h3>New Year’s Eve with Fanfare Zambaleta</h3><div class=\"event-details\" hidden><p><strong>Thursday, December 31, 2026 · New Year’s Eve</strong><br>Ashkenaz · Berkeley</p><p><strong>Peter Bonos performs on trumpet with Fanfare Zambaleta.</strong></p><p>More information to come...</p></div></div></article>"
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
  const cutoff = cutoffDate(new Date());
  document.querySelectorAll('[data-performance-list]').forEach(list => {
    const past = list.dataset.performanceList === 'past';
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
  // Refresh an open page after the cutoff changes, including overnight tabs.
  function checkCutoff() {
    if (cutoffDate(new Date()) !== cutoff) window.location.reload();
  }
  window.setInterval(checkCutoff, 30000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) checkCutoff();
  });
})();
