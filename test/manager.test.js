const manager = require('../lib/manager');

describe('manager', () => {
    it('should return with a questin asking what your office number is', () => {
        expect(manager(getOfficeNum)).toBe("Manager")
    })
})