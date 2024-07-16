
const everydayTypes = () => {
    const age: number = 23;
    const name: string = 'Ivan';
    const isSoldier: boolean = false;

    function printInfoSoldier(pt: { age: number, name: string, isSoldier?: boolean }): void {
        console.log(`${pt.name} year old ${pt.age} and - ${pt.isSoldier}`);
    }

    printInfoSoldier({ age, name, isSoldier });

    // --------------------------------------------

    function printId(id: number | string) {
        console.log("Your ID is: " + id);
    }

    printId('asd');

    // --------------------------------------------

    type Point = {
        x: number,
        y: number
    };

    // interface PointInterface {
    //     x: number,
    //     y: number
    // }

    function printCoords(pt: Point) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }

    printCoords({ x: 22, y: 33 });

    // --------------------------------------------

    const title = document.querySelector('.title') as HTMLElement;

    console.log(title);

     // --------------------------------------------

    function handleRequest(url: string, method: "GET" | "POST"): void;

    const req = { url: "https://example.com", method: "GET" };
    handleRequest(req.url, req.method);

};

export default everydayTypes;
