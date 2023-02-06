export function createElement(element, id, content) {
  const el = document.createElement(element);

  el.setAttribute("id", id);
  const newContent = document.createTextNode(content);
  el.appendChild(newContent);

  return el
}