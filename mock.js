const faker = require('faker/locale/zh_CN');
// 生成模拟数据
const participantId = faker.random.uuid();
const name = faker.name.findName();
const phoneNumber = faker.phone.phoneNumber();
const email = faker.internet.email();
const department = faker.commerce.department();
const role = faker.name.jobTitle();
const meetingId = faker.random.uuid();
const notes = faker.lorem.sentence();
// 显示生成的数据
console.log('参与者ID:', participantId);
console.log('姓名:', name);
console.log('手机号码:', phoneNumber);
console.log('邮箱:', email);
console.log('所属部门:', department);
console.log('角色:', role);
console.log('参与会议ID:', meetingId);
console.log('备注:', notes);
