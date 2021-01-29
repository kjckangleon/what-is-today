function generateData () {
    var months = [
        {
            'en': 'January',
            'ja': 'Ichigatsu'
        }, 
        {
            'en': 'February',
            'ja': 'Nigatsu',
        }, 
        {
            'en': 'March',
            'ja': 'Sangatsu',
        }, 
        {
            'en': 'April',
            'ja': 'Shigatsu',
        }, 
        {
            'en': 'May',
            'ja': 'Gogatsu',
        }, 
        {
            'en': 'June',
            'ja': 'Rokugatsu',
        }, 
        {
            'en': 'July',
            'ja': 'Shichigatsu',
        }, 
        {
            'en': 'August',
            'ja': 'Hachigatsu',
        }, 
        {
            'en': 'September',
            'ja': 'Kugatsu',
        }, 
        {
            'en': 'October',
            'ja': 'Jyuugatsu',
        }, 
        {
            'en': 'November',
            'ja': 'Jyuuichigatsu',
        }, 
        {
            'en': 'December',
            'ja': 'Jyuunigatsu',
        }
    ]

    var days = [
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
        'sanjuunichi',
        'sanjuuichinichi'
    ];

    var year = 'nisennijuichi';

    var daysOfWeek = [
      {
          'en': 'Monday',
          'ja': 'Getsuyoubi',
      },
      {
          'en': 'Tuesday',
          'ja': 'Kayoubi',
      },
      {
          'en': 'Wednesday',
          'ja': 'Suiyoubi',
      },
      {
          'en': 'Thursday',
          'ja': 'Mokuyoubi',
      },
      {
          'en': 'Friday',
          'ja': 'Kinyoubi',
      },
      {
          'en': 'Saturday',
          'ja': 'Doyoubi',
      },
      {
          'en': 'Sunday',
          'ja': 'Nichiyoubi',
      },
    ]

    var date = new Date();
    var monthElement = document.getElementById('month');
    var dateElement = document.getElementById('date');
    var yearElement = document.getElementById('year');
    var dayElement = document.getElementById('day');
    var dateTodayElement = document.getElementById('dateToday');
    var tableMonthElement = document.getElementById('tableMonth');
    var tableDaysElement = document.getElementById('tableDays');
    var tableDaysOfWeekElement = document.getElementById('tableDaysOfWeek');

    monthElement.innerHTML = '';
    dateElement.innerHTML = '';
    yearElement.innerHTML = '';
    dayElement.innerHTML = '';
    dateTodayElement.innerHTML = '';
    tableMonthElement.innerHTML = '';
    tableDaysElement.innerHTML = '';
    tableDaysOfWeekElement.innerHTML = '';

    monthElement.innerHTML = months[date.getMonth()].ja;
    dateElement.innerHTML = days[date.getDate() - 1];
    yearElement.innerHTML = year;
    dayElement.innerHTML = daysOfWeek[date.getDay() - 1].ja;
    dateTodayElement.innerHTML = '<span> Today is ' + date + '</span>';

    var arr = [];
    for (x = 0; x < months.length; x++) {
        arr.push(
            `<tr style=background-color:${x === date.getMonth()? 'yellow' : 'none'}>` +
            '<td>' + months[x].en + '</td>' +
            '<td>' + months[x].ja + '</td>' +
            '</tr>'
            );
    }
    tableMonthElement.innerHTML = arr.toLocaleString().replace(/,/g,"");

    var daysArr = [];
    for (y = 0; y < 31; y++) {
        daysArr.push(
            `<tr style=background-color:${y === date.getDate() - 1 ? '#34ebc3' : 'none'}>` +
            '<td style="padding-right: 3px">' + `${y+1}` + '</td>' +
            '<td>' + days[y] + '</td>' +
            '</tr>'
            );
    }
    tableDaysElement.innerHTML = daysArr.toLocaleString().replace(/,/g,"");

    var daysOfWeekArr = [];
    for (z = 0; z < daysOfWeek.length; z++) {
        daysOfWeekArr.push(
            `<tr style=background-color:${z === date.getDay() - 1 ? '#34bdeb' : 'none'}>` +
            '<td>' + daysOfWeek[z].en + '</td>' +
            '<td>' + daysOfWeek[z].ja + '</td>' +
            '</tr>'
            );
    }
    tableDaysOfWeekElement.innerHTML = daysOfWeekArr.toLocaleString().replace(/,/g,"");
    

  }