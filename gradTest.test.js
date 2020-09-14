function createMenuData(dataArray) {

  tempArr = dataArray.reduce(function(a, c) {
    [key, value] = c.substring(0).split("/")
    if (value) {
      tempObj = {}
      tempObj[key] = value
      a.push(tempObj)
    }
    return a
  }, [])

  return tempArr.reduce((a, c) => {
    Object.keys(c).forEach(k => (a[k] || (a[k] = [])).push(c[k]));
    return a
  }, {});
}

describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];
 
	console.log(createMenuData(data));

      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });







































