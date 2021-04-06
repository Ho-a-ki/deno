const postRequest = await fetch('slackURL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: 'example' }),
  })