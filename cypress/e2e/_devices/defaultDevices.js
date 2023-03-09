export const iphoneMobile = {
    name: 'iPhone xr',
    viewport: [414, 896],
    headers: {
      'user-agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    },
    isMobile: true,
  }
  
  export const desktop = {
    name: 'Laptop',
    viewport: [1366, 768],
    headers: {
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36',
    },
    isMobile: false,
  }

  export const tablet ={
    name: 'Tablet',
    viewport:[360,760],
    headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-T510) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36',
      },
      isMobile: false,
    }

    export const samsungMobile = {
        name: 'samsung',
        viewport: [414, 896],
        headers: {
            'user-agent': 'Mozilla/5.0 (Linux; Android 11; SM-G998U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Mobile Safari/537.36',
          }
          ,
        isMobile: true,
      }
  
  export const defaultDevices = [desktop, iphoneMobile,tablet,samsungMobile ]