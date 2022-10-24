const countOnlinePeople = (): number => Math.floor(Math.random() * (190 - 160) + 160);
const countFreeSlots = (): number => Math.floor(Math.random() * (6 - 1) + 1);

export { countOnlinePeople, countFreeSlots }