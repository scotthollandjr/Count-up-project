describe('countUp', function() {
  it('count up to a by multiples of b', function() {
    expect(countUp(30, 5)).to.equal("5,10,15,20,25,30")
  });
});
