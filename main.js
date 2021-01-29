function generateData () {
    var months = [
        'juuichigatsu',
        'nangatsu',
        'ichigatsu',
        'nigatsu',
        'sangatsu',
        'shigatsu',
        'gogatsu',
        'rokugatsu',
        'shichigatsu',
        'hachigatsu',
        'kugatsu',
        'juugatsu',
    ];

    var days = [
        'nannichi',
        'tsuitachi',
        'futsuka',
        'mikka',
        'yokka',
        'itsuka',
        'muika',
        'nanoka',
        'youka',
        'kokonoka',
        'tooka',
        'juuichinichi',
        'juuninichi',
        'juusannichi',
        'juuyokka',
        'juugonichi',
        'juurokunichi',
        'juushichinichi',
        'juuhachinichi',
        'juukunichi',
        'hatsuka',
        'nijuuichinichi',
        'nijuuninichi',
        'nijuusannichi',
        'nijuuyokka',
        'nijuugonichi',
        'nijuurokunichi',
        'nijuushichinichi',
        'nijuuhachinichi',
        'nijuukunichi',
        'sanjuunichi'
    ];

    var year = 'nisen ni-ju ichi';

    var daysOfWeek = [
        'Getsuyobi',
        'Kayoubi',
        'Suiyoubi',
        'Mokuyoubi',
        'Kinyoubi',
        'Doyoubi',
        'Nichiyoubi'
    ]

    var date = new Date();
    var monthElement = document.getElementById('month');
    var dateElement = document.getElementById('date');
    var yearElement = document.getElementById('year');
    var dayElement = document.getElementById('day');
    var dateTodayElement = document.getElementById('dateToday');

    monthElement.innerHTML = '';
    dateElement.innerHTML = '';
    yearElement.innerHTML = '';
    dayElement.innerHTML = '';
    dateTodayElement.innerHTML = '';

    monthElement.innerHTML = months[date.getMonth()];
    dateElement.innerHTML = days[date.getDate() - 1];
    yearElement.innerHTML = year;
    dayElement.innerHTML = daysOfWeek[date.getDay() - 1];
    dateTodayElement.innerHTML = 'Today is ' + date;

  }