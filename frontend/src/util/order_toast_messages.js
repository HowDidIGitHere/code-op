export default function orderToastMessages({ user, auth }) {
  let messages = [];

  for (const key in user)
    messages.push({ id: key, body: user[key], type: 'user' });

  for (const key in auth)
    messages.push({ id: key, body: auth[key], type: 'error' });

  return messages.sort((firstEl, secondEl) => {
    return firstEl.id - secondEl.id;
  });
}