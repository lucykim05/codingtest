function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let x of babbling) {
    let temp = x;

    for (let y of words) {
      temp = temp.replace(y, " ");
    }

    if (temp.trim() === "") {
      let bool = true;
      for (let w of words) {
        if (x.split(w).length - 1 > 1) {
          bool = false;
          break;
        }
      }
      if (bool) count++;
    }
  }

  return count;
}
