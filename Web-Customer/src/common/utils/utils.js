import Router from 'next/router';

export const redirectTo = (location, res) => {
  if (res) {
    res.writeHead(301, {
      Location: location
    })
    res.end()
  } else {
    Router.push(location)
  }
}
