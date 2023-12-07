export default () => {
    const simpleNumber: number = 10;
    const simpleString: string = 'cucumber';
    const simpleBoolean: boolean = false;

    function checkCucumberSize(size: number): boolean {
        if (size > 4) {
            return true;
        } else {
            return false;
        }
    }

    checkCucumberSize(simpleNumber);
};
