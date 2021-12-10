export default function orderToastMessages(state) {
  let messages = [];
  const { errors } = state;

  for (const key in errors)
    for (const id in errors[key])
      messages.push({ id, body: errors[key][id], type: 'error' });

  return messages.sort((firstEl, secondEl) => {
    return firstEl.id - secondEl.id;
  });
}