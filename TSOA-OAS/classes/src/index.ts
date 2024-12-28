import { measure } from "helpful-decorators";

class DateClass{
    private timeZone:string;
    constructor(timeZone:string){
        this.timeZone = timeZone;
    }

    // @ts-ignore
    @measure
    getTime(){
        var d = new Date();
        console.log("hii from getTime")
        return d.getTime();
    }


}

const objectDate = new DateClass("IND");
objectDate.getTime();
objectDate.getTime();
objectDate.getTime();
objectDate.getTime();

// console.log(response);