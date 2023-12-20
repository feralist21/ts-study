export default () => {
    const simpleNumber: number = 10;
    const simpleString: string = 'cucumber';
    const simpleBoolean: boolean = false;
    const hero: any = { foo: 'bar' };

    function checkCucumberSize(size: number): boolean {
        if (size > 4) {
            return true;
        } else {
            return false;
        }
    }

    checkCucumberSize(simpleNumber);

    // ---------------------------------------------------------------------------------------------

    function printCoord(pt: { x: number; y: number }) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }

    // printCoord({ x: 3, y: 7 });

    // ---------------------------------------------------------------------------------------------

    function printName(obj: { firstName: string, lastName?: string }) {
        console.log(obj.firstName.toUpperCase());
        console.log(obj.lastName?.toUpperCase());
    }

    printName({ firstName: 'Vasya' });
    printName({ firstName: 'Vasya', lastName: 'Petrov' });
};
