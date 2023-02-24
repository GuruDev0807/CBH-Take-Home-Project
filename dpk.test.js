const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {

  const generateDummyParamDueToPartitionKey = (partitionKey) => {
    return Object.assign({}, {
      partitionKey,
      dummyField1: "dummy string" + Math.random(),
      dummyField2: "dummy string" + Math.random(),
    })
  }

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();

    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when partitionKey of event is non-meaningful", () => {
    const partitionKey = '0';
    const param = generateDummyParamDueToPartitionKey(partitionKey);

    const candidate = deterministicPartitionKey(param);

    expect(candidate).toBe("0");
  })

  it("Returns the max partition hash value in case of input the unlimited string input", () => {
    let partitionKey = '0';
    const MAX_PARTITION_KEY_LENGTH = 128;
    for (let i = 0; i < 999999; i ++) {
      partitionKey += i.toString();
    }

    const param = generateDummyParamDueToPartitionKey(partitionKey);
    const candidate = deterministicPartitionKey(param);
    expect(candidate.toString().length).toBe(MAX_PARTITION_KEY_LENGTH);
  })

  it("Returns the right hash in case of input correct value", () => {
    const partitionKey = "dummy partition key value";
    const param = generateDummyParamDueToPartitionKey(partitionKey);
    const candidate = deterministicPartitionKey(param);
    expect(candidate.toString().length).toBe(partitionKey.length);
  })
});
