import dates from '@/utils/dates'

describe('Dates methods', () => {
  test('dateFormat() should return date in FR format', () => {
    const dateFr = dates.dateFormat('2021-02-16T14:40:51.434+00:00');
    expect(dateFr).toBe('16/02/2021');
  })
  test('dateLastConnection() should return date with time in FR format', () => {
    const dateLastConnection = dates.dateLastConnection('2021-02-16T14:40:51.434+00:00');
    expect(dateLastConnection).toBe('16/02/2021 15:40:51');
  })
})
