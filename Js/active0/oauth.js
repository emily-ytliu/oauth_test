app.get('/auth/google', (req, res) => {
    const query = {
      redirect_uri: redirect_url,
      client_id: client_id,
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ].join(' ')
    }
    const auth_url = 'https://accounts.google.com/o/oauth2/v2/auth'
    res.redirect(`${auth_url}?${querystring.stringify(query)}`)
  })