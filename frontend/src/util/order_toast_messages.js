export default function orderToastMessages({ user, session }) {
  let messages = [];

  for (const key in user)
    messages.push({ id: key, body: user[key], type: 'user' });

  for (const key in session)
    messages.push({ id: key, body: session[key], type: 'error' });

  return messages.sort((firstEl, secondEl) => {
    return firstEl.id - secondEl.id;
  });
}