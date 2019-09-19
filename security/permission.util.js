const permission = [
    { perm: 'POST', id: '400' },
    { perm: 'GET', id: '200' },
    { perm: 'PUT', id: '300' },
    { perm: 'DELETE', id: '100' },
    { perm: 'POST,GET', id: '420' },
    { perm: 'POST,PUT', id: '430' },
    { perm: 'POST,DELETE', id: '410' },
    { perm: 'GET,PUT', id: '230' },
    { perm: 'GET,DELETE', id: '210' },
    { perm: 'PUT,DELETE', id: '310' },
    { perm: 'POST,GET,PUT', id: '423' },
    { perm: 'POST,PUT,DELETE', id: '431' },
    { perm: 'POST,GET,DELETE', id: '421' },
    { perm: 'GET,PUT,DELETE', id: '231' },
    { perm: 'POST,GET,PUT,DELETE', id: '777' }
];

module.exports = { permission };