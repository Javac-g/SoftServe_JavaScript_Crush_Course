function ticTac(deck) {
  deck = deck.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(deck)) return 2;
     else if(/111|1...1...1|1....1....1|1..1..1/.test(deck)) return 1;
     else if(/0/.test(deck)) return -1;
        return 0;
}
alert(ticTac([[0, 0, 1],
              [2, 2, 2],
              [1, 1, 0]]))
