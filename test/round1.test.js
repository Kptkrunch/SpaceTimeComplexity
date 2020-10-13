const expect = chai.expect;
describe('Easy questions', () => {

    describe('question_1', () => {
        it('Should return the time complexity of add()', () => {
            expect(question_1().time === q1.time).to.equal(true);
        })
        it('Should return the space complexity of add()', () => {
            expect(question_1().space === q1.space).to.equal(true)
        })
    })
    describe('question_2', () => {
        it('Should return the time complexity of addLots()', () => {
            expect(question_2().time === q2.time).to.equal(true);
        })
    
        it('Should return the space complexity of addLots()', () => {
            expect(question_2().space === q2.space).to.equal(true);
        })
    })

    describe('question_3', () => {
        it('Should return the time complexity of multiplyNums()', () => {
            expect(question_3().time === q3.time).to.equal(true);
        })
    
        it('Should return the space complexity of multiplyNums()', () => {
            expect(question_3().space === q3.space).to.equal(true);
        })
    })

    describe('question_4', () => {
        it('Should return the time complexity of wackyWord()', () => {
            expect(question_4().time === q4.time).to.equal(true);
        })
    
        it('Should return the space complexity of wackyWord()', () => {
            expect(question_4().space === q4.space).to.equal(true);
        })
    })

    describe('question_5', () => {
        it('Should return the time complexity of badgerSong()', () => {
            expect(question_5().time === q5.time).to.equal(true);
        })
    
        it('Should return the space complexity of badgerSong()', () => {
            expect(question_5().space === q5.space).to.equal(true);
        })
    })

    describe('question_6', () => {
        it('Should return the time complexity of hotMessOfArrays()', () => {
            expect(question_6().time === q6.time).to.equal(true);
        })
    
        it('Should return the space complexity of hotMessOfArrays()', () => {
            expect(question_6().space === q6.space).to.equal(true);
        })
    })
})







