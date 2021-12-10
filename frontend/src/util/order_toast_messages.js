export default function orderToastMessages(state) {
  let messages = [];
  const { errors } = state;

  for (const key in errors) {
    for (const id in errors[key])
      messages.push({ id, body: errors[key][id], type: 'error' });
  }

  // for (const key in user)
  //   messages.push({ id: key, body: user[key], type: 'error' });

  // for (const key in session)
  //   messages.push({ id: key, body: session[key], type: 'error' });
  
  // for (const key in tag)
  //   messages.push({ id: key, body: tag[key], type: 'error' });

  return messages.sort((firstEl, secondEl) => {
    return firstEl.id - secondEl.id;
  });
}