function drawSpiral(size) {
  if (size == 0) return;
  console.log('#'.repeat(size));
  if (size == 1) return;
  console.log('#');
  if (size == 2) return;
  var q = Math.floor(size / 4);
  for (var i = 1; i = 3) {
    var remaining = (size % 4) + 1;
    switch (remaining) {
      case 1:
        console.log('# '.repeat(q) + ' #'.repeat(q));
        break;
      case 2:
        console.log('# '.repeat(q) + '###' + ' #'.repeat(q - 1));
        console.log('# '.repeat(q) + ' #' + ' #'.repeat(q - 1));
        break;
      case 3:
        console.log('# '.repeat(q) + '####' + ' #'.repeat(q - 1));
        console.log('# '.repeat(q) + '# #' + ' #'.repeat(q - 1));
        console.log('# '.repeat(q) + ' #' + ' #'.repeat(q - 1));
        break;
      case 4:
        console.log('# '.repeat(q) + '#####' + ' #'.repeat(q - 1));
        console.log('# '.repeat(q) + '# #' + ' #'.repeat(q - 1));
        console.log('# '.repeat(q) + '### #' + ' #'.repeat(q - 1));
        console.log('# '.repeat(q) + ' #' + ' #'.repeat(q - 1));
        break;
    }
  }
  for (var i = q; i > 1; i--) {
    console.log('# '.repeat(i - 1) + '#'.repeat(size - i * 4 + 4) + ' #'.repeat(i - 1));
    console.log('# '.repeat(i - 1) + ' '.repeat(size - i * 4 + 4) + ' #'.repeat(i - 1));
  }
  console.log('#'.repeat(size));
}