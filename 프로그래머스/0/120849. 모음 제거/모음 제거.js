const solution = x => 
  x.split('').filter(a => !"aeiou".includes(a)).join('');
