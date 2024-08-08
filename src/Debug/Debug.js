export default function () {
  const date = new Date();
  const time = date.toLocaleString("ru-RU", {
    second: "2-digit",
    minute: "2-digit",
    hour: "2-digit",
  });

  const argumentList = [...arguments];
  console.log(`[${time}]`, argumentList);
}
