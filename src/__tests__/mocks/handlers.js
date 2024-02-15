import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/.netlify/functions/api/', () => {
    return HttpResponse.json(
      {
        ip: '212.218.13.67',
        location: {
          country: 'DE',
          region: 'Hessen',
          city: 'Fulda',
          lat: 50.55162,
          lng: 9.67518,
          postalCode: '',
          timezone: '+01:00',
          geonameId: 2923822,
        },
        as: {
          asn: 8319,
          name: 'NETHINKS-AS',
          route: '212.218.0.0/16',
          domain: 'nethinks.com',
          type: 'NSP',
        },
        isp: 'NETHINKS GmbH',
      },
      { status: 200 }
    )
  }),
]
