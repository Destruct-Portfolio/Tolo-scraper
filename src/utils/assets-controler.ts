import fs from "node:fs";

export default class Assets_controller {
  public static async Read() {
    const people: any[] = [];
    try {
      let x = fs.readFileSync("./assets/redfin.csv").toString().split("\r\n");
      let headers =
        "Address,City,State,Zip,Price,Name person 1,Name person 2,Full Name,Email person 1,Email person 2,All Phones,Phone 1,Phone 2,Phone 3,Phone 4,Phone 5,Phone 6,Phone 7,Phone 8,Phone 9,Phone 10,Phone 11,Phone 12,Phone 13,Phone 14,Phone 15,Phone 16,Phone 17".split(
          ","
        );

      x.map((line) => {
        let hex = line.split(",");
        const line2: any = {};
        for (var i = 0; i < headers!.length; i++) {
          line2[headers[i].replace(/ /g, "_")] = hex[i];
        }
        people.push(line2);
      });
      return people;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.name);
        console.log(error.message);
      }
    }

    return people;
  }
}
